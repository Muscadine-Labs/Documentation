import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Shield, Calculator } from "lucide-react";

export default function FeesPage() {
  return (
    <PageLayout 
      title="Fees & Economics"
      description="A transparent look into Muscadine Labs' fee structure and economic model."
    >
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Fee Structure</Badge>
              <h2 className="text-3xl font-bold mb-6">Transparent Economics</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our fee structure is designed to align incentives and ensure sustainable operations while maintaining transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <CardTitle>Performance Fee</CardTitle>
                  </div>
                </CardHeader>
                <CardDescription>
                  We charge a 1% performance fee only on profits generated. This aligns our success with yours.
                </CardDescription>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>No Management Fees</CardTitle>
                  </div>
                </CardHeader>
                <CardDescription>
                  Unlike traditional funds, we don't charge ongoing management fees regardless of performance.
                </CardDescription>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Calculator className="h-6 w-6 text-primary" />
                    <CardTitle>Gas Optimization</CardTitle>
                  </div>
                </CardHeader>
                <CardDescription>
                  We batch operations to minimize gas costs and pass savings on to users.
                </CardDescription>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <CardTitle>Transparent Reporting</CardTitle>
                  </div>
                </CardHeader>
                <CardDescription>
                  All fee calculations and distributions are visible on-chain for complete transparency.
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
