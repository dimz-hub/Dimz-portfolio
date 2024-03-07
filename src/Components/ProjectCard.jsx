import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({title, description, imgUrl, project}) {
  return (
    <div>
          <Link to={project.url} target= '_blank' >
        <div  className='proj-imgbx cursor-pointer'>

       <img src={imgUrl} className= {project.style} />
     
       <div className='proj-txtx'>
        <h4>{title}</h4>
        <span>{description} </span>
       </div>

    </div>
          </Link>

    </div>
  )
}
