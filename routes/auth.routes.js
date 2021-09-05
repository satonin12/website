const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()

const { JWT_SECRET, MONGOURI } = require('./config/keys')

// /api/auth/create
router.post('/create', async (req, res) => {
  try {
    const find = req.body
    const re = new RegExp(find.email + '\\w+', 'i')
    const users = await User.find({ email: re }, { email: 1, _id: 0 })

    if (!users) {
      return res.status(401).json({ message: 'не все хорошо' })
    }
    // console.log(users)
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})
// /api/auth/register
router.post(
  '/register',
  // [
  //   // check('email', 'Некоректный email').isEmail(),
  //   // check('password', 'Минимальная длина пароля 6 символов').isLength({
  //   //   min: 6,
  //   // }),
  // ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некоректные данные при регистрации',
        })
      }

      const { email, password, firstName, lastName } = req.body
      const candidate = await User.findOne({ email })

      if (candidate) {
        return res
          .status(401)
          .json({ message: 'Такой пользователь уже существует' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({
        email,
        lastName,
        firstName,
        password: hashedPassword,
      })
      await user.save()
      res.status(201).json({ message: 'Пользователь создан' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  }
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Введите корректный email')
      .isEmail()
      .trim()
      .escape()
      .normalizeEmail({
        // gmail_remove_dots: true: Removes dots from the local part of the email address, as GMail ignores them (e.g. "john.doe" and "johndoe" are considered equal).
        gmail_remove_dots: false,
      }),
    check('password', 'Введите пароль').exists(),
  ],
  async (req, res) => {
    try {
      console.log(req.body)

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректный данные при входе в систему',
        })
      }

      const { email, password } = req.body
      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: 'Неверный пароль, попробуйте снова' })
      }
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: '1h',
      })

      res.json({
        token,
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
      })
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  }
)

module.exports = router
