export default function EditButton({ handleMove, mynote }) {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
      onClick={handleMove}
      value={mynote.id}
    >
      {mynote.archived ? "Move to Unarchived" : "Move to Archived"}
    </button>
  );
}
