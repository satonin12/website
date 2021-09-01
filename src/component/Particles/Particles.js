import React, { useEffect, useState } from 'react'
import Particles from 'react-tsparticles'

export const MyParticles = (props) => {
  const ParticlesJson = props.json

  return <Particles id="tsParticles" options={ParticlesJson}></Particles>
}
