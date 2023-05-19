import React from "react";
import { categories } from "../utils/constants";

// const selectedCategory = 'New';

const SideBar = ({ selectedCategories, setSelectedCategories }) => {
  return (
    <div className="categories-bar">
      {categories.map((c,index) => {
        return (
          <div key={index}>
            <div
              className="category-btn"
              style={{
                background: c.name === selectedCategories && "#ffffff4d",
              }}
              key={c.name}
              onClick={() => {
                setSelectedCategories(c.name);
              }}
            >
              <span className="category-btn-icon">{c.icon}</span>
              <span
                className="category-btn-name"
                style={{
                  opacity: c.name === selectedCategories ? '1' : '0.8'
                }}
              >
                {c.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;