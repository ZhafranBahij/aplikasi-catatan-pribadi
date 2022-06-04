import "./App.css";
import Navbar from "./component/Navbar";
import AddForm from "./component/AddForm";
import Layout from "./component/Layout";
import Title from "./component/Title";
import MainNoteList from "./component/MainNoteList";
import SearchList from "./component/SearchList";

import NoteContext from "./context/NoteContext";
import { useState } from "react";

let theData = [
  {
    title: "Black",
    body: "lorem ipsum dolor sit amet",
    archived: false,
  },
  {
    title: "White",
    body: "lorem ipsum dolor sit amet",
    archived: false,
  },
  {
    title: "Blanc",
    body: "lorem ipsum dolor sit amet",
    archived: false,
  },
  {
    title: "Shinei",
    body: "lorem ipsum dolor sit amet",
    archived: true,
  },
];

export default function App() {
  const [datasForm, setDatasForm] = useState(theData);

  const addNewDataForm = (newDataForm) => {
    setDatasForm([...datasForm, newDataForm]);
  };

  return (
    <>
      <NoteContext.Provider
        value={{ datasForm: datasForm, addNewDataForm: addNewDataForm }}
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
