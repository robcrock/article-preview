import Image from "next/image";
import image from "@/../public/images/drawers.jpg";

type Props = {};

export const FemHero = (props: Props) => {
  return (
    <div className="relative h-[285px] w-[280px]">
      <Image
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        objectPosition="0% 0%"
        src={image}
        alt="drawers"
      />
    </div>
  );
};
