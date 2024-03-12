import React, {useState, useEffect}  from 'react'
// import { Link }  from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';



export default function Navbar({clicked, setClicked}) {


   const [activeLink, setActiveLink]  = useState('skills')
   const [scrolled, setScrolled]  = useState(false)
     

   useEffect(() => {

    const onScroll = () => {
        if(window.scrollY > 50) {
            setScrolled(true)
        }else {
            setScrolled(false)
        }
    }

        window.addEventListener('scroll' , onScroll)

    return () => {
        window.removeEventListener('scroll', onScroll)
    }


   },[])


  return (
    <div  className= {scrolled ? ' navbar scrolled' : 'navbar'}>
    <div className = 'w-[90%] m-[auto]  flex items-center justify-between  xs:block xs:w-[100%] xs:pb-[100px]'>
         <div className='nav-top' >
               <div className='xs:w-[90%] brand xs:flex xs:items-center xs:justify-between xs:m-[auto] '>

             {/* <img  src='img/logo.svg' alt='logo'/> */}
             <p > DIMZWORLD </p>  
             <img  src ='img/toggle.png' alt = 'toggle' className='w-[40px] hidden xs:block' onClick = {() => setClicked(prevState => !prevState)}   />
            </div>
             
         </div>
      <div className={`flex  items-center xs:flex-col  xs:h-[300px] nav-lin xs:w-[100vw] xs:m-[auto] xs:pt-[30px] ${clicked ? 'xs:flex' : 'xs:hidden'} `} >
         <div className='  flex justify-center items-center gap-[30px] xs:flex-col xs:w-[100vw] xs:m-[auto] '>
             <div onClick={() => setActiveLink('home')} className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link xs:border-b xs:border-white xs:w-[60%] xs:flex xs:justify-center'}>
                <Link smooth to='#home'>
                  <span className='xs:text-[22px]'>

                 Home
                  </span>
                </Link>
             </div>
             <div onClick={() =>setActiveLink('skills')}className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link xs:border-b xs:border-white xs:w-[60%] xs:flex xs:justify-center'}>
             <Link smooth to='#skills'>
               <span className='xs:text-[22px]'>

                 Skills
               </span>
             </Link>
             </div>
             <div onClick={() => setActiveLink('project')} className={activeLink === 'project' ? 'active-navbar-link' : 'navbar-link xs:border-b xs:border-white xs:w-[60%] xs:flex xs:justify-center'}>
                <Link smooth to = '#project'>
                  <span className='xs:text-[22px]'>

                 Project
                  </span>
                </Link>
             </div>
         </div>

      <div className='flex items-center gap-[30px] xs:pb-[15px]'>
         <div className=' xs:hidden social-icon flex items-center justify-center gap-[15px] ml-[14px]' >
             <span className = 'cursor-pointer'>
                <Link to='https://www.linkedin.com/in/oladimeji-olawale-57bb4b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'   target='_blank'>

                <img src='img/nav-icon1.svg' />
                </Link>
                </span>
             <span className = 'cursor-pointer'>
                <Link to='https://twitter.com/dimz15d' target='_blank'>
                <img src='img/twitter.png' className='w-[20px]' />
                </Link>
                </span>
             <span className = 'cursor-pointer'>
                <Link  to='https://github.com/dimz-hub' target='_blank'>
                <img src='img/github.png' className='w-[20px]' />
                </Link>
                </span>
             
             
         </div>
          <button className = 'nav-button hidden xs:block'>
            <span>
          <Link smooth to = '#footer'>
          Let's Connect
                </Link>
                </span>
            </button> 
      </div>
     
     
     </div>
      </div>

 </div>
  )
}
