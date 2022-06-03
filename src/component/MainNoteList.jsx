import NoteList from "./NoteList";

export default function MainNoteList() {
  return (
    <main>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center">Unarchived</h1>
          <NoteList />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center">Archived</h1>
          <NoteList />
        </div>
      </div>
    </main>
  );
}
