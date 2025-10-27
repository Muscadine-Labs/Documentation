import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Shield, Key, HardDrive, Server, Wallet, FileText, TrendingUp, Zap, Building2 } from "lucide-react";

export default function DefiWalletPage() {
  return (
    <PageLayout 
      title="DeFi Self-Custody"
      description="Access DeFi protocols while maintaining full control of your digital assets with Muscadine's self-custody solutions."
    >
      {/* DeFi Evolution Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">DeFi</Badge>
              <h2 className="text-3xl font-bold mb-6">The Evolution of Finance</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 text-left">
              Decentralized finance represents the evolution of traditional finance—transparent, programmable, and user-controlled. But with this freedom comes the responsibility of managing your own keys safely. Muscadine's DeFi Self-Custody solutions are built for those who want access to on-chain lending, borrowing, and yield strategies without sacrificing ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">DeFi Infrastructure</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Base Network Integration</CardTitle>
                  <CardDescription>
                    Leverage Base network's scalability and low fees for efficient DeFi operations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Wallet className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Self-Custody Wallets</CardTitle>
                  <CardDescription>
                    Maintain full control of your private keys while accessing DeFi protocols.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Smart Contract Interaction</CardTitle>
                  <CardDescription>
                    Direct interaction through our dashboards and curated vaults.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">DeFi Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Liquidity Provision</CardTitle>
                  <CardDescription>
                    Provide liquidity to DeFi protocols while maintaining self-custody of your assets.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Lending & Borrowing</CardTitle>
                  <CardDescription>
                    Access on-chain lending and borrowing opportunities with full asset control.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Token Staking</CardTitle>
                  <CardDescription>
                    Stake tokens across various protocols while keeping your keys secure.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Management Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="text-center">
                <Badge variant="outline" className="mb-4">Key Management</Badge>
                <h2 className="text-3xl font-bold mb-6">Safe Exposure Segmentation</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                Our key-management model lets you safely segment exposure using multi-wallet setups, paper vaults, or BIP-85 child keys. This structure allows you to participate in DeFi while minimizing systemic risk and maintaining control of your funds at all times.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Key className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Multi-Wallet Setups</CardTitle>
                  <CardDescription>
                    Distribute risk across multiple wallets for different DeFi strategies.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Paper Vaults</CardTitle>
                  <CardDescription>
                    Offline storage solutions for maximum security and risk isolation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <HardDrive className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">BIP-85 Child Keys</CardTitle>
                  <CardDescription>
                    Hierarchical key generation for organized and secure DeFi management.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </PageLayout>
  );
}
