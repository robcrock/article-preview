import { Button } from "@/components/ui/button";
import { Share } from "@/components/icons/share";

type Props = {};

export const FemShareButton = (props: Props) => {
  return (
    <Button className="rounded-full" variant="outline" size="icon">
      <Share />
    </Button>
  );
};
