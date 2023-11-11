import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';

export default function Home(){
    const navigate = useNavigate()
    function b(){
      navigate("/Explore")
    }
    return(
        <section className="flex justify-center items-center">
            <h1 className="font-bold text-3xl ">Home</h1>
            <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 border  shadow-md bg-white'>
     <div className="flex flex-col items-center">
        <AppsIcon className="text-[#001f3f] font-bold"></AppsIcon>
          <button onClick={navigate("/Home")} className="text-[#001f3f] font-bold">Home</button>
     </div>
     <div className="flex flex-col items-center">
        <ExploreIcon></ExploreIcon>
          <button   onClick={b()} >Explore</button>
     </div>
     <div className="flex flex-col items-center">
        <Person2Icon></Person2Icon>
          <button  onClick={navigate("/Me")}>Me</button>
     </div>
    </footer>
        </section>
    )
}