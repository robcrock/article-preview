import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FemHero } from "./fem-hero";
import { FemFooterMobile } from "./fem-footer-mobile";
import { FemFooterDesktop } from "./fem-footer-desktop";
import { TArticle } from "@/app/page";
import { FemAuthor } from "./fem-author";

type Props = {
  article: TArticle;
};

export const FemCard = ({
  article: { title, description, author, date, avatarUrl },
}: Props) => {
  return (
    <Card className="m-0 flex h-[512px] w-[327px] flex-col overflow-hidden rounded-[10px] border-none md:max-h-[280px] md:w-[730px] md:flex-row">
      <CardHeader className="p-0">
        <FemHero />
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between p-0">
        <section className="mx-10 mt-8 flex flex-col gap-3">
          <h2 className="font-manrope text-md text-pretty font-medium md:text-[20px]">
            {title}
          </h2>
          <p className="text-body text-pretty font-light tracking-[0.12px]">
            {description}
          </p>
        </section>
        <FemFooterMobile
          author={
            <FemAuthor author={author} date={date} avatarUrl={avatarUrl} />
          }
        />
        <FemFooterDesktop
          author={
            <FemAuthor author={author} date={date} avatarUrl={avatarUrl} />
          }
        />
      </CardContent>
    </Card>
  );
};
