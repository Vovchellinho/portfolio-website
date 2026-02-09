import { Header } from "@widgets/Header";
import { Intro } from "@widgets/Intro";
import { Experience } from "@widgets/Experience";
import { Works } from "@widgets/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Experience />
        <Works />
        <section>Get it touch me!</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
