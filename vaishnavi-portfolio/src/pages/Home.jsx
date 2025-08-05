import { AboutSection } from "../components/AboutSection";
import { Background } from "../components/Background";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle></ThemeToggle>

      {/* Background effects */}
      <Background></Background>

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Main Content */}

      <main>
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>

      </main>

      {/* Footer */}

      <Footer></Footer>
    </div>
  );
};
