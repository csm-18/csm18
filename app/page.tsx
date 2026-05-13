import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
