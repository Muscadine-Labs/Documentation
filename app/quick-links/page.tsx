import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Globe, Mail, ArrowRight } from "lucide-react";

const quickLinks = [
  {
    title: "Main Website",
    description: "Official Muscadine Labs website with company information",
    href: "https://muscadine.io",
    external: true,
    icon: Globe,
  },
  {
    title: "App",
    description: "Main application for interacting with DeFi products",
    href: "https://app.muscadine.io",
    external: true,
    icon: ExternalLink,
  },
  {
    title: "GitHub Repository",
    description: "Open source code and development resources",
    href: "#",
    external: true,
    icon: Github,
  },
  {
    title: "Contact Support",
    description: "Get help and support from our team",
    href: "mailto:contact@muscadine.io",
    external: true,
    icon: Mail,
  },
];

const internalLinks = [
  {
    title: "Getting Started",
    description: "New to Muscadine? Start here",
    href: "/welcome",
    icon: ArrowRight,
  },
  {
    title: "Vault Overview",
    description: "Learn about our automated vault strategies",
    href: "/products/overview",
    icon: ArrowRight,
  },
  {
    title: "Risk Framework",
    description: "Understand our risk management approach",
    href: "/risk",
    icon: ArrowRight,
  },
  {
    title: "Contracts",
    description: "Smart contract addresses and verification",
    href: "/contracts",
    icon: ArrowRight,
  },
];

export default function QuickLinksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="https://muscadine.io" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-primary transition-colors">
                Muscadine Labs
              </a>
              <span className="text-sm text-muted-foreground">Documentation</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Quick Links
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Fast access to all Muscadine Labs resources and important pages.
          </p>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">External Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-left">
                    <div className="flex items-center space-x-3">
                      <link.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Documentation Quick Access</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {internalLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-left">
                    <div className="flex items-center space-x-3">
                      <link.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Muscadine Labs. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contracts" className="text-sm text-muted-foreground hover:text-foreground">
                Contracts
              </Link>
              <Link href="/risk" className="text-sm text-muted-foreground hover:text-foreground">
                Risk Framework
              </Link>
              <a href="https://muscadine.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                Main Website
              </a>
              <a href="https://app.muscadine.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                App
              </a>
              <a href="mailto:contact@muscadine.io" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
