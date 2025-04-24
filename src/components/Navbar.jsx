import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk , useUser ,UserButton } from '@clerk/clerk-react'
// import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const {openSignIn}  = useClerk();

  const {isSignedIn,user} = useUser();

  // const {credit,loadCreditsData} = useContext(AppContext)

//   useEffect(() =>{
//     if (isSignedIn){
//       loadCreditsData()
//     }
// },[isSignedIn] )
  return (

    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>

    <Link to='/'><img className ='w-32 sm:w-44'src = {assets.logo} alt="logo" /></Link>
      {
       isSignedIn ? 
        <div className='flex items-center gap-2 sm:gap-3'>
          {/* <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700'>
          <img className='w-5'src = {assets.credit_icon} alt="" />
          <p className='text-xs sm:text-sm font-medium text-gray-600'> Credits:{credit}</p>
            </button>
          <p className='text-gray-600 max-sm:hidden'> Hi, {user.fullName} </p> */}
          <UserButton />
        </div>
        : <button onClick={() => openSignIn({})} className='bg-zinc-800 text-white flex items-center px-4 py-2 gap-3 sm:px-8 sm:py-4 rounded-full text-sm hover:scale-105'>

        Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="arrow" />

      </button>
      }

    </div>
  );
};

export default Navbar;