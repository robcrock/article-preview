import { FemAttribution } from "@/components/fem-attribution";
import { FemCard } from "@/components/fem-card";

export default function Home() {
  return (
    <main className="bg-fem-light-grayish-blue flex min-h-screen flex-col items-center gap-4 p-24">
      {/* mobile */}
      {/* card container */}
      {/* -- hero image */}
      {/* -- text content */}
      {/* ---- title */}
      {/* ---- description */}
      {/* -- footer */}
      {/* ---- share -- in-active */}
      {/* ------ avatar */}
      {/* ------ name */}
      {/* ------ date */}
      {/* ------ share button */}
      {/* ---- share -- active */}
      {/* ------ text */}
      {/* ------ facebook */}
      {/* ------ twitter */}
      {/* ------ pinterest */}
      {/* ------ share button */}

      {/* desktop */}
      {/* card container */}
      <FemCard />
      {/* -- hero image */}
      {/* -- text content */}
      {/* ---- title */}
      {/* ---- description */}
      {/* ---- footer */}
      {/* ------ avatar */}
      {/* ------ name */}
      {/* ------ date */}
      {/* ------ share button */}
      {/* -------- tooltip */}
      {/* ---------- text */}
      {/* ---------- facebook */}
      {/* ---------- twitter */}
      {/* ---------- pinterest */}
      {/* ---------- share button */}

      <FemAttribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
