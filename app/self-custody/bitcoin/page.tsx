import { Shield, Key, HardDrive, CheckCircle, Server, FileText } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BitcoinPage() {
  return (
    <PageLayout 
      title="Bitcoin Self-Custody"
      description="Secure your Bitcoin with clear node, wallet, and backup practices that keep your keys in your hands."
    >
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Bitcoin</Badge>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Bitcoin is at the core</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Financial sovereignty starts here. Run your own verification, keep signing material offline, and make recovery repeatable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Secure wallet setup</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Node</CardTitle>
                  <CardDescription>
                    Connect to your own or a trusted node for trustless verification and privacy.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Hardware wallets</CardTitle>
                  <CardDescription>
                    Keep signing offline; avoid browser extensions for meaningful balances.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Paper backups</CardTitle>
                  <CardDescription>
                    Use tamper-evident, offline backups stored in distinct locations.
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
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Trustless Verification</Badge>
              <h2 className="text-3xl font-bold mb-6">Run Your Own Node</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Verify your own transactions and headers. Prefer your own node; if you must use a remote one, pick a trusted endpoint and rotate periodically.
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
                    Reduce data leakage and avoid third-party RPCs leaking addresses.
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
                    Independent validation so you are not trusting any intermediary.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Advanced Features</Badge>
              <h2 className="text-3xl font-bold mb-6">BIP-85 Key Generation</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Use BIP-85 to derive child keys for separate contexts (heirs, business lines) without exposing the root.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Key className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Single Wallet</CardTitle>
                  <CardDescription>Single-signature wallets for day-to-day or travel amounts.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Multi-Sig</CardTitle>
                  <CardDescription>Multi-sig for higher stakes, inheritance, or shared control.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <HardDrive className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Paper Wallets</CardTitle>
                  <CardDescription>Offline backups stored separately from active devices.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Expert Support</Badge>
            <h2 className="text-3xl font-semibold mb-6">Comprehensive Bitcoin security</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Need hands-on? We can help with node setup, wallet policy design, and tested recovery plans.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
