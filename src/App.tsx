import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Products from "./components/Products";

function App() {
  const [menuOn, setMenuOn] = useState(false);

  const handleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div>
      {menuOn ? (
        <Menu handleMenu={handleMenu} menuOn={menuOn} />
      ) : (
        <>
          <Header handleMenu={handleMenu} />
          <div className="flex-1 overflow-y-scroll">
            <Products />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
