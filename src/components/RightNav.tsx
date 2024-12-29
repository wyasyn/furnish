import { icons } from "@/constants/icons";
import MobileNav from "./Mobilenav";
import Button from "./Button";

export default function RightNav() {
  return (
    <div className="flex items-center gap-4">
      <MobileNav />
      <div className="md:flex items-center gap-4 hidden text-xs">
        <button>{icons.cart}</button>
        <button className="flex items-center gap-1 mr-4">
          {icons.globe} Eng
        </button>
        <Button text="Sign in" />
      </div>
    </div>
  );
}
