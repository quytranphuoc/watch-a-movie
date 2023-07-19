import React from "react";
import { FiUser } from "react-icons/fi";
const Promos = () => {
  return (
    <div className="my-20 py-10 md:px-20 px-8 border border-4 border-red-600 bottom-1 bg-purple-500 bg-opacity-80 border shadow-lime-100 rounded-s-full">
      <div className="lg:grid lg:grid-cols-2 lg:gap:9 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text- 3xl text-xl capitalize font-sans font-medium xl:leading-8">
            Download Your Movies Watch Offline.
            <br /> Enjoy on Your Mobile
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            Lorem ipsum dolor it amet, consectur adiposcing elit. NUnc sed
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex flex-col justify-center items-center bg-black text-subMain px-6 py-3 rounded font-bold text-red-700">
              HD 4K
            </div>
            <div className="flex flex-row justify-center items-center gap-4 bg-black text-subMain px-6 py-3 rounded font-bold text-red-700">
              <FiUser /> 2K
            </div>
          </div>
        </div>
        <div className=" bottom-1 bg-purple-500 bg-opacity-80 border shadow-lime-100 rounded-s-full">
          <img
            src="https://netflixo.vercel.app/images/mobile.png"
            alt="Mobile app"
            border="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Promos;
