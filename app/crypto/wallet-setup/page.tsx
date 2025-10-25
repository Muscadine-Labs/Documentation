import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Shield, Key, Smartphone, Monitor } from "lucide-react";

export default function WalletSetupPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Crypto Wallet Setup
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn how to set up and secure your crypto wallet to safely interact with cryptocurrency protocols.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Crypto Wallets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Mobile Wallets</CardTitle>
                <CardDescription>
                  Convenient for daily use and smaller transactions. Examples: MetaMask Mobile, Trust Wallet, Rainbow.
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
                  Easy integration with DeFi websites. Examples: MetaMask, Coinbase Wallet, Phantom.
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
                  Maximum security for large amounts. Examples: Ledger, Trezor, KeepKey.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Step-by-Step Setup Guide</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Wallet</h3>
                  <p className="text-muted-foreground">Select a wallet that fits your needs. For beginners, we recommend MetaMask for its ease of use and wide DeFi compatibility.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Download and Install</h3>
                  <p className="text-muted-foreground">Download from official sources only. Never use third-party download links to avoid malicious software.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Create or Import Wallet</h3>
                  <p className="text-muted-foreground">Create a new wallet or import an existing one using your seed phrase. Never share your seed phrase with anyone.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Your Seed Phrase</h3>
                  <p className="text-muted-foreground">Write down your seed phrase on paper and store it securely offline. Never store it digitally or share it with anyone.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Add Networks</h3>
                  <p className="text-muted-foreground">Add the blockchain networks you plan to use (Ethereum, Base, Arbitrum, etc.) to your wallet.</p>
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Wallet Recommendations</h2>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Wallet className="h-6 w-6 text-primary" />
                    <CardTitle>MetaMask</CardTitle>
                  </div>
                  <CardDescription>
                    <strong>Best for:</strong> Beginners and DeFi users<br />
                    <strong>Features:</strong> Browser extension, mobile app, easy DeFi integration<br />
                    <strong>Security:</strong> Good for moderate amounts, consider hardware wallet for large amounts
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Ledger Hardware Wallet</CardTitle>
                  </div>
                  <CardDescription>
                    <strong>Best for:</strong> Large amounts and maximum security<br />
                    <strong>Features:</strong> Offline storage, PIN protection, recovery phrase<br />
                    <strong>Security:</strong> Highest level of security for crypto storage
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <CardTitle>Trust Wallet</CardTitle>
                  </div>
                  <CardDescription>
                    <strong>Best for:</strong> Mobile-first users<br />
                    <strong>Features:</strong> Multi-chain support, built-in DEX, staking<br />
                    <strong>Security:</strong> Good mobile security, biometric authentication
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Getting Started with Muscadine</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Once your wallet is set up, you can start using Muscadine Labs' DeFi vaults.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect Your Wallet</h3>
                <p className="text-muted-foreground">
                  Visit our app and connect your wallet to start using our automated yield strategies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Start Small</h3>
                <p className="text-muted-foreground">
                  Begin with small amounts to familiarize yourself with the platform before committing larger sums.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://app.muscadine.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Wallet className="h-5 w-5 mr-2" />
                Launch Muscadine App
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Learn More</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Continue your DeFi education with our comprehensive guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/defi/what-is-defi">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>What is DeFi?</CardTitle>
                    <CardDescription>Back to DeFi basics</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/defi/core-concepts">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Core Concepts</CardTitle>
                    <CardDescription>Understand DeFi fundamentals</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/defi/risks">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>DeFi Risks</CardTitle>
                    <CardDescription>Understand the risks involved</CardDescription>
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