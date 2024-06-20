"use-client";

import { Button } from "@/components/ui/button";
import { Share } from "@/components/icons/share";
import { cn } from "@/lib/utils";

type Props = {
  isActive: boolean;
  onClick?: () => void;
};

export const FemShareButton = ({ isActive = false, onClick }: Props) => {
  const activeFill = isActive ? "#FFF" : "#6E8098";
  return (
    <Button
      className={cn(
        "h-8 w-8 rounded-full",
        isActive
          ? "bg-fem-desaturated-dark-blue hover:bg-fem-grayish-blue border-none"
          : "bg-fem-light-grayish-blue",
      )}
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      <Share fill={activeFill} />
    </Button>
  );
};
