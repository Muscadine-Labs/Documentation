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
    title: "Risk Tiers",
    description: "Understanding different risk levels and strategies",
    href: "/products/risk-tiers",
    icon: Shield,
  },
  {
    title: "Supported Assets",
    description: "Assets and tokens supported by our vaults",
    href: "/products/supported-assets",
    icon: Coins,
  },
  {
    title: "Yield Strategy",
    description: "How our yield optimization strategies work",
    href: "/products/yield-strategy",
    icon: BarChart3,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="https://muscadine.box" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-primary transition-colors">
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
            Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore Muscadine Labs&apos; DeFi products, vaults, and yield strategies.
          </p>
        </div>
      </section>

      {/* Product Topics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Product Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {productTopics.map((topic) => (
              <Link key={topic.href} href={topic.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
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
