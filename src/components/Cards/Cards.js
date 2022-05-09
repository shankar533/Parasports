import React from 'react'
import './Cards.css'
import front1 from '../../images/front1.jpg'
import front2 from '../../images/front2.jpg'
import front3 from '../../images/front3.jpg'

function Cards() {
    return (
        <div className="card-container">
            <div className="card-heading">NEWS</div>
            <ul className="card-wrapper">
                <li className="card">
                    <img src={front1} alt="image1" className="image-wrapper" />
                    <div className="text-wrapper">
                        <h2>
                        Bhavinaben Patel (Table Tennis) - Silver
                        </h2>
                        <p> 
                        Table Tennis player Bhavinaben Patel opened India’s account at the games when he became only the second Indian woman to win a medal at the Paralympics
                        </p>
                    </div>
                </li>

                <li className="card">
                    <div className="text-wrapper">
                        <h2>Nishad Kumar (High Jump) - Silver</h2>
                        <p>
                            Nishad Kumar won India's second medal at the tokyo Paralympics when he clinched a silver medal in the men's high jump T47 event with an Asian record effortof 2.06m on August 29
                        </p>
                    </div>
                    <img src={front3} alt="image3" className="image-wrapper" />
                </li>
                <li className="card">
                    <img src={front2} alt="image2" className="image-wrapper2" />

                    <div className="text-wrapper">
                        <h2>Avani Lekhara (Shooting) - Gold
</h2>
                        <p>
                            Avani Lekhara made hsiroty on aUGUST 30 WHEN SHE became the first Indian woman ever to win a gold medal at the Paralympics
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cards
