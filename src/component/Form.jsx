import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";
import InputForm from "./InputForm";

export default function Form({ closeModal }) {
  const [formData, setFormData] = useState({
    id: new Date(),
    title: "",
    body: "",
    archived: false,
    createdAt: new Date(),
  });

  // Untuk menghitung berapa karakter di title yang tersisa
  const [titleCharaCount, setTitleCharaCount] = useState(50);

  // Menggunakan use context untuk mengambil fungsi agar menambahkan data baru
  const theNotes = useContext(NoteContext);
  const funcNotes = theNotes.addNewDataForm;

  const changeFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Khusus menangani perubahan title
  const handleChangeTitle = (event) => {
    setTitleCharaCount(50 - event.target.value.length);
    if (event.target.value.length > 50) {
      setTitleCharaCount("The Title Input was Reach a maximum character");
      return false;
    }
    return true;
  };

  // Untuk menangani perubahan data di form
  const handleChange = (event) => {
    let name = event.target.name;
    let value = name !== "archived" ? event.target.value : event.target.checked;
    if (name === "title") {
      let boolHandleChangeTitle = handleChangeTitle(event);
      if (!boolHandleChangeTitle) {
        return;
      }
    }

    changeFormData(name, value);
  };

  //  Untuk melakukan submit agar data terkirim ke store
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    funcNotes(formData);
    closeModal();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputForm
          typeInput="text"
          nameInput="title"
          titleCharaCount={titleCharaCount}
          handleChange={handleChange}
          value={formData.title}
        />

        <div className="mb-6">
          <label
            htmlFor="body"
            className="block mb-2 text-sm font-medium text-pink-500 "
          >
            Body
          </label>

          <textarea
            id="body"
            rows="4"
            name="body"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500 "
            placeholder="Describe it, okay?"
            onChange={handleChange}
            value={formData.body}
            required
          ></textarea>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="archived"
              type="checkbox"
              name="archived"
              value={formData.archived}
              className="w-4 h-4 border border-pink-800 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 "
              onChange={handleChange}
            />
          </div>
          <label
            htmlFor="archived"
            className="ml-2 text-sm font-medium text-pink-500"
          >
            Archived
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
