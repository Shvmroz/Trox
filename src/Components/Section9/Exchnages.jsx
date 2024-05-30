import React from 'react'
import exchnage from '../../images/exchnages.png'
import { Button } from '@mui/material'

export const Exchnages = () => {
    return (
        <div className='exchanges p-40'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 text-center p-0">
                        <h2 className='exchnage-heading mb-4 wow animate__animated animate__fadeInDown'>Automated trading tools are supported on 14 major cryptocurrency exchanges</h2>
                    </div>
                    <div className="col-12 p-0 wow animate__animated animate__fadeInUp">
                        <img className='img-fluid mb-4 ' src={exchnage} alt="Exchanges" />
                        <Button className='purple-btn d-flex m-auto' variant="contained">Get Free Trial</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
