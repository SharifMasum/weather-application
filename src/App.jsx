import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import FavoritePage from "./favorite/FavoritePage";

function App() {
  return (
    <>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritepage" element={<FavoritePage />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;