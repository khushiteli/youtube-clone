import React from "react";
import { categories } from "../utils/constants";

// const selectedCategory = 'New';

const SideBar = ({ selectedCategories, setSelectedCategories }) => {
  return (
    <div className="flex md:flex-col overflow-y-auto sm:flex-row gap-3 z-index-10 w-[18%]">
      {categories.map((c) => {
        return (
          <div
            className="flex gap-3 category-btn pr-20 py-2"
            style={{ background: c.name === selectedCategories && "#FC1503" }}
            key={c.name}
            onClick={() => {
              setSelectedCategories(c.name);
            }}
          >
            <button
              className="category-btn flex gap-3"
              style={{ background: c.name === selectedCategories && "#FC1503" }}
              key={c.name}
              onClick={() => {
                setSelectedCategories(c.name);
              }}
            ></button>

            <span
              style={{ color: c.name === selectedCategories ? "white" : "red" }}
            >
              {c.icon}
            </span>
            <span style={{ opacity: c.name === selectedCategories ? 1 : 0.8 }}>
              {c.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
