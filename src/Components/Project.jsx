import React from 'react'
import ProjectCard from './ProjectCard'

export default function Project() {

const project = [
    {title: 'DimzChat',
     description: 'Bringing the world together one click at a time',
     imgUrl: 'img/dimzchat.jpg',
     style: 'images',
     url: 'https://dimzchat.vercel.app/'

},
    {title: 'BirchCare',
     description: 'Domiciliary care',
     imgUrl: 'img/birch.jpg',
     style: 'images',
     url: 'https://www.joinbirchcare.com/'

},
    {title: 'Youtube Clone',
     description: 'watch the world happen',
     imgUrl: 'img/youtube-clone.jpg',
     style: 'images',
     url: 'https://youtube-clone-ruddy-seven.vercel.app/'
},
    {title: 'Oye Autos',
     description: 'Car and car parts dealership',
     imgUrl: 'img/oyeAutos.jpg',
     style: 'images',
     url: 'https://car-dealership-website.vercel.app/'
},
    {title: 'Tetris for PC',
     description: 'Get your fun on with tetris',
     imgUrl: 'img/tetris.jpg',
     url: 'https://tetris-game-iota.vercel.app/'
},
    {title: 'eaziPay.jpg',
     description: 'Easy pay',
     imgUrl: 'img/eazipay.jpg',
     style: 'images',
     url: 'https://eazipay-psi.vercel.app/'
},
]



  return (
<div className = 'project' id = 'project' >
        <div>
        <div className=''> 
            <h2>Projects</h2>
            <p>
              Just an insight into some of my works over the years, my skills sure is like fine wine 🍷 , it gets better over time
            </p>
              <div>
              <div className='pills'>
                <div className='nav-item'>

                 
                </div>

              </div>
              <div>
                <div className='projects'>
                 

                    {
                        project.map((project , index) => {
                            return (
                                <ProjectCard key={index} title = {project.title} description={project.description} imgUrl={project.imgUrl} project = {project} />
                            )
                        })
                    }
                           
                </div>

              </div>
              </div>

        
        </div>
    </div>
    <img src = 'img/color-sharp.png' alt='color-sharp' className='background-image-left' />
    </div>
  )
}
