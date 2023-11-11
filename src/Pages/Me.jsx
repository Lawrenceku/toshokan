import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';

export default function Me(){
    const navigate = useNavigate()
    return(
        <section className="flex justify-center items-center">
            <h1 className="font-bold text-3xl ">Me</h1>
            <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 border  shadow-md bg-white'>
     <div className="flex flex-col items-center">
        <AppsIcon ></AppsIcon>
          <button onClick={navigate("/Home")} >Home</button>
     </div>
     <div className="flex flex-col items-center">
        <ExploreIcon ></ExploreIcon>
          <button   onClick={navigate("/Explore")}  >Explore</button>
     </div>
     <div className="flex flex-col items-center">
        <Person2Icon className="text-[#001f3f] font-bold"></Person2Icon>
          <button className="text-[#001f3f] font-bold" onClick={navigate("/Me")} >Me</button>
     </div>
    </footer>
        </section>
    )
}