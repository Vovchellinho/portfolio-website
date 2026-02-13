import { Header } from "@widgets/Header";
import { Intro } from "@widgets/Intro";
import { Experience } from "@widgets/Experience";
import { Works } from "@widgets/Works";
import { Touch } from "@widgets/Touch";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Experience />
        <Works />
        <Touch />
      </main>
      <footer>Footer</footer>
    </>
  );
}
