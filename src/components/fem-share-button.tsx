import { Button } from "@/components/ui/button";
import { Share } from "@/components/icons/share";

type Props = {
  onClick?: () => void;
};

export const FemShareButton = ({ onClick }: Props) => {
  return (
    <Button
      className="h-8 w-8 rounded-full"
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      <Share />
    </Button>
  );
};
