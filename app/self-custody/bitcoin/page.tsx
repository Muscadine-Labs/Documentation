import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Shield, Key, HardDrive, CheckCircle, Server, FileText } from "lucide-react";

export default function BitcoinPage() {
  return (
    <PageLayout 
      title="Bitcoin Self-Custody"
      description="Secure your Bitcoin with Muscadine's self-custody solutions. Take full control of your private keys and maintain complete ownership of your digital assets."
    >
      {/* Bitcoin Core Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Bitcoin</Badge>
            <h2 className="text-3xl font-bold mb-6">Bitcoin is at the Core</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bitcoin is at the core of everything we do. It represents financial sovereignty, censorship resistance, and enduring value. At Muscadine, our Bitcoin Self-Custody solutions are designed for individuals who want to truly own their Bitcoin—not just hold an IOU on an exchange.
            </p>
          </div>
        </div>
      </section>

      {/* Wallet Support Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Secure Wallet Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Node Support</CardTitle>
                  <CardDescription>
                    Connect to our Bitcoin node for trustless verification and enhanced privacy.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Hardware Wallets</CardTitle>
                  <CardDescription>
                    Secure your Bitcoin with industry-leading hardware wallet integration and support.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Paper Backups</CardTitle>
                  <CardDescription>
                    Offline backup solutions for maximum security and long-term storage.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Node Verification Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Trustless Verification</Badge>
              <h2 className="text-3xl font-bold mb-6">Run Your Own Node</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Users can verify every transaction themselves by connecting directly to our node—available at <a href="https://muscadine.io/node" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">muscadine.io/node</a>—ensuring that they operate trustlessly and independently of third parties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Server className="h-6 w-6 text-primary" />
                    <CardTitle>Enhanced Privacy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Running your own node enhances privacy by eliminating reliance on external servers and third-party data providers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <CardTitle>Independent Verification</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Verify your own copy of Bitcoin's ledger, reinforcing your autonomy and ensuring complete trustlessness.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Advanced Features</Badge>
              <h2 className="text-3xl font-bold mb-6">BIP-85 Key Generation</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our approach to Bitcoin self-custody integrates single, multi-sig, and paper-wallet options with BIP-85-based key generation for managing master and child wallets. This enables long-term wealth division and inheritance planning without ever compromising the root keys.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Key className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Single Wallet</CardTitle>
                  <CardDescription>
                    Secure single-signature wallet setup for individual Bitcoin management.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Multi-Sig</CardTitle>
                  <CardDescription>
                    Enhanced security through multi-signature wallet configurations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <HardDrive className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Paper Wallets</CardTitle>
                  <CardDescription>
                    Offline paper wallet solutions for maximum security and inheritance planning.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Expert Support</Badge>
            <h2 className="text-3xl font-bold mb-8">Comprehensive Bitcoin Security</h2>
            <p className="text-xl text-muted-foreground mb-8">
              For guidance on node setup, Sparrow configuration, and comprehensive Bitcoin security design, reach out to us directly. We'll help you implement the safest, most resilient Bitcoin framework possible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
