"use client";
import React, { useEffect, useState } from "react";
import generateRandom from "@/utils/utils";
import paragraphs from "../../utils/paragraphs.json";
export default function MainContent() {
  const [paragraph, setParagraph] = useState<string>("");
  useEffect(() => {
    setParagraph(paragraphs[generateRandom(1, 10).toString()]);
  }, []);

  return (
    <div>
      <div className="m-4 px-5">{paragraph}</div>
    </div>
  );
}
