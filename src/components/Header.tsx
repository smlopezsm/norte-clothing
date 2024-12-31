import { HiBars3 } from "react-icons/hi2";
import { PiBag } from "react-icons/pi";

interface HeaderProps {
  handleMenu: () => void;
}

const Header = ({ handleMenu }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center px-5 py-1 border-b border-black justify-between bg-white">
      <button onClick={handleMenu} className="bg-transparent p-0">
        <HiBars3 className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <img className="max-h-24 max-w-24" src="logo\1735075907217.png" alt="" />
      <button className="bg-transparent p-0">
        <PiBag className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </header>
  );
};

export default Header;
