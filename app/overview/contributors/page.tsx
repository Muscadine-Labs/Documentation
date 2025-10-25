import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Users, Github, Twitter, Mail, ArrowRight } from "lucide-react";

const contributors = [
  {
    name: "Nicholas Connelly",
    role: "Founder & CEO",
    description: "Leading Muscadine Labs vision and strategy for DeFi innovation",
    github: "https://github.com/nicholasconnelly",
    twitter: "#",
    linkedin: "#",
    avatar: "/avatars/nicholas.jpg",
  },
  {
    name: "Core Development Team",
    role: "Engineering",
    description: "Building secure vault infrastructure and smart contract systems",
    github: "https://github.com/Muscadine-Labs",
    contact: "contact@muscadine.io",
  },
  {
    name: "Community Contributors",
    role: "Open Source",
    description: "Community members contributing to documentation, testing, and feedback",
    github: "https://github.com/Muscadine-Labs/Documentation",
    contact: "GitHub Issues",
  },
];

const communityLinks = [
  {
    name: "GitHub Repository",
    description: "Open source code and issue tracking",
    href: "https://github.com/Muscadine-Labs",
    icon: Github,
  },
  {
    name: "Documentation",
    description: "This documentation site",
    href: "https://github.com/Muscadine-Labs/Documentation",
    icon: Users,
  },
  {
    name: "Main Website",
    description: "Muscadine Labs official website",
    href: "https://www.muscadine.io",
    icon: Twitter,
  },
];

export default function ContributorsPage() {
  return (
    <PageLayout 
      title="Contributors"
      description="Meet the people building Muscadine Labs and learn how you can contribute to our mission."
    >
      {/* Contributors Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-6">Our Contributors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributors.map((contributor) => (
              <Card key={contributor.name} className="hover:shadow-lg transition-shadow">
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
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mb-4">
                    {contributor.github && (
                      <a 
                        href={contributor.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {contributor.twitter && contributor.twitter !== "#" && (
                      <a 
                        href={contributor.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {contributor.linkedin && contributor.linkedin !== "#" && (
                      <a 
                        href={contributor.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  {/* Contact Info */}
                  {contributor.contact && (
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{contributor.contact}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Links Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Get Involved</Badge>
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with us and contribute to the future of DeFi
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {communityLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <link.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {link.name}
                    </CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
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
