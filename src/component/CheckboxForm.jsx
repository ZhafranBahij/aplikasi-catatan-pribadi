export default function TextArea({ nameInput, handleChange, value }) {
  return (
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id={nameInput}
          type="checkbox"
          name={nameInput}
          value={value}
          className="w-4 h-4 border border-pink-800 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 "
          onChange={handleChange}
        />
      </div>
      <label
        htmlFor={nameInput}
        className="ml-2 text-sm font-medium text-pink-500"
      >
        Archived
      </label>
    </div>
  );
}
