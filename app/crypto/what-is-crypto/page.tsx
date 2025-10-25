import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { TrendingUp, Shield, Zap, Coins, Globe, ArrowRight, CheckCircle } from "lucide-react";

export default function WhatIsCryptoPage() {
  return (
    <PageLayout 
      title="What is Crypto?"
      description="Cryptocurrency and blockchain technology represent a revolutionary financial system that operates without traditional intermediaries like banks, enabling anyone to access financial services globally."
    >
      {/* Core Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Core Principles</Badge>
            <h2 className="text-3xl font-bold mb-6">Core Crypto Principles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Permissionless</CardTitle>
                <CardDescription>
                  Anyone can access crypto protocols without approval from centralized authorities or geographic restrictions.
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

      {/* Key Applications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Applications</Badge>
            <h2 className="text-3xl font-bold mb-8">Key Crypto Applications</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Crypto encompasses a wide range of financial services that were traditionally only available through banks and financial institutions.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cryptocurrency Trading</h3>
                  <p className="text-muted-foreground">
                    Trade cryptocurrencies directly with other users without intermediaries, maintaining control of your assets.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lending & Borrowing</h3>
                  <p className="text-muted-foreground">
                    Lend your assets to earn interest or borrow against your holdings without traditional credit checks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Yield Generation</h3>
                  <p className="text-muted-foreground">
                    Provide liquidity to crypto protocols and earn rewards in return for supporting the ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Staking</h3>
                  <p className="text-muted-foreground">
                    Lock up your tokens to support blockchain networks and earn staking rewards in return.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi vs Traditional Finance Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Comparison</Badge>
            <h2 className="text-3xl font-bold mb-6">Crypto vs Traditional Finance</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-green-600">Crypto Advantages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-red-600">Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Muscadine Labs & DeFi Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Muscadine Labs</Badge>
            <h2 className="text-3xl font-bold mb-8">Muscadine Labs & Crypto</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Muscadine Labs provides secure crypto solutions that combine the benefits of cryptocurrency with robust security measures and self-custody options.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Coins className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Bitcoin Solutions</CardTitle>
                  <CardDescription>Access crypto opportunities with Bitcoin while maintaining self-custody</CardDescription>
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
                  <CardDescription>Comprehensive risk frameworks for safe crypto participation</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Continue Learning</Badge>
            <h2 className="text-3xl font-bold mb-8">Learn More</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Continue your crypto education with our comprehensive guides and resources.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/crypto/core-concepts">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Core Concepts</CardTitle>
                    <CardDescription>Dive deeper into crypto fundamentals</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/crypto/risks">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Crypto Risks</CardTitle>
                    <CardDescription>Understand the risks involved</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/crypto/wallet-setup">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Wallet Setup</CardTitle>
                    <CardDescription>Get started with crypto wallets</CardDescription>
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
