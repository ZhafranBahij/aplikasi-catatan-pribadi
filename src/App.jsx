import "./App.css";
import Navbar from "./component/Navbar";
import AddForm from "./component/AddForm";
import Layout from "./component/Layout";
import Title from "./component/Title";
import MainNoteList from "./component/MainNoteList";
import SearchList from "./component/SearchList";

import NoteContext from "./context/NoteContext";
import { useState, useEffect } from "react";

import theData from "./data/data";

export default function App() {
  const [datasForm, setDatasForm] = useState(theData);
  const [cloneDatasForm, setCloneDatasForm] = useState(theData);

  // Setiap data di form berubah, data clone harus berubah
  useEffect(() => {
    setCloneDatasForm(datasForm);
  }, [datasForm]);

  // Menambahkan data baru ke note
  const addNewDataForm = (newDataForm) => {
    setDatasForm([...datasForm, newDataForm]);
  };

  // Menghapus data dari suatu note
  const deleteNote = (idData) => {
    // eslint-disable-next-line eqeqeq
    const datas = datasForm.filter((dataForm) => dataForm.id != idData);
    setDatasForm([...datas]);
    // console.log(datas);
  };

  // Memindahkan data dari archived ke unarchived atau sebaliknya
  const movingNote = (idData) => {
    // eslint-disable-next-line eqeqeq
    let data = datasForm.filter((dataForm) => dataForm.id == idData);
    data = data.pop();
    data.archived = !data.archived;
    setDatasForm([...datasForm]);
    // console.log(data);
  };

  // Untuk memfilterdata
  const filterNoteWithTitle = (noteTitle) => {
    let datas = datasForm.filter(
      (dataForm) =>
        dataForm.title.toLowerCase().search(noteTitle.toLowerCase()) >= 0
    );
    setCloneDatasForm([...datas]);
  };

  return (
    <>
      <NoteContext.Provider
        value={{
          datasForm: cloneDatasForm,
          addNewDataForm: addNewDataForm,
          movingNote: movingNote,
          deleteNote: deleteNote,
          filterNoteWithTitle: filterNoteWithTitle,
        }}
      >
        <Navbar />
        <Layout>
          <Title />
          <AddForm />
          <SearchList />
          <MainNoteList />
        </Layout>
      </NoteContext.Provider>
    </>
  );
}
