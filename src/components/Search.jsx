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
      <form
        onSubmit={onhandleSubmit}
      >
        <input
          placeholder="Search..."
          className="rounded-full pl-2 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "red" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </form>
    </>
  );
}

export default Search
