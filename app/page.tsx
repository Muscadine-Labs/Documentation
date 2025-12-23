import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  FileText,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <PageLayout
      title="Muscadine Labs Documentation"
      description="Learn how to use Muscadine vaults, practice secure self-custody, and understand the risk, fee, and governance model in one place."
    >
      {/* Mission & Purpose */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Muscadine Labs Goal & Purpose</h2>
            </div>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Muscadine Labs' goal is to promote financial ownership through decentralized, transparent, and efficient solutions. We do this through DeFi, Bitcoin, and blockchain technology.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">DeFi Bank</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At the core, we are both a DeFi Bank — we curate risk management through lending, where clients can self-custody their funds while we are only able to lend them out to markets. Clients earn more efficient capital than traditional banks, while we remain mindful of risk mitigation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Blockchain Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use blockchain rails (Morpho infrastructure to build vaults, then we allocate assets to different protocols/vaults to optimize yield and risk) and the Base chain because of the ease of distribution to on/offramp fiat through Coinbase, and our own website where users can easily access funds to connect to our vaults (savings accounts). Using blockchain, all of our strategies are transparent and easily accessible to see.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Self-Custody Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We also provide self-custody solutions, building generational systems for families/clients to be able to truly custody their own assets with no third party — unlike a bank, broker, or exchange where they hold your assets. This removes the friction for most people on the knowledge required to make these systems.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technology Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a technology company, we aspire to be at the wild west of innovation (smart contracts, AI agents, etc.), creating new methods and ways to generate wealth and income for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-2 mb-8 text-center">
            <Badge variant="outline" className="mx-auto w-fit">Start here</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Quickstart guides</h2>
            <p className="text-muted-foreground">
              Short, opinionated paths to get productive in minutes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "DeFi 101",
                href: "/defi/what-is-defi",
                description: "Understand on-chain basics and core terminology.",
                icon: <BookOpen className="h-5 w-5 text-primary" />,
              },
              {
                title: "Vaults overview",
                href: "/vault/about",
                description: "How our automated strategies are structured and governed.",
                icon: <Zap className="h-5 w-5 text-primary" />,
              },
              {
                title: "Self-custody setup",
                href: "/self-custody/about",
                description: "Operational playbook for holding keys securely.",
                icon: <Wallet className="h-5 w-5 text-primary" />,
              },
              {
                title: "Fees & risk",
                href: "/vault/fees",
                description: "Performance fees, disclosures, and risk framework.",
                icon: <ShieldCheck className="h-5 w-5 text-primary" />,
              },
            ].map((item) => (
              <Link key={item.title} href={item.href}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    {item.icon}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-8 text-center space-y-2">
            <Badge variant="outline" className="mx-auto w-fit">Products</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">What you can build with</h2>
            <p className="text-muted-foreground">
              Go deeper into automated vaults or design your own secure custody workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group h-full border border-border/80">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">Automated Vaults</CardTitle>
                </div>
                <CardDescription>
                  Self-executing strategies across overcollateralized lending markets.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    How vault contracts and roles fit together.
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Performance fee model and the reporting cadence.
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Access points for liquidity providers and withdrawals.
                  </li>
                </ul>
                <div className="flex gap-2">
                  <Link href="/vault/about">
                    <Button size="sm">
                      View docs
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group h-full border border-border/80">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">Self-Custody</CardTitle>
                </div>
                <CardDescription>
                  Frameworks to hold, recover, and operate safely without intermediaries.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Recommended wallet setup and key management patterns.
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Recovery planning with paper keys and multisig options.
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Operational security practices for day-to-day usage.
                  </li>
                </ul>
                <div className="flex gap-2">
                  <Link href="/self-custody/about">
                    <Button size="sm">
                      View docs
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/self-custody/recovery">
                    <Button size="sm" variant="outline">
                      Recovery
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Muscadine */}
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-8 text-center space-y-2">
            <Badge variant="outline" className="mx-auto w-fit">Why Muscadine</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Built for security and clarity</h2>
            <p className="text-muted-foreground">
              The essentials that guide every product and document we publish.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="h-full">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <CardTitle>Security first</CardTitle>
                </div>
                <CardDescription>
                  Overcollateralized markets, auditable contracts, and clear operational controls.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="h-full">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle>Radical transparency</CardTitle>
                </div>
                <CardDescription>
                  Open-source docs, explicit risk disclosures, and straightforward fee math.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="h-full">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Efficiency built-in</CardTitle>
                </div>
                <CardDescription>
                  Lean 5% performance fee, automation to reduce overhead, and simple entry points.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
