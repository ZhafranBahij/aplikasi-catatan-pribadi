export default function InputForm({
  typeInput,
  nameInput,
  titleCharaCount,
  handleChange,
  value,
}) {
  return (
    <div className="mb-6">
      <label
        htmlFor={nameInput}
        className="block mb-2 text-sm font-medium text-pink-500"
      >
        Title
        <small className="ml-6">{titleCharaCount} Character Left</small>
      </label>
      <input
        type={typeInput}
        id={nameInput}
        name={nameInput}
        className="bg-gray-50 border border-pink-800 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 "
        placeholder="What you want to do?"
        onChange={handleChange}
        value={value}
        required
      />
    </div>
  );
}
