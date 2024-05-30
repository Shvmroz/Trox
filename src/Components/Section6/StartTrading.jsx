import { Button } from '@mui/material'
import React from 'react'

export const StartTrading = () => {
    return (
        <div className='container-fluid p-40'>
            <div className="trading-box">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-9">
                        <h2 className='trading-heading wow animate__animated animate__rotateInDownLeft'>Start Trading on TROX PI Today</h2>
                        <p className='trading-text wow animate__animated animate__rotateInDownLeft'>Get 14 days trial with full-access to all TROX PI trading tools.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-md-end">
                        <Button className='white-btn wow animate__animated animate__rotateInDownRight' variant="contained">Get Free Trial</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
