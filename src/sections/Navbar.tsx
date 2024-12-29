import { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import RightNav from "@/components/RightNav";
import DesktopNav from "@/components/DesktopNav";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`  sticky top-0 left-0 w-full py-4 bg-background/60 backdrop-blur-sm transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <DesktopNav />
        <RightNav />
      </div>
    </header>
  );
}
