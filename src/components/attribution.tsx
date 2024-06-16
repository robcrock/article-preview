import Link from "next/link";

type TProps = {
  name: string;
  link: string;
};

export const Attribution = ({ name, link }: TProps) => {
  return (
    <div className="attribution decoration-none w-full text-center text-xs font-light text-slate-400">
      <span>Challenge by </span>
      <Link className="text-[#6D6F78]" href={"https://www.frontendmentor.io/"}>
        <span className="font-bold text-slate-400">Frontend Mentor</span>
      </Link>
      <span>
        . Coded by{" "}
        <Link href={link} className="text-[#6D6F78]">
          <span className="font-bold text-slate-400">{name}</span>
        </Link>
        .
      </span>
    </div>
  );
};
