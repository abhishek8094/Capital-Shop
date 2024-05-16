import React from 'react';
import {useState, useContext } from 'react';
import myContext from '../../context/myContext';

const Filter = ({ categories, selectedCategory, handleCategoryChange,handleSortChange }) => {

  const [selectedSort, setSelectedSort] = useState("");
  const [isReset, setIsReset] = useState(false);

  const handleSortOrderChange = (e) => {
    setSelectedSort(e.target.value);
    handleSortChange(e.target.value);
  };

  const handleResetChange = () => {
    setIsReset(!isReset);
    if (!isReset) {
      handleCategoryChange({ target: { value: "" } });
      handleSortChange("");
      setSelectedSort("");
    }
  };

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

      <h2 className='text-xl mb-2 mt-2' style={{ color: mode === "dark" ? "white" : "" }}>Sort</h2>
      <select
        value={selectedSort}
        onChange={handleSortOrderChange}
        className="p-2 border border-gray-300 rounded-md w-full"
      >
        <option value="">Price</option>
        <option value="price-low-high"> Low to High</option>
        <option value="price-high-low"> High to Low</option>
      </select>

      <div className="mt-4 text-xl">
        <input
          type="checkbox"
          checked={isReset}
          onChange={handleResetChange}
          className="mr-2"
        />
        <label style={{ color: mode === "dark" ? "white" : "" }}>Reset </label>
      </div>
    </div>
  );
};

export default Filter;
