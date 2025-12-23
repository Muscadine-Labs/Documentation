import { Shield, Key, HardDrive, Server, Wallet, FileText, TrendingUp, Zap, Building2 } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DefiWalletPage() {
  return (
    <PageLayout 
      title="DeFi Self-Custody"
      description="Interact with DeFi while keeping keys segmented, backed up, and ready to recover."
    >
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">DeFi</Badge>
              <h2 className="text-3xl font-semibold mb-6">Operate on-chain without giving up keys</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 text-left">
              Keep a clear boundary: hot for interactions, cold for storage, and rehearsed recovery for peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">DeFi infrastructure</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Base network</CardTitle>
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
                  <CardTitle className="text-lg">Self-custody wallets</CardTitle>
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
                  <CardTitle className="text-lg">Smart contract access</CardTitle>
                  <CardDescription>
                    Direct interaction through our dashboards and curated vaults.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">DeFi activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Liquidity Provision</CardTitle>
                  <CardDescription>
                    Provide liquidity while keeping wallets segmented and capped.
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
                    Lend/borrow with pre-set limits and monitored allowances.
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
                    Stake with hardware-backed keys and short approval windows.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="text-center">
                <Badge variant="outline" className="mb-4">Key Management</Badge>
                <h2 className="text-3xl font-semibold mb-6">Safe exposure segmentation</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                Segment by purpose. Use multi-wallet setups, paper vaults, or BIP-85 child keys. Keep approvals minimal and rotate regularly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Key className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Multi-wallet setups</CardTitle>
                  <CardDescription>
                    Distribute risk across wallets for different strategies and sizes.
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
                    Offline storage for recovery materials; keep separate from active devices.
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
                    Derive child keys for activity while the root stays cold.
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
