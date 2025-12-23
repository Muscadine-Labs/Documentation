import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Github, Mail, Sparkles, Users } from "lucide-react";

const contributors = [
  {
    name: "Muscadine Labs Team",
    role: "Core development & strategy",
    description: "Ships vault architecture, contracts, and operational safeguards.",
    contact: "contact@muscadine.io",
  },
  {
    name: "Community contributors",
    role: "Docs, testing, feedback",
    description: "Refine docs, report issues, and propose improvements.",
    contact: "GitHub issues",
  },
];

const links = [
  {
    title: "GitHub",
    description: "Issues, PRs, contracts, and changelog.",
    href: "https://github.com/Muscadine-Labs",
    icon: Github,
  },
  {
    title: "Email",
    description: "contact@muscadine.io for coordination.",
    href: "mailto:contact@muscadine.io",
    icon: Mail,
  },
  {
    title: "Roadmap",
    description: "See what is shipping next.",
    href: "/roadmap/features",
    icon: Sparkles,
  },
];

export default function ContributorsPage() {
  return (
    <PageLayout
      title="Contributors"
      description="Meet the people behind the vaults and learn how to get involved."
    >
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-2 mb-10">
            <Badge variant="outline" className="mx-auto w-fit">Team</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Who builds Muscadine</h2>
            <p className="text-muted-foreground">
              Clear owners, transparent channels, and an open door for contributors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {contributors.map((contributor) => (
              <Card key={contributor.name} className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="text-center space-y-2">
                  <div className="flex justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{contributor.name}</CardTitle>
                  <CardDescription className="text-base text-primary">
                    {contributor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-muted-foreground">{contributor.description}</p>
                  <p className="text-sm text-muted-foreground">
                    Contact: {contributor.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Get involved</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Contribute or follow along</h2>
            <p className="text-muted-foreground">
              Pick the channel that fits: code, coordination, or roadmap visibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {links.map((link) => (
              <a key={link.title} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <CardHeader className="space-y-2 text-center">
                    <div className="flex justify-center">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
