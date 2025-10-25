import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Shield, Key, HardDrive, CheckCircle, ArrowRight } from "lucide-react";

export default function BitcoinPage() {
  return (
    <PageLayout 
      title="Bitcoin Self-Custody"
      description="Secure your Bitcoin with Muscadine's self-custody solutions. Take full control of your private keys and maintain complete ownership of your digital assets."
    >
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl font-bold mb-6">Bitcoin Self-Custody Features</h2>
          </div>
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

      {/* Why Choose Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Why Choose</Badge>
            <h2 className="text-3xl font-bold mb-8">Why Choose Bitcoin Self-Custody?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Self-custody gives you complete ownership and control over your Bitcoin, eliminating counterparty risk and ensuring your assets are truly yours.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Counterparty Risk</h3>
                  <p className="text-muted-foreground">
                    Your Bitcoin is not held by any third party, eliminating the risk of exchange hacks or regulatory seizure.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Ownership</h3>
                  <p className="text-muted-foreground">
                    You own your private keys, meaning you have complete control and ownership of your Bitcoin.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy Protection</h3>
                  <p className="text-muted-foreground">
                    Self-custody solutions provide enhanced privacy by keeping your Bitcoin holdings private.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
                  <p className="text-muted-foreground">
                    Access your Bitcoin anytime, anywhere, without relying on third-party services or business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Getting Started</Badge>
            <h2 className="text-3xl font-bold mb-8">Ready to Secure Your Bitcoin?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Learn more about our DeFi wallet and recovery solutions to get started with Bitcoin self-custody.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/self-custody/defi-wallet">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      DeFi Wallet
                    </CardTitle>
                    <CardDescription>
                      Learn about our DeFi wallet integration and features
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/self-custody/recovery">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Recovery Solutions
                    </CardTitle>
                    <CardDescription>
                      Understand our recovery mechanisms and backup options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
