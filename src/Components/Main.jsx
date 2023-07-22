import React from "react";

import { LiaExchangeAltSolid } from "react-icons/lia";

function Main() {
  return (
    <div className="h-[100vh] bg-[#eee] flex justify-center items-center ">
      <div className="w-[500px] h-[400px] overflow-hidden rounded-xl bg-white shadow-md">
        <div className="w-full bg-green-500 p-3 text-white font-bold text-2xl">
          Translator
        </div>
        <div className="flex justify-between items-center p-3">
          <select>
            <option value="fa">Farsi</option>
          </select>
          <LiaExchangeAltSolid />
          <select>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <div className="">
          <input
            type="text"
            className="w-full py-4 border px-3 border-[#eee] outline-none"
            placeholder="Enter your text (any language)"
          />
        </div>
        <div className="w-full h-full">
          <p className="w-full h-[24vh] outline-none p-4 text-sm leading-6 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            dolorum illo deserunt in quia. Qui maxime facere ullam
            necessitatibus labore dolor, suscipit corrupti sapiente nihil veniam
            excepturi asperiores corporis praesentium?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
