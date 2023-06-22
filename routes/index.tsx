import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brick Wall Bata</title>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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
