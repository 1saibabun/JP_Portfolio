import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Jyoti Prakash Nayak</b> and I am from Odisha, India.
            I'm a <b>Front End web developer</b> and I have done my <br/><b>B-Tech in CSE</b>. <br/><br/>
            I have started my career as a <b>Software Developer</b> at IBM which.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, you can check out some of my shots here &nbsp;
            <a href="https://www.instagram.com/jp___nayak" target='_blank'><FaInstagram/></a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Angular' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='HTML5'/>
        <Skills skill='CSS3'/>
        <Skills skill='Typescript' />
        
      </div>
    </>
  )
}

export default About