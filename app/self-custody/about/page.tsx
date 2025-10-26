import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Key, HardDrive, CheckCircle } from "lucide-react";

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
              <h2 className="text-3xl font-bold mb-6">Financial Self-Sovereignty</h2>
              <p className="text-xl text-muted-foreground mb-8">
                At Muscadine we believe financial self-sovereignty is fundamental. Our Self-Custody Solutions platform empowers users to take full control of their private keys and digital wealth—whether you're managing Bitcoin, participating in DeFi, or simply planning generational wealth transfer.
              </p>
            </div>

            {/* Unified Framework Section */}
            <div className="mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Key className="h-6 w-6 text-primary" />
                    <CardTitle>Unified Key Management Framework</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We offer a unified framework for key-management across single-, multi- and paper-wallet formats, so you're never tethered to third-party custody.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Features Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Advanced Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <HardDrive className="h-6 w-6 text-primary" />
                      <CardTitle>BIP-85 Hierarchical Key Generation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Advanced BIP-85 hierarchical master- and child-key generation enables you to create vaults for multiple wallets (for children, heirs, siblings, business partners) without ever compromising your root key.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <CardTitle>Multi-Purpose Wallet Architecture</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Securely divide wallets for different purposes or generations while keeping risk low. Perfect for generational wealth planning and business partnerships.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Support Section */}
            <div className="mb-12">
              <Card className="hover:shadow-lg transition-shadow bg-primary/5">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Comprehensive Support & Guidance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Whether you're starting your first wallet or architecting a generational wealth infrastructure, contact us for comprehensive guides and one-on-one setup support—our team will walk you through selecting the right wallet type, implementing recovery planning, and executing a self-custody strategy tailored to your goals.
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


      <Footer />
    </PageLayout>
  );
}