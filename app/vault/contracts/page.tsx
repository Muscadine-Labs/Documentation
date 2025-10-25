import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/Callout";
import { ExternalLink, FileText, Shield } from "lucide-react";

export default function ContractsPage() {
  return (
    <PageLayout 
      title="Smart Contracts"
      description="Smart contract addresses and verification information for all Muscadine Labs vaults and management contracts."
    >
      {/* Overview Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Contract Addresses</Badge>
              <h2 className="text-3xl font-bold mb-6">Deployed Contracts</h2>
              <p className="text-xl text-muted-foreground mb-8">
                All Muscadine Labs contracts are deployed on the Base network and are fully auditable on-chain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle>Vault Contracts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automated yield strategies for USDC, cbBTC, and WETH assets deployed on Base network.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Management Contracts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Multisig wallets and role-based access control for secure vault management.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vault Contracts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Vault Contracts</Badge>
              <h2 className="text-3xl font-bold mb-6">Automated Yield Strategies</h2>
            </div>
            
            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Muscadine USDC Vault</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Asset:</span>
                    <span>USD Coin (USDC)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Strategy:</span>
                    <span>Optimized lending across multiple protocols</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Muscadine cbBTC Vault</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Asset:</span>
                    <span>Coinbase Wrapped Bitcoin (cbBTC)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Strategy:</span>
                    <span>Bitcoin-backed lending and yield farming</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0xaecc8113a7bd0cfaf7000ea7a31affd4691ff3e9" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Muscadine WETH Vault</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0x21e0d366272798da3A977FEBA699FCB91959d120</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Asset:</span>
                    <span>Wrapped Ethereum (WETH)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Strategy:</span>
                    <span>Ethereum staking and DeFi yield optimization</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0x21e0d366272798da3A977FEBA699FCB91959d120" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <Callout type="info">
        <strong>Contract Verification:</strong> All contracts are verified on BaseScan. Visit the explorer links above to view source code, functions, and transaction history.
      </Callout>

      <Callout type="warning">
        <strong>Security Reminder:</strong> Always verify contract addresses before interacting. Double-check that you're using the correct addresses listed above.
      </Callout>

      <Footer />
    </PageLayout>
  );
}
