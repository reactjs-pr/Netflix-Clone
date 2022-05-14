import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList /FavList ";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
