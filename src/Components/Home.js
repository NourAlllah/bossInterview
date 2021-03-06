import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
/* Pages */
import AboutSlider from './Aboutslider/AboutSlider';
import PressHereButton from './PressHereButton';
 



function Home() {
    return (     
     <>    
        
        <div className='section1-container'>
            <video src='home-sec1-v3.mp4' autoPlay loop muted />
            <div className='sec1-text'>
                <p className='text-1'>
                    You can't hire someone
                </p>
                <p className='text-11'>
                    to
                </p>
                
                <p className='text-2'> practice </p>
                <p className='text-111'>for you,</p>
                 <p className='text-1111'>  
                    But we do
                </p>
                <h1 className='text-22'>!</h1>
                <br/>
                <br/>
                <br/>
                <p className='text-3'>Interviews are crucial moments in one's career,</p>
                <p className='text-33'>So wehere to help you practice freely until you </p>
                <p className='text-333'>are fully prepared to the real Interviews.</p>


                <p  className='text-4'>  For continuous tips and quite </p> 
                <p className='text-44'>  important infromations, Subscribe</p>
                <p className='text-444'> your mail and you will be regularly</p>
                <p className='text-4444'>updated!</p>
                
             </div>  
             <div className='subscribe-mail-form'>
                    <input className='input-email' type="email" placeholder="  Enter your Email" aria-required='true'  aria-invalid='true'/>
                    <button className='subscribe-but' variant="primary" type="submit">
                        Submit
                    </button>
             </div>
         </div>
         
         <div className='section2-howitworks'>  
        </div>  
         <br/>
         <br/>
         <br/>
         <div className='section3-aboutus'>
            <h1 className='topic'>About Us</h1>
            <Fade top>
               <h2 className='header'> Our Mission</h2>
            </Fade>
            <p className='about-content'> Development of mock interviews covers all Hr sides , languages and discovering 
                selves in points of strenghts and weaknesses thou & Soon in all work fields.
                First aim is ice breaking of interview's fear and anxiety.
            </p>
            <Fade top>
               <h2 className='header'> Our Vission</h2>
            </Fade>
            <p className='about-content'>Help our clients know all about their dream job or even discover his own dream 
                dream job. Provide our clients the confidence and tips needed to break ice of 
                his real life interviews.
            </p>

            <AboutSlider/>
            <PressHereButton/>
         </div>
         
    </>
    )
}

export default Home;
/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Subcribe Your Mail</Button>

 
 <video src='00128.mp4' autoPlay loop muted />
 <img src='home-sec1.bmp' alt='00128.mp4' className='sec1-img' />;

            <h1>peepp peepp</h1>
            <p>om blel la 2om blsob77 </p>
            <h6>opa opaa </h6>
            <div className='btns'>
                <button className='subscribe-btn'  > 
                SEnd Your mail</button>
            </div>

 <div className ='nav-shadow'></div>
*/
