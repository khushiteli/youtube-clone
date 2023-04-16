import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <>
      <form onSubmit={onhandleSubmit}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 text-white"
        ></label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-[50vw] sm:w-[30vw] sm:h-[2vh] input-lable p-4 pl-10 text-sm rounded-full bg-white bg-white text-black h-[8vh] md:h-[5vh]"
            placeholder="Search..."
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default Search
