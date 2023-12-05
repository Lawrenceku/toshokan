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
            <header className="bg-white w-screen flex justify-between px-8  items-center h-36 shadow-sm">
            <h1 className="font-bold text-left text-3xl m-8">Profile</h1>
            <button><LogoutIcon/></button>
            </header>
            <section className="">
                  <div className="flex mt-10 items-center p-8 w-screen">
                    <img className="h-20" src="https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png" alt="" /><p className="font-medium font-serif ml-4">User 001</p>
                  </div>
                  <div className="shadow-md flex justify-around rounded-lg h-28 m-8 items-center bg-white ">
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
                    <div className="flex justify-between shadow-sm my-8 p-2 items-center bg-white rounded-lg">
                      <button className="flex items-center">
                      <img className="h-20 mr-2" src="data:image/png;base64,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" alt="" /><span className="font-medium">My Books</span> 
                      </button>
                          <span className="font-medium text-2xl">></span>
                    </div>
                    <div className="p-2 flex justify-between shadow-sm my-8 items-center bg-white rounded-lg">
                      <button className="flex items-center">
                      <img className="h-20 mr-2" src="https://img.freepik.com/free-vector/illustration-jigsaw-icon_53876-5904.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" /><span className="font-medium">Challenges</span> 
                      </button>
                          <span className="font-medium text-2xl">></span>
                    </div>
                    <div className="p-2 flex justify-between shadow-sm my-8 items-center bg-white rounded-lg">
                      <button className="flex items-center">
                      <img className="h-20 mr-2" src="https://img.freepik.com/free-vector/illustration-business-people_53876-5879.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" /><span className="font-medium">About</span> 
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
