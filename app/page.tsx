import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Shield, TrendingUp, Coins, ArrowRight } from "lucide-react";

const quickLinks = [
  {
    title: "About",
    description: "Learn about Muscadine Labs and our mission",
    href: "/overview/about",
    icon: TrendingUp,
  },
  {
    title: "DeFi 101",
    description: "Understanding decentralized finance basics",
    href: "/defi/what-is-defi",
    icon: Coins,
  },
  {
    title: "Vaults",
    description: "Automated yield strategies and vault architecture",
    href: "/vault/about",
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
    <PageLayout 
      title="Muscadine Labs Documentation"
      description="Learn about our DeFi vaults, yield strategies, and how we're building the future of decentralized finance."
    >
      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Quick Start</Badge>
            <h2 className="text-3xl font-bold mb-6">Get Started</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our documentation and learn about DeFi with Muscadine Labs
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="w-80 hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-left">
                    <div className="flex items-center space-x-3">
                      <link.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{link.title}</CardTitle>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Key Concepts</Badge>
            <h2 className="text-3xl font-bold mb-6">Understanding DeFi</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Learn the fundamental concepts that power decentralized finance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <Card key={card.title} className="hover:shadow-lg transition-shadow">
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

      <Footer />
    </PageLayout>
  );
}
