import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Shield, Zap, TrendingUp } from "lucide-react";

export default function DefiWalletPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            DeFi Wallet Integration
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Seamlessly integrate your self-custody Bitcoin with DeFi protocols. Access yield farming, lending, and other DeFi opportunities while maintaining full control of your assets.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">DeFi Wallet Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Wallet className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Self-Custody Integration</CardTitle>
                <CardDescription>
                  Connect your self-custody Bitcoin wallet to DeFi protocols without compromising security.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Yield Opportunities</CardTitle>
                <CardDescription>
                  Access Bitcoin yield farming and lending opportunities while maintaining custody of your assets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Secure Transactions</CardTitle>
                <CardDescription>
                  Execute DeFi transactions securely with your self-custody wallet and private keys.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Instant Access</CardTitle>
                <CardDescription>
                  Quickly access DeFi protocols and opportunities without complex wallet setups.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">DeFi Wallet Benefits</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our DeFi wallet integration allows you to participate in decentralized finance while maintaining the security and control of self-custody.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">No Custody Compromise</h3>
                <p className="text-muted-foreground">
                  Participate in DeFi without giving up control of your private keys or Bitcoin holdings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Bitcoin DeFi Access</h3>
                <p className="text-muted-foreground">
                  Access Bitcoin-based DeFi protocols and yield opportunities directly from your self-custody wallet.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Easy connection to popular DeFi protocols without complex technical setup or configuration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
                <p className="text-muted-foreground">
                  Built-in risk management tools help you navigate DeFi opportunities safely and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Supported DeFi Protocols</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect to leading DeFi protocols and access Bitcoin yield opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>Lending Protocols</CardTitle>
                  <CardDescription>Access Bitcoin lending opportunities</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>Yield Farming</CardTitle>
                  <CardDescription>Participate in Bitcoin yield farming</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>DEX Integration</CardTitle>
                  <CardDescription>Trade Bitcoin on decentralized exchanges</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Next Steps</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to integrate your Bitcoin with DeFi? Learn about our recovery solutions and get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/self-custody/bitcoin">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Bitcoin Self-Custody</CardTitle>
                    <CardDescription>Learn about Bitcoin self-custody</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/self-custody/recovery">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Recovery Solutions</CardTitle>
                    <CardDescription>Understand our recovery mechanisms</CardDescription>
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
