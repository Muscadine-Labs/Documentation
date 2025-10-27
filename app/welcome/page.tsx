import { Callout } from "@/components/Callout";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Zap, 
  Users, 
  ArrowRight, 
  Mail, 
  Code,
  CheckCircle
} from "lucide-react";

export default function WelcomePage() {
  return (
    <PageLayout 
      title="Welcome to Muscadine Labs"
      description="Learn about Muscadine Labs and our mission to democratize DeFi access through automated yield strategies."
    >
      {/* What is Muscadine Labs Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="text-center">
                <Badge variant="outline" className="mb-4">About Us</Badge>
                <h2 className="text-3xl font-bold mb-6">What is Muscadine Labs?</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                At Muscadine Labs, we're building tools for financial self-sovereignty — empowering individuals to take back control of their financial future. We believe financial independence should belong to everyone, not just institutions. Through Bitcoin security, self-custody, and accessible DeFi solutions, we help people become their own bank and thrive in a system without middlemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Principles Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold mb-6">Mission & Principles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    To give financial freedom back to the people.
                  </p>
                  <p className="text-muted-foreground mb-4 italic">
                    "Docēre est discere" - To teach is to learn.
                  </p>
                  <p className="text-muted-foreground">
                    We want to teach everyday individuals that cryptocurrency and Bitcoin IS the future, and gives people the chance to truly own and receive their monetary work back in yield. This means retention of people's wealth to their hands, while decentralized systems do the work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Core Principles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Security First</p>
                      <p className="text-sm text-muted-foreground">Every strategy is built with security as the primary consideration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Transparency</p>
                      <p className="text-sm text-muted-foreground">All contracts are open-source and operations are auditable</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Accessibility</p>
                      <p className="text-sm text-muted-foreground">Complex DeFi strategies made simple through automation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Performance</p>
                      <p className="text-sm text-muted-foreground">Continuous optimization to maximize yields</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Getting Started</Badge>
            <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Here are some recommended starting points for your journey with Muscadine Labs:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Link href="/defi/what-is-defi">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      DeFi 101
                    </CardTitle>
                    <CardDescription>
                      Get familiar with decentralized finance basics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/fees/performance-fee">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Fees & Economics
                    </CardTitle>
                    <CardDescription>
                      Understand our transparent fee structure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/vault-architecture/how-vaults-work">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      How Vaults Work
                    </CardTitle>
                    <CardDescription>
                      Understand our automated strategies in detail
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/vault/about">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Automated Vaults
                    </CardTitle>
                    <CardDescription>
                      Self-executing strategies that optimize yields across multiple DeFi protocols
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>

              <Link href="/self-custody/about">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Self-Custody Management
                    </CardTitle>
                    <CardDescription>
                      Experienced team with deep DeFi expertise to help create a secure self-custody solution
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            </div>

            <Callout type="info">
              <strong>New to DeFi?</strong> We recommend starting with our <Link href="/defi/what-is-defi" className="underline hover:no-underline">DeFi 101</Link> section to understand the fundamentals before diving into our specific products.
            </Callout>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Contact & Support</Badge>
              <h2 className="text-3xl font-bold mb-6">We're Here to Help</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions or need help? We're here to assist you on your DeFi journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a href="https://www.muscadine.io/contact" target="_blank" rel="noopener noreferrer">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Get in touch with our team
                    </p>
                  </CardContent>
                </Card>
              </a>

              <a href="https://github.com/Muscadine-Labs" target="_blank" rel="noopener noreferrer">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">Open Source</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      View our open-source code and smart contracts
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground italic">
                This documentation is regularly updated to reflect the latest developments in our platform and the broader DeFi ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
