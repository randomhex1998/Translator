import React , {useEffect, useState} from "react";

import { LiaExchangeAltSolid } from "react-icons/lia";

import axios from "axios";

function Main() {

    const [input,setInput] = useState("");
    const [output,setOutput] = useState("de");
    const [tr , setTr] = useState("");

  useEffect(() => {
    const hh = async () => {
      const options = {
        method: "POST",
        url: "https://microsoft-translator-text.p.rapidapi.com/translate",
        params: {
          "to[0]": output,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "d7bfc19758msh4a5eb03b9faab21p158f78jsn4ba9ad9fbfd0",
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
        data: [
          {
            Text: input,
          },
        ],
      };

      try {
        const response = await axios.request(options);
        setTr(response.data[0].translations[0].text);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    hh()
  }, [input , output , tr]);

  return (
    <div className="h-[100vh] bg-[#eee] flex justify-center items-center ">
      <div className="w-[500px] h-[400px] overflow-hidden rounded-xl bg-white shadow-md">
        <div className="w-full bg-green-500 p-3 text-white font-bold text-2xl">
          Translator
        </div>
        <div className="flex justify-between items-center p-3">

          <select onChange={e => setOutput(e.target.value)}>
            <option value="de">Deutsch</option>
            <option value="fa">Persian</option>
            <option value="en">English</option>
            {/* <option value="fa">Persian</option> */}
          </select>
        </div>
        <div className="">
          <input
            type="text"
            className="w-full py-4 border px-3 border-[#eee] outline-none"
            placeholder="Enter your text (any language)"
            onChange={e=> setInput(e.target.value)}
          />
        </div>
        <div className="w-full h-full">
          <p className="w-full h-[24vh] outline-none p-4 text-sm leading-6 text-justify">
            {tr}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
