import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FemHero } from "./fem-hero";
import { FemAvatar } from "./fem-avatar";
import { FemShareButton } from "./fem-share-button";
import { FemPopover } from "./fem-popover";
import { FemFooterMobile } from "./fem-footer-mobile";
import { FemFooterDesktop } from "./fem-footer-desktop";

type Props = {};

export const FemCard = (props: Props) => {
  return (
    <Card className="m-0 flex h-[512px] w-[327px] flex-col overflow-hidden rounded-[10px] md:max-h-[280px] md:w-[730px] md:flex-row">
      <CardHeader className="p-0">
        <FemHero />
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between p-0">
        <section className="flex flex-col gap-3">
          <h2 className="font-manrope text-md font-bold md:text-[20px]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="text-body font-medium tracking-[0.12px]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </section>
        <FemFooterMobile />
        <FemFooterDesktop />
      </CardContent>
    </Card>
  );
};
