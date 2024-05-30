import React from 'react'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import { Button } from '@mui/material'


export const CardBox = () => {
    return (
        <div className="container-fluid p-40">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Experience smart trading</h4>
                            <p className="card-text mb-4">
                                Unlock the power of SmartTrade and Terminal: set your trades in advance with custom triggers, then sit back and relax... Trox pi will handle the rest.
                            </p>
                            <Button className="purple-btn " variant="contained">Sign Up</Button>

                            <img src={card1} alt="Icon" className="card-icon wow animate__animated animate__rotateIn" data-wow-delay="1s" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Track Your Performance</h4>
                            <p className="card-text mb-4">
                                Keep your investments in one place, not all over the place. Collect all your assets in one portfolio: connect exchanges and wallets, as well as create your own accounts for your favorite tokens and coins.
                            </p>
                            <Button className="purple-btn " variant="contained">Create Your Portfolio</Button>

                            <img src={card2} alt="Icon" className=" card-icon wow animate__animated animate__rotateIn" data-wow-delay="1s" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex m-auto">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Bot Presets</h4>
                            <p className="card-text mb-4">
                                Not sure where to start? Copy the presets from other seasoned traders and skip the learning curve.
                            </p>
                            <Button className="purple-btn " variant="contained">Select a Trading Bot</Button>
                            <img src={card3} alt="Icon" className=" card-icon wow animate__animated animate__rotateIn" data-wow-delay="1s" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
