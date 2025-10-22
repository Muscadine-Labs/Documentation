import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, TrendingDown, Zap, Database, Lock } from "lucide-react";

const riskTypes = [
  {
    title: "Smart Contract Risk",
    description: "Understanding the risks associated with smart contract vulnerabilities and bugs",
    href: "/risk/smart-contract-risk",
    icon: Lock,
  },
  {
    title: "Counterparty Risk",
    description: "Risks from third-party protocols and service providers",
    href: "/risk/counterparty-risk",
    icon: Shield,
  },
  {
    title: "Liquidity Risk",
    description: "Risks related to market liquidity and withdrawal availability",
    href: "/risk/liquidity-risk",
    icon: TrendingDown,
  },
  {
    title: "Oracle Risk",
    description: "Risks from price feed manipulation and oracle failures",
    href: "/risk/oracle-risk",
    icon: Database,
  },
  {
    title: "Depeg Risk",
    description: "Risks from stablecoin depegging and price volatility",
    href: "/risk/depeg-risk",
    icon: AlertTriangle,
  },
  {
    title: "Risk Mitigation",
    description: "Our strategies and measures to minimize and manage risks",
    href: "/risk/mitigation",
    icon: Zap,
  },
];

export default function RiskPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Risk Framework
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding and managing risks in DeFi vault strategies. Learn about the various risk factors and our mitigation strategies.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Risk Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskTypes.map((risk) => (
              <Link key={risk.href} href={risk.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <risk.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{risk.title}</CardTitle>
                    <CardDescription>{risk.description}</CardDescription>
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
            <h2 className="text-3xl font-bold mb-8">Risk Disclaimer</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                All DeFi strategies carry inherent risks. Before investing, please review our comprehensive risk framework and understand that:
              </p>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Past performance does not guarantee future results</li>
                <li>• Smart contract risks may result in loss of funds</li>
                <li>• Market volatility can affect vault performance</li>
                <li>• Regulatory changes may impact operations</li>
                <li>• Only invest what you can afford to lose</li>
              </ul>
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
              <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">
                Legal
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
