import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import pdfFile from "../../assets/pdfFile.pdf";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Ayush Ranjan Ojha,</span> Frontend Developer @VIT Chennai.</h1>
      <p>I am a pre-final year Computer Science student at VIT Chennai with a strong passion for frontend development and user-focused design. Currently exploring areas like cloud computing and core computer science, Dedicated, eager to learn, and excited to begin my professional journey in the tech industry.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} ><div className="hero-resume">My resume</div></a>
      </div>
    </div>
  )
}

export default Hero
