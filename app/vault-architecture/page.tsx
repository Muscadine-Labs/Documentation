import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ArrowDownCircle, ArrowUpCircle, RotateCcw } from "lucide-react";

const architectureTopics = [
  {
    title: "How Vaults Work",
    description: "Fundamental overview of vault architecture and operations",
    href: "/vault-architecture/how-vaults-work",
    icon: BarChart3,
  },
  {
    title: "Deposit Lifecycle",
    description: "Step-by-step process of how deposits are processed",
    href: "/vault-architecture/deposit-lifecycle",
    icon: ArrowDownCircle,
  },
  {
    title: "Allocation Logic",
    description: "How vaults decide where to allocate assets for optimal yield",
    href: "/vault-architecture/allocation-logic",
    icon: ArrowUpCircle,
  },
  {
    title: "Harvesting & Rebalancing",
    description: "Automated yield harvesting and portfolio rebalancing mechanisms",
    href: "/vault-architecture/harvesting-rebalancing",
    icon: RotateCcw,
  },
];

export default function VaultArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Vault Architecture
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Deep dive into the technical architecture and mechanisms that power Muscadine Labs vaults.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Architecture Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {architectureTopics.map((topic) => (
              <Link key={topic.href} href={topic.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <topic.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Key Principles</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Automation</h3>
                <p className="text-muted-foreground">
                  Vaults automatically manage deposits, allocations, and harvesting without manual intervention.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Optimization</h3>
                <p className="text-muted-foreground">
                  Continuous optimization of yield strategies based on market conditions and protocol opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Security</h3>
                <p className="text-muted-foreground">
                  Multiple layers of security including role-based access control and emergency mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Muscadine Labs. All rights reserved.
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
