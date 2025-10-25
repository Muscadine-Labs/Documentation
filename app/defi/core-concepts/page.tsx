import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Zap, Coins, Globe, BookOpen, AlertTriangle } from "lucide-react";

export default function CoreConceptsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            DeFi Core Concepts
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding the fundamental building blocks of decentralized finance and how they work together to create a new financial ecosystem.
          </p>
        </div>
      </section>

      <section className="pt-4 pb-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2">Essential DeFi Concepts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <CardTitle>Smart Contracts</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Self-executing contracts with terms directly written into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries. Smart contracts are immutable once deployed and run on blockchain networks, ensuring transparency and reducing counterparty risk. They enable complex financial operations like automated lending, yield farming, and decentralized exchanges without human intervention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Coins className="h-6 w-6 text-primary" />
                  <CardTitle>Liquidity Pools & AMMs</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Collections of tokens locked in smart contracts that enable decentralized trading through Automated Market Makers. Users provide liquidity and earn fees from trading activity. AMMs use mathematical formulas (like x*y=k) to automatically adjust prices as trades occur - when someone buys a token, the price increases; when they sell, it decreases. This creates a continuous market that's always available, unlike traditional exchanges that rely on order books. Popular AMM formulas include Constant Product (Uniswap), Stable Swap (Curve), and Weighted Pools (Balancer). Higher liquidity means better prices and lower slippage for traders.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <CardTitle>Other DeFi Applications</CardTitle>
                </div>
                <CardDescription className="text-base">
                  DeFi extends beyond basic lending and trading to include advanced financial instruments. Perpetual futures (perps) allow leveraged trading without expiration dates. Derivatives enable exposure to asset prices without owning the underlying assets. Prediction markets let users bet on future events and outcomes. Insurance protocols provide coverage against smart contract risks and hacks. Yield aggregators automatically optimize returns across multiple protocols. Real World Assets (RWAs) tokenize physical assets like real estate, commodities, and bonds, bringing traditional assets onto the blockchain. These innovations (many more unmentioned) expand DeFi's utility beyond traditional finance capabilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle>Collateralization</CardTitle>
                </div>
                <CardDescription className="text-base">
                  The practice of locking up assets as security for loans or other financial activities. Over-collateralization is common in DeFi to manage risk. Unlike traditional financial systems that use undercollateralization (which is inherently riskier than DeFi lending and borrowing), you can only borrow as much as you have collateralized. This creates a safety buffer that protects lenders and reduces systemic risk. For example, to borrow $100, you need to deposit $150+ worth of collateral. If your collateral drops in value, you can be liquidated to protect the protocol - this goes to pay back the lenders.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">What Muscadine Does</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <CardTitle>Automated Vaults</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We curate and manage risk on Morpho vault infrastructure on the blockchain, lending tokens to overcollateralized markets in return for variable interest.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Self-Custody Solutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We create self-custody solutions for clients, enabling them to securely own their wealth through running their own nodes, paper keys, and key systems for optimal safety, security, and ownership.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How DeFi Protocols Work</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">User Deposits Assets</h3>
                  <p className="text-muted-foreground">Users deposit their tokens into smart contracts, maintaining ownership while enabling protocol functionality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Contracts Execute Logic</h3>
                  <p className="text-muted-foreground">Automated code handles lending, borrowing, trading, or other financial operations based on predefined rules.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Users Earn Rewards</h3>
                  <p className="text-muted-foreground">Participants receive fees, interest, or governance tokens as compensation for providing liquidity or using the protocol.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key DeFi Protocols</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Lending Protocols</CardTitle>
                <CardDescription>
                  Enable users to lend assets and earn interest, or borrow against collateral. Examples include Aave, Morpho, and Moonwell.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>DEXs (Decentralized Exchanges)</CardTitle>
                <CardDescription>
                  Allow peer-to-peer trading without intermediaries. Examples include Uniswap and Aerodrome.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Yield Aggregators</CardTitle>
                <CardDescription>
                  Automatically move funds between protocols to maximize yields. Examples include Beefy Finance and Muscadine Labs.
                </CardDescription>
              </CardHeader>
            </Card>
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