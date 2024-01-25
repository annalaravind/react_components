import React, { useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const onReloadHandler = () => {
    window.location.reload();
  };
  const onClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header>
        <a href="#logo" onClick={onReloadHandler}>
          Logo
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help</a>
          <a href="#login">Login</a>
        </nav>
        <div className="hamburger" onClick={onClickMenu}>
          {menu ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
        {menu && (
          <>
            <div className="menu_overlay" onClick={onClickMenu}></div>
            <div className="menu_content">
              <div className="menu_four">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#help">Help</a>
              </div>
              <div className="menu_fifth">
                <a href="#login">Login</a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
