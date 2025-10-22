import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, Shield, Key, AlertTriangle } from "lucide-react";

export default function RecoveryPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Recovery Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive recovery mechanisms ensure you can always access your Bitcoin and DeFi assets, even in emergency situations. Multiple backup and recovery options provide peace of mind.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Recovery Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <HardDrive className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Backup Mechanisms</CardTitle>
                <CardDescription>
                  Multiple backup systems ensure your Bitcoin and wallet data are safely stored and recoverable.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Key Recovery</CardTitle>
                <CardDescription>
                  Advanced key recovery protocols help you regain access to your Bitcoin and DeFi assets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Secure Recovery</CardTitle>
                <CardDescription>
                  Recovery processes maintain the highest security standards to protect your assets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Emergency Access</CardTitle>
                <CardDescription>
                  Emergency recovery procedures ensure you can access your funds when you need them most.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Recovery Process</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our recovery solutions are designed to be both secure and user-friendly, ensuring you can regain access to your Bitcoin and DeFi assets when needed.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Multi-Factor Recovery</h3>
                <p className="text-muted-foreground">
                  Multiple recovery factors ensure you can regain access even if some credentials are lost.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Encrypted Backups</h3>
                <p className="text-muted-foreground">
                  All backup data is encrypted and stored securely to protect your Bitcoin and wallet information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Recovery Verification</h3>
                <p className="text-muted-foreground">
                  Recovery processes include verification steps to ensure only authorized access to your assets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Recovery assistance is available around the clock to help you regain access to your funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Recovery Types</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Different recovery options for different situations and security preferences.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>Wallet Recovery</CardTitle>
                  <CardDescription>Recover access to your Bitcoin wallet</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>DeFi Asset Recovery</CardTitle>
                  <CardDescription>Recover DeFi positions and assets</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle>Emergency Recovery</CardTitle>
                  <CardDescription>Emergency access procedures</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Best Practices</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow these best practices to ensure your Bitcoin and DeFi assets are always recoverable.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Regular Backups</h3>
                <p className="text-muted-foreground">
                  Create regular backups of your wallet data and recovery information to ensure you always have access.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Secure Storage</h3>
                <p className="text-muted-foreground">
                  Store recovery information in secure, offline locations to protect against digital threats.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Test Recovery</h3>
                <p className="text-muted-foreground">
                  Regularly test your recovery procedures to ensure they work when you need them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Multiple Methods</h3>
                <p className="text-muted-foreground">
                  Use multiple recovery methods to ensure redundancy and increase your chances of successful recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Started</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Learn more about Bitcoin self-custody and DeFi wallet integration to complete your setup.
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
              <Link href="/self-custody/defi-wallet">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>DeFi Wallet</CardTitle>
                    <CardDescription>Explore DeFi wallet integration</CardDescription>
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
