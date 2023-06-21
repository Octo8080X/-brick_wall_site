import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-center bg-gray-100 rounded-xl text-white bg-repeat"
      style="background-image:linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7)), url('/brick_wall.png');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-8xl inline-block font-bold">
          Brick Wall<small class="text-4xl text-gray-300">Beta</small>
        </h1>
        <p class="text-2xl max-w-lg text-yellow-200">
          Brick Wall is simple WAF on Deno
        </p>
      </div>

      <div>
        <a
          href="#"
          class="block mt-4 text-2xl transition-colors text-yellow-200 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-yellow-300"
        >
          Documentation{" "}
          <IconChevronRight class="text-4xl inline-block w-5 h-5 transition group-hover:translate-x-2" />
        </a>
      </div>
    </div>
  );
}
