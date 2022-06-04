import React from "react";

// Creating the context object and passing the default values.
const NoteContext = React.createContext({
  datasForm: null,
  addNewDataForm: () => {},
});

export default NoteContext;
