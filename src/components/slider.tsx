"use client";
import Image from "next/image";
import Nextbtn from "@mui/icons-material/ArrowForward";
import Prevbtn from "@mui/icons-material/ArrowBack";
import { useEffect, useRef, useState } from "react";
import { MouseEventHandler } from "react";
export default function Slider() {
  const [number, setNumber] = useState(0);
  const [startX, setStartX] = useState(null);
  const [widthRoot, setWidthRoot] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const itemRef = useRef(null);
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
  useEffect(() => {
    if (number * 224 > (works.length - 3) * 224) setNumber(0);
    else if (number < 0) setNumber(works.length - 3);
  }, [number]);
  useEffect(() => {
    const getWidthItems = () => {
      if (itemRef.current) {
        const itemRefRect = itemRef.current.clientWidth;
      }
    };
  }, []);
  const nextbtnHandler = () => {
    number < works.length ? console.log("continue") : console.log("stop");
    setNumber(number + 1);
  };
  const prevbtnHandler = () => {
    setNumber(number - 1);
  };
  const handleOnMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log(e.clientX);
    if (startX !== null) {
      const currentX = e.clientX;
      const deltaX = currentX - startX;
      const deltaXPercentage = Math.ceil((deltaX - widthRoot) * 100);

      setTranslateX(deltaXPercentage);
      const limitedTranslateX = Math.min(Math.max(deltaXPercentage, -25));
      setTranslateX(limitedTranslateX);
    }
  };

  return (
    <div className=" ">
      <div
        className=" flex gap-10 overflow-hidden
      shrink-0 grow-0    "
        onMouseMove={handleOnMouseMove}
        ref={itemRef}
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
        <button
          type="button"
          onClick={prevbtnHandler}
          className=""
          title="prev"
        >
          {<Prevbtn />}
        </button>
        <button
          type="button"
          onClick={nextbtnHandler}
          className=""
          title="next"
        >
          {<Nextbtn />}
        </button>
      </div>
    </div>
  );
}
