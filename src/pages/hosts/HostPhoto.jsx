import { useOutletContext } from "react-router-dom";

function HostPhoto() {
  const van = useOutletContext();
  return (
    <div className="pb-10">
      <img src={van.imageUrl} className="object-cover w-24 h-24" />
    </div>
  );
}

export default HostPhoto;
