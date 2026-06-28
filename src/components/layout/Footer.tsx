import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Youtube, Mail } from "lucide-react";
import Logo from "@/components/common/Logo";

const footerLinks = {
  Advertisers: [
    { label: "Overview", href: "/advertisers" },
    { label: "How It Works", href: "/advertisers/how-it-works" },
    { label: "Pricing", href: "/advertisers" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  Publishers: [
    { label: "Overview", href: "/publishers" },
    { label: "Publisher Network", href: "/publishers/network" },
    { label: "Payment Terms", href: "/publishers" },
    { label: "Resources", href: "/insights" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Brands", href: "/brands" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Cookie Policy", href: "/contact" },
    { label: "Anti-Fraud Policy", href: "/contact" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-700 text-white">
      <div className="container py-16">
        {/* CTA Banner */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-800 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to grow with VSCommission?
              </h3>
              <p className="text-brand-200 text-lg">
                Join 100+ brands and 10,000+ publishers driving results today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link to="/contact" className="btn-primary">Get Started</Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Logo light />
            <p className="mt-4 text-brand-200 text-sm leading-relaxed max-w-xs">
              The trusted affiliate marketing platform connecting global brands with diverse publishers across English-speaking markets.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent-500"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-brand-200 transition-colors hover:text-accent-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-200">
            © 2026 VSCommission. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-brand-200">
            <Mail className="h-4 w-4" />
            <a href="mailto:hello@vscommission.com" className="hover:text-accent-400 transition-colors">
              hello@vscommission.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
