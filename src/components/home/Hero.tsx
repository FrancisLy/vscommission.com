import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const trustIndicators = [
  { value: "4", label: "Global Markets" },
  { value: "100+", label: "Brand Partners" },
  { value: "10K+", label: "Active Publishers" },
  { value: "$50M+", label: "Annual Commissions" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient">
      {/* Floating geometric decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-1/4 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-[24%] h-48 w-48 rounded-full bg-brand-300/20 blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute right-[6%] top-1/3 h-32 w-32 rotate-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-[42%] h-20 w-20 rotate-45 rounded-xl border border-white/10 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute right-[18%] top-[55%] h-16 w-16 rounded-full border-2 border-accent-400/30 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container relative z-10 py-32">
        <div className="max-w-4xl">
          <div className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent-400" />
            Trusted affiliate platform across 4 markets
          </div>

          <h1 className="mt-6 animate-fade-up text-display-xl text-white">
            Trusted to <span className="text-gradient-light">Perform</span>
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-brand-100 md:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            We connect <span className="text-gradient-light font-semibold">global brands</span> with{" "}
            <span className="text-gradient-light font-semibold">diverse publishers</span> across the US,
            UK, Canada & Australia—driving measurable growth through performance marketing.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/contact" className="btn-primary text-base">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/brands"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
            >
              Explore Brands
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-20 grid animate-fade-up grid-cols-2 gap-6 md:grid-cols-4"
            style={{ animationDelay: "0.3s" }}
          >
            {trustIndicators.map((item) => (
              <div key={item.label} className="border-l-2 border-white/20 pl-4">
                <div className="text-3xl font-display font-extrabold text-white md:text-4xl">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-brand-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
