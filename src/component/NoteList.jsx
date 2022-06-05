import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import NoteContext from "../context/NoteContext";
import { useContext } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default function NoteList({ mynotes }) {
  const theNotes = useContext(NoteContext);
  const moveNote = theNotes.movingNote;
  const deleteNote = theNotes.deleteNote;

  const handleDelete = (event) => {
    // console.log("id = " + event.target.value);
    deleteNote(event.target.value);
  };

  const handleMove = (event) => {
    // console.log("id = " + event.target.value);
    moveNote(event.target.value);
  };

  if (mynotes.length <= 0) {
    return <h2 className="text-xl">There is no Data</h2>;
  }

  return (
    <div className="w-full px-4 py-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {/* {console.log("NoteList = " + mynotes)} */}
        {mynotes.map((mynote) => (
          <Disclosure key={mynote.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{mynote.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5  text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <p>{mynote.body}</p>
                  <div className="flex justify-around">
                    <EditButton handleMove={handleMove} mynote={mynote} />
                    <DeleteButton handleDelete={handleDelete} mynote={mynote} />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
