import Link from "next/link";
import { ArrowRight, BookOpen, Coins, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const essentials = [
  {
    title: "Smart contracts",
    description: "Code that runs the rules. No help desks, no paperwork — just deterministic execution on-chain.",
    icon: BookOpen,
  },
  {
    title: "Liquidity & AMMs",
    description: "Pooled assets that enable 24/7 swaps without order books. More liquidity means better pricing.",
    icon: Coins,
  },
  {
    title: "Collateralization",
    description: "Borrowers post more value than they borrow. If prices drop, collateral is liquidated to protect lenders.",
    icon: ShieldCheck,
  },
  {
    title: "Composability",
    description: "Protocols plug together like Lego blocks. Vaults, DEXs, and lenders can be stacked into new products.",
    icon: Layers,
  },
];

const protocolTypes = [
  {
    title: "Lending markets",
    description: "Supply assets to earn interest, or borrow against your collateral.",
    icon: Zap,
  },
  {
    title: "DEXs",
    description: "Swap tokens without intermediaries. Examples: Uniswap, Aerodrome.",
    icon: Globe,
  },
  {
    title: "Yield automation",
    description: "Aggregators move capital for you to optimize returns. Muscadine vaults live here.",
    icon: ArrowRight,
  },
];

export default function CoreConceptsPage() {
  return (
    <PageLayout
      title="DeFi Core Concepts"
      description="The must-know building blocks for navigating decentralized finance with confidence."
    >
      <section className="py-8 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Essentials</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Four things to internalize</h2>
            <p className="text-muted-foreground">
              If you know these, you can reason about almost any DeFi protocol.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {essentials.map((item) => (
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
            <Badge variant="outline" className="mx-auto w-fit">Protocol types</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Where you will interact</h2>
            <p className="text-muted-foreground">
              The common building blocks you will see in Muscadine vaults and across DeFi.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {protocolTypes.map((item) => (
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
            <Badge variant="outline" className="mx-auto w-fit">How it flows</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Lifecycle of a DeFi action</h2>
            <p className="text-muted-foreground">
              A simple mental model for any on-chain interaction.
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "You deposit",
                description: "Approve and supply assets from your wallet. You keep custody via your private keys.",
              },
              {
                step: "2",
                title: "Contract executes",
                description: "The protocol applies predefined rules: lend, swap, or stake, all on-chain.",
              },
              {
                step: "3",
                title: "You earn/settle",
                description: "Positions update in real time. Yields accrue or trades complete transparently.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Go deeper</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Keep building the mental model</h2>
            <p className="text-muted-foreground">
              Move from concepts to practice with the next sections.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/defi/risks">
              <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2 text-center">
                  <CardTitle className="text-lg">Risk categories</CardTitle>
                  <CardDescription>Understand smart contract, market, and operational risk.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/defi/wallet-setup">
              <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2 text-center">
                  <CardTitle className="text-lg">Get a wallet ready</CardTitle>
                  <CardDescription>Pick hardware or smart wallets and secure the keys.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/vault/about">
              <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2 text-center">
                  <CardTitle className="text-lg">See our vaults</CardTitle>
                  <CardDescription>How Muscadine automates the concepts above.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}