import logo from "../logo.svg";

export default function Navbar() {
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Futsu Note
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
