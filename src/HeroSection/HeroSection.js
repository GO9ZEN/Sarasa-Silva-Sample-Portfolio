import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import porfilepic from "../images/profile-pic.png";
import Typical from 'react-typical';
import PDF from "../CV/Resume_Sarasa Silva_Front-End Developer_2.pdf";

import "./HeroSection.css";

function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);

  return (
    <div>
        <div className="hero-section" id="home">
            <Particles
                className="particles"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: false,
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                // mode: "push",
                            },
                            onHover: {
                                enable: true,
                                // mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="my-data">
                <div className="profile-picture">
                    <img src={porfilepic} alt="" />
                </div>

                <div className="data-header">
                    <span>Hi, I'm </span>
                    <span className="data-header-name">
                        <Typical
                            className="data-header-writer"
                            steps={['Sarasa', 2000, 'Sarasa Silva', 4000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </span>
                </div>

                <div className="data-carrier">
                    <span>Frontend Developer</span>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/sarasa-silva/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/GO9ZEN" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github"></i></a>
                    <a href="https://www.youtube.com/channel/UCfCUyXdkSVScwBaHlslxT0w" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-youtube"></i></a>
                </div>

                <a href={PDF} target="_blank" rel="noopener noreferrer"><button className="download-cv">Download CV</button></a>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;