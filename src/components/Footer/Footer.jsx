import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">V Avinash</h1>
            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                 <li>
                    <a href="#skills" className='footer__link'>Projects</a>
                </li>
               

            </ul>
            <div className="footer__socials">
                   <a href="https://www.linkedin.com/in/v-avinash-22b4741b0" className='footer__social-icon' target="_blank">
                     <i class="bx bxl-linkedin"></i>
                   </a>
                   <a href="https://www.instagram.com/code_for_life_09/" className='footer__social-icon' target="_blank">
                     <i className='bx bxl-instagram'></i>
                   </a>
                   <a href="https://twitter.com/avinash_ece" className='footer__social-icon' target="_blank">
                     <i className='bx bxl-twitter'></i>
                   </a>
            </div>

            <span className='footer__copy'>&#169; V Avinash. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer