import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Coins, BarChart3 } from "lucide-react";

const productTopics = [
  {
    title: "Overview",
    description: "Introduction to Muscadine Labs products and services",
    href: "/products/overview",
    icon: TrendingUp,
  },
  {
    title: "Vaults",
    description: "Automated yield strategies that optimize returns",
    href: "/products/vaults",
    icon: Coins,
  },
  {
    title: "Supported Assets",
    description: "List of cryptocurrencies supported by our vaults",
    href: "/products/supported-assets",
    icon: BarChart3,
  },
  {
    title: "Risk Tiers",
    description: "Understanding the risk profiles of different products",
    href: "/products/risk-tiers",
    icon: Shield,
  },
  {
    title: "Yield Strategy",
    description: "Deep dive into our yield generation mechanisms",
    href: "/products/yield-strategy",
    icon: TrendingUp,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore the range of DeFi products and services offered by Muscadine Labs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {productTopics.map((topic) => (
              <Link key={topic.href} href={topic.href}>
                <Card className="w-80 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-left">
                    <div className="flex items-center space-x-3">
                      <topic.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

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