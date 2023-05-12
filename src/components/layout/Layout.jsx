import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="max-w-3xl mx-auto bg-light-cream flex flex-col ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
