import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Zap, Coins, Globe } from "lucide-react";

export default function WhatIsDefiPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            What is DeFi?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Decentralized Finance (DeFi) is a revolutionary financial system built on blockchain technology that operates without traditional intermediaries like banks, enabling anyone to access financial services globally.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core DeFi Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Permissionless</CardTitle>
                <CardDescription>
                  Anyone can access DeFi protocols without approval from centralized authorities or geographic restrictions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Transparent</CardTitle>
                <CardDescription>
                  All transactions and smart contract code are publicly verifiable on the blockchain, ensuring complete transparency.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Composable</CardTitle>
                <CardDescription>
                  DeFi protocols can be combined and integrated to create new financial products and services.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Key DeFi Applications</h2>
            <p className="text-xl text-muted-foreground mb-8">
              DeFi encompasses a wide range of financial services that were traditionally only available through banks and financial institutions.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Decentralized Exchanges (DEXs)</h3>
                <p className="text-muted-foreground">
                  Trade cryptocurrencies directly with other users without intermediaries, maintaining control of your assets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Lending & Borrowing</h3>
                <p className="text-muted-foreground">
                  Lend your assets to earn interest or borrow against your holdings without traditional credit checks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Yield Farming</h3>
                <p className="text-muted-foreground">
                  Provide liquidity to DeFi protocols and earn rewards in return for supporting the ecosystem.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Staking</h3>
                <p className="text-muted-foreground">
                  Lock up your tokens to support blockchain networks and earn staking rewards in return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">DeFi vs Traditional Finance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-green-600">DeFi Advantages</CardTitle>
              </CardHeader>
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">24/7 Access</h4>
                    <p className="text-sm text-muted-foreground">No business hours or holidays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Lower Fees</h4>
                    <p className="text-sm text-muted-foreground">Reduced intermediary costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Global Access</h4>
                    <p className="text-sm text-muted-foreground">Available to anyone with internet</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Self-Custody</h4>
                    <p className="text-sm text-muted-foreground">You control your own assets</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-red-600">Considerations</CardTitle>
              </CardHeader>
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Smart Contract Risk</h4>
                    <p className="text-sm text-muted-foreground">Code vulnerabilities can lead to losses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Volatility</h4>
                    <p className="text-sm text-muted-foreground">Cryptocurrency prices can be highly volatile</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Regulatory Uncertainty</h4>
                    <p className="text-sm text-muted-foreground">Evolving regulatory landscape</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Technical Complexity</h4>
                    <p className="text-sm text-muted-foreground">Requires understanding of blockchain technology</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Muscadine Labs & DeFi</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Muscadine Labs provides secure DeFi solutions that combine the benefits of decentralized finance with robust security measures and self-custody options.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Coins className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Bitcoin DeFi</CardTitle>
                  <CardDescription>Access DeFi opportunities with Bitcoin while maintaining self-custody</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Secure Vaults</CardTitle>
                  <CardDescription>Yield-generating vaults with enhanced security measures</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Risk Management</CardTitle>
                  <CardDescription>Comprehensive risk frameworks for safe DeFi participation</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Learn More</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Continue your DeFi education with our comprehensive guides and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/defi/core-concepts">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Core Concepts</CardTitle>
                    <CardDescription>Dive deeper into DeFi fundamentals</CardDescription>
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
              <a href="https://muscadine.io/defi" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                DeFi Platform
              </a>
              <a href="https://muscadine.io/bitcoin" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                Bitcoin Solutions
              </a>
              <a href="https://muscadine.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                Main Website
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
