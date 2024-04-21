import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menuIcon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(prev => setMobileMenu(!mobileMenu))
  }

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  console.log(mobileMenu)

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={`${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonals' smooth={true} offset={-260} duration={500}>Testimonals</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>

      <img src={menuIcon} alt="" className={`menu-icon`} onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
