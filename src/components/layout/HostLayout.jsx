import HostNav from "./HostNav";
import { Outlet } from "react-router-dom";
const HostLayout = () => {
  return (
    <div className=" bg-light-cream flex flex-col ">
      <HostNav />
      <Outlet />
    </div>
  );
};

export default HostLayout;
