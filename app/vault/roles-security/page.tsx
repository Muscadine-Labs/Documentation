import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/Callout";
import { RoleCard } from "@/components/RoleCard";
import { RiskAlert } from "@/components/RiskAlert";
import { Shield, Users, Settings, Wallet } from "lucide-react";

export default function RolesSecurityPage() {
  return (
    <PageLayout 
      title="Roles & Security"
      description="Understanding Muscadine Labs' sophisticated role-based access control system for vault management."
    >
      {/* Overview Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Security Model</Badge>
              <h2 className="text-3xl font-bold mb-6">Role-Based Control System</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Muscadine Labs implements a sophisticated role-based access control (RBAC) system that distributes power across multiple entities, ensuring no single party has complete control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Separation of Powers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Different roles have different responsibilities and permissions, requiring coordination between multiple parties for critical operations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>Multisig Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All management roles are protected by multisig wallets, requiring multiple signatures for important operations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <CardTitle>Transparent Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All role-based operations are transparent and auditable on-chain, providing complete visibility.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Wallet className="h-6 w-6 text-primary" />
                    <CardTitle>Operational Resilience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    If one role becomes unavailable, other roles can continue to operate the vaults, ensuring service continuity.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Role Hierarchy</Badge>
              <h2 className="text-3xl font-bold mb-6">Management Roles</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <RoleCard
                title="Owner Role"
                description="Ultimate control over vault parameters and upgrades"
                address="0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A"
                type="multisig"
                explorerUrl="https://basescan.org/address/0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A"
                safeUrl="https://app.safe.global/home?safe=base:0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A"
              />
              
              <RoleCard
                title="Guardian Role"
                description="Emergency controls and security monitoring"
                address="0x64e804eEF4F5a53272A8623b563ad2724E98A0a9"
                type="multisig"
                explorerUrl="https://basescan.org/address/0x64e804eEF4F5a53272A8623b563ad2724E98A0a9"
                safeUrl="https://app.safe.global/home?safe=base:0x64e804eEF4F5a53272A8623b563ad2724E98A0a9"
              />
              
              <RoleCard
                title="Curator Role"
                description="Strategy curation and protocol selection"
                address="0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1"
                type="multisig"
                explorerUrl="https://basescan.org/address/0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1"
                safeUrl="https://app.safe.global/home?safe=base:0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1"
              />
              
              <RoleCard
                title="Muscadine Hot Wallet"
                description="Operational wallet for vault management"
                address="0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333"
                type="wallet"
                explorerUrl="https://basescan.org/address/0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Permission Matrix */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Permissions</Badge>
              <h2 className="text-3xl font-bold mb-6">Permission Matrix</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Operation</th>
                    <th className="border border-border p-3 text-center">Owner</th>
                    <th className="border border-border p-3 text-center">Guardian</th>
                    <th className="border border-border p-3 text-center">Curator</th>
                    <th className="border border-border p-3 text-center">Allocators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium">Vault Parameter Changes</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Emergency Pause</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Strategy Updates</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Protocol Selection</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Asset Allocation</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Fee Collection</td>
                    <td className="border border-border p-3 text-center text-green-600">✓</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                    <td className="border border-border p-3 text-center text-red-600">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Callout type="info">
        <strong>Want to learn more?</strong> Our role-based system ensures security through separation of powers and multisig protection, providing transparency and operational resilience.
      </Callout>

      <RiskAlert type="warning" title="Important Disclaimer">
        <p>
          Muscadine Labs does not provide investment advice. Vaults are experimental DeFi smart contracts 
          and may carry risk of loss. Users are responsible for their own decisions. DYOR.
        </p>
      </RiskAlert>

      <Footer />
    </PageLayout>
  );
}
