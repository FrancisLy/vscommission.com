import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Send,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const offices = [
  { country: "🇺🇸 United States", address: "San Francisco, CA" },
  { country: "🇬🇧 United Kingdom", address: "London" },
  { country: "🇨🇦 Canada", address: "Toronto, ON" },
  { country: "🇦🇺 Australia", address: "Sydney" },
];

const faqs = [
  { q: "How long does it take to get approved?", a: "Most applications are reviewed and approved within 48 hours. Our team verifies your site or audience to ensure quality before activation." },
  { q: "What are the minimum requirements?", a: "Publishers need an active website, social channel, or audience with relevant traffic. Brands need a live e-commerce store with a checkout process we can track." },
  { q: "How are commissions paid?", a: "Commissions are paid on a Net-30 basis via PayPal, wire transfer, or ACH in USD, GBP, CAD, or AUD. There's no minimum threshold for established publishers." },
  { q: "Do you support Amazon sellers?", a: "Yes. We work with both independent DTC sites and Amazon sellers, offering tailored tracking and publisher strategies for each channel." },
  { q: "What tracking technology do you use?", a: "We use a combination of first-party cookies, server-to-server postback tracking, and fingerprint matching to ensure accurate, fraud-resistant attribution." },
  { q: "Is there a setup fee?", a: "No setup fees. Brands pay only on performance—a percentage of the revenue generated through our network. Publishers join completely free." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-mesh opacity-40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-wider text-accent-400">
              Contact Us
            </div>
            <h1 className="text-display-lg text-white">
              Let's Talk <span className="text-gradient">Growth</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
              Whether you're a brand ready to scale or a publisher looking to earn more, our team
              is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-soft md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-brand-700">Message sent!</h3>
                    <p className="mt-2 max-w-sm text-ink-soft">
                      Thanks for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <h2 className="text-2xl font-bold text-brand-700">Send us a message</h2>
                    <p className="mt-2 text-ink-soft">
                      Fill out the form and we'll respond within one business day.
                    </p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-brand-700">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full rounded-lg border border-cloud-dark bg-cloud px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-brand-700">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full rounded-lg border border-cloud-dark bg-cloud px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-brand-700">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-lg border border-cloud-dark bg-cloud px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-brand-700">
                          Role
                        </label>
                        <select className="w-full rounded-lg border border-cloud-dark bg-cloud px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:bg-white">
                          <option>Advertiser</option>
                          <option>Publisher</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="mb-1.5 block text-sm font-semibold text-brand-700">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full resize-none rounded-lg border border-cloud-dark bg-cloud px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-500 focus:bg-white"
                      />
                    </div>
                    <button type="submit" className="btn-primary mt-6 w-full">
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="rounded-2xl bg-cloud p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-brand-700">Email</div>
                      <a href="mailto:hello@vscommission.com" className="text-sm text-ink-soft hover:text-accent-500">
                        hello@vscommission.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-cloud p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-brand-700">Phone</div>
                      <a href="tel:+18005551234" className="text-sm text-ink-soft hover:text-accent-500">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-cloud p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-brand-700">Response Time</div>
                      <div className="text-sm text-ink-soft">Within 24 hours, Mon–Fri</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-brand-700 p-6 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MapPin className="h-4 w-4 text-accent-400" />
                    Our Offices
                  </div>
                  <ul className="mt-4 space-y-3">
                    {offices.map((o) => (
                      <li key={o.country} className="flex items-center justify-between text-sm">
                        <span className="text-brand-200">{o.country}</span>
                        <span className="font-medium text-white">{o.address}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cloud">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="mb-3 text-sm font-bold uppercase tracking-wider text-accent-500">
                FAQ
              </div>
              <h2 className="text-display-md text-brand-700">Frequently Asked Questions</h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q}>
                  <div className="overflow-hidden rounded-xl bg-white shadow-soft">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-semibold text-brand-700">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-accent-500 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-ink-soft">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
