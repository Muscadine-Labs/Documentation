import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Lock } from "lucide-react";

export default function ContractsPage() {
  return (
    <PageLayout 
      title="Smart Contracts"
      description="All Muscadine Vaults and their associated roles are fully on-chain, transparent, and verifiable. Each contract has been deployed on Base, secured by multi-signature safes, and integrated directly with the Morpho Vault infrastructure."
    >

      {/* Overview Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">On-Chain Transparency</Badge>
              <h2 className="text-3xl font-bold mb-6">Fully Verifiable Contracts</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                All Muscadine Vaults and their associated roles are fully on-chain, transparent, and verifiable. Each contract has been deployed on Base, secured by multi-signature safes, and integrated directly with the Morpho Vault infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <CardTitle>Fully Transparent</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All contracts are audited, immutable, and publicly viewable on BaseScan with complete transparency.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <CardTitle>Multi-Signature Secured</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every role and wallet is multi-signature controlled, ensuring no single entity has unilateral control.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vault Addresses Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Vault Addresses</Badge>
              <h2 className="text-3xl font-bold mb-6">Muscadine Vault Contracts</h2>
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
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
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

      {/* Vault Roles Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Vault Roles</Badge>
              <h2 className="text-3xl font-bold mb-6">Multi-Signature Governance</h2>
            </div>
            
            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Owner (Safe Multisig)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guardian (Safe Multisig)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0x64e804eEF4F5a53272A8623b563ad2724E98A0a9</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0x64e804eEF4F5a53272A8623b563ad2724E98A0a9" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Curator (Safe Multisig)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Allocator Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Allocator</Badge>
              <h2 className="text-3xl font-bold mb-6">Capital Deployment</h2>
            </div>
            
            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Public Allocator (Morpho smart contract)</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Integrated directly with Morpho Vault infrastructure for automated capital deployment and rebalancing.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Muscadine Hot Wallet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ignas Smart Wallet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0x0D5A708B651FeE1DAA0470431c4262ab3e1D0261</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0x0D5A708B651FeE1DAA0470431c4262ab3e1D0261" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Splitting Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Fee Splitting</Badge>
              <h2 className="text-3xl font-bold mb-6">Revenue Distribution</h2>
            </div>
            
            <div className="space-y-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Fee Contract</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Contract Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm">0x194DeC45D34040488f355823e1F94C0434304188</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0x194DeC45D34040488f355823e1F94C0434304188" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
