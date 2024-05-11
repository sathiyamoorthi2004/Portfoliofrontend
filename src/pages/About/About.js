import React from 'react';
import img2 from './images1/my photo.jpg';
import './About.css';
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
    <jump>
      <div className='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src={img2} alt='profile_pic' />
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>
                "I am  Sathiyamoorthi. I completed my schooling at Government Higher Secondary School and am currently pursuing a B.Tech in IT at PSNA College of Engineering and Technology Dindigul. I am a self-motivated individual with a strong work ethic. I am dedicated and hardworking, striving to excel in my academic and professional pursuits."
                </p>
            </div>
        </div>
    </div>
    </jump>
    </>
  )
}

export default About