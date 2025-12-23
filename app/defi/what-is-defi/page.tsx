import Link from "next/link";
import {
  ArrowRight,
  Bitcoin,
  BookOpen,
  Coins,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fundamentals = [
  {
    title: "Cryptocurrencies",
    description: "Digital money secured by cryptography and run on public blockchains, not banks.",
    icon: Coins,
  },
  {
    title: "Self-custody",
    description: "You hold the keys, you hold the coins. No intermediaries to freeze or gate access.",
    icon: ShieldCheck,
  },
  {
    title: "Bitcoin",
    description: "Fixed supply, energy-secured, and censorship resistant. The base layer for self-sovereign money.",
    icon: Bitcoin,
  },
  {
    title: "DeFi",
    description: "Financial services delivered by smart contracts: lending, trading, and yield without permission.",
    icon: Zap,
  },
];

const learnNext = [
  {
    title: "Core concepts",
    description: "Understand smart contracts, collateral, and liquidity.",
    href: "/defi/core-concepts",
  },
  {
    title: "DeFi risks",
    description: "Market, contract, and operational risks to watch.",
    href: "/defi/risks",
  },
  {
    title: "Wallet setup",
    description: "Create and secure a wallet before you deposit.",
    href: "/defi/wallet-setup",
  },
];

export default function WhatIsDefiPage() {
  return (
    <PageLayout
      title="What is DeFi?"
      description="A quick, opinionated primer on crypto, Bitcoin, and decentralized finance so you know what you are using and why it matters."
    >
      <section className="py-6 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Basics</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">The essentials in four cards</h2>
            <p className="text-muted-foreground">
              Keep it simple: what it is, why it is safe, and what you can do with it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundamentals.map((item) => (
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
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-10">
            <Badge variant="outline" className="mx-auto w-fit">How DeFi works</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Smart contracts instead of intermediaries</h2>
            <p className="text-muted-foreground">
              Code replaces paperwork: deposit assets, the contract executes rules, you get transparent returns.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle>Transparent rules</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  The terms are on-chain. Anyone can verify the code, positions, and state of the protocol.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <CardTitle>Overcollateralized</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Borrowers must lock more value than they borrow. If markets move, collateral is liquidated to keep lenders whole.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle>Permissionless access</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No account reviews. Connect a wallet and interact directly; your address is your identity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Next steps</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Keep learning</h2>
            <p className="text-muted-foreground">
              Go deeper into the mechanics, the risks, and how to get your wallet ready.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {learnNext.map((item) => (
              <Link key={item.title} href={item.href}>
                <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}