import React, { useState } from 'react'
import "./Services.css"
const Services = () => {
    const [toogle , setToggle] = useState(0)
   
  return (
    <section className='services section' id="services">
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What i offer</span>
        <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                    <i className='uil uil-java-script services-icon'> </i>
                    <h3 className='services__title'>Mern <br/> Applications</h3>
                </div>
                <span onClick={()=> setToggle(1)} className='services__button'>View More <i className='uil uil-arrow-right services__button__icon'> </i>
                </span>
                <div className= { toogle ===1 ?"services__modal active__modal" : 'services__modal'}>
                <div className='services__modal__content'>

                    <i onClick={()=> setToggle(0)} className='uil uil-times services__modal__close'>
                    </i>
                <h3 className='services__modal__title'>Mern Developer</h3>
                <p className='services__modal__description'> I'm a professional Mern-stack developrer with comprehensive and advanced skills.</p>
                <ul className='services__modal__services grid'>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Proficiency in front-end development using React and associated libraries.</p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Strong knowledge of back-end development with Node.js and Express.js. </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Experience in working with MongoDB's databases </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Familiarity with web servers and cloud platforms for deployment.</p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Excellent problem-solving and debugging skills. </p>
                    </li>
                </ul>
                </div>
                </div>

      

            </div>
             <div className='services__content'>
                <div>
                    <i className='uil uil-react services-icon'> </i>
                    <h3 className='services__title'>React <br/> Applications </h3>
                </div>
                <span  onClick={()=> setToggle(2)} className='services__button'>View More <i className='uil uil-arrow-right services__button__icon'> </i>
                     </span>
                <div className={ toogle === 2 ?"services__modal active__modal" : 'services__modal'}>
                <div className='services__modal__content'>

                    <i onClick={()=> setToggle(0)} className='uil uil-times  services__modal__close'>
                    </i>
                <h3 className='services__modal__title'>React Developer</h3>
                <p className='services__modal__description'> Proficiency in React and its core concepts, including virtual DOM, JSX, and components. </p>
                <ul className='services__modal__services grid'>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Strong JavaScript and ES6/ES7 knowledge. </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Familiarity with state management libraries such as Redux or Context API. </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Understanding of web development best practices, including responsive design and cross-browser compatibility. </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Experience with testing frameworks and methodologies. </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Knowledge of integrating APIs and handling asynchronous operations. </p>
                    </li>
                </ul>
                </div>
                </div>

        

            </div>
             <div className='services__content'>
                <div>
                    <i className='uil  uil-html5-alt services-icon'> </i>
                    <h3 className='services__title'>Static <br/> Applications </h3>
                </div>
                <span onClick={()=> setToggle(3)} className='services__button'>View More <i className='uil uil-arrow-right services__button__icon'> </i>
                     </span>
                <div className={ toogle ===3 ?"services__modal active__modal" : 'services__modal'}>
                <div className='services__modal__content'>

                    <i onClick={()=> setToggle(0)} className='uil uil-times services__modal__close'>
                    </i>
                <h3 className='services__modal__title'>HTML , CSS , JAVASCRIPT</h3>
                <p className='services__modal__description'> i make radical static websites by using JAVASCRIPT, CSS, HTML and other imported libraries. </p>
                <ul className='services__modal__services grid'>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Proficiency in HTML, CSS, and JavaScript</p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Strong understanding of web development best practices, including responsive design.</p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Experience with responsive design frameworks like Tailwind. </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Effective communication and teamwork abilities. </p>
                    </li>
                    <li className='services__modal__service'>
                        <i className='uil uil-check-circle services__modal__icon'></i>
                        <p className='services__modal__info'>Commitment to continuous learning and adaptability to new web technologies. </p>
                    </li>
                </ul>
                </div>
                </div>

 

            </div>

        </div>
    </section>
  )
}

export default Services