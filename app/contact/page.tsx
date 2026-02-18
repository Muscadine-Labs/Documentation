import { Mail, Linkedin, Github, ExternalLink, Twitter } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const contacts = [
  {
    title: "Email",
    description: "Support and general inquiries",
    href: "mailto:muscadinelabs@gmail.com",
    icon: Mail,
  },
  {
    title: "Contact form",
    description: "Partnerships, press, or product questions",
    href: "https://muscadine.io/contact",
    icon: ExternalLink,
  },
  {
    title: "X (Twitter)",
    description: "Updates and announcements",
    href: "https://x.com/muscadinelabs",
    icon: Twitter,
  },
  {
    title: "LinkedIn",
    description: "Company profile and hiring",
    href: "https://www.linkedin.com/company/muscadinelabs/",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    description: "Code, issues, contracts, and docs",
    href: "https://github.com/Muscadine-Labs",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact & Support"
      description="Choose the fastest route to reach us. We keep a tight surface: email, form, socials, and code."
    >
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Support</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Pick a channel</h2>
            <p className="text-muted-foreground">
              Use email for tickets, the form for structured requests, GitHub for code, and socials for quick updates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground"></CardContent>
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
