export default function TextArea({ nameInput, handleChange, value }) {
  return (
    <div className="mb-6">
      <label
        htmlFor={nameInput}
        className="block mb-2 text-sm font-medium text-pink-500 "
      >
        Body
      </label>

      <textarea
        id={nameInput}
        rows="4"
        name={nameInput}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500 "
        placeholder="Describe it, okay?"
        onChange={handleChange}
        value={value}
        required
      ></textarea>
    </div>
  );
}
