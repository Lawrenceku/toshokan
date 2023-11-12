import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';
import { SyncLoader } from "react-spinners";
import '/src/assets/application.css'

export default function Me(){
    const navigate = useNavigate()
    function a(){
      navigate("/Home")
    }
    function b(){
      navigate("/Explore")
    }
    function c(){
      navigate("/Me")
    }
    return(
        <section className="flex justify-center items-center">
            <section className="flex flex-col items-center">
            <h1 className="font-bold text-3xl m-8"></h1>
            <SyncLoader color="#001f3f" />
            </section>

            <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 shadow-[0px_-10px_20px_-20px_rgba(0,0,0,0.3)]  bg-white'>
                  <button onClick={a} className="flex flex-col items-center">
                      <AppsIcon ></AppsIcon>
                        <p >Home</p>
                  </button>
                  <button onClick={b}   className="flex flex-col items-center">
                      <ExploreIcon ></ExploreIcon>
                        <p   >Explore</p>
                  </button>
                  <button onClick={c}  className="flex flex-col items-center">
                      <Person2Icon className="text-[#001f3f] font-bold"></Person2Icon>
                        <p className="text-[#001f3f] font-bold" >Me</p>
                  </button>
              </footer>
        </section>
    )
}
