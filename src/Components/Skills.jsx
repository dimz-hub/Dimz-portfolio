import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';

export default function Skills() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };


  return (
    <div className = 'skill' id = 'skills' >
        <div>
        <div className='skill-bx'>
          <TrackVisibility>
          {
            ({isVisible}) =>
            <div >

            <h2>Skills</h2>
            <p>A wide Range of efficient skillset has been acquired which has enhanced my abilities in web development </p>
            </div>
          }
          </TrackVisibility>
              
          <TrackVisibility>
          {
             ({isVisible}) =>
            <div className=  {isVisible ? 'effect' : ''}>

<Carousel

responsive={responsive}
      infinite={true}
      className='skill-slider'

    >
        
    <div  className = 'item'>
    <img src='img/meter3.svg' alt='item' />
    <h5>React Js</h5>
    </div>
    <div className = 'item'>
    <img src='img/meter1.svg' alt='item' />
    <h5> Tailwind Css</h5>
    </div>
    <di className = 'item'>
    <img src='img/meter2.svg' alt='item' />
    <h5>Node Js</h5>
    </di>
    <div className = 'item'>
    <img src='img/meter3.svg' alt='item' />
    <h5>Firebase</h5>
    </div>
    <div className = 'item'>
    <img src='img/meter1.svg' alt='item' />
    <h5>Version Control</h5>
    </div>
    <div className = 'item'>
    <img src='img/meter3.svg' alt='item' />
    <h5>SEO</h5>
    </div>


 </Carousel>
 </div>
 }
      </TrackVisibility>
        
        </div>
    </div>
    <img src = 'img/color-sharp.png' alt='color-sharp' className='background-image-left' />
    </div>
  )
}
