import React from 'react'
import banner from '../../images/Banner.jpg'
import { Button} from '@mui/material'


export const Banner = () => {


    return (
        <div className='banner-section'>
            <div className="container-fluid p-40">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5 d-flex justify-content-center align-items-center">
                        <div className='text-box wow animate__animated animate__fadeInUp'>
                            <h1 className='mb-4'>Introducing Your Ultimate
                                Crypto Trading Bots</h1>
                            <p className='mb-4'>Grow Your Portfolio Effortlessly: Harness the Power of Expertly Engineered Automated Bots that Combine Elite Trader Performance with New User Simplicity, Even While You Sleep.</p>
                            <Button className='purple-btn' variant="contained">Get Free Trail</Button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7">
                        <div className="img-container">
                            <img className="img-fluid img-zoom" src={banner} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
