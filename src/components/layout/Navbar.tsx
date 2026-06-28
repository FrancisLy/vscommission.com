import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/common/Logo";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Advertisers",
    href: "/advertisers",
    children: [
      { label: "Overview", href: "/advertisers", description: "Why brands choose VSCommission" },
      { label: "How It Works", href: "/advertisers/how-it-works", description: "Get started in 48 hours" },
      { label: "Case Studies", href: "/case-studies", description: "Real results from real brands" },
    ],
  },
  {
    label: "Publishers",
    href: "/publishers",
    children: [
      { label: "Overview", href: "/publishers", description: "Earn more with every click" },
      { label: "Publisher Network", href: "/publishers/network", description: "10 ways to monetize your audience" },
      { label: "Case Studies", href: "/case-studies", description: "See how top publishers grow" },
    ],
  },
  { label: "Brands", href: "/brands" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled ? "text-ink-soft hover:text-brand-700 hover:bg-cloud" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 w-80 animate-fade-in">
                  <div className="rounded-xl border border-cloud-dark bg-white p-2 shadow-card">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block rounded-lg px-4 py-3 transition-colors hover:bg-cloud"
                      >
                        <div className="font-semibold text-brand-700">{child.label}</div>
                        <div className="text-sm text-ink-muted">{child.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className={`text-sm font-medium ${scrolled ? "text-ink-soft hover:text-brand-700" : "text-white/90 hover:text-white"}`}>
            Sign In
          </Link>
          <Link to="/contact" className="btn-primary text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-brand-700" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-cloud-dark max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block px-4 py-3 font-medium text-brand-700 rounded-lg hover:bg-cloud"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-8 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-ink-soft rounded-lg hover:bg-cloud"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/contact" className="btn-secondary w-full">Sign In</Link>
              <Link to="/contact" className="btn-primary w-full">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
