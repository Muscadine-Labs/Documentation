import { Shield, TrendingUp, DollarSign, Target, Zap, Layers, Coins, Bitcoin, Zap as ZapIcon, ExternalLink } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VaultsAboutPage() {
  return (
    <PageLayout 
      title="About Muscadine Vaults"
      description="On-chain, overcollateralized yield strategies built on Morpho Vaults — transparent fees, clear roles, and self-custodied access."
    >

      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Professional-Grade DeFi</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">About Muscadine Vaults</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Built on Morpho vault infrastructure, Muscadine vaults deploy capital into overcollateralized markets with transparent roles, clear fees, and on-chain verification. Deposits stay in your custody while contracts allocate, harvest, and rebalance automatically — performance-based fees, no management or withdrawal penalties.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                We created these vaults to restore what finance should be: transparent, aligned, empowering. Our mission is financial self-sovereignty — institutional risk discipline with decentralized ownership. Deployed on Ethereum and Base, Muscadine Vaults offer a trusted gateway to DeFi income, always under your control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://app.muscadine.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow h-full hover:bg-primary/5 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-primary" />
                      <CardTitle className="flex items-center gap-2">
                        Launch App <ExternalLink className="h-4 w-4" />
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Access Muscadine vaults — deposit, manage, and withdraw your assets.
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Full custody & transparency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    You retain custody and can verify every action on-chain; the system handles allocation and reporting.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="text-center">
                <Badge variant="outline" className="mb-4">Our Vaults</Badge>
                <h2 className="text-3xl font-semibold tracking-tight mb-6">Three vaults, three profiles</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                Three options aligned to risk/return preferences. All overcollateralized, all transparent.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <CardTitle>USDC Vault</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Stable, lower-volatility yield for capital preservation; ideal for conservative positions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Bitcoin className="h-6 w-6 text-primary" />
                    <CardTitle>cbBTC Vault</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Yield exposure to Bitcoin via Base-native cbBTC; for BTC holders seeking on-chain yield.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Coins className="h-6 w-6 text-primary" />
                    <CardTitle>ETH Vault</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Native ETH strategies compounding rewards from blue-chip lending/staking markets.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">How It Works</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">Simple process, professional results</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Simple process</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                    <p className="font-medium">Deposit assets</p>
                      <p className="text-sm text-muted-foreground">Deposit USDC, cbBTC, or ETH into your chosen vault</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <div>
                    <p className="font-medium">Automatic deployment</p>
                      <p className="text-sm text-muted-foreground">Funds are automatically deployed across trusted lending markets</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <div>
                    <p className="font-medium">Optimized returns</p>
                      <p className="text-sm text-muted-foreground">Smart contracts harvest rewards and rebalance positions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                    <p className="font-medium">Withdraw anytime</p>
                      <p className="text-sm text-muted-foreground">Maintain full control and withdraw your assets whenever needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Built on security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                    <p className="font-medium">Morpho vault infrastructure</p>
                        <p className="text-sm text-muted-foreground">Built on proven, secure vault architecture</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Overcollateralized markets</p>
                        <p className="text-sm text-muted-foreground">Only trusted, overcollateralized lending markets</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ZapIcon className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                    <p className="font-medium">Base network</p>
                        <p className="text-sm text-muted-foreground">Deployed on Coinbase's Layer-2 for efficiency</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Layers className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                    <p className="font-medium">Full transparency</p>
                        <p className="text-sm text-muted-foreground">Complete visibility into all operations and holdings</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">ERC-4626 Standard</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">Built on Morpho-developed and audited vaults</h2>
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Muscadine vaults are built on the ERC-4626 tokenized vault standard, implemented through Morpho-developed and audited vault infrastructure. This ensures interoperability, standardization, and security across the DeFi ecosystem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ERC-4626 provides a standardized interface for yield-bearing vaults, making our vaults compatible with a wide range of DeFi protocols and tools. Each deposit mints shares that appreciate as yield accrues, providing transparent and portable value representation.
              </p>
              <a
                href="https://docs.morpho.org/get-started/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                For more information about Morpho vaults <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Layers className="h-6 w-6 text-primary" />
                    <CardTitle>Morpho-developed infrastructure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our vaults leverage Morpho's battle-tested vault architecture, developed by one of the most trusted teams in DeFi. This infrastructure has been thoroughly audited and proven in production.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Audited and secure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All vault contracts have undergone comprehensive security audits. The ERC-4626 standard ensures consistent behavior and reduces integration risks across the DeFi ecosystem.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
