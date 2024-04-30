"use client";
import Image from "next/image";
import Nextbtn from "@mui/icons-material/ArrowForward";
import Prevbtn from "@mui/icons-material/ArrowBack";
import { useState } from "react";
export default function Slider() {
  const [number, setNumber] = useState(0);
  const works = [
    { name: "kp1", url: "/works/kp1.jpg" },
    { name: "kp2", url: "/works/kp2.jpg" },
    { name: "kp3", url: "/works/kp3.jpg" },
    { name: "menu", url: "/works/menu.png" },
    { name: "nrtViber", url: "/works/nrtViber.png" },
    { name: "valentine", url: "/works/valentine.jpg" },
    { name: "manipulation", url: "/works/manipulation.png" },
    { name: "logo", url: "/works/logo.jpg" },
  ];
  const nextbtnHandler = () => {
    number < works.length ? console.log("continue") : console.log("stop");
    setNumber(number + 1);
  };
  const prevbtnHandler = () => {
    setNumber(number - 1);
  };
  return (
    <div className=" ">
      <div
        className=" flex gap-10 overflow-hidden
      shrink-0 grow-0    "
      >
        {works.map((work) => (
          <Image
            alt={`this is image of ${work.name}`}
            width={224}
            height={256}
            src={work.url}
            key={work.name}
            title={work.name}
            className={`w-64 h-64 object-cover transition-transform `}
            style={{ transform: `translate(calc(-224px*${number}))` }}
          />
        ))}
      </div>
      <div className=" mt-10 space-x-10  ">
        <button onClick={prevbtnHandler} className="" title="prev">
          {<Prevbtn />}
        </button>
        <button onClick={nextbtnHandler} className="" title="next">
          {<Nextbtn />}
        </button>
      </div>
    </div>
  );
}
