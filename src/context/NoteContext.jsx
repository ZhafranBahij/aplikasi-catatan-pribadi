import React from "react";

// Creating the context object and passing the default values.
const NoteContext = React.createContext({
  datasForm: null,
  addNewDataForm: () => {},
  movingNote: () => {},
  deleteNote: () => {},
  filterNoteWithTitle: () => {},
});

export default NoteContext;
