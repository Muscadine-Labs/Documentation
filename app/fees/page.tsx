import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Shield, Calculator } from "lucide-react";

const feeTopics = [
  {
    title: "Performance Fee",
    description: "How performance fees work and when they're charged",
    href: "/fees/performance-fee",
    icon: TrendingUp,
  },
  {
    title: "Why Fees Exist",
    description: "Understanding the necessity and purpose of fees in DeFi",
    href: "/fees/why-fees-exist",
    icon: Shield,
  },
  {
    title: "Fee Splitter",
    description: "Details on how fees are distributed among stakeholders",
    href: "/fees/fee-splitter",
    icon: Calculator,
  },
  {
    title: "How Fees Accrue",
    description: "Mechanism of fee accumulation and calculation",
    href: "/fees/how-fees-accrue",
    icon: DollarSign,
  },
  {
    title: "Example Flows",
    description: "Illustrative examples of fee collection and distribution",
    href: "/fees/example-flows",
    icon: DollarSign,
  },
];

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Fees & Economics
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A transparent look into Muscadine Labs' fee structure and economic model.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {feeTopics.map((topic) => (
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