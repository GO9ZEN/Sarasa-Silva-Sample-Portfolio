import React, { useState } from 'react';
import styled from "styled-components";

import "./AboutSection.css";

export const AboutParastyleCss = styled.nav`
  font-size: 20px;
  color: #a8a8a8;

  @media all and (max-width: 1200px) {
    font-size: 18px;
  }

  @media all and (max-width: 1024px) {
    font-size: 16px;
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }

  @media all and (max-width: 480px) {
    font-size: 12px;
  }

  @media all and (max-width: 320px) {
    font-size: 10px;
  }
`

export const AboutShowMore = styled.nav`
  background: #003F5C;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;

  top: 0;
  top: ${({ responsiveShowMenu }) => (responsiveShowMenu ? '0' : '-500%')};

  transition: all 1s;
  display: none;
  z-index: 9999;

  @media all and (max-width: 1200px) {
    display: flex;
  }
`

function AboutSection() {
  const [responsiveShowMenu, setResponsiveShowMenu] = useState(false);
  const showResponsiveShowMenu = () => setResponsiveShowMenu(!responsiveShowMenu);

  // const aboutSection = document.getElementById("about");
  // const skillsPercentBar = document.querySelectorAll(".percent-part-skills");

  // function showProgress(){
  //   skillsPercentBar.forEach(skillsPercentBar => {
  //     const value = skillsPercentBar.dataset.progress;
  //     skillsPercentBar.style.opacity = 1;
  //     skillsPercentBar.style.width = `${value}%`;
  //   });
  // }

  // function hideProgress() {
  //   skillsPercentBar.forEach(p => {
  //     p.style.opacity = 0;
  //     p.style.width = 0;
  //   });
  // }

  // window.addEventListener("scroll", () => { 
  //   const sectionPos = aboutSection.getBoundingClientRect().top;
  //   const screenPos = window.innerHeight / 2;

  //   if(sectionPos < screenPos) {
  //     showProgress();
  //   } else {
  //     hideProgress();
  //   }
  // });

  const [showMore, setShowMore] = useState(true);
  const showMoreButtonResponsive = () => {
    setShowMore(!showMore);
  }

  // const [viewMore, setViewMore] = useState(false);
  // const viewMoreButtonResponsiveFunction = () => {
  //   setViewMore(!viewMore);
  // }

  function viewMoreAndButton() {
    // viewMoreButtonResponsiveFunction();
    showResponsiveShowMenu();
  }

  return (
    <div>
        <div className="about-section" id="about">
          <div className="about-section-size">
            <div className="about-part-one">

              <div className="about-header"> 
                <div className="hr-part"></div>
                <span>About Me</span>
                <div className="hr-part"></div>
              </div>

              <div className="about-para">

                <AboutParastyleCss className={showMore ? 'about-para-p' : ''}> {/* className="about-para-p" style={aboutParastyle} */}
                  I'm learning to be a full-stack developer. Now I'm a Creative front-end developer with 2 years of self-learning experience.  I would like to start my career as a front-end developer and learn more about developer paths and skills. I am a self-motivated, hardworking and talented person. Also, if you kindly give me an opportunity to do the job, I will try my best to achieve the job performance and demonstrate my ability.
                </AboutParastyleCss>

                <span className="show-more-button" onClick={showMoreButtonResponsive}>{showMore ? 'Read More' : 'Read Less'}</span> {/* showMoreButtonResponsive */}
              </div>
            </div>

            <div className="about-part-two">
              <div className="about-part-two-heading">
                <div className="heading-part">
                  <span>Skills</span>
                </div>

                <div className="skills-part">
                  <div className="skills-percent"> 
                    <div className="skills-part-span">
                      <span className="skills-span-one">HTML</span>
                      <span className="skills-span-two">80%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills html-part" data-progress="80"></div>  
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">CSS</span>
                      <span className="skills-span-two">75%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills css-part" data-progress="75"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">JavaScript</span>
                      <span className="skills-span-two">60%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills javascript-part" data-progress="60"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Python</span>
                      <span className="skills-span-two">50%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills python-part" data-progress="50"></div>
                    </div>
                  </div>

                  <div className="skills-percent react-part-box">
                    <div className="skills-part-span">
                      <span className="skills-span-one">React</span>
                      <span className="skills-span-two">60%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills react-part" data-progress="60"></div>
                    </div>
                  </div>

                  <div className="skills-percent nodejs-part-box">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Node.js</span>
                      <span className="skills-span-two">40%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills nodejs-part" data-progress="40"></div>
                    </div>
                  </div>

                  <div className="skills-percent bootstrap-part-box">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Bootstrap</span>
                      <span className="skills-span-two">60%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills bootstrap-part" data-progress="60"></div>
                    </div>
                  </div>

                  <div className="skills-percent figma-part-box">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Figma</span>
                      <span className="skills-span-two">50%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills figma-part" data-progress="50"></div>
                    </div>
                  </div>

                  <div className="skills-percent git-part-box">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Git</span>
                      <span className="skills-span-two">50%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills git-part" data-progress="50"></div>
                    </div>
                  </div>

                </div>
                
                <span className="view-more-button" onClick={viewMoreAndButton}>View More</span> {/* viewMoreButtonResponsive, viewMoreButtonResponsiveFunction, {viewMore ? 'View Less' : 'View More'}*/}

              </div>
            </div>
          </div>
        </div>

        <AboutShowMore style responsiveShowMenu={responsiveShowMenu}>
          <div className="close-button">
            <i class="fa-solid fa-xmark" onClick={viewMoreAndButton}></i>
          </div>
        
          <div className="about-part-two-heading">
                <div className="heading-part">
                  <span>Skills</span>
                </div>

                <div className="skills-part">
                  <div className="skills-percent"> 
                    <div className="skills-part-span">
                      <span className="skills-span-one">HTML</span>
                      <span className="skills-span-two">80%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive html-part" data-progress="80"></div>  
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">CSS</span>
                      <span className="skills-span-two">75%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive css-part" data-progress="75"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">JavaScript</span>
                      <span className="skills-span-two">60%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive javascript-part" data-progress="60"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Python</span>
                      <span className="skills-span-two">50%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive python-part" data-progress="50"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">React</span>
                      <span className="skills-span-two">60%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive react-part" data-progress="60"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Node.js</span>
                      <span className="skills-span-two">40%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive nodejs-part" data-progress="40"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Bootstrap</span>
                      <span className="skills-span-two">60%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive bootstrap-part" data-progress="60"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Figma</span>
                      <span className="skills-span-two">50%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive figma-part" data-progress="50"></div>
                    </div>
                  </div>

                  <div className="skills-percent">
                    <div className="skills-part-span">
                      <span className="skills-span-one">Git</span>
                      <span className="skills-span-two">50%</span>
                    </div>

                    <div className="skills-part-box">
                      <div className="percent-part-skills-responsive git-part" data-progress="50"></div>
                    </div>
                  </div>

                </div>             
              </div>
        </AboutShowMore>
    </div>
  );
}

export default AboutSection;