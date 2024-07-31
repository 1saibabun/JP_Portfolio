import React from 'react';
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AtlasDesc : "Atlas is a web-based application developed to support the American Heart Association (AHA) training internationally. This application enables training centers and instructors to monitor and track AHA training, including class publishing, student roster management, and various other functions. It also facilitates the management of Training Center alignments and permissions.",
    AtlasWebsite : "https://atlas.heart.org/",

    ShopCPRDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    ShopCPRWebsite : "https://shopcpr.heart.org/",
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Website</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox