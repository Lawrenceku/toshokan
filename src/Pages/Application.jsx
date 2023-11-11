

export default function Application() {

  return (
    <>
    <footer className='fixed flex justify-around items-center left-0 bottom-0 w-full h-16 border  shadow-md bg-white'>
     <div className="flex flex-col">
          <a href="/home" className="focus:text-red-800">Home</a>
     </div>
     <div className="flex flex-col ">
          <a href="/Explore" className="focus:text-red-800">Explore</a>
     </div>
     <div className="flex flex-col">
          <a href="/me" className="focus:text-red-800">Me</a>
     </div>
    </footer>
    </>
  )
}


