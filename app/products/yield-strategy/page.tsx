import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, Shield, Zap } from "lucide-react";

const strategyTopics = [
  {
    title: "Strategy Overview",
    description: "Understanding our yield generation approach",
    href: "/products/overview",
    icon: TrendingUp,
  },
  {
    title: "Risk Management",
    description: "How we manage risk across different strategies",
    href: "/risk",
    icon: Shield,
  },
  {
    title: "Performance Metrics",
    description: "Key performance indicators and benchmarks",
    href: "/products/overview",
    icon: BarChart3,
  },
  {
    title: "Automation",
    description: "Automated rebalancing and optimization",
    href: "/vault-architecture/how-vaults-work",
    icon: Zap,
  },
];

export default function YieldStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Yield Strategy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Deep dive into our yield generation mechanisms and optimization strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {strategyTopics.map((topic) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Strategy Components</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span>Dynamic Allocation</span>
                </CardTitle>
                <CardDescription>
                  Our algorithms continuously analyze market conditions and adjust allocations to optimize yield while managing risk.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Risk-Adjusted Returns</span>
                </CardTitle>
                <CardDescription>
                  We prioritize risk-adjusted returns over raw yield, ensuring sustainable long-term performance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
