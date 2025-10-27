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
  CheckCircle
} from "lucide-react";

export default function Home() {
  return (
    <PageLayout 
      title="About Muscadine Labs"
      description="Learn about Muscadine Labs and our mission to democratize DeFi access through automated yield strategies."
    >
      {/* What is Muscadine Labs Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <Badge variant="outline" className="mb-4">About Us</Badge>
              <h2 className="text-3xl font-bold mb-6">What is Muscadine Labs?</h2>
            </div>
            <div className="mb-12">
              <p className="text-xl text-muted-foreground mb-8 text-left">
                At Muscadine Labs, we build tools for financial self-sovereignty, empowering individuals to take full control of their financial future. We believe financial independence should belong to everyone, not just institutions. Through Bitcoin security, self-custody, and accessible decentralized finance (DeFi) solutions, we help people become their own bank and participate directly in the emerging financial system—without intermediaries.
              </p>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                We curate and manage risk through Morpho vault infrastructure, deploying capital into overcollateralized lending markets that provide variable returns. Unlike traditional financial systems that rely on undercollateralized credit, our approach ensures borrowers maintain collateral equal to or greater than their debt, minimizing systemic risk. In parallel, we design self-custody frameworks that enable clients to securely own and manage their wealth through node operation, paper key systems, and advanced key management solutions emphasizing security and sovereignty.
              </p>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                Muscadine Labs differentiates itself through transparency, efficiency, and accessibility. We operate with one of the lowest fees in the industry—a 2% performance fee—eliminating the layers of cost that have re-emerged as DeFi increasingly mimics traditional finance. Our objective is to restore the original ethos of crypto: open access, fair participation, and genuine ownership. Anyone can access our vaults to earn competitive yields across the most liquid on-chain markets. Beyond yield generation, our mission is to advance financial literacy and technological empowerment, helping individuals understand, control, and grow their wealth through decentralized systems.
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Getting Started</Badge>
              <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 text-left">
              Here are our products.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
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

            <div className="mt-12 p-6 bg-muted/30 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">New to Crypto and DeFi?</h3>
              <p className="text-muted-foreground mb-4">
                If you're new to cryptocurrency and decentralized finance, we recommend reading our DeFi 101 section to get a better understanding of the fundamentals before exploring our products.
              </p>
              <Link href="/defi/what-is-defi">
                <div className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium">
                  <span>Read DeFi 101</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>


      <Footer />
    </PageLayout>
  );
}
