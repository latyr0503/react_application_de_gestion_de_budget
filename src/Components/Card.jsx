import React from "react";

export const Card = ({ titre, montant }) => {
  return (
    <div className="  bg-purple-800 text-white rounded-xl">
      <div className=" h-[8em] w-[20em] m-auto rounded-xl relative group p-2 z-0 overflow-hidden">
        <div className="h-[7em] w-[7em] bg-yellow-800 rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[550%] z-[-1] duration-[400ms]"></div>
        <div className="h-[6em] w-[6em] bg-green-800 rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[400%] z-[-1] duration-[400ms]"></div>
        <div className="h-[5em] w-[5em] bg-purple-800 rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[300%] z-[-1] duration-[400ms]"></div>

        <p className="absolute bottom-[10px] left-[10] font-semibold  px-5 py-3 text-5xl">
          {montant} <span className="text-sm"> F CFA</span>
        </p>

        <h1 className="z-20 font-bold py-3 px-5">{titre}</h1>
      </div>
    </div>
  );
};
