import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <div class="p-4">
        <Hero />
      </div>
      <div class="p-4">
        <Features />
      </div>
    </>
  );
}
