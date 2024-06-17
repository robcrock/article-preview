import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

export const FemAvatar = (props: Props) => {
  return (
    <Avatar>
      <AvatarImage
        src={
          "https://raw.githubusercontent.com/robcrock/article-preview/main/public/images/avatar-michelle.jpg"
        }
      />
      <AvatarFallback>MA</AvatarFallback>
    </Avatar>
  );
};
