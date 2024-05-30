import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../Components/Section1/NavBar'
import '../Components/Section1/NavBar.css'
import { Footer } from '../Components/Section10/Footer'
import '../Components/Section10/Footer.css'



export const MyLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
