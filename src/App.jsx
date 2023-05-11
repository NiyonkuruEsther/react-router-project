import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
