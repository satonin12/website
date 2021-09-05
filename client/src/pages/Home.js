import React, { useState, useEffect } from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'
import { motion } from 'framer-motion'

// ! components
import { BaseLayout } from '../lauouts/BaseLayout/BaseLayout'
import { MyParticles } from '../component/Particles/Particles'
// ! assets
import AmongUsParticlesJson from '../assets/particles_among_us.json'
// ! img
import Picture from '../assets/picture_main.svg'
import HH from '../assets/hh.svg'
import Telegram from '../assets/telegram.svg'
import VK from '../assets/vk.svg'
import Github from '../assets/github.svg'

export const Home = (props) => {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    const tmpConfig = getRandomConfig()
    setConfig(tmpConfig)
  }, [])

  const getRandomConfig = () => {
    const randomAvatar = {
      sex: 'man', // man, woman
      faceColor: '#F9C9B6',
      earSize: 'small', // small, big
      hairStyle: 'thick', // normal, thick, mohawk, womanLong, womanShort
      hatStyle: 'none', // none, beanie, turban
      eyeStyle: 'oval', // circle, oval, smile
      glassesStyle: 'round', // round, square
      noseStyle: 'long', // short, long, round
      mouthStyle: 'peace', // laugh, smile, peace
      shirtStyle: 'polo', // hoody, short, polo
      shirtColor: '#77311D',
      bgColor: '#FFEBA4',
    }
    return genConfig(randomAvatar)
  }

  return (
    <>
      <MyParticles json={AmongUsParticlesJson} />
      <BaseLayout>
        <div className="content d-flex justify-around">
          <div className="leftBlock d-flex flex-column justify-center">
            <div className="title">
              Персональный сайт Владислава <span>Сатонина</span>
            </div>

            <div className="subtitle mt-20">
              <div>
                Множество личных проектов и интересной информации вы найдете
                здесь!
              </div>
            </div>

            <div className="text mt-20">
              <div>
                Дизайн сайта взят из просторов интернета и собран на React.
              </div>
            </div>
          </div>

          <div className="rightBlock ml-60">
            <img width={532} height={532} src={Picture} alt="Picture" />
          </div>
        </div>

        <div className="content contentAboutMe d-flex flex-column">
          <div className="contentAboutMe__wrapper d-flex flex-row justify-around">
            <div className="contentAboutMe--leftBlock">
              <div className="contentAboutMe--title">
                <h1>Позвольте рассказать о себе</h1>
              </div>
              <div className="contentAboutMe--text">
                <p>
                  Программированием увлекся еще в школе, изучая Pascal и Basic
                </p>
                <p>
                  Затем в университете начал изучать базовые языки
                  программирования, такие как <span>С++</span>,{' '}
                  <span>Java</span> и конечно же <span>JavaScript</span>
                </p>
                <p>
                  После этого понял - что хочу быть <span>фронтендером</span> и
                  начал его изучать и фреймворк React
                </p>
                <p>
                  Так и пришел к тому, чтобы сделать свой личный сайт со всеми{' '}
                  <span>личными проектами</span>
                </p>
              </div>
            </div>

            <div className="contentAboutMe--rightBlock">
              <div className="contentAboutMe--image">
                {/*
              TODO: сделать эффект анимации крутения в зависимости от крутения мыши
              вот пример: https://sv-dev.netlify.app/
              использовать этот аватар : https://reactjsexample.com/a-beautiful-avatar-generator-component-for-react/
            */}
                <Avatar
                  style={{ width: '16rem', height: '16rem' }}
                  {...config}
                />
              </div>
            </div>
          </div>

          <div className="contentAboutMe--bottomBlock d-flex flex-column justify-center align-center">
            <h1>Найти меня можно по ссылкам</h1>
            <div className="bottomBlock--links d-flex">
              <motion.div className="motionAnim" whileHover={{ scale: 1.5 }}>
                <a>
                  <img width={32} height={32} src={Github} alt="Github" />
                </a>
              </motion.div>

              <motion.div className="motionAnim" whileHover={{ scale: 1.5 }}>
                <a>
                  <img width={32} height={32} src={HH} alt="HH" />
                </a>
              </motion.div>

              <motion.div className="motionAnim" whileHover={{ scale: 1.5 }}>
                <a>
                  <img width={32} height={32} src={VK} alt="VK" />
                </a>
              </motion.div>

              <motion.div className="motionAnim" whileHover={{ scale: 1.5 }}>
                <a>
                  <img width={32} height={32} src={Telegram} alt="Telegram" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
