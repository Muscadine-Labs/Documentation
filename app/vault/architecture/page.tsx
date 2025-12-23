import { Shield, Zap, TrendingUp, Settings, Layers, Building2, Target, Coins } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VaultArchitecturePage() {
  return (
    <PageLayout 
      title="Vault Architecture"
      description="Morpho-based ERC-4626 vaults with clear roles, modular adapters, and on-chain verification."
    >

      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">ERC-4626 Standard</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">Built on modern standards</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                ERC-4626 vaults on Base, isolated per product, allocating into approved overcollateralized markets via Morpho adapters.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deposits mint 4626 shares that appreciate as yield accrues — portable, auditable, and interoperable across DeFi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Layers className="h-6 w-6 text-primary" />
                    <CardTitle>Standardized tokens</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every depositor's share is represented by a standardized ERC-4626 token that grows in value as the vault earns yield.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Fully auditable</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Returns are fully auditable, portable, and interoperable across DeFi with institutional-grade accounting.
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
              <Badge variant="outline" className="mb-4">Modular Integration</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-6">Secure protocol integration</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Morpho adapters integrate only approved overcollateralized markets (e.g., Moonwell). Curator sets params, Allocator executes, Guardian safeguards — all time-locked and on-chain.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Curator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Defines strategy parameters including collateral caps, market selection, and reallocation logic.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Allocator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Executes the defined strategies and manages the deployment of assets across approved markets.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Guardian</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Safeguards the vault operations and ensures compliance with security parameters.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <Badge variant="outline" className="mb-4">Best of Both Worlds</Badge>
              <h2 className="text-3xl font-bold mb-6">Efficiency Meets Discipline</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-left">
                This design gives Muscadine Vaults the best of both worlds: the efficiency and transparency of decentralized finance, and the discipline of traditional portfolio management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-left">
                Deposits remain fully liquid, yield accrues automatically, and all activity is verifiable on-chain — a secure foundation for sustainable, self-custodied income.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <CardTitle>DeFi Efficiency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Leverages the efficiency and transparency of decentralized finance with automated yield generation and transparent operations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <CardTitle>Traditional Discipline</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Maintains the discipline of traditional portfolio management with proper risk controls and institutional-grade accounting.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Key Features</Badge>
              <h2 className="text-3xl font-bold mb-6">Secure Foundation for Income</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Coins className="h-6 w-6 text-primary" />
                    <CardTitle>Fully Liquid Deposits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your deposits remain fully liquid with the ability to withdraw at any time while earning yield.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Automatic Yield Accrual</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Yield accrues automatically through smart contract execution without manual intervention.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>On-Chain Verification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All activity is verifiable on-chain, providing complete transparency and auditability.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <CardTitle>Self-Custodied Income</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Maintains self-custody while providing a secure foundation for sustainable income generation.
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
