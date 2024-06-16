import { Attribution } from "@/components/attribution";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </p>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <p>Michelle Appleton 28 Jun 2020</p>
      <p>Share</p>

      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
