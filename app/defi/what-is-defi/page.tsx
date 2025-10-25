import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Coins, Shield, Zap, ArrowRight } from "lucide-react";

export default function WhatIsDefiPage() {
  return (
    <PageLayout 
      title="What is DeFi?"
      description="Learn the fundamentals of cryptocurrency, Bitcoin, and decentralized finance (DeFi) to understand the future of money."
    >
      {/* What is Cryptocurrencies Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Fundamentals</Badge>
              <h2 className="text-3xl font-bold mb-6">What is Cryptocurrencies?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Coins className="h-6 w-6 text-primary" />
                    <CardTitle>Digital Money</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cryptocurrencies are digital or virtual currencies that use cryptography for security. Unlike traditional money controlled by banks and governments, cryptocurrencies operate on decentralized networks called blockchains.
                  </p>
                  <p className="text-muted-foreground">
                    They enable peer-to-peer transactions without intermediaries, giving you complete control over your money.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Key Features</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Decentralized</h4>
                    <p className="text-sm text-muted-foreground">No single authority controls the network</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Transparent</h4>
                    <p className="text-sm text-muted-foreground">All transactions are publicly recorded</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Secure</h4>
                    <p className="text-sm text-muted-foreground">Protected by advanced cryptography</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is Bitcoin Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Digital Gold</Badge>
              <h2 className="text-3xl font-bold mb-6">What is Bitcoin?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Coins className="h-6 w-6 text-primary" />
                    <CardTitle>The First Cryptocurrency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Bitcoin is an energy-based currency that represents a revolutionary shift from traditional financial systems. Unlike centralized currencies controlled by banks and governments, Bitcoin is truly decentralized and owned by its holders.
                  </p>
                  <p className="text-muted-foreground">
                    Anyone can mine Bitcoin using computational energy, and once you own it, you have complete control over your assets with no intermediary that can freeze your account or devalue your holdings.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Why Bitcoin Matters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Limited Supply</h4>
                    <p className="text-sm text-muted-foreground">Only 21 million Bitcoin will ever exist</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Inflation Resistant</h4>
                    <p className="text-sm text-muted-foreground">Cannot be printed or devalued by governments</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Global Access</h4>
                    <p className="text-sm text-muted-foreground">Available to anyone with internet access</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Self-Custody</h4>
                    <p className="text-sm text-muted-foreground">You control your own private keys and assets</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is DeFi Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Financial Revolution</Badge>
              <h2 className="text-3xl font-bold mb-6">What is DeFi?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Decentralized Finance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    DeFi (Decentralized Finance) refers to financial services built on blockchain networks that operate without traditional intermediaries like banks. Smart contracts automate financial processes.
                  </p>
                  <p className="text-muted-foreground">
                    DeFi enables lending, borrowing, trading, and earning yield in a permissionless way. No entity can stop you from accessing these services or give you unfair rates based on your identity or location.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Coins className="h-6 w-6 text-primary" />
                    <CardTitle>DeFi Applications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Lending & Borrowing</h4>
                    <p className="text-sm text-muted-foreground">Earn interest or borrow against your crypto</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Decentralized Exchanges</h4>
                    <p className="text-sm text-muted-foreground">Trade cryptocurrencies without intermediaries</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Market Making</h4>
                    <p className="text-sm text-muted-foreground">Earn rewards by providing liquidity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">RWA</h4>
                    <p className="text-sm text-muted-foreground">Tokenized real world assets like real estate and commodities</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Continue Learning</Badge>
            <h2 className="text-3xl font-bold mb-8">Ready to Learn More?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Dive deeper into crypto concepts, understand the risks, and learn how to get started.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/defi/core-concepts">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Core Concepts</CardTitle>
                    <CardDescription>Dive deeper into DeFi fundamentals</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/defi/risks">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">DeFi Risks</CardTitle>
                    <CardDescription>Understand the risks involved</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/defi/wallet-setup">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Wallet Setup</CardTitle>
                    <CardDescription>Get started with DeFi wallets</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}