import React, { useState } from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import Professional from '../images/professional.png';
import {CiCoffeeCup} from "react-icons/ci";
import Resume from "./Resume";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/resume');
  };

  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>JYOTI PRAKASH NAYAK</b></h1>
          <Typed/>             
          <div>
            <button type="button" className="btn btn-success" onClick={handleButtonClick}>
              Download Resume
            </button>
          </div>
        </div>
        <Tilt>
          <img className="img-fluid Avatar" src={Avatar} alt="Avatar" />
        </Tilt>
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of transforming a raw idea into a website or a product that impacts lives. 
            I strive to work on projects that challenge me as a developer and make me proud.<br /><br />
            I am fluent in <b>React JS</b>, <b>Angular</b> and <b>TypeScript</b>, and I have some experience with <b>Node JS</b>. 
            Currently, I am working on several projects using <b>React JS</b>.<br />
            I plan to learn <b>Next.js</b> in the near future.<br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{ transform: "scale(1.5) rotate(15deg)" }} />.
          </p>

        </div>
        <Tilt>
          <img className="img-fluid Avatar" src={Professional} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home