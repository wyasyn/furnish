import { navItems } from "@/constants/nav-items";

export default function DesktopNav() {
  return (
    <nav>
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li
            key={item.title}
            className={`hidden md:flex hover:text-foreground transition-all duration-300 flex-col relative py-[2px] cursor-pointer ${
              item.title === "Home" ? "text-foreground" : "text-muted"
            }`}
          >
            {item.title}{" "}
            {item.title === "Home" && (
              <div className="absolute w-1/2 h-[1px] rounded-sm bg-foreground bottom-0 left-1/2 -translate-x-1/2" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
