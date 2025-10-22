import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, BookOpen, Zap } from "lucide-react";

const defiTopics = [
  {
    title: "What is DeFi?",
    description: "Introduction to decentralized finance concepts and principles",
    href: "/defi/what-is-defi",
    icon: BookOpen,
  },
  {
    title: "Core Concepts",
    description: "Understanding the fundamental concepts of DeFi",
    href: "/defi/core-concepts",
    icon: BookOpen,
  },
  {
    title: "Risks",
    description: "Important risks to understand before participating in DeFi",
    href: "/defi/risks",
    icon: Zap,
  },
  {
    title: "Wallet Setup",
    description: "Learn how to set up and secure your DeFi wallet",
    href: "/defi/wallet-setup",
    icon: Coins,
  },
];

export default function DefiPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            DeFi 101
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn the fundamentals of decentralized finance and understand how Muscadine Labs fits into the DeFi ecosystem.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">DeFi Fundamentals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {defiTopics.map((topic) => (
              <Link key={topic.href} href={topic.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <topic.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What is DeFi?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Decentralized Finance (DeFi) refers to financial services built on blockchain networks that operate without traditional intermediaries like banks.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Permissionless</h3>
                <p className="text-muted-foreground">
                  Anyone can access DeFi protocols without approval from centralized authorities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Transparent</h3>
                <p className="text-muted-foreground">
                  All transactions and smart contract code are publicly verifiable on the blockchain.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Composable</h3>
                <p className="text-muted-foreground">
                  DeFi protocols can be combined and integrated to create new financial products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Muscadine Labs. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contracts" className="text-sm text-muted-foreground hover:text-foreground">
                Contracts
              </Link>
              <Link href="/risk" className="text-sm text-muted-foreground hover:text-foreground">
                Risk Framework
              </Link>
              <a href="https://muscadine.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                Main Website
              </a>
              <a href="https://app.muscadine.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                App
              </a>
              <a href="mailto:contact@muscadine.io" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
