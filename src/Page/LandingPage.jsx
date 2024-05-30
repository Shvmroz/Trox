import React from 'react'
import { Banner } from '../Components/Section2/Banner'
import '../Components/Section2/Banner.css'
import { TroxPi } from '../Components/Section3/TroxPi'
import '../Components/Section3/TroxPi.css'
import { CardBox } from '../Components/Section4/CardBox'
import '../Components/Section4/CardBox.css'
import { CardsPerfectTool } from '../Components/Section5/CardsPerfectTool'
import '../Components/Section5/CardsPerfectTool.css'
import { StartTrading } from '../Components/Section6/StartTrading'
import '../Components/Section6/StartTrading.css'
import { TroxFeatures } from '../Components/Section7/TroxFeatures'
import '../Components/Section7/TroxFeatures.css'
import { ManagePositions } from '../Components/Section8/ManagePositions'
import '../Components/Section8/ManagePositions.css'
import { Exchnages } from '../Components/Section9/Exchnages'
import '../Components/Section9/Exchnages.css'




export const LandingPage = () => {
  return (
    <div>
      <Banner />
      <TroxPi />
      <CardBox />
      <CardsPerfectTool />
      <StartTrading />
      <TroxFeatures />
      <ManagePositions />
      <Exchnages />
    </div>
  )
}
