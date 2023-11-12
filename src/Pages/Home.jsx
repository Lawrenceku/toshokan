import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';
import logo from '/src/assets/logo.png'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//import '/src/assets/application.css'

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
        <section className="flex flex-col p-4 h-full  w-full ">
            <section className="w-full h-full mb-20">
              <header className="flex sticky top-0 justify-between items-center bg-white">
                    <p className='h- w-28'>
                    <img src={logo} alt="" />
                    </p>
                            <Paper className="rounded-full h-10"
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Books"
                inputProps={{ 'aria-label': 'Search Books' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                
              </IconButton>
            </Paper>
              </header>
              <div className="mt-16 flex flex-col">
                <h1 className="w-full p-4 text-4xl font-medium text-left text-gray-900">Recommended</h1>
                <div className="flex flex-grow ">
                    
                      <div class="p-10">  
  
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Mountain</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#University</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mathematics</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Engineering</span>
                      </div>
                    </div>
                  </div>
                      
                      
                </div>
              </div>
              <section className="rounded-3xl p-4 mt-10 shadow-[0px_-10px_40px_-20px_rgba(0,0,0,0.3)] ">
                <h1 className="font-medium text-lg ">Your Books (5)</h1>
                <div className="flex flex-col ">
                  <div className=" w-40 h-40 bg-green-800  ">
                  <img className="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus minima suscipit officia porro atque!</p>
                  <div className=" w-40 h-40 bg-green-800  ">
                  <img className="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus minima suscipit officia porro atque!</p>
                  <div className=" w-40 h-40 bg-green-800  ">
                  <img className="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus minima suscipit officia porro atque!</p>
                  <div className=" w-40 h-40 bg-green-800  ">
                  <img className="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus minima suscipit officia porro atque!</p>
                  <div className=" w-40 h-40 bg-green-800  ">
                  <img className="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus minima suscipit officia porro atque!</p>
                  <div className=" w-40 h-40 bg-green-800  ">
                  <img className="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus minima suscipit officia porro atque!</p>
                  <div className=" w-40 h-40 bg-green-800  ">
                  <img className="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus minima suscipit officia porro atque!</p>
                
                </div>
              </section>
            </section>

            
          <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16   shadow-[0px_-10px_20px_-20px_rgba(0,0,0,0.3)] bg-white'>
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