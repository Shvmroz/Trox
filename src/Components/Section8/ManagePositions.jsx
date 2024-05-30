import React from 'react'
import mobile from '../../images/mobile.png'
import { Button } from '@mui/material'
import { BsApple, BsGooglePlay, } from 'react-icons/bs'

export const ManagePositions = () => {
    return (
        <div className='section-seven p-40'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-7 d-flex m-auto align-content-center p-0 ">
                        <div className='manage-box  wow animate__animated animate__fadeInDown'>
                            <h1 className='manage-heading'>Manage Your Positions in One Tap With the TROX PI Mobile App</h1>
                            <p className='manage-text mb-4'>Download the mobile application, track strategy statistics,
                                launch bots, and close orders. Whether you're at home or on the road, manage your positions anywhere.</p>
                            <div className='manage-buttons'>
                                <Button className='shop-btn me-4' variant="contained" startIcon={<BsApple style={{ width: 28, height: 28 }} />} >
                                    <div className="text-container">
                                        <span className='span-text'>Download on the</span>
                                        <h4 className='button-text'>App Store</h4>
                                    </div>
                                </Button>
                                <Button className='shop-btn' variant="contained" startIcon={<BsGooglePlay style={{ width: 28, height: 28 }} />} >
                                    <div className="text-container">
                                        <span className='span-text'>Download on the</span>
                                        <h4 className='button-text'>Google Play</h4>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5 d-flex align-content-center m-auto ">
                        <div className='img-mobile-container '>
                            <img className='img-fluid img-mobile-zoom  wow animate__animated animate__rotateIn' data-wow-delay="1s" src={mobile} alt="mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
