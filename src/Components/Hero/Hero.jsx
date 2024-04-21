import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education to the world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat, ducimus officia beatae voluptatibus quas reprehenderit, in necessitatibus omnis enim dignissimos? Rem et earum nulla, repellendus animi error similique eius.</p>
        <button className="btn">Explore more <img src={dark_arrow}/></button>
      </div>
    </div>
  )
}

export default Hero
