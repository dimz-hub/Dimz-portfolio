import React, {useState, useEffect}  from 'react'
// import { Link }  from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';




export default function Navbar() {


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
    <div className = 'w-[90%] m-[auto] flex items-center justify-between'>
         <div >
            <div className='brand'>

             {/* <img  src='img/logo.svg' alt='logo'/> */}
             <p > DIMZWORLD </p>  

            </div>
             
         </div>
      <div className='flex items-center'>
         <div className=' flex justify-center items-center gap-[30px]'>
             <div onClick={() => setActiveLink('home')} className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}>
                <Link smooth to='#home'>
                 Home
                </Link>
             </div>
             <div onClick={() =>setActiveLink('skills')}className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}>
             <Link smooth to='#skills'>
                 Skills
             </Link>
             </div>
             <div onClick={() => setActiveLink('project')} className={activeLink === 'project' ? 'active-navbar-link' : 'navbar-link'}>
                <Link smooth to = '#project'>
                 Project
                </Link>
             </div>
         </div>

      <div className='flex items-center gap-[30px]'>
         <div className=' social-icon flex items-center justify-center gap-[15px] ml-[14px]' >
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
         {/* <button className = 'nav-button'><span>Let's Connect </span></button> */}
      </div>
     
     
     </div>
      </div>

 </div>
  )
}
