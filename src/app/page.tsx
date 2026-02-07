import { Header } from "@widgets/Header";
import { Intro } from "@widgets/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <section>My experience</section>
        <section>My latest work</section>
        <section>Get it touch me!</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
