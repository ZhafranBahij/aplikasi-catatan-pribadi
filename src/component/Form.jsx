import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";
import InputForm from "./InputForm";
import TextAreaForm from "./TextAreaForm";
import CheckboxForm from "./CheckboxForm";

export default function Form({ closeModal }) {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [formData, setFormData] = useState({
    id: Date.now(),
    title: "",
    body: "",
    archived: false,
    createdAt: date.toLocaleDateString("id-ID", options),
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
    if (event.target.value.length > 50) {
      return false;
    }
    setTitleCharaCount(50 - event.target.value.length);
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
    console.log(formData);
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

        <TextAreaForm
          nameInput="body"
          handleChange={handleChange}
          value={formData.body}
        />

        <CheckboxForm
          nameInput="archived"
          handleChange={handleChange}
          value={formData.body}
        />

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
