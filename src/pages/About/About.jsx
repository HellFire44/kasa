import React from 'react';
import { Collapse } from '../../components/Collapse/Collapse';
import { SlideShow } from '../../components/SlideShow/SlideShow';
import './about.scss';
import aboutData from '../../data/aboutData.json';


function About() {

  return (
    <>
    <div className='about__img'>
      <SlideShow />
    </div>
      <div className="about__container">
        {aboutData.map(data => {
          return (
            <div key={data.id} className='collapse__panel'>
                <Collapse title={data.title} content={data.content} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default About