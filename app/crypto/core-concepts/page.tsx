import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Zap, Coins, Globe, BookOpen } from "lucide-react";

export default function CoreConceptsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Crypto Core Concepts
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding the fundamental building blocks of cryptocurrency and blockchain technology and how they work together to create a new financial ecosystem.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Crypto Concepts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <CardTitle>Smart Contracts</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Self-executing contracts with terms directly written into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Coins className="h-6 w-6 text-primary" />
                  <CardTitle>Liquidity Pools</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Collections of tokens locked in smart contracts that enable decentralized trading. Users provide liquidity and earn fees from trading activity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <CardTitle>Automated Market Makers (AMMs)</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Algorithms that determine token prices based on supply and demand ratios in liquidity pools, enabling decentralized trading without order books.
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
                  The practice of locking up assets as security for loans or other financial activities. Over-collateralization is common in DeFi to manage risk.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
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

      <section className="py-16">
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
                  Enable users to lend assets and earn interest, or borrow against collateral. Examples include Aave, Compound, and Venus.
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
                  Allow peer-to-peer trading without intermediaries. Examples include Uniswap, SushiSwap, and PancakeSwap.
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
                  Automatically move funds between protocols to maximize yields. Examples include Yearn Finance, Beefy Finance, and Muscadine Labs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Learn More</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Continue your DeFi education with our comprehensive guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/defi/what-is-defi">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>What is DeFi?</CardTitle>
                    <CardDescription>Back to DeFi basics</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/defi/risks">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>DeFi Risks</CardTitle>
                    <CardDescription>Understand the risks involved</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/defi/wallet-setup">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Wallet Setup</CardTitle>
                    <CardDescription>Get started with DeFi wallets</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
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