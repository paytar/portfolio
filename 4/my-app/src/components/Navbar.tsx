import React from 'react';
import SunglassesMan from '../img/sunglasses.jpeg';
import Skype from '../img/skype.png';
import Facebook from '../img/facebook.png';
import Twitter from '../img/twitter.png';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className='flex-col fixed bg-black w-44 h-full hidden xl:block'>
      <div className='align-middle justify-center text-center mx-auto'>
        <img className='rounded-full h-24 w-24 object-cover mx-auto my-4' src={SunglassesMan} alt="SunglassesMan" />
        <button className='p-1 px-4 rounded-l-lg bg-red-600 text-white my-4 mx-auto'>Youtube</button>
        <span className='px-1 p-[5px] rounded-r-lg border-2 outline-none border-none bg-white text-black'>445B</span>
      </div>
      <div>
        <ul>
          <li className='text-center text-slate-400 bg-red-600 rounded-r-full hover:text-white p-4 px-0 mr-44 hover:-mr-0 transition-all duration-500'> <a href="#" className=' text-white p-6'> ANASAYFA</a> </li>
          <li className='text-center text-slate-400 bg-red-600 rounded-r-full hover:text-white p-4 px-0 mr-44 hover:-mr-0 transition-all duration-500'> <a href="#" className='text-white p-6'> HAKKIMDA</a> </li>
          <li className='text-center text-slate-400 bg-red-600 rounded-r-full hover:text-white p-4 px-0 mr-44 hover:-mr-0 transition-all duration-500'> <a href="#" className='text-white p-6'> VİDEOLAR</a> </li>
          <li className='text-center text-slate-400 bg-red-600 rounded-r-full hover:text-white p-4 px-0 mr-44 hover:-mr-0 transition-all duration-500'> <a href="#" className='text-white p-6'> FOTOĞRAFLAR</a> </li>
          <li className='text-center text-slate-400 bg-red-600 rounded-r-full hover:text-white p-4 px-0 mr-44 hover:-mr-0 transition-all duration-500'> <a href="#" className='text-white p-6'> İLETİŞİM</a> </li>
        </ul>
      </div>
      
      <div className='flex gap-4 py-8'>
        <img className='ml-8 w-6' src={Twitter} alt="Twitter" />
        <img className='w-6' src={Facebook} alt="Facebook" />
        <img className='w-6 bg-blue-800' src={Skype} alt="Skype" />
      </div>
      <div className='mx-auto text-center'>
        <p className='text-white font-bold font-mono'>Some usefull words <span className='font-extralight'> Add ads. </span> </p>
      </div>
    </nav>
  );
};

export default Navbar;
