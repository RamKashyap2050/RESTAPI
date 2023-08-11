import React from 'react';
import {FaMoon} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='header d-flex justify-content-between align-items-center p-3'>
      <span className="ml-3">Where do you want to go?</span>
      <span className="mr-3"><FaMoon /> Dark Mode</span>
    </div>
  );
};

export default Header;
