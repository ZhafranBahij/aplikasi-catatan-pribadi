import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";

export default function SearchList() {
  const [findTitle, setFindTitle] = useState("");
  const mynotes = useContext(NoteContext);

  const funcToFindTitle = mynotes.filterNoteWithTitle;

  const handleChange = (event) => {
    setFindTitle(event.target.value);
    funcToFindTitle(event.target.value);
  };

  return (
    <>
      <form className="flex items-center my-6 radius">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center px-3 pointer-events-none ">
            <svg
              className="w-5 h-5 text-pink-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-pink-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5 "
            placeholder="Search"
            value={findTitle}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </>
  );
}
