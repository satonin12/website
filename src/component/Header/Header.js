import React from 'react'
import { motion } from 'framer-motion'

import Logo from '../../assets/vsatonin_logo.svg'
import Menu from '../../assets/menu.svg'
import Moon from '../../assets/moon.svg'
import Sun from '../../assets/sun.svg'

export const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <div>
          <img width={126} height={30} alt="Logo" src={Logo} />
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <span>
            <a href={'product_list'}>Home</a>
          </span>
        </li>

        <li className="mr-30">
          <span>
            <a href={'timers'}>About</a>
          </span>
        </li>

        <li className="mr-30">
          <span>
            <a href={'project'}>Projects</a>
          </span>
        </li>

        <li className="mr-30">
          <span>
            <a href={'pug'}>Resume</a>
          </span>
        </li>

        <li className="mr-30">
          <motion.div className="motionAnim" whileHover={{ scale: 1.5 }}>
            <img
              className="mt-5"
              width={24}
              height={24}
              alt="Moon"
              src={Moon}
            />
          </motion.div>
        </li>
      </ul>
    </header>
  )
}
