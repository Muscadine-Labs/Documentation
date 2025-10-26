import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Users, Github, Twitter, ArrowRight, Globe, Linkedin } from "lucide-react";

const contributors = [
  {
    name: "Nicholas Connelly",
    role: "Founder & CEO",
    description: "Leading Muscadine Labs vision and strategy for DeFi innovation and financial self-sovereignty",
    github: null,
    website: "https://nickconnelly.com",
    twitter: "#",
    linkedin: "#",
    avatar: "/avatars/nicholas.jpg",
  },
  {
    name: "Ignas Panavas",
    role: "Co-Founder & CTO",
    description: "Driving technical innovation and building secure infrastructure for Muscadine Labs",
    github: "https://github.com/ignaspanavas",
    website: "https://ignaspanavas.com",
    twitter: "#",
    linkedin: "#",
    avatar: "/avatars/ignas.jpg",
  },
];

const advisors = [
  {
    name: "Nathan Asfaw",
    role: "Computer Science Expert",
    description: "Providing technical expertise and guidance on computer science principles",
  },
  {
    name: "Ayush Shrestha", 
    role: "Marketing Advisor",
    description: "Strategic marketing advice and brand development guidance",
  },
  {
    name: "Marco Walther",
    role: "Workflow Analyst", 
    description: "Process optimization and workflow analysis expertise",
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
          <div className="text-center mb-6">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <div className="bg-muted/30 rounded-lg p-6 mb-4">
              <p className="text-muted-foreground mb-4">
                For detailed team information and company background, visit our main website:
              </p>
              <a 
                href="https://www.muscadine.io/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <span>Learn more about Muscadine Labs</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    {contributor.website && (
                      <a 
                        href={contributor.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Globe className="h-5 w-5" />
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
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Contributors to Muscadine</Badge>
            <h2 className="text-3xl font-bold mb-6">We are very grateful</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              These people helped Muscadine on its journey with their advice and ideas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <Card key={advisor.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{advisor.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {advisor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{advisor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
