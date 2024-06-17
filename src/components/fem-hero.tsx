import Image from "next/image";
import image from "@/../public/images/drawers.jpg";

type Props = {};

export const FemHero = (props: Props) => {
  return (
    <div className="h-[280px] w-[285px] p-0">
      <Image
        className="h-[280px] w-[285px] object-cover p-0"
        src={image}
        alt="drawers"
      />
    </div>
  );
};
