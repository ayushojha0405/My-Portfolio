import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a dedicated and enthusiastic Frontend Developer with a strong interest in creating meaningful and user-centric digital experiences. Proficient in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and experienced in using the <b>React.js</b> library, I bring a balanced approach to design and development. I also work extensively with <b>Figma</b> to craft clean, intuitive UI/UX designs.</p>
                <p> I had the opportunity to intern at <b>NALCO</b>, where I contributed as a dedicated frontend developer on a collaborative project, gaining practical exposure to real-world development environments.My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF LEARNING & DEV</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About