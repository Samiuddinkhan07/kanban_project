import React from 'react';
import HeaderStyles from './Header.module.css';
import DropDownButton from '../DropDown/DropDown';


const Header = () => {
  return (
    <div className={HeaderStyles['nav-wrapper']}>
      <nav className={HeaderStyles['nav-bar']}>
        <DropDownButton />
      </nav>
    </div>
  )
}

export default Header
