import { Link } from "react-router-dom";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative flex h-9 w-9 items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-accent-gradient transition-transform duration-300 group-hover:scale-110"></div>
        <span className="relative font-display text-lg font-extrabold text-white">V</span>
      </div>
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-brand-700"}`}>
        VS<span className="text-accent-500">Commission</span>
      </span>
    </Link>
  );
}
