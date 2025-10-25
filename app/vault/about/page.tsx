import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VaultsAboutPage() {
  return (
    <PageLayout 
      title="About Vaults"
      description="Learn about Muscadine Labs' automated vault strategies and how they optimize yields across multiple DeFi protocols."
    >
      {/* Automated Vaults Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Automated Vaults</Badge>
              <h2 className="text-3xl font-bold mb-6">Self-Executing Strategies</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our automated vaults are sophisticated yield optimization strategies that work across multiple DeFi protocols to maximize returns while managing risk.
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
                    Vaults automatically execute complex strategies without requiring manual intervention, optimizing yields 24/7.
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
                    Built-in safeguards and monitoring protect user funds while maintaining optimal yield generation.
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
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Transparent Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All vault operations are transparent and auditable on-chain, ensuring complete visibility.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Learn More</Badge>
            <h2 className="text-3xl font-bold mb-8">Explore Vault Architecture</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Dive deeper into how our vaults work and understand the technical details behind our strategies.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/vault/architecture">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">How Vaults Work</CardTitle>
                    <CardDescription>Understand the technical architecture</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/vault/fees">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">Fees & Economics</CardTitle>
                    <CardDescription>Learn about our transparent fee structure</CardDescription>
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

      <Footer />
    </PageLayout>
  );
}
