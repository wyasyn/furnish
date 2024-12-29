import About from "@/sections/About";
import Articles from "@/sections/Articles";
import Cta from "@/sections/Cta";
import Faq from "@/sections/Faq";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Products from "@/sections/Products";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Products />
      <Articles />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
