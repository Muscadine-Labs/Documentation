import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Key, HardDrive, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SelfCustodyAboutPage() {
  return (
    <PageLayout 
      title="About Self-Custody Solutions"
      description="Learn about Muscadine Labs' self-custody solutions that give you complete control over your digital assets and private keys."
    >
      {/* Self-Custody Overview Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Self-Custody</Badge>
              <h2 className="text-3xl font-bold mb-6">Complete Control Over Your Assets</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our self-custody solutions empower you to maintain full ownership and control of your digital assets, eliminating counterparty risk and ensuring your funds are truly yours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Key className="h-6 w-6 text-primary" />
                    <CardTitle>Private Key Control</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    You maintain complete control over your private keys with no third-party custody risks.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Enhanced Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced security measures protect your digital assets with industry-leading encryption and protocols.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <HardDrive className="h-6 w-6 text-primary" />
                    <CardTitle>Recovery Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Multiple recovery mechanisms ensure you can always access your assets when needed.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>24/7 Access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access your assets anytime, anywhere, without relying on third-party services or business hours.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Benefits</Badge>
            <h2 className="text-3xl font-bold mb-8">Why Choose Self-Custody?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Self-custody gives you complete ownership and control over your digital assets, eliminating counterparty risk and ensuring your assets are truly yours.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Counterparty Risk</h3>
                  <p className="text-muted-foreground">
                    Your assets are not held by any third party, eliminating the risk of exchange hacks or regulatory seizure.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Ownership</h3>
                  <p className="text-muted-foreground">
                    You own your private keys, meaning you have complete control and ownership of your digital assets.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy Protection</h3>
                  <p className="text-muted-foreground">
                    Self-custody solutions provide enhanced privacy by keeping your asset holdings private.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Financial Sovereignty</h3>
                  <p className="text-muted-foreground">
                    Take back control of your financial future with true self-sovereignty over your assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Learn More</Badge>
            <h2 className="text-3xl font-bold mb-8">Explore Self-Custody Solutions</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our specific self-custody solutions and learn how to secure your digital assets.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/self-custody/bitcoin">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Bitcoin</CardTitle>
                    <CardDescription>Secure your Bitcoin with self-custody solutions</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/self-custody/defi-wallet">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">DeFi Wallet</CardTitle>
                    <CardDescription>Learn about our DeFi wallet integration</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/self-custody/recovery">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Recovery</CardTitle>
                    <CardDescription>Understand our recovery mechanisms</CardDescription>
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