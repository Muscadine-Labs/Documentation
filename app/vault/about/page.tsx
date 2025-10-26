import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, DollarSign, Building2, Target, Zap, Layers, Coins, Bitcoin, Zap as ZapIcon } from "lucide-react";

export default function VaultsAboutPage() {
  return (
    <PageLayout 
      title="About Muscadine Vaults"
      description="Muscadine Vaults are a curated suite of on-chain yield products built on Morpho Vault infrastructure — designed to bring professional-grade income strategies to decentralized finance."
    >

      {/* Introduction Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Professional-Grade DeFi</Badge>
              <h2 className="text-3xl font-bold mb-6">About Muscadine Vaults</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                By leveraging Morpho's transparent and efficient vault architecture, we make it simple for individuals and institutions to earn real yield on their digital assets, without intermediaries or hidden risk.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you deposit assets into a Muscadine Vault, your funds are automatically deployed across trustless, overcollateralized lending markets to generate optimized returns. Each vault is managed by smart contracts that allocate capital, harvest rewards, and rebalance positions in real time — so your assets are always working efficiently on-chain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Full Custody & Transparency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    You retain full custody and transparency at every step, while the system handles the complexity behind the scenes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Automated Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Smart contracts automatically allocate capital, harvest rewards, and rebalance positions in real time for optimal efficiency.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vaults Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Vaults</Badge>
              <h2 className="text-3xl font-bold mb-6">Three Distinct Investment Strategies</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We currently offer three Muscadine Vaults — USDC, cbBTC, and ETH — each designed to fit a distinct investor profile.
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
                    Focuses on stable, low-volatility yield for capital preservation. Ideal for conservative investors seeking steady returns.
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
                    Offers yield exposure to Bitcoin through Coinbase's wrapped, Base-native asset. Perfect for Bitcoin holders seeking additional yield.
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
                    Provides native Ethereum yield strategies, compounding rewards from blue-chip lending and staking markets.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold mb-6">Restoring What Finance Should Be</h2>
            </div>
            
            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At Muscadine Labs, we created these vaults to restore what finance should be: transparent, aligned, and empowering.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our mission is to make financial self-sovereignty practical — combining the rigor of institutional risk management with the freedom of decentralized ownership.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built on the security of Morpho Vaults and deployed on Base, Muscadine Vaults give investors a trusted gateway to DeFi income — clear, efficient, and always under your control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <CardTitle>Institutional Rigor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We combine the rigor of institutional risk management with the freedom of decentralized ownership, ensuring professional-grade strategies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Self-Sovereignty</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Making financial self-sovereignty practical through transparent, efficient, and always controllable DeFi income strategies.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">How It Works</Badge>
              <h2 className="text-3xl font-bold mb-6">Simple Process, Professional Results</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Simple Process</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Deposit Assets</p>
                      <p className="text-sm text-muted-foreground">Deposit USDC, cbBTC, or ETH into your chosen vault</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Automatic Deployment</p>
                      <p className="text-sm text-muted-foreground">Funds are automatically deployed across trusted lending markets</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Optimized Returns</p>
                      <p className="text-sm text-muted-foreground">Smart contracts harvest rewards and rebalance positions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Withdraw Anytime</p>
                      <p className="text-sm text-muted-foreground">Maintain full control and withdraw your assets whenever needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Built on Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Morpho Vault Infrastructure</p>
                        <p className="text-sm text-muted-foreground">Built on proven, secure vault architecture</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Overcollateralized Markets</p>
                        <p className="text-sm text-muted-foreground">Only trusted, overcollateralized lending markets</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ZapIcon className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Base Network</p>
                        <p className="text-sm text-muted-foreground">Deployed on Coinbase's Layer-2 for efficiency</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Layers className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Full Transparency</p>
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

      <Footer />
    </PageLayout>
  );
}
