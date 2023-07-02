import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { MyContext } from "./contexts/MyContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CartPage from "./components/CartPage";

function App() {
  const [myState, setMyState] = useState([]);

  return (
    <MyContext.Provider value={{ setMyState, myState }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
