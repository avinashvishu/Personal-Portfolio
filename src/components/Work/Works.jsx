import React, {useState, useEffect} from 'react'
import { projectNav, projectsData } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
    const [item ,setItem] = useState({name : "all"})
    const [projects ,setProjects] = useState([])
    const [active ,setActive] = useState(0)
    useEffect(()=> {
   if (item.name === "all") {
    setProjects(projectsData)
   }else{
    const newProject = projectsData.filter((value) => value.category.toLowerCase() === item.name)
    
    setProjects(newProject)
   }
    },[item])

    const handleClick = (e, index)=> {
          setItem({ name : e.target.textContent.toLowerCase()})
          setActive(index)
    }
  return (
    <div>
         <div className='work__filter'>
        {projectNav.map((item , index)=> {
            return <span onClick={(e)=> handleClick(e, index)} className={`${active === index ? "active__work" : "work__item"}`} key={index}>{item.name}</span>
        })}
    </div>
    <div className='work__container container grid'>
        {projects.map((item ,index) => {
              return<WorkItems item={item} key={index}/>
        })}

    </div>
    </div>
   
  )
}

export default Works