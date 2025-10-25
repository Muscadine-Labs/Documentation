import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/Callout";
import { Metric } from "@/components/Metric";
import { RiskAlert } from "@/components/RiskAlert";
import { ArrowRight, Shield, Zap, TrendingUp, Settings } from "lucide-react";
import Link from "next/link";

export default function VaultArchitecturePage() {
  return (
    <PageLayout 
      title="Vault Architecture"
      description="A comprehensive technical overview of Muscadine Labs' vault architecture and operation."
    >
      {/* Architecture Overview */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Technical Overview</Badge>
              <h2 className="text-3xl font-bold mb-6">How Vaults Work</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Muscadine vaults are sophisticated smart contracts that automatically manage DeFi assets to optimize yields while handling risk management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Automated Execution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Vaults operate as autonomous investment managers, executing complex strategies without manual intervention 24/7.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Risk Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Built-in risk controls and continuous monitoring protect user funds while maintaining optimal yield generation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <CardTitle>Multi-Protocol</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Strategies span across multiple DeFi protocols to capture the best opportunities and diversify risk.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <CardTitle>Modular Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Individual strategies can be upgraded independently, allowing for continuous improvement and adaptation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Performance Metrics</Badge>
              <h2 className="text-3xl font-bold mb-6">Vault Capabilities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Metric label="Automation Level" value="100%" hint="Fully automated operation" />
              <Metric label="Strategy Count" value="Multiple" hint="Diversified across protocols" />
              <Metric label="Rebalancing" value="Dynamic" hint="Based on market conditions" />
              <Metric label="Risk Monitoring" value="24/7" hint="Continuous monitoring" />
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Explore More</Badge>
            <h2 className="text-3xl font-bold mb-8">Dive Deeper</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Learn more about specific aspects of our vault architecture and operations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/vault/fees">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Fees & Economics</CardTitle>
                    <CardDescription>Understand our transparent fee structure</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/vault/roles-security">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Roles & Security</CardTitle>
                    <CardDescription>Learn about our security model</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/vault/contracts">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Smart Contracts</CardTitle>
                    <CardDescription>Explore our deployed contracts</CardDescription>
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

      <Callout type="info">
        <strong>Want to dive deeper?</strong> Explore our vault architecture components and understand how automated strategies work in practice.
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
