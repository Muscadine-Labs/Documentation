import { Shield, Target, Zap, Clock, ExternalLink, Wallet } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RolesContractsPage() {
  return (
    <PageLayout 
      title="Roles & Contracts"
      description="Clear on-chain roles, verified contracts, multi-sig protections, and time locks to prevent unilateral changes."
    >

      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Governance Model</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Clear, on-chain role system</h2>
              <p className="text-lg text-muted-foreground">
                Roles are enforced on-chain with multi-sig and time locks. No single actor can act alone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Curator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Defines strategy, sets risk parameters, and approves markets.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Allocator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Executes rebalances and manages capital deployment.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Guardian</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Can pause operations in emergencies to protect depositors.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Multi-signature protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All roles require multiple signatures for important operations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle>Time-locked changes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Critical changes are protected by time locks for review.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vault Contracts Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Vault Contracts</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Verified vault addresses</h2>
              <p className="text-muted-foreground">
                All contracts are deployed on Base, secured by multi-sig safes, and verifiable on BaseScan.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">V1 Vaults</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Muscadine USDC Vault</CardTitle>
                    </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0x21e0d366272798da3A977FEBA699FCB91959d120</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0x21e0d366272798da3A977FEBA699FCB91959d120" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">V2 Vaults</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Muscadine USDC Prime</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium">Address:</span>
                        <code className="bg-muted px-2 py-1 rounded text-sm break-all">0x89712980Cb434eF5aE4AB29349419eb976B0b496</code>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium">Explorer:</span>
                        <a href="https://basescan.org/address/0x89712980Cb434eF5aE4AB29349419eb976B0b496" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                          View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Muscadine WETH Prime</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium">Address:</span>
                        <code className="bg-muted px-2 py-1 rounded text-sm break-all">0xD6DCAd2f7Da91FBb27BdA471540d9770c97a5a43</code>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium">Explorer:</span>
                        <a href="https://basescan.org/address/0xD6DCAd2f7Da91FBb27BdA471540d9770c97a5a43" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                          View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Muscadine cbBTC Prime</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium">Address:</span>
                        <code className="bg-muted px-2 py-1 rounded text-sm break-all">0x99dcd0D75822BA398F13B2A8852B07c7e137EC70</code>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium">Explorer:</span>
                        <a href="https://basescan.org/address/0x99dcd0D75822BA398F13B2A8852B07c7e137EC70" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                          View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Contracts Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Role Contracts</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Multi-signature Roles</h2>
            </div>
            
            <div className="space-y-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Owner (Safe Multisig)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guardian/Sentinel (Safe Multisig)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0x64e804eEF4F5a53272A8623b563ad2724E98A0a9</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Allocator Addresses</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Capital allocation</h2>
            </div>
            
            <div className="space-y-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Public Allocator (Morpho smart contract)</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Integrated with Morpho Vault infrastructure for automated capital deployment and rebalancing.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Muscadine Hot Wallet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Explorer:</span>
                    <a href="https://basescan.org/address/0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                      View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Muscadine Smart Wallet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium">Address:</span>
                    <code className="bg-muted px-2 py-1 rounded text-sm break-all">0x0D5A708B651FeE1DAA0470431c4262ab3e1D0261</code>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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

      {/* Treasury Wallet Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Treasury</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Fee collection address</h2>
              <p className="text-muted-foreground">
                Performance fees are collected and sent to the treasury wallet.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wallet className="h-6 w-6 text-primary" />
                  <CardTitle>Treasury Wallet</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-medium">Address:</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm break-all">0x057fd8b961eb664baa647a5c7a6e9728faba266a</code>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-medium">Explorer:</span>
                  <a href="https://basescan.org/address/0x057fd8b961eb664baa647a5c7a6e9728faba266a" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                    View on BaseScan <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
