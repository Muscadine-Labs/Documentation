import { CalendarClock, Sparkles, Wrench, Zap, Bitcoin, TrendingUp, Shield } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const shortTermRoadmap = [
  {
    title: "Improve vault front end",
    description: "Enhanced user interface and experience for vault interactions.",
    icon: Zap,
  },
  {
    title: "Improving risk management and market ratings",
    description: "Enhanced risk assessment and market evaluation capabilities for better decision-making.",
    icon: Shield,
  },
];

const longTermRoadmap = [
  {
    title: "Muscadine Vineyard Vaults & Multi-protocol risk curation",
    description: "Creating new vineyard vault products to expand yield strategy offerings while expanding risk management capabilities beyond Morpho protocol to support many protocols.",
    icon: TrendingUp,
  },
  {
    title: "Alternative yield strategies",
    description: "Explore new yield opportunities including arbitrage, liquidation bots, and other innovative strategies.",
    icon: Zap,
  },
  {
    title: "Bitcoin infrastructure development",
    description: "Focus on Bitcoin development including Lightning Network, node infrastructure, and mining infrastructure.",
    icon: Bitcoin,
  },
];

export default function UpcomingFeaturesPage() {
  return (
    <PageLayout
      title="Roadmap"
      description="Our short-term and long-term development plans for Muscadine Labs."
    >
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Short Term</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Current priorities</h2>
            <p className="text-muted-foreground">
              Focus areas we're actively working on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {shortTermRoadmap.map((item) => (
              <Card key={item.title} className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Long Term</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Future vision</h2>
            <p className="text-muted-foreground">
              Strategic directions we're exploring for the future.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {longTermRoadmap.map((item) => (
              <Card key={item.title} className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}