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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section
      className={cn(
        `align-center flex justify-between px-8 py-[22px] md:hidden`,
        isVisible ? "bg-fem-very-dark-grayish-blue" : "bg-white",
      )}
    >
      {!isVisible && (
        <div className="flex gap-4">
          <FemAvatar />
          <div className="flex flex-col">
            <p className="font-manrope font-bold">Michelle Appleton</p>
            <p>28 Jun 2020</p>
          </div>
        </div>
      )}
      {isVisible && (
        <div className="flex items-center justify-center gap-4">
          <div className="flex gap-5">
            <p className="text-body text-fem-grayish-blue tracking-[5px]">
              SHARE
            </p>
            <div className="flex h-full items-center gap-4">
              <Facebook />
              <Twitter />
              <Pinterest />
            </div>
          </div>
        </div>
      )}
      <div className="relative h-full">
        <div className="absolute h-full"></div>
        <FemShareButton onClick={() => setIsVisible(!isVisible)} />
      </div>
    </section>
  );
};
