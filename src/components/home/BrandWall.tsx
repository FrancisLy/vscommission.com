import { brands } from "@/data/brands";
import SectionTitle from "@/components/common/SectionTitle";

export default function BrandWall() {
  // Duplicate the array to create a seamless marquee loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Our Partners"
          title="Trusted by World-Class Brands"
          subtitle="Leading global brands across electronics, apparel, smart home, and more rely on VSCommission to scale their affiliate programs."
        />
      </div>

      <div className="relative mt-16">
        {/* Edge fades */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"></div>

        <div className="flex w-max animate-marquee gap-6">
          {marqueeBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-28 w-56 flex-shrink-0 items-center justify-center rounded-2xl border border-cloud-dark bg-cloud px-6 grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-soft"
            >
              <span
                className="text-2xl font-display font-extrabold"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
