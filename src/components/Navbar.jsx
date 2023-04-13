import React from 'react'
import {logo} from "../utils/constants"
import {Link} from "react-router-dom";
import { Search } from "./";

const Navbar = () => {
  return (
    <>
      <div className='flex flex-row justify-between p-4'>
        <Link to="/" >
          <img src={logo} alt="logo" className='h-[12vh] scale-10 w-[20vw] m-[-30px]' />
        </Link>
        <Search/>
      </div>
    </>
  )
}

export default Navbar
