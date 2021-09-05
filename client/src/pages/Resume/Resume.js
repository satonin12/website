import React, { useState, Suspense, lazy, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { BaseLayout } from '../../lauouts/BaseLayout/BaseLayout'
import Lottie from 'lottie-react'

import scss from './Resume.module.scss'
import './SkillBars.scss'
import Button from '../../component/Button/Button'
// ! assets
import AmongUsParticlesJson from '../../assets/particles_among_us.json'
import NyanCatJson from '../../assets/particles_nyan_cat.json'
import { MyParticles } from '../../component/Particles/Particles'
import ResumeLottie from '../../assets/resume.json'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Loading = () => {
  return (
    <div className={scss.NyanCat}>
      <MyParticles name="NyanCatJson" json={NyanCatJson} />
      {/*Hello World!!*/}
    </div>
  )
}

export const Resume = (props) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [SkillBars, setSkillBar] = useState({})

  const skillsData = [
    {
      name: 'HTML',
      level: 75,
      color: '#AE3BD3',
    },
    {
      name: 'CSS',
      level: 70,
      color: '#31B221',
    },
    {
      name: 'SCSS',
      level: 25,
      color: '#4BD7E6',
    },
    {
      name: 'Native JS',
      level: 60,
      color: '#E04F78',
    },
    {
      name: 'NodeJS',
      level: 40,
      color: '#2B4B56',
    },
    {
      name: 'Webpack',
      level: 35,
      color: '#C3D7D5',
    },
    {
      name: 'ReactJS',
      level: 45,
      color: '#AB90E9',
    },
    {
      name: 'Redux',
      level: 10,
      color: '#F867D0',
    },
    {
      name: 'TypeScript',
      level: 5,
      color: '#872D46',
    },
    {
      name: 'Express',
      level: 15,
      color: '#F6CA69',
    },
  ]

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    const _SkillBars = React.lazy(() => import('react-skills'))

    setSkillBar((prevState) => {
      let SkillBars = Object.assign(_SkillBars, prevState)
      return SkillBars
    })
  }

  return (
    <>
      <MyParticles json={AmongUsParticlesJson} />
      <BaseLayout>
        <div className="resumeWrapper">
          <div className="content d-flex flex-column align-center justify-center">
            <div className={scss.ResumeHeaderBlock}>
              <h1>Моё резюме</h1>
              <div className="ResumeHeaderBlock--Animation">
                <Lottie animationData={ResumeLottie} />
              </div>
            </div>
            <a href="/portfolio.pdf">
              <Button
                color_border="#F78CB6"
                text="Скачать резюме"
                width="120"
              />
            </a>
            <div className={scss.PdfWrapper}>
              <div className={scss.skills}>
                <Suspense fallback={<Loading />}>
                  {(numPages && SkillBars && (
                    <>
                      <h3>Мои скиллы</h3>
                      <SkillBars skills={skillsData} flat={false} />
                    </>
                  )) || <Loading />}
                </Suspense>
              </div>
              <Document
                file="/portfolio.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
