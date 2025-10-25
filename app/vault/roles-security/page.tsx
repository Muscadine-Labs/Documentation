import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Zap, Settings, Clock, Eye, Lock } from "lucide-react";

export default function RolesSecurityPage() {
  return (
    <PageLayout 
      title="Roles & Security"
      description="Muscadine Vaults are governed by a clear, on-chain role system designed for transparency and safety with multi-signature controls and time locks."
    >

      {/* Overview Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Governance Model</Badge>
              <h2 className="text-3xl font-bold mb-6">Clear, On-Chain Role System</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Muscadine Vaults are governed by a clear, on-chain role system designed for transparency and safety. Each role has a defined purpose and is protected by multi-signature controls and time locks, ensuring no single actor can act unilaterally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Multi-Signature Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All roles are protected by multi-signature controls, requiring multiple signatures for important operations to prevent unilateral actions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle>Time-Locked Changes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Critical changes are protected by time locks, providing a delay period for review and ensuring no sudden modifications.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Role Definitions Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Role Definitions</Badge>
              <h2 className="text-3xl font-bold mb-6">Three Core Roles</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Curator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Defines the vault's strategy, sets risk parameters, and approves underlying markets. Responsible for strategic direction and market selection.
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
                    Executes rebalances and manages capital deployment within approved limits. Handles the operational execution of the curator's strategy.
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
                    Can pause or adjust vault operations in emergencies to protect depositors. Acts as the safety net for the entire system.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Morpho Framework Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Morpho Framework</Badge>
              <h2 className="text-3xl font-bold mb-6">On-Chain Governance</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                All roles operate within the Morpho Vault governance framework, where every action — from market changes to parameter updates — is verifiable on-chain. Smart contracts are audited, immutable, and isolated, meaning each vault is independent and cannot impact others.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <CardTitle>Fully Verifiable</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every action from market changes to parameter updates is verifiable on-chain, providing complete transparency and auditability.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <CardTitle>Isolated & Secure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Smart contracts are audited, immutable, and isolated, ensuring each vault is independent and cannot impact others.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Model Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Security Model</Badge>
              <h2 className="text-3xl font-bold mb-6">Layered Security Approach</h2>
            </div>
            
            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                This layered security model combines automated risk management, transparent governance, and self-custody, ensuring that user assets remain secure, accessible, and fully under their control.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <CardTitle>Automated Risk Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Smart contracts automatically manage risk parameters and execute safety protocols without manual intervention.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <CardTitle>Transparent Governance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All governance decisions and role actions are transparent and verifiable on-chain, providing complete visibility.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Self-Custody</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Users maintain full control of their assets with the ability to withdraw at any time while earning yield.
                  </CardDescription>
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
