import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Key, HardDrive } from "lucide-react";

export default function BitcoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Bitcoin Self-Custody
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Secure your Bitcoin with Muscadine's self-custody solutions. Take full control of your private keys and maintain complete ownership of your digital assets.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Bitcoin Self-Custody Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Private Key Control</CardTitle>
                <CardDescription>
                  You maintain complete control over your Bitcoin private keys. No third-party custody risks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Enhanced Security</CardTitle>
                <CardDescription>
                  Advanced security measures protect your Bitcoin holdings with industry-leading encryption.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <HardDrive className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Recovery Options</CardTitle>
                <CardDescription>
                  Multiple recovery mechanisms ensure you can always access your Bitcoin when needed.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Bitcoin Self-Custody?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Self-custody gives you complete ownership and control over your Bitcoin, eliminating counterparty risk and ensuring your assets are truly yours.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">No Counterparty Risk</h3>
                <p className="text-muted-foreground">
                  Your Bitcoin is not held by any third party, eliminating the risk of exchange hacks or regulatory seizure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Complete Ownership</h3>
                <p className="text-muted-foreground">
                  You own your private keys, meaning you have complete control and ownership of your Bitcoin.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Privacy Protection</h3>
                <p className="text-muted-foreground">
                  Self-custody solutions provide enhanced privacy by keeping your Bitcoin holdings private.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">24/7 Access</h3>
                <p className="text-muted-foreground">
                  Access your Bitcoin anytime, anywhere, without relying on third-party services or business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to secure your Bitcoin with self-custody? Learn more about our DeFi wallet and recovery solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/self-custody/defi-wallet">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>DeFi Wallet</CardTitle>
                    <CardDescription>Learn about our DeFi wallet integration</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/self-custody/recovery">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Recovery</CardTitle>
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
              <a href="https://muscadine.io/bitcoin" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                Bitcoin Solutions
              </a>
              <a href="https://muscadine.io/defi" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                DeFi Platform
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
