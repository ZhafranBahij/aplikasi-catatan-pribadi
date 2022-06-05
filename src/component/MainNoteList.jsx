import NoteList from "./NoteList";

import NoteContext from "../context/NoteContext";
import { useContext } from "react";

export default function MainNoteList() {
  const theNotes = useContext(NoteContext);
  const mynotes = theNotes.datasForm;

  const unarchivedFunc = (mynote) => {
    return mynote.archived === false;
  };

  const archivedFunc = (mynote) => {
    return mynote.archived === true;
  };

  return (
    <main>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center">Unarchived</h1>
          <NoteList mynotes={mynotes.filter(unarchivedFunc)} />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center">Archived</h1>
          <NoteList mynotes={mynotes.filter(archivedFunc)} />
        </div>
      </div>
    </main>
  );
}
