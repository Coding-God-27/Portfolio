import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Photo1 from "../../assets/Photo1.jpg";

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
            <img src={Photo1} alt="Photo1" style={{ width: '320px', height: 'auto' }} />            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> Skilled in building visually appealing and interactive websites using modern frontend technologie</p>

                    <p>Knowledgeable in integrating frontend applications with backend services, APIs, and databases to create full-stack solutions</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} ></hr></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}} ></hr></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}} ></hr></div>
                    <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}} ></hr></div>


                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            
        </div>
    </div>
  )
}

export default About