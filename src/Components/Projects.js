import React from 'react';
import ProjectBox from './ProjectBox';
import ShopCPR from '../images/shopCPR.png';
import Atlas from '../images/Atlas.png';
import MarketPostTrade from '../images/MarketPostTrade.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Atlas} projectName="Atlas" />
        <ProjectBox projectPhoto={ShopCPR} projectName="ShopCPR" />
        <ProjectBox projectPhoto={MarketPostTrade} projectName="MarketPostTrade" />
      </div>

    </div>
  )
}

export default Projects