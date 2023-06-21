import { ComponentChildren } from "preact";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Introduction", href: "/docs/introduction" },
        { name: "Setup", href: "/docs/setup" },
      ],
    },
    {
      title: "Modules",
      children: [
        { name: "brick_wall", href: "/modules/brick_wall" },
        { name: "brick_wall_ip_ban", href: "/modules/brick_wall_ip_ban" },
        { name: "fresh_Brick_wall_middleware", href: "/modules/fresh_Brick_wall_middleware" },
      ],
    },
  ];

  return (
    <div class="sticky top-[100vh] w-full max-w-screen-lg bg-gray-200 flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-2 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <img
            src="/brick_wall.png"
            class="w-8 my-4"
            alt="Brick Wall"
          />
          <div class="font-bold text-2xl">
            Brick Wall <small class="text-sm text-gray-500">Beta</small>
          </div>
        </div>
        <div class="text-gray-500">
          Brick Wall is simple WAF on Deno
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
