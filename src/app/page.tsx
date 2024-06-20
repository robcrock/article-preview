import { FemAttribution } from "@/components/fem-attribution";
import { FemCard } from "@/components/fem-card";

export type TArticle = {
  title: string;
  description: string;
  author: string;
  date: string;
  avatarUrl: string;
};

const article: TArticle = {
  title:
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  description:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
  author: "Michelle Appleton",
  date: "28 Jun 2020",
  avatarUrl:
    "https://raw.githubusercontent.com/robcrock/article-preview/main/public/images/avatar-michelle.jpg",
};
export default function Home() {
  return (
    <main className="bg-fem-light-grayish-blue flex min-h-screen flex-col items-center gap-4 p-24">
      <FemCard article={article} />
      <FemAttribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
