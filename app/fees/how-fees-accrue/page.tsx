import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calculator, TrendingUp, BarChart3 } from "lucide-react";

const feeAccrualTopics = [
  {
    title: "Fee Structure",
    description: "Understanding our fee model and calculations",
    href: "/fees",
    icon: DollarSign,
  },
  {
    title: "Performance Fees",
    description: "How performance fees are calculated and charged",
    href: "/fees/performance-fee",
    icon: TrendingUp,
  },
  {
    title: "Fee Splitter",
    description: "Distribution of fees among stakeholders",
    href: "/fees/fee-splitter",
    icon: Calculator,
  },
  {
    title: "Example Flows",
    description: "Real-world examples of fee collection",
    href: "/fees/example-flows",
    icon: BarChart3,
  },
];

export default function HowFeesAccruePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            How Fees Accrue
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding the mechanism of fee accumulation and calculation in our vaults.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {feeAccrualTopics.map((topic) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Fee Accrual Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span>Continuous Accrual</span>
                </CardTitle>
                <CardDescription>
                  Fees accumulate continuously based on vault performance and user deposits, ensuring fair and transparent fee collection.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Calculator className="h-6 w-6 text-primary" />
                  <span>Automated Calculation</span>
                </CardTitle>
                <CardDescription>
                  Smart contracts automatically calculate fees based on predefined parameters, eliminating manual intervention and errors.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
