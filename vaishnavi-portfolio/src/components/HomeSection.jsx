import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Vaishnavi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Siripalli
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {" "}
            I'am an innovative and results-oriented Senior Software Engineer
            with over 4 years of experience in full-stack development. I
            specialize in scalable web applications and backend systems, with
            proficiency in Angular, Node.js, and various data platforms. My
            expertise in AWS cloud services and CI/CD practices complements my
            ability to deliver clean, maintainable code and collaborate
            effectively with cross- functional teams to achieve user-centric
            solutions
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-mutec-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary "></ArrowDown>
      </div>
    </section>
  );
};
