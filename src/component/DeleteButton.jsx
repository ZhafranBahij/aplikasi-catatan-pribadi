export default function DeleteButton({ handleDelete, mynote }) {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      onClick={handleDelete}
      value={mynote.id}
    >
      Delete
    </button>
  );
}
