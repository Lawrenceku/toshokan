import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export  function Onboarding_A(){
    const navigate = useNavigate()
    function login(){navigate("./Login")}
    function Next(){navigate("./ready")}
    function Start(){navigate('/start')}
   return(
    <section className='flex flex-col p-4 items-center'>
        <p className='w-full flex justify-end'>
        <button onClick={login}  className='font-thin text-right  text-lg'>Skip &#187;</button>
        </p>
        <div className=' h-auto flex flex-col items-center justify-center '>
        
        <img className='w-80' src='https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-8899.jpg?w=740&t=st=1699564473~exp=1699565073~hmac=dd1bde6877ff6bfecdc417d4f9e9f742eb915b2963a139e179691b8b18f01de4' alt="" />
        
        </div>
        <h1 className='text-center font-bold text-3xl mt-10'>Welcome</h1>
        <p className=' p-4  pb-8 text-center'>Welcome to Toshokan, your gateway to a world of literary wonders! We're thrilled to have you on board. </p>
        <div className='flex justify-center items-center'>
            <button className='rounded-full bg-gray-800 h-3 w-3 m-1'></button>
            <button onClick={Next} className='rounded-full bg-gray-800 h-2 w-2 m-1'></button>
            <button onClick={Start}  className='rounded-full bg-gray-800 h-2 w-2 m-1'></button>
        </div>
        <div className='w-full flex justify-center md:justify-center mt-6'>
        <Button onClick={Next}  className='font-medium w-full md:w-auto text-white bg-[#001f3f] rounded-full py-2 px-6' variant="contained">Next <button className='text-xl  ml-1'>&#187;</button></Button>
        </div>
    </section>

   )
}

export  function Onboarding_B(){
    const navigate = useNavigate()
    function welcome (){navigate("/")}
    function login(){navigate("/Login")}
    function Next(){navigate("/start")}
   return(
    <section className='flex flex-col p-4 items-center'>
        <p className='w-full flex justify-end'>
        <button onClick={login}  className='font-thin text-right  text-lg'>Skip &#187;</button>
        </p>
        <div className=' h-auto flex flex-col items-center justify-center '>
        
        <img className='w-80' src='https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-8899.jpg?w=740&t=st=1699564473~exp=1699565073~hmac=dd1bde6877ff6bfecdc417d4f9e9f742eb915b2963a139e179691b8b18f01de4' alt="" />
        
        </div>
        <h1 className='text-center font-bold text-3xl mt-10'>You Seek Knowledge?</h1>
        <p className=' p-4  pb-8 text-center'>Then you have come to the right place. Get access to a sought after books all for free and make use of our free tools to assist you studying journey. </p>
        <div className='flex justify-center items-center'>
            <button onClick={welcome} className='rounded-full bg-gray-800 h-2 w-2 m-1'></button>
            <button className='rounded-full bg-gray-800 h-3 w-3 m-1'></button>
            <button onClick={Next} className='rounded-full bg-gray-800 h-2 w-2 m-1'></button>
        </div>
        <div className='w-full flex justify-center md:justify-center mt-8'>
        <Button onClick={Next}  className='font-medium w-full md:w-auto text-white bg-[#001f3f] rounded-full py-2 px-6' variant="contained">Next <button className='text-xl  ml-1'>&#187;</button></Button>
        </div>
    </section>

   )
}

export  function Onboarding_C(){
    const navigate = useNavigate()
    function welcome(){navigate("/")}
    function ready(){navigate("/ready")}
    function login(){navigate("/Login")}
    function signup(){navigate("/SignUp")}
   return(
    <section className='flex flex-col p-4 items-center'>
        
        <div className=' h-auto flex flex-col items-center justify-center '>
        
        <img className='w-80' src='https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-8899.jpg?w=740&t=st=1699564473~exp=1699565073~hmac=dd1bde6877ff6bfecdc417d4f9e9f742eb915b2963a139e179691b8b18f01de4' alt="" />
        
        </div>
        <h1 className='text-center font-bold text-3xl mt-10'>Start Reading Now</h1>
        <p className=' p-4  pb-8 text-center'>Welcome to Toshokan, your gateway to a world of literary wonders! We're thrilled to have you on board. </p>
        <div className='flex items-center justify-center'>
            <button onClick={welcome} className='rounded-full bg-gray-800 h-2 w-2 m-1'></button>
            <button onClick={ready} className='rounded-full bg-gray-800 h-2 w-2 m-1'></button>
            <button className='rounded-full bg-gray-800 h-3 w-3 m-1'></button>
        </div>
        <div className='w-full flex flex-col justify-center md:justify-center mt-8'>
        <Button onClick={signup}  className='font-medium  w-full md:w-auto text-white bg-[#001f3f] rounded-full py-2 px-6' variant="contained">Get Started </Button>
        <Button onClick={login}  className='font-medium mt-4 w-full md:w-auto text-[#001f3f] border-1 border-[#001f3f] bg-white rounded-full py-2 px-6' variant="contained">Log In </Button>
        </div>
    </section>

   )
}
