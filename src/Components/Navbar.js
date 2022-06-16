import React from 'react'
import logo from '../asset/logo.efdde25b.png'
import Home from '../Pages/Home';

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-Image h-80 bg-center relative bg-cover flex flex-row justify-end">
          <div className="mt-10 mx-auto ">
             <img src={logo} className=" mt-10 h-auto align-middle" alt='logo'/>
          </div>
      </div>

    </div>
  );
}

export default Navbar