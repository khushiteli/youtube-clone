import React from 'react'
import {logo} from "../utils/constants"
import {Link} from "react-router-dom";
import { Search } from "./";

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <Link to="/" >
          <img src={logo} alt="logo" className='logo-img' />
        </Link>
        <Search/>
      </div>
    </>
  )
}

export default Navbar
