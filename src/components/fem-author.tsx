import React from "react";
import { FemAvatar } from "./fem-avatar";

type Props = {
  author: string;
  date: string;
  avatarUrl: string;
};

export const FemAuthor = ({ author, date, avatarUrl }: Props) => {
  const initials = author
    .split(" ")
    .map((name) => name.split("")[0])
    .join("")
    .toUpperCase();

  console.log("INITIALS", initials);
  return (
    <div className="flex gap-4">
      <FemAvatar avatarUrl={avatarUrl} initials={initials} />
      <div className="flex flex-col">
        <p className="font-manrope font-bold">{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
