import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: "/startups", label: "Startups" },
    { href: "/investors", label: "Investors" },
    { href: "/cofounders", label: "Co-founders" },
    { href: "/resources",label: "Resources" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", label: "Twitter" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold font-headline text-xl">
              <BrainCircuit className="h-7 w-7 text-primary" />
              <span>CampusConnect AI</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Empowering the next generation of innovators.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground">Platform</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.slice(0, 4).map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.slice(4).map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Connect</h3>
              <ul className="mt-4 space-y-2">
                {socialLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CampusConnect AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
