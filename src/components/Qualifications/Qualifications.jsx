import React, {useState} from 'react'
import "./qualification.css"

const Qualifications = () => {
    const [toogle , setToggle] = useState(1)
  return (
    <section className='qualification section' id="qualification">
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div onClick={()=> setToggle(1)} className={ toogle === 1 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button  button__flex'}>
                <i className='uil uil-graduation-cap qualification__icon'></i>
                Education
                </div>
           
            
                <div onClick={()=> setToggle(2)} className={ toogle === 2 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button  button__flex'}>
                <i className='uil uil-briefcase-alt qualification__icon'></i>
                Exprience
                </div>
            </div>

            <div className='qualification__sections'>
                <div className={ toogle === 1 ?  'qualification__content qualification__content__active' :
                'qualification__content ' }>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Bachelor of Technology (Electronics and Communication Engineering)</h3>
                             <span className='qualification__subtitle'>UNIVERSAL College Of Engineering & Technology (UCET)</span>
                             <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'> 2020 - 2023</i>
                             </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span>
                        </div>
                    </div>
                 

                     <div className='qualification__data'>
                        <div></div>
                          <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Diploma in Electronics Engineer</h3>
                             <span className='qualification__subtitle'>B.I.T, Mesra, Ranchi</span>
                             <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'> 2017-2020</i>
                             </div>
                        </div>

                      
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Secondary Education</h3>
                             <span className='qualification__subtitle'>Xavier's English High School, Jamshedpur</span>
                             <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'> 2014 - 2016</i>
                             </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span>
                        </div>
                    </div>

                     
                </div>
                <div className={ toogle === 2 ?  'qualification__content qualification__content__active' :
                'qualification__content ' }>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>   MERN developer</h3>
                             <span className='qualification__subtitle'>Personal exprience</span>
                             <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'> 2022 - Present</i>
                             </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span>
                        </div>
                    </div>

                     <div className='qualification__data'>
                        <div></div>
                          <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>REACT developer </h3>
                             <span className='qualification__subtitle'>Personal exprience</span>
                             <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'> 2022 - Present</i>
                             </div>
                        </div>

                      
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>NODE JS developer</h3>
                             <span className='qualification__subtitle'>Personal exprience</span>
                             <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'> 2022 - Present</i>
                             </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                             <span className='qualification__line'></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Qualifications