import React from "react";
import SearchIcon from "assets/search";

interface SearchBarProps {
  handleInputChange: (value: string) => void;
  value: string;
}

const SearchBar = ({ handleInputChange, value }: SearchBarProps) => {
  console.log(typeof value);
  return (
    <div className="flex justify-center ...">
      <div className="flex justify-center items-center relative h-10">
        <input
          className="form-control w-80 h-full relative px-3 py-1.5 bg-clip-padding rounded-r-none border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          value={value}
          placeholder="search..."
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button className="btn h-full rounded-l-none inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
