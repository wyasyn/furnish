import { icons } from "@/constants/icons";
import { navItems } from "@/constants/nav-items";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Effect to handle scroll locking
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [open]);

  return (
    <nav className="md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-background hover:rotate-12 duration-300"
              onClick={() => setOpen(false)}
            >
              {icons.close}
            </button>
            <motion.ul
              className="container mt-8 py-10 flex flex-col"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="py-3 duration-300 border-b border-border/30 hover:bg-secondary/20 cursor-pointer text-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </li>
              ))}
            </motion.ul>
            <div className=" mt-8 justify-center flex items-center gap-4 md:hidden">
              <button>{icons.cart}</button>
              <button className="flex items-center gap-1 mr-4">
                {icons.globe} Eng
              </button>
              <Button text="Sign in" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!open && <button onClick={() => setOpen(true)}>{icons.menu}</button>}
    </nav>
  );
}
