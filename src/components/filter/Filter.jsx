import React from 'react';
import { useContext } from 'react';
import myContext from '../../context/myContext';

const Filter = ({ categories, selectedCategory, handleCategoryChange }) => {
  const {mode} = useContext(myContext);
  return (
    <div className="mb-4 text-center ml-7 mt-2 lg:w-1/4 lg:pr-4">
      <h1 className='text-2xl mb-2' style={{ color: mode === "dark" ? "white" : "" }}>Filter</h1>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 border border-gray-300 rounded-md w-full"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
