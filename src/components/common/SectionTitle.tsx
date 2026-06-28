import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-3 text-sm font-bold uppercase tracking-wider ${light ? "text-accent-400" : "text-accent-500"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`text-display-md ${light ? "text-white" : "text-brand-700"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-brand-200" : "text-ink-soft"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
