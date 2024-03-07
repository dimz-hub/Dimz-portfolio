import React, {useState, useEffect} from 'react'
import TrackVisibility from 'react-on-screen';
import {motion} from 'framer-motion'

 export default function Banner() {


 const toRotate = ['Web Developer']
 const [isDeleting, setIsDeleting] = useState(false)
 const [loopNum, setLoopNum] = useState(0) 
 const [text, setText] = useState('')
 const period = 2000
 const [delta,setDelta] = useState(300 - Math.random() * 100) 




 useEffect(() => {
  
    let ticker = setInterval(() => {
       tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }

 }, [text])


 const tick = () => {
   let i = loopNum % toRotate.length
   let fullText = toRotate[i]
   let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
   
   setText(updateText)

   if(isDeleting){
     setDelta( 200 - Math.random() * 100)
   }
   
   if (!isDeleting && updateText === fullText){
      
     setIsDeleting(true)
     setDelta(period)
   }
else if (isDeleting && updateText === ''){
  setIsDeleting(false)
  setLoopNum( loopNum + 1)
  setDelta(500)
} 
 
  } 







  return (
    
    <div  >
       <div  className='banner ' id='home' >

         <div className='banner-hero w-[90%] m-[auto]' >
        <TrackVisibility>
        {
         ({isVisible}) =>
              <div className= {isVisible ? 'effect' : ''}>
            <div>
                <span className='tagline'>Welcome to Dimz portfolio</span>
                <h1>
                    I am a <span>{text}</span>
                </h1>
                <p>Hmm where to begin, lets take a trip down memory lane ever since i was little, i always had the drive to invent something new, could remember loosing my perfectly working bike in the hope of creating a better bike but as expected from a  9year old i ruined it. Web development is my way to express myself and bring things to life so far in my 2years it has been an amazing journey and what excites me the most is the infinite possibility of development and learning  </p>
              {/* <button onClick={() => console.log('connect')}>
                Lets connect
              </button> */}
            </div>
            </div>
 }
        </TrackVisibility>
            
            <div>
                <img src='img/header-img.svg' alt='banner photo' />
            </div>




         </div>


       </div>

       

    </div>
       )
  }
    

