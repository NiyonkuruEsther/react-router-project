function Navbar() {
  return (
    <div className="flex justify-between bg-light-cream p-8 text-dark">
      <p className="font-bold text-3xl">#VANLIFE</p>
      <div className="flex justify-between w-1/6 text-lg font-semibold">
        <p className="text-opacity-70 text-dark">About</p>
        <p className="text-opacity-70 text-dark">Vans</p>
      </div>
    </div>
  );
}

export default Navbar;
