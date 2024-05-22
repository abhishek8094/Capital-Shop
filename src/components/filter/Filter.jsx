import React, { useContext } from "react";
import myContext from "../../context/myContext";

const Filter = () => {
  const {
    mode,
    selectedCategory,
    setSelectedCategory,
    setSortOrder,
    categories,
    selectedSort,
    setSelectedSort,
    isReset,
    setIsReset,
  } = useContext(myContext);

  const handleSortOrderChange = (e) => {
    setSelectedSort(e.target.value);
    handleSortChange(e.target.value);
  };

  const handleSortChange = (sortOrder) => {
    setSortOrder(sortOrder);
  }; 

  const handleResetChange = () => {
    const newResetState = !isReset;
    setIsReset(newResetState);
    if (newResetState) {
      handleCategoryChange({ target: { value: "" } });
      handleSortChange("");
      setSelectedSort("");
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className=" text-center ml-7 mr-7 mt-24 lg:w-1/4 lg:pr-4">
      <h1
        className="text-lg mb-2"
        style={{ color: mode === "dark" ? "white" : "" }}
      >
        Filter
      </h1>
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

      <h2
        className="text-lg mb-2 mt-2"
        style={{ color: mode === "dark" ? "white" : "" }}
      >
        Sort
      </h2>
      <select
        value={selectedSort}
        onChange={handleSortOrderChange}
        className="p-2 border border-gray-300 rounded-md w-full"
      >
        <option value="">Price</option>
        <option value="price-low-high">Low to High</option>
        <option value="price-high-low">High to Low</option>
      </select>

      <div className="mt-4 text-xl">
        <button
          type="click"
          onClick={handleResetChange}
          className="border-2 bg-white p-1 w-16 rounded-md hover:bg-[#DB2777] hover:text-white "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
