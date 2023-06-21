import { AppProps } from "$fresh/server.ts";
import Fotter from "../components/Fotter.tsx";
import Header from "../components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <div class="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      <Header></Header>
      <main class="p-4 w-full max-w-screen-lg">
        <Component />
      </main>
      <Fotter/>
    </div>
  
  );
}