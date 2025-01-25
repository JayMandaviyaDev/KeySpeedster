"use client";
import React, { useEffect, useState } from "react";
import generateRandom from "@/utils/utils";
import paragraphs from "../../utils/paragraphs.json";

export default function MainContent() {
  const [paragraph, setParagraph] = useState<string>("");
  const [inputStr, setInputStr] = useState<string>("");

  const captureData = (e) => {
    console.log(e.target.value);
    setInputStr(e.target.value);
  };

  useEffect(() => {
    setParagraph(paragraphs[generateRandom(1, 10).toString()]);
  }, []);

  const compareText = (correctPara: string, inputPara: string) => {
    for (let i = 0; i < inputPara.length; i++) {}
  };

  return (
    <div>
      <div>
        <input type="text" className="-z-50" onChange={captureData} />
      </div>
      <div className="m-4 px-5 text-xl">
        {paragraph.split("").map((letter: string, index: number) => {
          if (inputStr[index]) {
            if (letter === inputStr[index]) {
              return <span className="text-blue-400" key={index}>{letter}</span>;
            }
            return <span className="text-red-500 bg-red-300" key={index}>{letter}</span>;
          }
          return <span className="text-gray-100" key={index}>{letter}</span>;
        })}
      </div>
    </div>
  );
}
