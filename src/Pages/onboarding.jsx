import Button from '@mui/material/Button';
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'
import { useNavigate } from "react-router-dom";

export default function Onboarding(){
    const navigate = useNavigate()
    function login(){navigate("./Login")}
   return(
    <section className='flex flex-col items-center'>
        <div className=' h-auto flex flex-col items-center justify-center w- mt-8'>
        {/* <Slider
  slideClass={'my-slider'}
  infinite={true}
  bullets={true}
  arrowsNav={true}
  animation={'scale'}
  callback={() => {
    console.log('here');
  }}
>
    <div className='slider my-slider'>
      <ul className='slider-wrapper'>
        {items.map((item) => (
          <li key={item}>
            <img src={yourImage} />
          </li>
        ))}
      </ul>
    </div>
</Slider> */}
        <img className='w-80' src='https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-8899.jpg?w=740&t=st=1699564473~exp=1699565073~hmac=dd1bde6877ff6bfecdc417d4f9e9f742eb915b2963a139e179691b8b18f01de4' alt="" />
        
        </div>
        <h1 className='text-center font-bold text-3xl mt-16'>Welcome</h1>
        <p className=' p-4  pb-8 text-center'>Welcome to Toshokan, your gateway to a world of literary wonders! We're thrilled to have you on board. </p>
        <div className='flex justify-center'>
            <span className='rounded-full bg-gray-800 h-2 w-2 m-1'></span>
            <span className='rounded-full bg-gray-800 h-2 w-2 m-1'></span>
            <span className='rounded-full bg-gray-800 h-2 w-2 m-1'></span>
        </div>
        <div className='w-full flex justify-end md:justify-center mt-8'>
        <Button onClick={login}  className='font-medium text-white bg-[#001f3f] rounded py-2 px-6' variant="contained">Next <span className='text-xl  ml-1'>&#187;</span></Button>
        </div>
    </section>

   )
}