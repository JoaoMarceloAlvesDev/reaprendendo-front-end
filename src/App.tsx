import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Jogo from "./components/Jogo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogo" element={<Jogo />} />
    </Routes>
  );
}

export default App;