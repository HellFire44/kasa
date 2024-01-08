import React from 'react';
import './footer.scss';
import footer from '../../assets/logo_footer.png'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo' >
            <img src={footer} alt='logo footer' />
      </div>
      <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer