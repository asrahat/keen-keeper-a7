import React from "react";
import useFriends from "../hooks/useFriends";

const Banner = () => {
  const { friends } = useFriends();

  return (
    <div className="min-h-[40vh] space-y-6 mt-10 container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="text-center space-y-6">
        <h2 className="text-6xl font-bold">
          Friends to keep close in your life
        </h2>
        <p className=" font-semibold text-zinc-600">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <button className="btn bg-[#244d3f] text-white border-zinc-300 mr-4">
        Add to Friend
      </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 px-12 py-8 text-center rounded-xl">
          <h2 className="text-2xl font-bold">{friends.length}</h2>
          <p className="text-xl font-semibold text-zinc-500">Total Friends</p>
        </div>
        <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 px-12 py-6 text-center rounded-xl">
          <h2 className="text-2xl font-bold">3</h2>
          <p className="text-xl font-semibold text-zinc-500">On Track</p>
        </div>
        <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 px-12 py-6 text-center rounded-xl">
          <h2 className="text-2xl font-bold">6</h2>
          <p className="text-xl font-semibold text-zinc-500">Need Attention</p>
        </div>
        <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 px-12 py-6 text-center rounded-xl">
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-xl font-semibold text-zinc-500">
            Interactions This Month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
