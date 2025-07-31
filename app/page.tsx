import About from "@/components/about";
import Footer from "@/components/footer";
import HomePage from "@/components/home-page";
import Services from "@/components/services";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="">
      <HomePage />
      <Skills />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
