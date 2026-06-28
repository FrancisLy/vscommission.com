import { Calendar, Clock, Mail, Send } from "lucide-react";
import { insights } from "@/data/insights";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Insights() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-accent-400">
              Insights
            </div>
            <h1 className="text-display-lg text-white">
              Affiliate Marketing <span className="text-gradient">Intelligence</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              Expert analysis, growth strategies, and industry trends to help you stay ahead in
              the fast-moving world of affiliate marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <ScrollReveal key={post.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft card-hover">
                  <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-brand-600 to-brand-800">
                    <span className="rounded-lg bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-brand-700">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4 border-t border-cloud-dark pt-4 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-soft md:p-12">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
              <Mail className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold text-brand-700">Stay in the loop</h2>
            <p className="mx-auto mt-3 max-w-md text-ink-soft">
              Get the latest affiliate marketing insights and strategies delivered straight to
              your inbox.
            </p>
            <form
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-cloud-dark bg-cloud px-4 py-3 text-sm outline-none transition-colors focus:border-accent-500 focus:bg-white"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
