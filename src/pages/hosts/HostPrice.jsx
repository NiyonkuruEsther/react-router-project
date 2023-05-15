import { useOutletContext } from "react-router-dom";

const HostPrice = () => {
  const van = useOutletContext();
  return <div className="text-3xl pb-10">${van.price}/day</div>;
};

export default HostPrice;
