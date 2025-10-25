import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Shield, Calculator, Target, Eye, Zap } from "lucide-react";

export default function FeesPage() {
  return (
    <PageLayout 
      title="Fees & Economics"
      description="At Muscadine Labs, our philosophy is simple — your capital should work for you, not for us. We charge a 2% performance fee, taken only on profits actually earned by the vault."
    >

      {/* Philosophy Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Philosophy</Badge>
              <h2 className="text-3xl font-bold mb-6">Your Capital Should Work for You</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Muscadine Labs, our philosophy is simple — your capital should work for you, not for us.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We charge a 2% performance fee, taken only on profits actually earned by the vault. There are no management fees, no withdrawal penalties, and no hidden costs. Every dollar you deposit remains fully in your control and verifiably on-chain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <CardTitle>2% Performance Fee</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Taken only on profits actually earned by the vault. No fees on deposits or withdrawals.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>No Hidden Costs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    No management fees, no withdrawal penalties, and no hidden costs. Complete transparency.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Comparison & Incentive Alignment Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Industry Comparison & Incentive Alignment</Badge>
              <h2 className="text-3xl font-bold mb-6">Built Differently, Rewarding Results</h2>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Across the industry, performance fees typically range from 10–15% for standard DeFi strategies, and can reach 25% or higher for institutional programs like Coinbase's Lending Program.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We built Muscadine Vaults differently — to reflect the ethos of decentralized finance: transparent, efficient, and fair.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By keeping fees minimal and aligned with performance, we ensure that our incentives mirror yours. When your yield compounds, so does our commitment — rewarding results, not participation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Calculator className="h-6 w-6 text-primary" />
                    <CardTitle>Standard DeFi</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Performance fees typically range from 10–15% for standard DeFi strategies across the industry.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <CardTitle>Institutional Programs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Can reach 25% or higher for institutional programs like Coinbase's Lending Program.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle>Muscadine Vaults</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Just 2% performance fee, reflecting the ethos of decentralized finance: transparent, efficient, and fair.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>Aligned Incentives</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our incentives mirror yours — we only earn when you earn, ensuring our success is tied to your success.
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
