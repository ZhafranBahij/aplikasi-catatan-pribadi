export default function Form({ closeModal }) {
  return (
    <>
      <form>
        <div class="mb-6">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-pink-500"
          >
            Title
            <small className="ml-6">50 Chara Left</small>
          </label>
          <input
            type="text"
            id="title"
            class="bg-gray-50 border border-pink-800 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 "
            placeholder="What you want to do?"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="body"
            class="block mb-2 text-sm font-medium text-pink-500 "
          >
            Body
          </label>

          <textarea
            id="body"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500 "
            placeholder="Describe it, okay?"
          ></textarea>
        </div>

        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="archived"
              type="checkbox"
              value="true"
              class="w-4 h-4 border border-pink-800 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 "
              required=""
            />
          </div>
          <label for="archived" class="ml-2 text-sm font-medium text-pink-500">
            Archived
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={closeModal}
        >
          Submit
        </button>
      </form>
    </>
  );
}
