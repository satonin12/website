import React from 'react'
import { Chrono } from 'react-chrono'

import Blast from '../../assets/blast.png'
import Login from '../../assets/login_page.png'
import CallRoom from '../../assets/call_room_page.png'
import Pug from '../../assets/pug.png'
import Pokemon from '../../assets/pokemon.png'
import Redux from '../../assets/redux.png'

import './index.scss'

export const Projects = (props) => {
  const itemsChrono = [
    {
      title: 'Моя первая игра сделанная на чистом JS и сборщике Webpack',
    },
    {
      title:
        'Проект видеочата, сделанный на socket + сервер на express со страницей авторизации и чатом между участниками',
    },
    {
      title: 'Landing page собранный используя Webpack и шаблонизатор PUG',
    },
    {
      title: 'Первый проект на TypeScript - поиск покемона по REST API',
    },
    {
      title: 'Первая проба Redux',
    },
  ]

  const customItemsChrono = [
    {
      title: 'Blast Game',
      text: 'Моя первая игра сделанная на чистом JS и с использованием сборщика проектов Webpack. В будущем хочется её полностью переписать)',
      image: Blast,
    },
    {
      title: 'Видеочат',
      text: 'Проект видео-конференции на React + Express + Socket.io, также добавлена авторизация и в будущем будет доступен чат между участниками',
      image: Login,
    },
    {
      title: 'Проект на PUG',
      text: 'Первый проект с использованием шаблонизатора HTML - PUG',
      image: Pug,
      url: 'https://github.com/satonin12/Landing',
    },
    {
      title: 'Простенький проект по TypeScript',
      text: 'Первый учебный проект по TypeScript по поиску покемона',
      image: Pokemon,
      url: 'hhttps://github.com/satonin12/typescript-lssn1',
    },
    {
      title: 'Первый пробный проект с использованием Redux',
      text: 'Проект вытаскивает все фотографии с профиля VK. (В данный момент не работает т.к. авторизация ВК поменялась)',
      image: Redux,
      url: 'https://github.com/satonin12/vkPhotoReact-Redux',
    },
  ]

  const renderCustomItemsChrono = customItemsChrono.map((item) => {
    return (
      <div
        key={item.title}
        className="cardChrono d-flex flex-column align-center"
      >
        <div className="cardChrono--image">
          <img src={item.image} alt="Blast" />
        </div>
        <div className="cardChrono--title">
          <h2>{item.title}</h2>
        </div>
        <div className="cardChrono--text">{item.text}</div>
        {item.url && (
          <div className="cardChrono--url">
            <a href={item.url}>Перейти к github репозиторию...</a>
          </div>
        )}
      </div>
    )
  })

  return (
    <>
      <div className="chrono">
        <Chrono
          items={itemsChrono}
          mode="VERTICAL"
          hideControls="true"
          cardWidth="400"
        >
          {renderCustomItemsChrono}
          {/* <div className="cardChrono d-flex flex-column align-center">
            <div className="cardChono--image">
              <img src={Blast} alt="Blast" width={200} height={200} />
            </div>
            <div className="cardChono--title">
              <h2>Blast Game</h2>
            </div>
            <div className="cardChono--text">
              Моя первая игра сделанная на чистом JS и с использованием сборщика
              проектов Webpack. В будущем хочется её полностью переписать)
            </div>
          </div>

          <div className="cardChrono">
            <div className="cardChono--image">
              <img src={Blast} alt="Blast" width={200} height={200} />
            </div>
            <div className="cardChono--title">
              <h2>Blast Game</h2>
            </div>
            <div className="cardChono--text">
              Моя первая игра сделанная на чистом JS и с использованием сборщика
              проектов Webpack. В будущем хочется её полностью переписать)
            </div>
          </div>

          <div className="cardChrono">
            <div className="cardChono--image">
              <img src={Blast} alt="Blast" width={200} height={200} />
            </div>
            <div className="cardChono--title">
              <h2>Blast Game</h2>
            </div>
            <div className="cardChono--text">
              Моя первая игра сделанная на чистом JS и с использованием сборщика
              проектов Webpack. В будущем хочется её полностью переписать)
            </div>
          </div> */}
        </Chrono>
      </div>
    </>
  )
}
