import { icons } from "@/constants/icons";

export default function Logo({ footer }: { footer?: boolean }) {
  return (
    <a href="/">
      <div className={`flex ${footer ? "text-background" : "text-primary"} `}>
        <span>{icons.lamp}</span>
        <span className="font-medium text-xl">Furnish</span>
      </div>
    </a>
  );
}
