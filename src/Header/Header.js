import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade as Hamburger } from 'hamburger-react';
import { Link } from "react-scroll";

import "./Header.css";

export const ResponsiveMenu = styled.nav`
  background: #1b1b1b;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  top: ${({ responsiveMenu }) => (responsiveMenu ? '0' : '-200%')};
  transition: all 0.5s;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
    z-index: 1;
  }
`

function Header() {
  const [isOpen, setOpen] = useState(false);

  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const showResponsiveMenu = () => setResponsiveMenu(!responsiveMenu);

  return (
    <div>
      <div className="header">
        <Link className="header-topic" onClick="window.location.reload();">
          <span className="header-topic-one">Portfo</span>
          <span className="header-topic-two">lio.</span>
        </Link>

        <div className="hamburger">
          <Hamburger id="close-button" size={24} toggled={isOpen} toggle={setOpen} duration={0.8} onToggle={toggled => {
              if (toggled) {
                showResponsiveMenu();
              } else {
                showResponsiveMenu();
              }
            }} 
            />
        </div>

          <div className="header-parts">
            <div>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            </div>

            <div>
              <Link to="about" spy={true} smooth={true} offset={0} durLinktion={500}>About</Link>
            </div>

            <div>
              <Link to="services" spy={true} smooth={true} offset={-50} durLinktion={500}>Services</Link>
            </div>

            <div>
              <Link to="work" spy={true} smooth={true} offset={-50} duration={500}>Work</Link>
            </div>

            <div>
              <Link to="contact" spy={true} smooth={true} offset={-50} durLinktion={500}>Contact</Link>
            </div>
          </div>
      </div>

      <ResponsiveMenu className="responsive-menu" responsiveMenu={responsiveMenu}>
          <div className="header-parts-responsive">
            <div>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={() => {setOpen(false); showResponsiveMenu();}}>Home</Link>
            </div>

            <div>
              <Link to="about" spy={true} smooth={true} offset={-30} duration={500} onClick={() => {setOpen(false); showResponsiveMenu();}}>About</Link>
            </div>

            <div>
              <Link to="services" spy={true} smooth={true} offset={-30} duration={500} onClick={() => {setOpen(false); showResponsiveMenu();}}>Services</Link>
            </div>

            <div>
              <Link to="work" spy={true} smooth={true} offset={-30} duration={500} onClick={() => {setOpen(false); showResponsiveMenu();}}>Work</Link>
            </div>

            <div>
              <Link to="contact" spy={true} smooth={true} offset={-30} duration={500} onClick={() => {setOpen(false); showResponsiveMenu();}}>Contact</Link>
            </div>
          </div>
        </ResponsiveMenu>
    </div>
    
  );
}

export default Header;

