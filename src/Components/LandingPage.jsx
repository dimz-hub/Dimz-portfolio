import React , {useEffect, useRef} from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Skills from './Skills'
import Project from './Project'
import Footer from './Footer'
import PhotoGallery from './PhotoGallery'


export default function LandingPage() {



    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const handleIntersection = (entries, section) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //      // Add your animation logic for the specific section here
  //     const element = entry.target;
  //       element.style.opacity = 1;
  //      //  element.classList.add('fadeInAnimation');
  //    }
  //   });
  // };
  
  
  
    // const useIntersectionObserver = (callback, options = {}) => {
    //   const targetRef = useRef(null);
   
    //   useEffect(() => {
    //     const observer = new IntersectionObserver(callback, options);
    //     const targetElement = targetRef.current;
   
    //     if (targetElement) {
    //       observer.observe(targetElement);
    //     }
   
    //     return () => {
    //       if (targetElement) {
    //        observer.unobserve(targetElement);
    //       }
    //     };
    //   }, [callback, options]);
   
    //   return targetRef;
    // };
  
  
    // const bannerRef = useIntersectionObserver((entries) => handleIntersection(entries, 'banner'), { threshold: 0.01 });
    // const skillsRef = useIntersectionObserver((entries) => handleIntersection(entries, 'skills'), { threshold: 0.5 });
    // const galleryRef = useIntersectionObserver((entries) => handleIntersection(entries, 'gallery'), { threshold: 0.5 });
    
    // const projectRef = useIntersectionObserver((entries) => handleIntersection(entries, 'project'), { threshold: 0.5 });
  
  
  
    const handleIntersection = (entries, section) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         // Add your animation logic for the specific section here
        const element = entry.target;
          element.style.opacity = 1;
         //  element.classList.add('fadeInAnimation');
       }
      });
    };

        

  return (
    <div>
        <Navbar/>
        <Banner     />
        <Skills />
        <PhotoGallery />
        <Project  />
        <Footer />
    </div>
  )
}
