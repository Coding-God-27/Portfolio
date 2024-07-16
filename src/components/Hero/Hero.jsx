import React from 'react'
import './Hero.css'
import Photo1 from "../../assets/Photo1.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Photo1} alt="Photo1" style={{ width: '320px', height: 'auto' }} />
        <h1><span>I'm Saiel Akhade,</span> Frontend Developer based in India</h1>
        <p> Enthusiastic and technically skilled Frontend Developer with a Bachelor's degree in Technology, specializing in Computer Engineering. As a recent graduate, I have developed a comprehensive understanding of full stack 
development, with a strong emphasis on frontend technologies.I bring a 
passion for creating responsive, user-friendly web applications. Seeking an 
opportunity to leverage my skills and knowledge in a dynamic and innovative 
environment to contribute to impactful projects and grow as a professional in 
the field of web development.</p>
<div className="hero-action">
    <div className="hero-connect"><AnchorLink  className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
    <div className="hero-resume">Resume</div>
</div>
    </div>
  )
}

export default Hero