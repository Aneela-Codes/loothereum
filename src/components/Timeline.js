import React from 'react'
import Accordian from './Accordian'
import Countdown from './Countdown'
import Footer from './Footer'
import TimeCounter from './TimeCounter'


const Timeline = () => {
    return (
        <div className="timeline ">
            <div className="container text-center ">
                <h1>Timeline</h1>
                <div className="row line_row">
                    <div className="line"></div>

                    <div className="col-lg-2">
                        <div className="card" data-aos="fade-right" data-aos-delay='20'>
                            <div className="icon">
                                <i className="fas fa-rocket"></i>

                            </div>
                            <div className="card-body">
                                <h4>Launch</h4>
                                <p>TBD | Open for Minting</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card" data-aos="fade-right" data-aos-delay='40'>
                            <div className="icon">
                                <i className="fas fa-money-bill-alt"></i>

                            </div>
                            <div className="card-body">
                                <h4>Buy</h4>
                                <p>Buying Period for Loothereum NFT's</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card" data-aos="fade-right" data-aos-delay='60'>
                            <div className="icon">
                                <i className="fas fa-handshake"></i>

                            </div>
                            <div className="card-body " data-aos="fade-right">
                                <h4>Trade</h4>
                                <p>Buying and selling period before rewards drawing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card" data-aos="fade-right" data-aos-delay='80'>
                            <div className="icon">
                                <i className="fas fa-ticket-alt"></i>

                            </div>
                            <div className="card-body">
                                <h4>Reward</h4>
                                <p>As Milestones are met, rewards will be unlocked.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card" data-aos="fade-right" data-aos-delay='100'>
                            <div className="icon">
                                <i className="fas fa-hand-holding-usd"></i>

                            </div>
                            <div className="card-body">
                                <h4>Recieve</h4>
                                <p>Winners will be drawn & Rewards will be distributed to winning wallets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center">Next Reward Distribution in...</h1>
            <TimeCounter/>
            <Accordian/>
        </div>
    )
}

export default Timeline
