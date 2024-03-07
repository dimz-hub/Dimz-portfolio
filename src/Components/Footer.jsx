import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { FaGithub, FaTwitter, FaLinkedin  } from 'react-icons/fa';






export default function Footer() {

    const currrentDate = new Date()

    const currentYear = currrentDate.getFullYear()

  return (
    <div className='footer '>
       <div>
        <div className='flex flex-col gap-[15px] justify-center items-center'>
            <div className='text-[30px] font-[700]'>
                {/* <img src='img/logo.svg' /> */}
                DIMZWORLD
            </div>
            <div>
                <div className='social-icons gap-[5px] flex items-center justify-center'>

             <span className = 'cursor-pointer  '>
                <Link to='https://www.linkedin.com/in/oladimeji-olawale-57bb4b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'   target='_blank'>

                <FaLinkedin size = {27} color = 'white' />
                </Link>
                </span>
             <span className = 'cursor-pointer w-[23px]'>
                <Link to='https://twitter.com/dimz15d' target='_blank'>
                <FaTwitter size = {27} color = 'white' />
                </Link>
                </span>
             <span className = 'cursor-pointer w-[23px]'>
                <Link  to='https://github.com/dimz-hub' target='_blank'>
                <FaGithub size = {27} color = 'white' />
                </Link>
                </span>
                </div>
                <p>Copyright {currentYear} . All right Reserved</p>
            </div>
        </div>
       </div>




    </div>
  )
}
