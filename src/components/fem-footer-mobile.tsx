"use client";

import { useState } from "react";
import { FemAvatar } from "./fem-avatar";
import { FemShareButton } from "./fem-share-button";
import { Facebook } from "./icons/facebook";
import { Twitter } from "./icons/twitter";
import { Pinterest } from "./icons/pinterest";
import { cn } from "@/lib/utils";

type Props = {};

export const FemFooterMobile = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section
      className={cn(
        `flex min-h-[44px] items-center justify-between px-8 py-[22px] md:hidden`,
        isActive ? "bg-fem-very-dark-grayish-blue" : "bg-white",
      )}
    >
      {!isActive && (
        <div className="flex min-h-11 gap-4">
          <FemAvatar />
          <div className="flex flex-col">
            <p className="font-manrope font-normal">Michelle Appleton</p>
            <p className="text-body tracking=[0.12] font-extralight">
              28 Jun 2020
            </p>
          </div>
        </div>
      )}
      {isActive && (
        <div className="flex justify-center gap-4">
          <div className="flex min-h-11 items-center gap-5">
            <p className="text-body text-fem-grayish-blue tracking-[5px]">
              SHARE
            </p>
            <div className="flex items-center gap-4">
              <Facebook />
              <Twitter />
              <Pinterest />
            </div>
          </div>
        </div>
      )}
      <FemShareButton
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
    </section>
  );
};
