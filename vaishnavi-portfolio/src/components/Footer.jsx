import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Built with precision, passion, and just enough caffeine ☕
        </p>

        {/* Center: Tagline */}
        <p className="text-sm text-muted-foreground italic text-center">
          Bridging ideas and code — one commit at a time.
        </p>

        {/* Right: Back to Top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
