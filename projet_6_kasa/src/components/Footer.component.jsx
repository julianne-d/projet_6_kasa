import React from 'react';

import logoFooter from '../assets/images/logo_footer.png';

export default function Footer() {
  return (
    <div className='footer' >
      <div className='logo-container'>
        <img className='logo' src={logoFooter} alt='Kasa logo'/>
      </div>
      <p className='footer__text--small'>
        © 2020 Kasa. All rights reserved
      </p>
      
    </div>
  )
}