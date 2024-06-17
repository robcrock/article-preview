import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FemHero } from "./fem-hero";
import { FemAvatar } from "./fem-avatar";

type Props = {};

export const FemCard = (props: Props) => {
  return (
    <Card className="m-0 flex w-[730px] overflow-hidden rounded-[10px]">
      <CardHeader className="p-0">
        <FemHero />
      </CardHeader>
      <CardContent className="px-10 py-8">
        <h2 className="font-manrope text-[20px] font-bold">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p className="text-body font-medium">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <section className="flex">
          <FemAvatar />
          <div className="flex flex-col">
            <p>Michelle Appleton</p>
            <p>28 Jun 2020</p>
          </div>
          <p>Share</p>
        </section>
      </CardContent>
    </Card>
  );
};
