import '../style/index.scss'
import { Field } from './classes.js'

/*

 * Important information
  ! Deprecated method, do not use
  ? Should this method be exposed
  TODO: refactor this method

*/

function shuffle(arr) {
  let j, tmp
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    tmp = arr[j]
    arr[j] = arr[i]
    arr[i] = tmp
  }
}

// !!! *********************** Начало игры *************************  !!!
function startGame() {
  let width = 9
  let height = 9

  let gameField = new Field({
    width,
    height,
  })
  gameField.fill()
  gameField.render()
}

// document.getElementById('startGame').on('click', clickStartHandler)

// function clickStartHandler() {
//   // ?: Добавить прелоадер ? нужно ли
//   document.getElementsByClassName('modal-window').addClass('animate__animated animate__hinge')
//   setTimeout(function () {
//     document.getElementsByClassName('modal-window').hide()
//   }, 2000)

//   startGame()
// }
