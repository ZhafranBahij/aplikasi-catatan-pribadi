import logo from "../logo.svg";

export default function Navbar() {
  return (
    <header>
      <nav class="sm:px-4 py-2.5  bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-pink-300">
              Futsu Note
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
