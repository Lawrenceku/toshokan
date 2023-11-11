import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';
import logo from '/src/assets/logo.png'

export default function Home(){
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
        <section className="flex flex-col h-full w-full bg-red-800">
            <section className="w-full h-full bg-green-700">
              <header className="flex ">
                    <p className='h-2 w-28'>
                    <img src={logo} alt="" />
                    </p>
                    
              </header>
              <div>
                <h1 className="w-full text-6xl font-medium text-left ">My Bookshelf</h1>
              </div>
            </section>

            
          <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 border  shadow- bg-white'>
              <button onClick={a}  className="flex flex-col items-center">
                  <AppsIcon className="text-[#001f3f] font-bold"></AppsIcon>
                    <p className="text-[#001f3f] font-bold">Home</p>
              </button>
              <button onClick={b} className="flex flex-col items-center">
                  <ExploreIcon></ExploreIcon>
                    <p    >Explore</p>
              </button>
              <button onClick={c} className="flex flex-col items-center">
                  <Person2Icon></Person2Icon>
                    <p  >Me</p>
              </button>
           </footer>
        </section>
    )
}