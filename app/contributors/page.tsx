import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Github, Twitter, Mail } from "lucide-react";

const contributors = [
  {
    name: "Muscadine Labs Team",
    role: "Core Development",
    description: "Core team responsible for vault development and strategy implementation",
    contact: "contact@muscadine.io",
  },
  {
    name: "Community Contributors",
    role: "Open Source",
    description: "Community members contributing to documentation, testing, and feedback",
    contact: "GitHub Issues",
  },
];

const communityLinks = [
  {
    name: "GitHub Repository",
    description: "Open source code and issue tracking",
    href: "#",
    icon: Github,
  },
  {
    name: "Community Forum",
    description: "Discussions and support",
    href: "#",
    icon: Users,
  },
  {
    name: "Twitter/X",
    description: "Latest updates and announcements",
    href: "#",
    icon: Twitter,
  },
];

export default function ContributorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="https://muscadine.io" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-primary transition-colors">
                Muscadine Labs
              </a>
              <span className="text-sm text-muted-foreground">Documentation</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Contributors
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Meet the people building Muscadine Labs and learn how you can contribute to our mission.
          </p>
        </div>
      </section>

      {/* Contributors */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Contributors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contributors.map((contributor) => (
              <Card key={contributor.name} className="rounded-2xl shadow-sm">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{contributor.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {contributor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{contributor.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{contributor.contact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {communityLinks.map((link) => (
              <Card key={link.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <link.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{link.name}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
