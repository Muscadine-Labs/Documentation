import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Key, Smartphone, Monitor } from "lucide-react";

export default function WalletSetupPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            DeFi Wallet Setup
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn how to set up and secure your DeFi wallet to safely interact with decentralized finance protocols.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Types of DeFi Wallets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Mobile Wallets</CardTitle>
                <CardDescription>
                  Convenient for daily use and smaller transactions. Examples: MetaMask Mobile, Coinbase Wallet, Rabby.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Browser Extensions</CardTitle>
                <CardDescription>
                  Easy integration with DeFi websites. Examples: Rabby, MetaMask, Coinbase Wallet, Phantom.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Hardware Wallets</CardTitle>
                <CardDescription>
                  Maximum security for large amounts. Examples: Ledger, Trezor.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Muscadine Recommendations</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Wallet Type</h3>
                  <p className="text-muted-foreground">Select a hot wallet for small amounts or a cold wallet for large amounts. If you're not tech-savvy, consider Coinbase Smart Wallet where your wallet is your email account or a passkey on your phone.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Your Private Keys</h3>
                  <p className="text-muted-foreground">Always securely enter or receive your private keys and write them down on paper. Never share your private keys with anyone or store them digitally.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Use Your Public Address</h3>
                  <p className="text-muted-foreground">Only share your public address for receiving funds. This is safe to share publicly and is how others can send you cryptocurrency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Double-Check Addresses</h3>
                  <p className="text-muted-foreground">Always double-check when sending or receiving that you're using the correct address. One wrong character can result in permanent loss of funds.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Add BASE Network</h3>
                  <p className="text-muted-foreground">Muscadine uses the BASE network. Add BASE to your wallet and ensure you have ETH for gas fees to interact with our vaults.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Test with Small Amounts</h3>
                  <p className="text-muted-foreground">Start with small amounts to test your setup and familiarize yourself with the process before committing larger sums.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Security Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-600">Do's</CardTitle>
                </div>
                <CardDescription className="text-base space-y-2">
                  <div>• Use hardware wallets for large amounts</div>
                  <div>• Enable all available security features</div>
                  <div>• Keep software updated</div>
                  <div>• Use strong, unique passwords</div>
                  <div>• Verify contract addresses before interacting</div>
                  <div>• Start with small amounts to test</div>
                  <div>• Use official websites and apps only</div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-red-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Key className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-red-600">Don'ts</CardTitle>
                </div>
                <CardDescription className="text-base space-y-2">
                  <div>• Never share your seed phrase</div>
                  <div>• Don't store seed phrases digitally</div>
                  <div>• Avoid clicking suspicious links</div>
                  <div>• Don't use public WiFi for transactions</div>
                  <div>• Never send funds to unverified addresses</div>
                  <div>• Don't trust DMs or unsolicited messages</div>
                  <div>• Avoid "too good to be true" offers</div>
                </CardDescription>
              </CardHeader>
            </Card>
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
              <Link href="/contracts" className="text-sm text-muted-foreground hover:text-foreground">
                Contracts
              </Link>
              <Link href="/risk" className="text-sm text-muted-foreground hover:text-foreground">
                Risk Framework
              </Link>
              <a href="https://muscadine.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                Main Website
              </a>
              <a href="https://app.muscadine.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                App
              </a>
              <a href="mailto:contact@muscadine.io" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
      </div>
      </footer>
    </div>
  );
}