import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";
import IconArrowsRightLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrows-right-left.tsx";
import IconHexagons from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/hexagons.tsx";
import IconAdjustmentsAlt from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/adjustments-alt.tsx";

export default function Features() {
  const featureItems = [
    {
      icon: IconArrowsRightLeft,
      description: "Brick wall acts as a simple WAF (only http/https).",
      link: "/docs/introduction#waf",
    },
    {
      icon: IconHexagons,
      description: "Modules can be combined to expand functionality.",
      link: "/docs/introduction#modules",
    },
    {
      icon: IconAdjustmentsAlt,
      description:
        "Extended functionality can be extended with API extensions for dynamic control.",
      link: "/docs/introduction#api",
    },
  ];

  return (
    <div class="max-w-screen-lg flex flex-col md:flex-row gap-8 bg-white p-8 rounded-xl">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="bg-blue-600 inline-block p-3 rounded-xl text-white">
              <item.icon class="w-10 h-10" />
            </div>
            <p class="text-xl">
              {item.description}
            </p>

            {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-blue-500 cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
                  </p>
                </a>
              )}
          </div>
        );
      })}
    </div>
  );
}
