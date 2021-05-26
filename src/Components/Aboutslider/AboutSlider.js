import {Carousel} from 'react-bootstrap'; 
import React from 'react';

import  './AboutSlider.css';



const AboutSslider =()=> {
    return (
        <div> 
            <h1>About Us </h1>

            <Carousel>
                    <Carousel.Item interval={1500} fade={true} >
                        <img
                        className="first"
                        src="about2.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h4 className='headlines'>BosS Interview team</h4>
                        <p className='paragraph'>Our team craft the best code, design, reserches and discussions. 
                        For our clients to practice and experience many interviesws in aim to be BOSS in his real
                        interview. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={1500} fade={true} >
                        <img
                        className="second"
                        src="about8.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h4 className='headlines'>Our Mission</h4>
                        <p className='paragraph'> Provide our clients the confidence and tips needed to break
                        ice of hisreal life interviews.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  interval={1500} fade={true} >
                        <img
                        className="third"
                        src="about3.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h4 className='headlines'>Your Role</h4>
                        <p className='paragraph'> Your role is as big as us, you need disipline,
                         some effort, passionto to learn more and more and to improve your weaknesses.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default AboutSslider;


