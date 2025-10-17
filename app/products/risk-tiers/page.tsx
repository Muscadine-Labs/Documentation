import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, TrendingUp, BarChart3 } from "lucide-react";

const riskTierTopics = [
  {
    title: "Risk Framework",
    description: "Understanding our risk assessment methodology",
    href: "/risk",
    icon: Shield,
  },
  {
    title: "Risk Mitigation",
    description: "How we manage and reduce various risks",
    href: "/risk/mitigation",
    icon: AlertTriangle,
  },
  {
    title: "Performance vs Risk",
    description: "Balancing returns with risk tolerance",
    href: "/products/yield-strategy",
    icon: TrendingUp,
  },
  {
    title: "Risk Metrics",
    description: "Key risk indicators and measurements",
    href: "/risk",
    icon: BarChart3,
  },
];

export default function RiskTiersPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Risk Tiers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding the risk profiles of different products and strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {riskTierTopics.map((topic) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Risk Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-sm border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-green-800 dark:text-green-200">
                  <Shield className="h-6 w-6" />
                  <span>Conservative</span>
                </CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Lower risk strategies with stable returns, suitable for risk-averse investors.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-yellow-800 dark:text-yellow-200">
                  <TrendingUp className="h-6 w-6" />
                  <span>Moderate</span>
                </CardTitle>
                <CardDescription className="text-yellow-700 dark:text-yellow-300">
                  Balanced risk-return profile with diversified strategies and moderate volatility.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-800 dark:text-red-200">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Aggressive</span>
                </CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300">
                  Higher risk strategies with potential for greater returns, for experienced investors.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
