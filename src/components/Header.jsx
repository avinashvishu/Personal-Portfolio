import React, { useState } from 'react'
import "./Header.css"

const Header = () => {
  const [Toggle, setMenu] = useState(false)
  const [activeNav ,setActiveNav] = useState("#home")
  window.addEventListener("scroll", function(){
    const header = this.document.querySelector(".header")
    if (this.scrollY >=80 ) header.classList.add("header__scroll")
    else header.classList.remove("header__scroll")
  })
  return (
   <header className='header'>
    <nav className='nav container'> 
    <a href='index.html' className='nav__logo'>V Avinash</a>
    <div className={ Toggle ? "nav__menu show__menu" :  "nav__menu"}>
        <ul className='nav__list grid'>
              <li className=""><a onClick={()=> setActiveNav("#home")} href='#home' className={ activeNav === "#home" ? "nav__link active__link" : "nav__link"} ><i className='uil uil-estate nav__icon'></i>Home</a><span className={ activeNav === "#home" ?  'nav__underline__on' : "nav__underline__off"}></span></li>
              <li className=""><a onClick={()=> setActiveNav("#about")}  href='#about'className={ activeNav === "#about" ? "nav__link active__link" : "nav__link"} ><i className='uil uil-user nav__icon'></i>About</a><span className={ activeNav === "#about" ?  'nav__underline__on' : "nav__underline__off"}></span></li>
              <li className=""><a onClick={()=> setActiveNav("#skills")}  href='#skills' className={ activeNav === "#skills" ? "nav__link active__link" : "nav__link"}><i className='uil uil-file-alt nav__icon'></i>Skills</a><span className={ activeNav === "#skills" ?  'nav__underline__on' : "nav__underline__off"}></span></li>
              <li className=""><a onClick={()=> setActiveNav("#services")}   href='#services' className={ activeNav === "#services" ? "nav__link active__link" : "nav__link"}><i className='uil uil-briefcase-alt nav__icon'></i>Services</a><span className={ activeNav === "#services" ?  'nav__underline__on' : "nav__underline__off"}></span></li>
              <li className=""><a onClick={()=> setActiveNav("#portfolio")}  href='#portfolio' className={ activeNav === "#portfolio" ? "nav__link active__link" : "nav__link"}><i className='uil uil-scenery nav__icon'></i>Portfolio</a><span className={ activeNav === "#portfolio" ?  'nav__underline__on' : "nav__underline__off"}></span></li>
              <li className=""><a onClick={()=> setActiveNav("#contact")}  href='#contact' className={ activeNav === "#contact" ? "nav__link active__link" : "nav__link"}><i className='uil uil-message nav__icon'></i>Contact</a><span className={ activeNav === "#contact" ?  'nav__underline__on' : "nav__underline__off"}></span></li>
        </ul>
        <i  onClick={()=> setMenu(!Toggle)} class="uil uil-times nav__close"></i>
       
    </div>
     <div onClick={()=> setMenu(!Toggle)} className='nav__toggle'>
          <i class="uil uil-apps"></i>
        </div>
    </nav>

   </header>
  )
}

export default Header