import { AppProps } from "$fresh/server.ts";
import Fotter from "../components/Fotter.tsx";
import Header from "../components/Header.tsx";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <div class="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      <Head>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css" integrity="sha512-Ya9H+OPj8NgcQk34nCrbehaA0atbzGdZCI2uCbqVRELgnlrh8vQ2INMnkadVMSniC54HChLIh5htabVuKJww8g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-twilight.min.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-bash.js"></script>
      </Head>
      <Header></Header>
      <main class="p-4 w-full max-w-screen-lg">
        <Component />
      </main>
      <Fotter/>
    </div>
  
  );
}