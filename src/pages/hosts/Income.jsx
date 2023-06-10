const Income = () => {
  return (
    <div>
      <section className="bg-[#FFF7ED] px-5 ">
        <div className="max-w-6xl mx-auto">
          <div className="">
            <div className="flex justify-between max-w-6xl mx-auto  items-center py-4 ">
              <p className="text-2xl font-bold">Your Transaction</p>
              <p className="text-xl font-semibold">View All</p>
            </div>
          </div>
          {[1, 2, 3].map((val, index) => {
            return (
              <div
                key={index}
                className="bg-white flex items-center px-16 py-10  justify-between mt-6"
              >
                <div className="flex items-center gap-5">
                  <p className="text-2xl font-semibold">$768</p>
                </div>
                <div>
                  <p>Edit</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Income;
