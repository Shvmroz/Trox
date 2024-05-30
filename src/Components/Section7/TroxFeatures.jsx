import React from 'react'
import stable from '../../images/d-stable.png'
import dashboard from '../../images/d-dashboard.png'
import accounting from '../../images/d-accounting.png'
import exchnage from '../../images/d-exchange.png'
import wave from '../../images/d-wave.png'


export const TroxFeatures = () => {
    return (
        <div className='section-six'>
            <div className="container-fluid">
                <h2 className="features-heading mb-4">TROX PI Features</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="feature-box ">
                            <div className="icon-outer wow animate__animated animate__rotateIn" data-wow-delay="1s">
                                <img className='feature-icon' src={stable} alt="Icon" />
                            </div>
                            <h4 className='feature-box-heading'>Rebalancer</h4>
                            <p className='feature-box-text'>Create portfolios with any coin allocation and rebalance your account with a click.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-box">
                            <div className='icon-outer wow animate__animated animate__rotateIn' data-wow-delay="1s">
                                <img className='feature-icon' src={dashboard} alt="Icon" />
                            </div>
                            <h4 className='feature-box-heading'>Dashboard</h4>
                            <p className='feature-box-text'>Add multiple accounts to track your portfolio and check your daily PnL.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-box">
                            <div className='icon-outer wow animate__animated animate__rotateIn' data-wow-delay="1s">
                                <img className='feature-icon' src={accounting} alt="Icon" />
                            </div>
                            <h4 className='feature-box-heading'>Demo Account</h4>
                            <p className='feature-box-text'>Trade without money. Test strategies safely and without any risk.</p>
                        </div>
                    </div>
                </div>
                {/* Second Row ====================================== */}
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-4">
                        <div className="feature-box">
                            <div className='icon-outer wow animate__animated animate__rotateIn' data-wow-delay="1s">
                                <img className='feature-icon' src={exchnage} alt="Icon" />
                            </div>
                            <h4 className='feature-box-heading'>Smart Cover</h4>
                            <p className='feature-box-text'>Accrue additional assets with unexpected market moves. Sell and buy back coins.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-box">
                            <div className='icon-outer wow animate__animated animate__rotateIn' data-wow-delay="1s">
                                <img className='feature-icon' src={wave} alt="Icon" />
                            </div>
                            <h4 className='feature-box-heading'>Signals</h4>
                            <p className='feature-box-text'> Subscribe to signals provided by other traders to copy strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
