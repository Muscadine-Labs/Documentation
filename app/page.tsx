import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Coins } from "lucide-react";

const quickLinks = [
  {
    title: "Products",
    description: "Learn about our DeFi vaults and yield strategies",
    href: "/products",
    icon: TrendingUp,
  },
  {
    title: "DeFi 101",
    description: "Understanding decentralized finance basics",
    href: "/defi",
    icon: Coins,
  },
  {
    title: "Fees & Economics",
    description: "Transparent fee structure and economics",
    href: "/fees",
    icon: Shield,
  },
];

const featureCards = [
  {
    title: "Vaults",
    description: "Automated yield strategies that optimize returns across DeFi protocols while managing risk.",
    icon: "🏦",
  },
  {
    title: "DeFi",
    description: "Decentralized finance protocols that enable permissionless lending, borrowing, and trading.",
    icon: "🌐",
  },
  {
    title: "Lending",
    description: "Supply assets to earn yield or borrow against collateral to access liquidity.",
    icon: "💰",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Muscadine Labs</h1>
              <span className="text-sm text-muted-foreground">Documentation</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Muscadine Labs Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn about our DeFi vaults, yield strategies, and how we&apos;re building the future of decentralized finance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="w-80 hover:shadow-lg transition-shadow cursor-pointer">
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

      {/* Feature Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Concepts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <Card key={card.title} className="rounded-2xl shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
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
                © 2024 Muscadine Labs. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contracts" className="text-sm text-muted-foreground hover:text-foreground">
                Contracts
              </Link>
              <Link href="/risk" className="text-sm text-muted-foreground hover:text-foreground">
                Risk Framework
              </Link>
              <a href="https://muscadine.box" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                Main Website
              </a>
              <a href="https://app.muscadine.box" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                App
              </a>
              <a href="mailto:contact@muscadine.box" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
