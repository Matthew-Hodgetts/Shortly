import React from 'react';
import './navbar.scss';
import Logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='row py-4'>
          <img src={Logo} alt='Shortly logo' className='navbar__logo' />
          <ul className='px-5 navbar__menu'>
            <li>
              <a href='https://google.co.uk'>Features</a>
            </li>
            <li>
              <a href='https://google.co.uk'>Pricing</a>
            </li>
            <li>
              <a href='https://google.co.uk'>Resources</a>
            </li>
          </ul>
          <div className='ml-auto navbar__buttons'>Nav Buttons</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
