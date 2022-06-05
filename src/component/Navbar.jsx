import logo from "../logo.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="sm:px-4 py-2.5  bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#none" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-pink-300">
              Futsu Note
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
