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
    return (
      <h2 className="text-xl  text-center text-pink-300 text-opacity-80 mt-5">
        There is no Data
      </h2>
    );
  }

  return (
    <div className="w-full px-4 py-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white bg-opacity-0 p-2 border-pink-300 border">
        {/* {console.log("NoteList = " + mynotes)} */}
        {mynotes.map((mynote) => (
          <Disclosure key={mynote.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full my-2 justify-between rounded-lg bg-pink-300 px-4 py-2 text-left text-sm font-medium text-pink-700 hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-pink-300 focus-visible:ring-opacity-75">
                  <span>{mynote.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5  text-pink-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-pink-300">
                  <small className="my-1 text-pink-300 text-opacity-50">
                    {mynote.createdAt}
                  </small>
                  <p className="my-1">{mynote.body}</p>
                  <div className="mt-5 flex justify-around">
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
