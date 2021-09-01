import React from 'react'
import Particles from 'react-tsparticles'

import scss from './Particles.module.scss'

export const MyParticles = (props) => {
  const ParticlesJson = props.json
  const ParticlesClassName = props.name

  return <Particles id={ParticlesClassName} className={ParticlesClassName ? scss.inhetir_class : 'tsParticles'} options={ParticlesJson}></Particles>
}
