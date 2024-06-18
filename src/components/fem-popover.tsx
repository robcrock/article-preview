import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";
import { Pinterest } from "./icons/pinterest";
import { Facebook } from "./icons/facebook";
import { Twitter } from "./icons/twitter";

type Props = {
  trigger: ReactNode;
};

export const FemPopover = ({ trigger }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        className="bg-fem-very-dark-grayish-blue text-fem-grayish-blue relative h-[55px] w-[248px] border font-light"
        side="top"
        sideOffset={16}
      >
        {/* Arrow */}
        <div className="bg-fem-very-dark-grayish-blue absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 transform"></div>
        <div className="align-center flex justify-center gap-4">
          <p className="tracking-[5px]">SHARE</p>
          <div className="flex h-full items-center gap-4">
            <Facebook />
            <Twitter />
            <Pinterest />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
