import { useNavigate } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import ExploreIcon from '@mui/icons-material/Explore';
import Person2Icon from '@mui/icons-material/Person2';
//import { SyncLoader } from "react-spinners";
import Rating from '@mui/material/Rating';
import '/src/assets/application.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function Explore(){
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
        <section className="flex flex-col ">
            <section className="flex flex-col mb-20 items-center">
            <header className="flex w-full p-8">
            
            <Paper className="rounded-full h-10 w-full"
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
            <section className="flex flex-col justify-start w-full p-8">
                <h1 className="text-lg text-left font-medium bg-[#fefaff] w-fit p-2 my-2 rounded-full border bg-[#fefaff] w-fit p-2 my-2 rounded-full border">Most Popular This Week</h1>
                <div class="bg-[#fefaff] max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-photo/close-up-house-blueprints_329181-3484.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Engineering Mathematics</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Rating name="read-only" value={3} readOnly />
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#University</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mathematics</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Engineering</span>
                      </div>
                    </div>
            </section>
            <section className="flex flex-col justify-start w-full p-8">
                <h1 className="text-lg text-left font-medium bg-[#fefaff] w-fit p-2 px-4 my-2 rounded-full border">For You</h1>
                <div class="bg-[#fefaff] max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-vector/science-cover-book-design-with-microscope-watercolor-illustration_83728-2487.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Science Of Everything</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Rating name="read-only" value={2} readOnly />
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Science</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mathematics</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chemistry</span>
                      </div>
                    </div>
            </section>
            <section className="flex flex-col justify-start w-full p-4">
                <h1 className="text-lg text-left font-medium bg-[#fefaff] w-fit p-2 px-4 my-2 m-4 rounded-full border">Hot Books</h1>
                <div className="flex flex-row flex-wrap">
                <div class="bg-[#fefaff] max-w-sm rounded overflow-hidden m-4 shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-vector/science-cover-book-design-with-molecule-dna-watercolor-illustration_83728-2486.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Science Workbook I</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Rating name="read-only" value={5} readOnly />
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Science</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mathematics</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chemistry</span>
                      </div>
                    </div>

                    <div class="bg-[#fefaff] max-w-sm rounded m-4 overflow-hidden shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-psd/science-event-poster-template_23-2148813600.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Chemistry For Dummies</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Rating name="read-only" value={4} readOnly />
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#University</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chemistry</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Beginners</span>
                      </div>
                    </div>
                    
                    <div class="bg-[#fefaff] max-w-sm rounded m-4 overflow-hidden shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-vector/realistic-science-poster-template_23-2149057776.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Lab Science II</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Rating name="read-only" value={4} readOnly />
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Practical</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mathematics</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Chemistry</span>
                      </div>
                    </div>

                    <div class="bg-[#fefaff] max-w-sm rounded m-4 overflow-hidden shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-photo/top-view-english-books-assortment_52683-86029.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Practical English Usage</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Rating name="read-only" value={4} readOnly />
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Practical</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#English</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Art</span>
                      </div>
                    </div>

                    <div class="bg-[#fefaff] max-w-sm rounded m-4 overflow-hidden shadow-lg">
                    <img class="w-full"  src="https://img.freepik.com/free-psd/mental-health-support-flyer-template_23-2149170508.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais" alt="" />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Introduction To Psychology</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Rating name="read-only" value={4} readOnly />
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#psychology</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Arts</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#General studies</span>
                      </div>
                    </div>
                    </div>
            </section>
            </section>


            <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 shadow-[0px_-10px_20px_-20px_rgba(0,0,0,0.3)]  bg-white'>
                  <button onClick={a} className="flex flex-col items-center">
                      <AppsIcon ></AppsIcon>
                        <p  >Home</p>
                  </button>
                  <button  onClick={b}  className="flex flex-col items-center">
                      <ExploreIcon className="text-[#001f3f] font-bold"></ExploreIcon>
                        <p  className="text-[#001f3f] font-bold" >Explore</p>
                  </button>
                  <button onClick={c}  className="flex flex-col items-center">
                      <Person2Icon></Person2Icon>
                        <p  >Me</p>
                    </button>
                </footer>
        </section>
    )
}
