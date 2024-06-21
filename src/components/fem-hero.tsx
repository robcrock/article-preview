"use client";

import Image from "next/image";
import image from "@/../public/images/drawers.jpg";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = {};

export const FemHero = (props: Props) => {
  const { width } = useWindowSize();

  if (!width) return null;

  return (
    <div className="relative h-[200px] w-full md:h-[285px] md:w-[280px]">
      <Image
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        objectPosition={`0% ${width < 768 ? "20%" : "0%"}`}
        src={image}
        alt="Drawers"
      />
    </div>
  );
};
