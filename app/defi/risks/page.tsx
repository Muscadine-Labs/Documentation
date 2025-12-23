import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { AlertTriangle, Shield, TrendingDown, Zap } from "lucide-react";

const riskCategories = [
  {
    title: "Smart contract",
    description: "Bugs or upgrade mistakes can drain funds. Mitigate with audits, battle-tested code, and minimized admin powers.",
    icon: AlertTriangle,
  },
  {
    title: "Market",
    description: "Volatility, liquidity crunches, or correlated drawdowns. Manage with overcollateralization and prudent position sizing.",
    icon: TrendingDown,
  },
  {
    title: "Operational",
    description: "Key mismanagement, wrong addresses, failed gas settings, or human error. Reduce with checklists and hardware wallets.",
    icon: Zap,
  },
  {
    title: "Regulatory",
    description: "Rule changes can impact access or reporting. Stay informed and operate transparently.",
    icon: Shield,
  },
];

const mitigations = [
  {
    title: "Diligence first",
    description: "Prefer audited, long-lived protocols. Verify addresses and read docs before sending funds.",
    icon: Shield,
  },
  {
    title: "Diversify",
    description: "Spread exposure across assets, protocols, and chains to avoid single points of failure.",
    icon: TrendingDown,
  },
  {
    title: "Operational discipline",
    description: "Use hardware wallets for size, test small, and maintain backups and revocation plans.",
    icon: Zap,
  },
];

export default function DefiRisksPage() {
  return (
    <PageLayout
      title="DeFi Risks"
      description="A concise risk map for interacting with decentralized finance — and the controls we apply at Muscadine."
    >
      <section className="py-8 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Risk map</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Four categories to watch</h2>
            <p className="text-muted-foreground">Know these before you deposit a single token.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {riskCategories.map((item) => (
              <Card key={item.title} className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Controls</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Practical mitigations</h2>
            <p className="text-muted-foreground">
              Simple, repeatable habits reduce most avoidable losses.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mitigations.map((item) => (
              <Card key={item.title} className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2 text-center">
                  <div className="flex justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Muscadine stance</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">How we operate</h2>
            <p className="text-muted-foreground">
              Controls we apply across vaults and self-custody guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Overcollateralized markets only",
                description: "We avoid undercollateralized credit. Liquidation buffers keep lenders whole.",
              },
              {
                title: "Continuous monitoring",
                description: "Positions and markets are checked regularly; changes are controlled and auditable.",
              },
              {
                title: "Audited and proven",
                description: "We prefer audited, battle-tested protocols and publish contract references.",
              },
              {
                title: "Transparent disclosures",
                description: "Fees, roles, and risks are written plainly; you always know what you opt into.",
              },
            ].map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}