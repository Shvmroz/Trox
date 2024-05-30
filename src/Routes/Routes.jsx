import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyLayout } from '../Layout/MyLayout'
import { LandingPage } from '../Page/LandingPage'
import { TradingBots } from '../Page/NavbarPages/TradingBots'
import { Plans } from '../Page/NavbarPages/Plans'
import { Features } from '../Page/NavbarPages/Features'
import { Developers } from '../Page/NavbarPages/Developers'
import { PriceCharts } from '../Page/NavbarPages/PriceCharts'
import { Company } from '../Page/NavbarPages/Company'
import { Academy } from '../Page/NavbarPages/Academy'
import { Login } from '../Page/NavbarPages/Login'
import TryItFree from '../Page/NavbarPages/TryItFree'


export const RoutesFile = () => {
  return (
    <div>
      <Routes>
        <Route element={<MyLayout />}  >
          <Route path='/' element={<LandingPage />} />
          <Route path='/tradingbots' element={<TradingBots />} />
          <Route path='/plan' element={<Plans />} />
          <Route path='/features' element={<Features />} />
          <Route path='/developers' element={<Developers />} />
          <Route path='/pricecharts' element={<PriceCharts />} />
          <Route path='/company' element={<Company />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/tryitfree' element={<TryItFree />} />

        </Route>
      </Routes>
    </div>
  )
}
