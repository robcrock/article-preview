import { Button } from "@/components/ui/button";
import { Share } from "@/components/icons/share";

type Props = {
  onClick?: () => void;
};

export const FemShareButton = ({ onClick }: Props) => {
  return (
    <Button
      className="rounded-full"
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      <Share />
    </Button>
  );
};
