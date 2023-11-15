import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export  function Onboarding_A(){
    const navigate = useNavigate()
    function login(){navigate("./Login")}
    function signup(){navigate("/SignUp")}
    
  
   return(
    
    <section className='flex flex-col p-4 items-center'>
        <Swiper
        keyboard={{
            enabled: true,
          }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          initialSlide:1,
        }}

        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='flex flex-col p-4 items-center'>
                <p className='w-full flex justify-end'>
            <button onClick={login}  className='font-thin text-right  text-lg'>Skip &#187;</button>
            </p>
            <div className=' h-auto flex flex-col items-center justify-center '>
            
            <img className='w-80' src='https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-8899.jpg?w=740&t=st=1700073730~exp=1700074330~hmac=9ffb5c43cbf5b9202f5ac30429197cf8ddbd2772e25174e9ab867326de16aca3' alt="" />
            
            </div>
            <h1 className='text-center font-bold text-3xl mt-10'>Welcome</h1>
            <p className=' p-4  pb-8 text-center'>Welcome to Toshokan, your gateway to a world of literary wonders! We're thrilled to have you on board. </p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col p-4 items-center'>
                <p className='w-full flex justify-end'>
                <button onClick={login}  className='font-thin text-right  text-lg'>Skip &#187;</button>
                </p>
                <div className=' h-auto flex flex-col items-center justify-center '>
                
                <img className='w-80' src='https://img.freepik.com/free-vector/knowledge-concept-illustration_114360-3023.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais' alt="" />
                
                </div>
                <h1 className='text-center font-bold text-3xl mt-10'>You Seek Knowledge?</h1>
                <p className=' p-4  pb-8 text-center'>Uncover wisdom in Toshokan! Start your adventure now with advanced learning tools – your gateway to boundless knowledge.</p>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col p-4 items-center'>
            <div className=' h-auto flex flex-col items-center justify-center '>
            
            <img className='w-80' src='https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1265.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais' alt="" />
            
            </div>
            <h1 className='text-center font-bold text-3xl mt-10'>Start Reading Now</h1>
            <p className=' p-4  pb-8 text-center'>Embark on a Toshokan journey, where sought-after books meet powerful learning tools. Uncover wisdom with the turn of a page.</p>
           
            <div className='w-full flex flex-col justify-center items-center md:justify-center mt-3'>
            <Button onClick={signup}  className='font-medium  w-full md:w-40 text-white bg-[#001f3f] rounded-full py-2 px-6' variant="contained">Get Started </Button>
            <Button onClick={login}  className='font-medium mt-4 w-full md:w-40 mb-4 text-[#001f3f] border-1 border-[#001f3f] bg-white rounded-full py-2 px-6' variant="contained">Log In </Button>
            </div>
        </SwiperSlide>
        
      </Swiper>
        
    </section>

   )
}

