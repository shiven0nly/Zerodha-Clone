import React from 'react'
import { OpenAccount } from '../../common/OpenAccount';
import { Brokerage } from './Brokerage';
import { HeroSection } from './HeroSection';

export const PricingPage = () => {
  return (
    <div>
      <HeroSection />
      <OpenAccount/>
      <Brokerage />
    </div>
  )
}
