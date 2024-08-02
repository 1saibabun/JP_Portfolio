import React from 'react';
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AtlasDesc : "Atlas is a web-based application developed to support the American Heart Association (AHA) training internationally. This application enables training centers and instructors to monitor and track AHA training, including class publishing, student roster management, and various other functions. It also facilitates the management of Training Center alignments and permissions.",
    AtlasWebsite : "https://atlas.heart.org/",

    ShopCPRDesc : "As the global source of the official resuscitation science and education guidelines the AHA is proud to offer the 2020 Guidelines for CPR and ECC and the 2020 Handbook for Emergency Cardiovascular Care.This online course is designed to provide healthcare providers information on new science and key changes published in the 2020 AHA Guidelines for CPR and ECC.",
    ShopCPRWebsite : "https://shopcpr.heart.org/",
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3 className='projectName'>{projectName}</h3>
            <br />
            <p className='projectDesc'>{desc[projectName + 'Desc']}</p>
            <br />
            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Website</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox