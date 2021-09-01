import React from 'react'
import { Chrono } from 'react-chrono'
import { Header } from '../../component/Header/Header'

import Blast from '../../assets/blast.png'
import Login from '../../assets/login_page.png'
import CallRoom from '../../assets/call_room_page.png'
import Pug from '../../assets/pug.png'
import Pokemon from '../../assets/pokemon.png'
import Redux from '../../assets/redux.png'

import './index.scss'
import { BaseLayout } from '../../lauouts/BaseLayout/BaseLayout'

export const RenderSpan = (props) => {
  /*
    async function getPackages(names) {
      const packages = []

      for (let name of names) {
        // let npmRepo = fetch(`https://registry.npmjs.org/${name}`, {
          let npmRepo = fetch(`https://api.npms.io/v2/package/${name}`, {
          method: 'get',
          // crossDomain: true,
          mode: 'cors',
          // credentials:"include"
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Access-Control-Allow-Credentials': true,
          },
        }).then(
          ((suc) => {
            if (suc.status != 200) {
              return null
            } else {
              return suc.json()
            }
          },
          (fail) => {
            return null
          })
        )
        packages.push(npmRepo)
      }

      const res = await Promise.all(packages)
      return res
    }

    useEffect(() => {
      const arrPackages = getPackages(props.span)
      console.log(arrPackages)
    }, [])
  */

  const arrSpan = props.span.map((span, index) => {
    return <span key={index}>#{span}</span>
  })

  return arrSpan
}

export const Projects = (props) => {
  const items = {
    inner: [
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
    ],
    outer: [
      {
        title: 'Blast Game',
        text: 'Моя первая игра сделанная на чистом JS и с использованием сборщика проектов Webpack. В будущем хочется её полностью переписать)',
        image: Blast,
        urlGithub: 'https://github.com/satonin12/Tapclap-Blast-game',
        urlDemo: '/blast',
        depend: [
          'webpack',
          'prettier',
          'node-sass',
          'babel-core',
          'css-loader',
          'animate.css',
          'file-loader',
          'sass-loader',
          'webpack-cli',
          'babel-loader',
          'style-loader',
          'babel-preset-env',
          'webpack-dashboard',
          'webpack-dev-server',
          'html-webpack-plugin',
        ],
      },
      {
        title: 'Видеочат',
        text: 'Проект видео-конференции на React + Express + Socket.io, также добавлена авторизация и в будущем будет доступен чат между участниками',
        image: Login,
        urlGithub: 'https://github.com/satonin12/project',
        urlDemo: '/videochat',
        depend: [
          'uuid',
          'cors',
          'react',
          'swiper',
          'config',
          'peerjs',
          'express',
          'history',
          'bcryptjs',
          'mongoose',
          'socket.io',
          'react-dom',
          'classnames',
          'react-peer',
          'simple-peer',
          'jsonwebtoken',
          'lottie-react',
          'react-scripts',
          'react-peer-data',
          'materialize-css',
          'react-router-dom',
          'socket.io-client',
          'styled-components',
          'express-validator',
          'http-proxy-middleware',
        ],
      },
      {
        title: 'Проект на PUG',
        text: 'Первый проект с использованием шаблонизатора HTML - PUG',
        image: Pug,
        urlGithub: 'https://github.com/satonin12/Landing',
        urlDemo: '',
        depend: [
          'pug',
          'cssnano',
          'webpack',
          'node-sass',
          'css-loader',
          'pug-loader',
          '@babel/core',
          '@babel/preset-env',
          'file-loader',
          'sass-loader',
          'webpack-cli',
          'autoprefixer',
          'babel-loader',
          'css-mqpacker',
          'style-loader',
          'webpack-merge',
          'postcss-loader',
          'pug-plain-loader',
          'webpack-dev-server',
          'copy-webpack-plugin',
          'html-webpack-plugin',
          'mini-css-extract-plugin',
        ],
      },
      {
        title: 'Простенький проект по TypeScript',
        text: 'Первый учебный проект по TypeScript по поиску покемона',
        image: Pokemon,
        urlGithub: 'https://github.com/satonin12/typescript-lssn1',
        urlDemo: '',
        depend: [
          'react',
          'react-dom',
          'typescript',
          '@types/jest',
          '@types/node',
          '@types/react',
          'react-scripts',
          '@types/react-dom',
        ],
      },
      {
        title: 'Первый пробный проект с использованием Redux',
        text: 'Проект вытаскивает все фотографии с профиля VK. (В данный момент не работает т.к. авторизация ВК поменялась)',
        image: Redux,
        urlGithub: 'https://github.com/satonin12/vkPhotoReact-Redux',
        urlDemo: '',
        depend: [
          'react',
          'redux',
          'prettier',
          'react-dom',
          'prop-types',
          'react-redux',
          'redux-thunk',
          'redux-logger',
          'react-scripts',
          'materialize-css',
        ],
      },
    ],
  }

  const handlerDopInfoOpen = (event) => {
    const parentItem = event.target.closest('.wrapperChronoCard')
    parentItem.classList.toggle('wrapperChronoCard__active')
  }

  const renderCustomItemChrono = items.outer.map((item) => {
    return (
      <div
        onClick={handlerDopInfoOpen}
        className="wrapperChronoCard wrapperChronoCard__active"
        key={item.title}
      >
        <div className="cardChrono d-flex flex-column align-center">
          <div className="cardChrono--image">
            <img src={item.image} alt="Blast" />
          </div>
          <div className="cardChrono--title">
            <h2>{item.title}</h2>
          </div>
          <div className="cardChrono--text">{item.text}</div>
        </div>
        <div className="hiddenChronoCard d-flex flex-column justify-between">
          <div className="hiddenChronoCard--Stack mt-10 d-flex flex-row flex-wrap">
            <RenderSpan span={item.depend} />
          </div>
          <div className="hiddenChronoCard--Links mb-10 d-flex flex-row justify-around">
            {item.urlDemo && (
              <a className="Links--item" href={item.urlDemo}>
                Смотреть проект
              </a>
            )}
            <a className="Links--item" href={item.urlGithub}>
              Перейти в GitHub
            </a>
          </div>
        </div>
      </div>
    )
  })

  return (
    <BaseLayout>
      <div className="chrono">
        <Chrono
          items={items.inner}
          mode="VERTICAL"
          hideControls="true"
          cardWidth="400"
          theme={{
            primary: '#F78CB6',
            secondary: '#fff',
            cardBgColor: '#FAB9D2',
            cardForeColor: 'violet',
            titleColor: '#000',
          }}
        >
          {renderCustomItemChrono}
        </Chrono>
      </div>
    </BaseLayout>
  )
}
