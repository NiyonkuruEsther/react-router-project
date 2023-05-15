import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VanDetails from "./pages/vans/VanDetails";
import Layout from "./components/layout/Layout";
import DashBoard from "./pages/hosts/DashBoard";
import Income from "./pages/hosts/Income";
import Reviews from "./pages/hosts/Reviews";
import HostLayout from "./components/layout/HostLayout";
import VansList from "./pages/hosts/VanList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
        <Route path="/host" element={<HostLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<VansList />} />
        </Route>
      </Route>
    </Routes>
  );
}
