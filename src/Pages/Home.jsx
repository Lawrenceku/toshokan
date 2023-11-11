import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';
import logo from '/src/assets/logo.png'
import '/src/assets/application.css'

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
        <section className="flex flex-col h-full p-4 w-full ">
            <section className="w-full h-full mb-20">
              <header className="flex ">
                    <p className='h- w-28'>
                    <img src={logo} alt="" />
                    </p>
              </header>
              <div className="mt-10 flex flex-col">
                <h1 className="w-full text-5xl font-medium text-left text-gray-900">Recommended</h1>
                <div className="flex flex-grow ">
                    <div className="flex h-80 w-80">
                      <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                      </div>
                      <div className="flex h-80 w-80">
                      <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                      </div>
                      <div className="flex h-80 w-80">
                      <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1699740387~exp=1699740987~hmac=81ea4f652a1424f7a38ad7acbe41d0dc9993d093914f75db2b58e7cc4abeeb6f" alt="" />
                      </div>
                      
                </div>
              </div>
              <section>
                <h1 className="font-medium text-lg">Your Books (5)</h1>
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

            
          <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 border  shadow-[0px_-10px_20px_-20px_rgba(0,0,0,0.3)] bg-white'>
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