import { Button, } from '@mui/material'
import React from 'react'
import { BsApple, BsGooglePlay } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const FooterTwo = () => {
    return (
        <>
            <footer class="footer">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12 d-flex justify-content-between align-items-center mb-4">

                                <Link to='/'>
                                    <h2 class="footer-logo">TROX PI</h2>
                                </Link>
                            </div>



                            <div className="col-lg-2 col-md-2 col-6 mb-4">
                                <h5 class="footer-title">Company</h5>
                                <ul class="list-unstyled">
                                    <li><span class="footer-link"> About Us</span></li>
                                    <li><span class="footer-link"> Contact Us</span></li>
                                    <li><span class="footer-link"> Plans</span></li>
                                    <li><span class="footer-link"> Reviews</span></li>
                                    <li><span class="footer-link"> Price Charts</span></li>
                                    <li><span class="footer-link"> Site Map</span></li>
                                    <li><span class="footer-link"> FAQs</span></li>
                                </ul>
                            </div>


                            <div className="col-lg-2 col-md-2 col-6 mb-4">
                                <h5 class="footer-title">Features</h5>
                                <ul class="list-unstyled">
                                    <li><span class="footer-link"> Dashboard</span></li>
                                    <li><span class="footer-link"> Rebalancer</span></li>
                                    <li><span class="footer-link"> Demo Account</span></li>
                                    <li><span class="footer-link"> Smart Cover</span></li>
                                    <li><span class="footer-link"> Signals</span></li>
                                    <li><span class="footer-link"> Smart Trade</span></li>
                                </ul>
                            </div>


                            <div className="col-lg-2 col-md-2 col-6 mb-4">
                                <h5 class="footer-title">Trading Bots</h5>
                                <ul class="list-unstyled">
                                    <li><span class="footer-link"> GRID Bot</span></li>
                                    <li><span class="footer-link"> DCA Bot</span></li>
                                    <li><span class="footer-link"> Signal Bot</span></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-3 col-6">
                                <h5 class="footer-title mb-4">Download Our Mobile App</h5>
                                <div class="download-buttons ">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <Button className='shop-btn' variant="contained" startIcon={<BsApple style={{ width: 20, height: 20 }} />}  >
                                                <div className="text-container">
                                                    <span className='span-text'>Download on the</span>
                                                    <h4 className='button-text'>App Store</h4>
                                                </div>
                                            </Button>
                                        </div>
                                        <div className="col-12">
                                            <Button className='shop-btn' variant="contained" startIcon={<BsGooglePlay style={{ width: 20, height: 20 }} />}>

                                                <div className="text-container">
                                                    <span className='span-text'>Download on the</span>
                                                    <h4 className='button-text'>Google Play</h4>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <p class="footer-last-text mb-0"> © 2024 TROX PI All Rights Reserved.</p>
            </footer>
        </>
    )
}
