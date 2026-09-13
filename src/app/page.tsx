import AnimatedBackground from "king/components/layout/AnimatedBackground";
import Navbar from "king/components/layout/Navbar";
import ScrollProgress from "king/components/layout/ScrollProgress";
import BackToTop from "king/components/layout/BackToTop";
import SplashIntro from "king/components/layout/SplashIntro";
import Hero from "king/components/sections/Hero";
import About from "king/components/sections/About";
import Skills from "king/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <SplashIntro />
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
      </main>
      <BackToTop />
    </>
  );
}