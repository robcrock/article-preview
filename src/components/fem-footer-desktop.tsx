import { FemShareButton } from "./fem-share-button";
import { FemPopover } from "./fem-popover";
import { FemAuthor } from "./fem-author";
import { ReactNode } from "react";

type Props = {
  author: ReactNode;
};

export const FemFooterDesktop = ({ author }: Props) => {
  return (
    <section className="hidden min-h-[44px] items-center justify-between px-8 py-[22px] md:visible md:flex">
      {author}
      <FemPopover trigger={<FemShareButton />} />
    </section>
  );
};
