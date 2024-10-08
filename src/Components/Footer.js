import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Jyoti Prakash</h4>
      <h4>Copyright &copy; 2024 JP</h4>
      <div className='footerLinks'>
        <a href="https://www.linkedin.com/in/jyotiprakash9/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:jyotiprakash.cse@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/jp___nayak" target='_blank'><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer