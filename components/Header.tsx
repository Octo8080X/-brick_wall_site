type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docs/introduction" },
    { name: "Modules", href: "/modules" },
  ];

  return (
    <div class="bg-gray-200 w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <a href="/">
          <div class="flex items-center flex-1">
            <img
              src="/brick_wall.png"
              class="w-10  my-4"
              alt="Brick Wall"
            />
            <div class="text-2xl ml-1 font-bold">
              Brick Wall <small class="text-sm text-gray-500">Beta</small>
            </div>
          </div>
        </a>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500 text-xl" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
