import { IoMdClose } from "react-icons/io";

interface MenuProps {
  handleMenu: () => void;
  menuOn: boolean;
}

const Menu = ({ handleMenu, menuOn }: MenuProps) => {
  return (
    <nav
      className={`fixed top-0 w-full h-full left-0 transition-all duration-500 ease-in-out transform flex items-center justify-center bg-white ${
        menuOn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <button
        className="absolute top-4 left-4 p-1 bg-transparent"
        onClick={handleMenu}
      >
        <IoMdClose className="w-6 h-6" />
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h1 className="absolute bottom-4">NORTE</h1>
    </nav>
  );
};

export default Menu;
