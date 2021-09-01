import React from 'react'
import classnames from 'classnames'
import { Header } from '../../component/Header/Header'
import scss from './BaseLayouts.module.scss'

export const BaseLayout = ({ children }) => {
  const BaseLayout = classnames(scss.wrapperHome, 'clear')

  return (
    <div className={scss.layout}>
      <div className={BaseLayout}>
        <Header />
        {children}
      </div>
    </div>
  )
}
