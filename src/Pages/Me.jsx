import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';
//import { SyncLoader } from "react-spinners";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LogoutIcon from '@mui/icons-material/Logout';
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
        <section className="flex justify-center items-center bg-[#fefaff]">
            <section className="flex flex-col items-center mb-20">
            <header className="bg-white w-screen flex justify-between p-8 h-36 shadow-md">
            <h1 className="font-bold text-left text-3xl m-8">Profile</h1>
            <button><LogoutIcon/></button>
            </header>
            <section className="">
                  <div className="flex mt-10 items-center p-8 w-screen">
                    <img className="h-20" src="https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png" alt="" /><p className="font-medium font-serif ml-4">User 001</p>
                  </div>
                  <div className="shadow-sm flex justify-around rounded-lg h-28 m-8 items-center bg-white ">
                    <div>
                    <FavoriteBorderIcon className='text-red-300'></FavoriteBorderIcon>
                        <span className="font-medium m-2">2 favorite books</span>
                    </div>
                          <div>
                          <DateRangeIcon className="text-red-300"></DateRangeIcon>
                        <span className="font-medium m-2 ">10 days streak</span>
                          </div>
                  </div>
                  <section className="mt-16 m-8">
                    <div className="flex justify-between shadow-sm my-8 p-2 items-center ">
                      <button className="flex items-center">
                      <img className="h-20 mr-2" src="https://img.freepik.com/free-psd/3d-rendering-back-school-icon_23-2149589337.jpg?w=740&t=st=1699825153~exp=1699825753~hmac=b5ba613a70927d7ff64aa0049675719591642a73f0421ae288ea47ad7b341bba" alt="" /><span className="font-medium">My Books</span> 
                      </button>
                          <span className="font-medium text-2xl">></span>
                    </div>
                    <div className="-2 flex justify-between shadow-sm my-8 items-center ">
                      <button className="flex items-center">
                      <img className="h-20 mr-2" src="https://static-00.iconduck.com/assets.00/challenge-icon-2048x2048-30y0t2s5.png" alt="" /><span className="font-medium">Challenges</span> 
                      </button>
                          <span className="font-medium text-2xl">></span>
                    </div>
                    <div className="p-2 flex justify-between shadow-sm my-8 items-center ">
                      <button className="flex items-center">
                      <img className="h-20 mr-2" src="https://img.freepik.com/free-vector/character-illustration-people-holding-user-account-icons_53876-43022.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" /><span className="font-medium">About</span> 
                      </button>
                          <span className="font-medium text-2xl">></span>
                    </div>
                  </section>
            </section>
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
