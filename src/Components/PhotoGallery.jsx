import React, {useRef} from 'react'
import {useScroll, motion, useTransform} from 'framer-motion'

export default function PhotoGallery({}) {

  const scrollRef = useRef(null)

 const {scrollYProgress} = useScroll({
  target: scrollRef,
  offset:['0.1 1', '0.2 1']
})
     

const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1])


  return (
    <div className = 'project'  >
    <div  > 
    <motion.div className='' ref = {scrollRef}   style = {{ opacity: opacityProgress ,  scale: scaleProgress, transition: 'opacity 2s ease-in'}}  >
        <h2>Photo Gallery</h2>
        <p>Get an  insight to dimz and his world,  a little pictorial representation of my journey to freedom so far  </p>
        
       
          <div className='flex flex-wrap  gap-[20px] w-[90%] m-[auto] justify-center' >
            <div className = 'dimz-img  w-[300px] h-[500px] ' >
              <img src = 'img/bros.jpg'  alt='dimz pic' className='w-full h-full object-cover'/>
            </div>
            <div className = 'dimz-img  w-[300px] h-[500px] ' >
              <img src='img/nysc.jpg' className='w-full h-full object-cover'  alt='dimz pic'/>
            </div>
            <div className = 'dimz-img w-[300px] h-[500px] ' >
              <img src='img/men.jpg' className='w-full h-full object-cover' alt='dimz pic'/>
            </div> 
            <div className = 'dimz-img w-[300px] h-[500px] ' >
              <img src = 'img/omo-ope.jpg' className='w-full h-full object-cover' alt='dimz pic'/>
            </div>
            <div className = 'dimz-img w-[300px] h-[500px] ' >
              <img src='img/ope.jpg' className='w-full h-full object-cover' alt='dimz pic'/>
            </div>
            <div className = 'dimz-img w-[300px] h-[500px] ' >
              <img src='img/photo.jpeg' className='w-full h-full object-cover' alt='dimz pic'/>
            </div>
            <div className = 'dimz-img w-[300px] h-[500px] ' >
              <img src='img/photo1.jpeg' className='w-full h-full object-cover' alt='dimz pic'/>
            </div>
            <div className = 'dimz-img w-[300px] h-[500px] ' >
              <img src= 'img/photo2.jpeg' className='w-full h-full object-cover' alt='dimz pic'/>
            </div>
            <div className = 'dimz-img w-[300px] h-[500px] ' >
              <img src=  'img/photo3.jpeg' className='w-full h-full object-cover' alt='dimz pic'/>
            </div>
 
          </div>
   

    
    </motion.div>
</div>
<img src = 'img/color-sharp2.png' alt='color-sharp' className='background-image-right' />
</div>
  )
}
