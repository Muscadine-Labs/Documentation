import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, Zap, TrendingDown, AlertCircle } from "lucide-react";

export default function DefiRisksPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            DeFi Risks
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding the risks involved in decentralized finance is crucial for making informed decisions and protecting your investments.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Major DeFi Risk Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-red-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-red-600">Smart Contract Risk</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Code Vulnerabilities:</strong> Bugs in smart contract code can lead to loss of funds. Even audited contracts can have undiscovered vulnerabilities.
                  <br /><br />
                  <strong>Upgrade Risk:</strong> Protocol upgrades may introduce new bugs or change functionality unexpectedly.
                  <br /><br />
                  <strong>Admin Keys:</strong> Some protocols have admin controls that could be used maliciously or compromised.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingDown className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-orange-600">Market Risk</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Volatility:</strong> Cryptocurrency prices can experience extreme volatility, leading to significant losses.
                  <br /><br />
                  <strong>Liquidity Risk:</strong> Difficulty selling assets due to low liquidity in markets or protocols.
                  <br /><br />
                  <strong>Correlation Risk:</strong> DeFi assets often move together, reducing diversification benefits.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-yellow-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                  <CardTitle className="text-yellow-600">Operational Risk</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>User Error:</strong> Mistakes in transactions, wrong addresses, or incorrect parameters can result in permanent loss.
                  <br /><br />
                  <strong>Key Management:</strong> Loss of private keys means permanent loss of access to funds.
                  <br /><br />
                  <strong>Gas Costs:</strong> High network fees can make transactions uneconomical or fail entirely.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-blue-600">Regulatory Risk</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Regulatory Changes:</strong> New regulations could restrict or ban DeFi activities in certain jurisdictions.
                  <br /><br />
                  <strong>Compliance Requirements:</strong> Future requirements for KYC/AML could affect protocol accessibility.
                  <br /><br />
                  <strong>Tax Implications:</strong> Unclear tax treatment of DeFi activities may create unexpected liabilities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Risk Mitigation Strategies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Due Diligence</CardTitle>
                <CardDescription>
                  Research protocols thoroughly. Check audit reports, team backgrounds, code quality, and community sentiment before investing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingDown className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Diversification</CardTitle>
                <CardDescription>
                  Spread investments across multiple protocols, asset types, and strategies to reduce concentration risk.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Risk Management</CardTitle>
                <CardDescription>
                  Only invest what you can afford to lose. Set stop-losses, monitor positions regularly, and have an exit strategy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Muscadine Labs Risk Management</h2>
            <p className="text-xl text-muted-foreground mb-6">
              We implement comprehensive risk management strategies to protect our users' funds.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Multi-Protocol Diversification</h3>
                <p className="text-muted-foreground">
                  Our vaults spread risk across multiple established DeFi protocols, reducing exposure to any single point of failure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Continuous Monitoring</h3>
                <p className="text-muted-foreground">
                  We monitor all positions and have automated systems to respond to market changes and protocol updates.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Audited Protocols Only</h3>
                <p className="text-muted-foreground">
                  We only work with thoroughly audited and battle-tested protocols with proven track records.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Transparent Operations</h3>
                <p className="text-muted-foreground">
                  All our operations are transparent and auditable on-chain, allowing users to verify our strategies.
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