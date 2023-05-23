import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { GiCancel } from "react-icons/gi";

const LeftMenu = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
 <div className='h-screen' ><HiMenuAlt3 onClick={handleNav} className='sm:hidden z-20 text-white cursor-pointer absolute top-12 right-14  ' size={25} /> 
  <div
      className={`  flex-col  sm:right-10 mt-3 ml-3 gap-3 sm:bg-transparent  sm:flex hidden z-50  ${
      nav === true &&'!grid fixed text-gray-300 right-0 top-0 w-full h-screen bg-black/90 justify-center py-7 flex-col z-10'}`}>
        <p>Müşteriler</p>
      <p>Mülkler</p>
      <p>Bildirimler</p>
      <p>İstatistik</p>
      <p>Son Satışlar</p>
      <p>Tüm Satışlar</p>
   {nav && (
    <button
    className=" border-none z-50"
    onClick={() => handleNav()}
  >
    <GiCancel size={25} className=" absolute top-5 right-5" />
  </button>
)}
   </div>
    {/* <div className="flex flex-col p-2 gap-4 w-full border-2 h-screen ">
           
      <p>Müşteriler</p>
      <p>Mülkler</p>
      <p>Bildirimler</p>
      <p>İstatistik</p>
      <p>Son Satış</p>
      <p>Tüm Satışlar</p>
      
    </div> */}
     </div>
  );
};

export default LeftMenu;
