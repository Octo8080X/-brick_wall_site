import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brick Wall Bata</title>
      </Head>

      <div class="p-4">
        <Hero />
      </div>
      <div class="p-4">
        <Features />
      </div>
    </>
  );
}
