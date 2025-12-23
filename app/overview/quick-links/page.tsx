import Link from "next/link";
import { ArrowRight, Globe, Mail, ShieldCheck, Sparkles, SquareGanttChart } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const externalLinks = [
  {
    title: "Main site",
    description: "Company narrative and product marketing",
    href: "https://muscadine.io",
    icon: Globe,
  },
  {
    title: "Contact",
    description: "Support, partnerships, and press",
    href: "https://www.muscadine.io/contact",
    icon: Mail,
  },
];

const docLinks = [
  {
    title: "Docs home",
    description: "Start from the main documentation landing",
    href: "/",
  },
  {
    title: "DeFi 101",
    description: "Basics before diving into vaults",
    href: "/defi/what-is-defi",
  },
  {
    title: "Vaults",
    description: "About, architecture, fees, and roles",
    href: "/vault/about",
  },
  {
    title: "Self-custody",
    description: "Operational playbook for keys and recovery",
    href: "/self-custody/about",
  },
  {
    title: "Roadmap",
    description: "What is shipping next",
    href: "/roadmap/features",
  },
  {
    title: "Risk & legal",
    description: "Disclosures, privacy, and terms",
    href: "/legal/risk-disclosures",
  },
];

export default function QuickLinksPage() {
  return (
    <PageLayout
      title="Documentation Quick Links"
      description="The fastest path to the right Muscadine docs and resources."
    >
      <section className="pb-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/">
              <Button size="lg">
                Docs home
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/roadmap/features">
              <Button variant="outline" size="lg">
                Roadmap
                <Sparkles className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/overview/contributors">
              <Button variant="ghost" size="lg">
                Contributors
                <SquareGanttChart className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">External</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Primary destinations</h2>
            <p className="text-muted-foreground">Company endpoints outside this docs site.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {externalLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-3">
                      <link.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Docs</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Doc shortcuts</h2>
            <p className="text-muted-foreground">
              Jump into the section you need without hunting through nav.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
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
