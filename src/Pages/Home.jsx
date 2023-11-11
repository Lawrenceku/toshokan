import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';

export default function Home(){
    const navigate = useNavigate()
    return(
        <section className="flex justify-center items-center">
            <h1 className="font-bold text-3xl">Home</h1>
            <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 border  shadow-md bg-white'>
     <div className="flex flex-col items-center">
        <AppsIcon></AppsIcon>
          <a onClick={navigate("./Home")} className="focus:text-red-800">Home</a>
     </div>
     <div className="flex flex-col items-center">
        <ExploreIcon></ExploreIcon>
          <a   onClick={navigate("./Explore")}  className="focus:text-red-800">Explore</a>
     </div>
     <div className="flex flex-col items-center">
        <Person2Icon></Person2Icon>
          <a  onClick={navigate("./Me")} className="focus:text-red-800">Me</a>
     </div>
    </footer>
        </section>
    )
}