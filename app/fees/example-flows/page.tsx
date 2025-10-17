import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Calculator, BarChart3 } from "lucide-react";

const exampleFlowTopics = [
  {
    title: "Fee Structure",
    description: "Understanding our complete fee model",
    href: "/fees",
    icon: DollarSign,
  },
  {
    title: "Performance Fees",
    description: "How performance fees work in practice",
    href: "/fees/performance-fee",
    icon: TrendingUp,
  },
  {
    title: "Fee Splitter",
    description: "Distribution mechanism for collected fees",
    href: "/fees/fee-splitter",
    icon: Calculator,
  },
  {
    title: "Fee Accrual",
    description: "How fees accumulate over time",
    href: "/fees/how-fees-accrue",
    icon: BarChart3,
  },
];

export default function ExampleFlowsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Example Flows
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Illustrative examples of fee collection and distribution in real-world scenarios.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {exampleFlowTopics.map((topic) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Example Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span>Deposit Flow</span>
                </CardTitle>
                <CardDescription>
                  Example of how fees are calculated when a user deposits assets into a vault and the vault generates yield.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span>Withdrawal Flow</span>
                </CardTitle>
                <CardDescription>
                  Example of fee collection when a user withdraws assets, including performance fee calculations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
