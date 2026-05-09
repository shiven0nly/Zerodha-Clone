import React from 'react'
import { HeroSection } from './HeroSection'
import { Awards } from './Awards'
import { OpenAccount } from '../../common/OpenAccount'
import { Pricing } from './Pricing'
import { Stats } from './Stats'
import { Education } from './Education'


function Homepage() {
  return (
    <>
      <div>
        <HeroSection />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
      </div>
    </>
  )
}

export default Homepage;