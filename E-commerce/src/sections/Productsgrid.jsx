import React,{ useEffect } from 'react'
import {FaStar,FaRegHeart} from 'react-icons/fa'
import { MdOutlineRemoveRedEye,MdAddShoppingCart } from 'react-icons/md'
import { products } from '../export'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Productsgrid = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      durationi:500,
      easing:'ease-in-out',
    });
    AOS.refresh();
  })
  return (
    <div id="Products" className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-display="100" className='text-purple-400  text-xl font-semibold'>Browse Collections</h1>
      <h1 data-aos="zoom-in" data-aos-display="200" className='text-black font-semibold text-[42px] leading-[50px] text-center'>Trending Products</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center  items-center gap-10 mt-10'>
        {
          products.map((item,index)=>(
            <div id ='product-box' key={index} className='flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative'>
              <img src={item.img} alt=""/>
              <div id='icons' className='flex justify-center items-center gap-3 absolute top-[20px]'>
                <div className='bg-purple-400 hover:bg-yellow-400 hover:text-black rounded-full p-3 text-white'>
                  <MdOutlineRemoveRedEye/>
                </div>
                <div className='bg-purple-400 hover:bg-yellow-400 hover:text-black rounded-full p-3 text-white'>
                  <FaRegHeart/>
                </div>
                <div className='bg-purple-400 hover:bg-yellow-400 hover:text-black rounded-full p-3 text-white'>
                  <MdAddShoppingCart/>
                </div>
              </div>
              <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>
              <h1 className='text-xl text-black font-semibold'>{item.name}</h1>
              <h1 className='text-lg text-purple-400 font-semibold'>{item.price}</h1>
              <div className='w-full mt-2'>
                <br/>
                <div className='flex justify-between items-center gap-6 mt-3'>
                  <div className='flex justify-start items-center gap-1'>
                    <FaStar className='text-purple-400'/>
                    <FaStar className='text-purple-400'/>
                    <FaStar className='text-purple-400'/>
                    <FaStar className='text-purple-400'/>
                    <FaStar className='text-purple-400'/>
                  </div>
                  <button className='bg-green-500 text-white px-4 py-2 rounded-lg text-{13px} font-semibold'
                  > SALE 14%</button>
                </div>
              </div>

            </div>

          ))
        }
      </div>
      <button data-aos ="zoom-in" data-aos-delay="400" className='bg-purple-400 hover:bg-yellow-400 text-white hover:text-black font-semibold ox-8 px-3 py-3 rounded-lg mt-8'>VIEW MORE</button>
    </div>
  )
}

export default Productsgrid
