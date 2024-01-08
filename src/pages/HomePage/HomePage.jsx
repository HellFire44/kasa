import React from 'react';
import './homePage.scss';
import Banner from '../../layout/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';

function HomePage() {
  return (
    <div className='home'>
      <Banner />
      <Gallery />
    </div>
  );
}

export default HomePage
