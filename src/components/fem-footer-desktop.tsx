import { FemAvatar } from "./fem-avatar";
import { FemShareButton } from "./fem-share-button";
import { FemPopover } from "./fem-popover";

type Props = {};

export const FemFooterDesktop = (props: Props) => {
  return (
    <section className="hidden justify-between md:visible md:flex">
      <div className="flex gap-4">
        <FemAvatar />
        <div className="flex flex-col">
          <p className="font-manrope font-bold">Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
      </div>
      <FemPopover trigger={<FemShareButton />} />
    </section>
  );
};
