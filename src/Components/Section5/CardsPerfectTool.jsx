import React from 'react'
import lock from '../../images/c-lock.png'
import automated from '../../images/c-automated.png'
import chart from '../../images/c-chart.png'

export const CardsPerfectTool = () => {
    return (
        <>

            <div className="container-fluid p-40">
                <div className="row">
                    <h2 className='heading mb-5'>The Perfect Tools for Any Market</h2>
                    {/* --- Card 1 --- */}
                    <div className=" col-sm-12 col-md-6 col-lg-4 mb-5">
                        <div className="custom-card ">
                            <img className='custom-card-icon wow animate__animated animate__rotateIn' src={lock} alt="Icon" />
                            <div className="custom-card-body">
                                <h4 className="custom-card-title mb-3">Security</h4>
                                <p className="custom-card-text mb-0">TROX PI ensures secure interaction with exchanges using API keys, Fast Connect, and IP whitelisting for robust protection.</p>
                            </div>
                        </div>
                    </div>
                    {/* --- Card 2 ---*/}
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                        <div className="custom-card ">
                            <img className='custom-card-icon wow animate__animated animate__rotateIn' src={automated} alt="Icon" />
                            <div className="custom-card-body">
                                <h4 className="custom-card-title mb-3">Trade Automation</h4>
                                <p className="custom-card-text mb-0">Our DCA, Grid, and Futures bots are proven performers, executing your trading strategy at scale. The market never sleeps, and neither do our bots.</p>
                            </div>
                        </div>
                    </div>
                    {/* --- Card 3 --- */}
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="custom-card ">
                            <img className='custom-card-icon wow animate__animated animate__rotateIn' src={chart} alt="Icon" />
                            <div className="custom-card-body">
                                <h4 className="custom-card-title mb-3">Analytics</h4>
                                <p className="custom-card-text mb-0">TROX PI's dashboards provide real-time insights into your trade performance, helping you know when to optimize and when to let them run.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
