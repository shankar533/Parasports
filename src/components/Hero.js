import React from 'react'
import './Hero.css'
import ScriptTag from 'react-script-tag'
function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>100% of gifts go to athletes and the programs that make their dreams possible </h1>
                <form><ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HxMNL3rPSBilDW" async> </ScriptTag> </form>
                <h4 className="heading">
                    We are on a mission To lead the Paralympic Movement, oversee the delivery of the Paralympic Games and support members to enable Para athletes to achieve sporting excellence.
                </h4>
            </div>
        </div>
    )
}

export default Hero
