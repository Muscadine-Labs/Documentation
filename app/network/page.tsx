import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, Zap, Network } from "lucide-react";

const networkInfo = [
  {
    name: "Base Network",
    description: "Primary network for all Muscadine vaults and contracts",
    status: "Active",
    icon: Globe,
    details: [
      "Layer 2 solution built on Ethereum",
      "Low transaction fees",
      "High transaction throughput",
      "EVM compatible"
    ]
  },
  {
    name: "Ethereum Mainnet",
    description: "Future expansion planned for additional vault strategies",
    status: "Planned",
    icon: Network,
    details: [
      "Largest DeFi ecosystem",
      "Highest security guarantees",
      "Maximum liquidity",
      "Established infrastructure"
    ]
  }
];

const supportedProtocols = [
  {
    name: "Morpho",
    description: "Peer-to-peer lending protocol",
    icon: Shield,
  },
  {
    name: "Aave",
    description: "Decentralized lending and borrowing",
    icon: Zap,
  },
  {
    name: "Compound",
    description: "Algorithmic money markets",
    icon: Network,
  },
];

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="https://muscadine.io" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-primary transition-colors">
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
            Network & Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn about the networks and protocols that power Muscadine Labs vaults.
          </p>
        </div>
      </section>

      {/* Network Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Networks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {networkInfo.map((network) => (
              <Card key={network.name} className="rounded-2xl shadow-sm">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <network.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{network.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {network.status}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{network.description}</p>
                  <ul className="space-y-2">
                    {network.details.map((detail, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Protocols */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Integrated Protocols</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportedProtocols.map((protocol) => (
              <Card key={protocol.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <protocol.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{protocol.name}</CardTitle>
                  <CardDescription>{protocol.description}</CardDescription>
                </CardHeader>
              </Card>
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
