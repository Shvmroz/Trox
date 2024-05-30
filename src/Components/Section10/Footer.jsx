import { Button, } from '@mui/material'
import React from 'react'
import { BsApple, BsGooglePlay } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12
                                d-flex
                                justify-content-sm-start
                                justify-content-lg-center
                                justify-content-md-center
                                align-items-center mb-4">
                                <Link to='/'>
                                    <h2 className="footer-logo ">TROX PI</h2>
                                </Link>
                            </div>



                            <div className="col-lg-2 col-md-2 col-6 mb-4">
                                <h5 className="footer-title">Company</h5>
                                <ul className="list-unstyled">
                                    <li><span className="footer-link"> About Us</span></li>
                                    <li><span className="footer-link"> Contact Us</span></li>
                                    <li><span className="footer-link"> Plans</span></li>
                                    <li><span className="footer-link"> Reviews</span></li>
                                    <li><span className="footer-link"> Price Charts</span></li>
                                    <li><span className="footer-link"> Site Map</span></li>
                                    <li><span className="footer-link"> FAQs</span></li>
                                </ul>
                            </div>


                            <div className="col-lg-2 col-md-2 col-6 mb-4">
                                <h5 className="footer-title">Features</h5>
                                <ul className="list-unstyled">
                                    <li><span className="footer-link"> Dashboard</span></li>
                                    <li><span className="footer-link"> Rebalancer</span></li>
                                    <li><span className="footer-link"> Demo Account</span></li>
                                    <li><span className="footer-link"> Smart Cover</span></li>
                                    <li><span className="footer-link"> Signals</span></li>
                                    <li><span className="footer-link"> Smart Trade</span></li>
                                </ul>
                            </div>


                            <div className="col-lg-2 col-md-2 col-6 mb-4">
                                <h5 className="footer-title">Trading Bots</h5>
                                <ul className="list-unstyled">
                                    <li><span className="footer-link"> GRID Bot</span></li>
                                    <li><span className="footer-link"> DCA Bot</span></li>
                                    <li><span className="footer-link"> Signal Bot</span></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-3 col-6">
                                <h5 className="footer-title mb-4">Download Our Mobile App</h5>
                                <div className="download-buttons ">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <Button className='footer-btn' variant="contained" startIcon={<BsApple style={{ width: 20, height: 20 }} />}  >
                                                <div className="footer-text-container">
                                                    <span className='footer-span-text'>Download on the</span>
                                                    <h4 className='footer-button-text'>App Store</h4>
                                                </div>
                                            </Button>
                                        </div>
                                        <div className="col-12">
                                            <Button className='footer-btn' variant="contained" startIcon={<BsGooglePlay style={{ width: 20, height: 20 }} />}>
                                                <div className="footer-text-container">
                                                    <span className='footer-span-text'>Download on the</span>
                                                    <h4 className='footer-button-text'>Google Play</h4>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="footer-last-text mb-0"> © 2024 TROX PI All Rights Reserved.</p>
            </footer>
        </>
    )
}
