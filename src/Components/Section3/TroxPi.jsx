import { Button } from '@mui/material'
import React from 'react'

export const TroxPi = () => {
    return (
        <div>
            <div className="container-fluid p-40">
                <h2 className="troxpi-heading ">TROX PI Empowers Traders to Succeed in Any Market Condition</h2>
                <p className="troxpi-subheading">
                    For every market condition, there's a winning strategy. TROX PI trade bots excel at reducing average acquisition costs, boosting your profit margins with every trade.
                </p>
                <div className="row">
                    <div className="col-md-4 troxpi-box wow animate__animated animate__fadeInDown" data-wow-delay="1s">
                       <h3 className='troxpi-arrow'>
                            <span className='me-3 '><i className="fa-solid fa-arrow-right"></i>
                            </span>
                            Bear Markets
                        </h3>
                        <p>
                            Utilize DCA Short bots to borrow and sell tokens at the current price, then buy them back at a lower price to maximize your profits.
                        </p>
                    </div>
                    <div className="col-md-4 troxpi-box wow animate__animated animate__zoomIn" data-wow-delay="1s">
                       <h3 className='troxpi-arrow '>
                            <span className='me-3 '><i className="fa-solid fa-arrow-right"></i>
                            </span> Bull Markets</h3>
                        <p>
                            Leverage DCA Long bots to buy during natural dips and sell during spikes as the price rises over time, ensuring a better average entry price for your positions.
                        </p>
                    </div>
                    <div className="col-md-4 troxpi-box wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                       <h3 className='troxpi-arrow'>
                            <span className='me-3 '><i className="fa-solid fa-arrow-right"></i>
                            </span>Bear Markets</h3>
                        <p>
                            Utilize Grid bots to acquire tokens at support levels and sell them near resistance levels, optimizing your trading strategy for maximum profit.
                        </p>
                    </div>
                </div>
                <div className="troxpi-glimpse">
                    <p className='mb-4'>This is just a glimpse of the countless opportunities you can unlock by leveraging the power of TROX PI trading software.
                    </p>
                    <Button className="purple-btn wow animate__animated animate__rotateIn" data-wow-delay="1s" variant="contained">Get Free Trial</Button>
                </div>
            </div>
        </div>
    )
}
