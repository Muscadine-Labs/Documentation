import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Shield, TrendingUp, BarChart3 } from "lucide-react";

const assetTopics = [
  {
    title: "Asset Overview",
    description: "Complete list of supported cryptocurrencies",
    href: "/products/overview",
    icon: Coins,
  },
  {
    title: "Risk Assessment",
    description: "How we evaluate and categorize assets",
    href: "/risk",
    icon: Shield,
  },
  {
    title: "Performance History",
    description: "Historical performance of different assets",
    href: "/products/yield-strategy",
    icon: TrendingUp,
  },
  {
    title: "Market Analysis",
    description: "Current market conditions and trends",
    href: "/products/overview",
    icon: BarChart3,
  },
];

export default function SupportedAssetsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Supported Assets
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive list of cryptocurrencies and tokens supported by our vaults.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {assetTopics.map((topic) => (
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Asset Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Coins className="h-6 w-6 text-primary" />
                  <span>Major Cryptocurrencies</span>
                </CardTitle>
                <CardDescription>
                  Bitcoin, Ethereum, and other established cryptocurrencies with high liquidity and market cap.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Stablecoins</span>
                </CardTitle>
                <CardDescription>
                  USD-pegged stablecoins and other fiat-backed tokens for lower volatility strategies.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span>DeFi Tokens</span>
                </CardTitle>
                <CardDescription>
                  Governance tokens and utility tokens from leading DeFi protocols.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
