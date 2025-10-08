import React, { useState , useEffect} from 'react'
import { FaSearch , FaHeart, FaShoppingCart , FaMapMarkerAlt} from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import{Link} from 'react-scroll'
import { FaXmark,FaBars, FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
      AOS.init({
        offset: 100,
        durationi: 500,
        easing: 'ease-in-out'
      });
  
      AOS.refresh();
  
    }, [])
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu =() =>{
      setIsMenuOpen(!isMenuOpen);
    }
    const closeMenu =() =>{
      setIsMenuOpen("false");
    }
    const navItems=[
      {
        link:"Home",path:'home'
      },
      {
        link:"About",path:'about'
      },
      {
        link:"Products",path:'products'
      },
      {
        link:"Testimonials",path:'testimonials'
      },
      {
        link:"Contact",path:'contact'
      },

    ]
  return (<>
    <div className='w-full px-16 py-2 bg-yellow-400 lg:flex hidden justify-between items-center gap-6'>
      <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaMapMarkerAlt className='size-[18px]'/><span>Lorem, ipsum dolor.</span></h1>
      <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><MdEmail className='size-[18px]'/><span>nsjfdsi@gmail.com</span></h1>
      <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaPhoneVolume className='size-[18px]'></FaPhoneVolume><span>92924892482</span></h1> 
    </div>
    <nav className='w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 sticky top-0 z-50'>
      <h1 className='text-purple-400 font-bold lg:text-[30px] text-3xl underline italic'> ELectra Shop </h1>
      <ul className='lg:flex  justify-center items-center gap-10 hidden'>
        {navItems.map(({link,path})=>(
          <Link key={path} className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-400 hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link> 

        ))}
      </ul>
    </nav>
    </>
  )
}

export default Header
