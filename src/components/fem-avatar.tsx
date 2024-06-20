import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  avatarUrl: string;
  initials: string;
};

export const FemAvatar = ({ avatarUrl, initials }: Props) => {
  return (
    <Avatar>
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};
