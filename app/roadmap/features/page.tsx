import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Zap, Rocket } from "lucide-react";

export default function UpcomingFeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Upcoming Features
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover what's coming next to Muscadine Labs. We're constantly innovating to bring you the best DeFi experience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Q1 2025 Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Rocket className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-blue-600">Enhanced Vault Strategies</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Multi-Chain Support:</strong> Expand vault strategies across Base, Arbitrum, and Polygon networks.
                  <br /><br />
                  <strong>Advanced Yield Optimization:</strong> Implement machine learning algorithms for dynamic yield optimization.
                  <br /><br />
                  <strong>Risk-Adjusted Strategies:</strong> New vault types with different risk profiles for various investor preferences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-600">User Experience Improvements</CardTitle>
                </div>
                <CardDescription className="text-base">
                  <strong>Mobile App:</strong> Native mobile application for iOS and Android with full vault management.
                  <br /><br />
                  <strong>Portfolio Analytics:</strong> Advanced analytics dashboard with performance tracking and insights.
                  <br /><br />
                  <strong>Automated Rebalancing:</strong> Smart rebalancing features to optimize returns automatically.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Q2 2025 Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Governance System</CardTitle>
                <CardDescription>
                  Launch decentralized governance with MUSC token for community-driven decision making.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Institutional Features</CardTitle>
                <CardDescription>
                  Advanced features for institutional investors including API access and custom strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Cross-Chain Integration</CardTitle>
                <CardDescription>
                  Seamless asset transfers and yield optimization across multiple blockchain networks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Long-Term Vision</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>DeFi Infrastructure</CardTitle>
                <CardDescription>
                  Build comprehensive DeFi infrastructure that makes sophisticated strategies accessible to everyone, regardless of technical expertise.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Institutional Adoption</CardTitle>
                <CardDescription>
                  Create enterprise-grade solutions that enable traditional financial institutions to participate in DeFi while maintaining compliance and security standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Global Accessibility</CardTitle>
                <CardDescription>
                  Expand access to DeFi opportunities worldwide, particularly in underserved regions, through localized solutions and educational initiatives.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow our progress and be the first to know about new features and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://twitter.com/muscadinelabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Follow on Twitter
              </a>
              <a 
                href="https://discord.gg/muscadine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Join Discord
              </a>
              <a 
                href="mailto:updates@muscadine.io" 
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Subscribe to Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Learn More</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our current features and understand our platform better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Current Products</CardTitle>
                    <CardDescription>Explore our existing vault offerings</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/roadmap/governance">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Governance</CardTitle>
                    <CardDescription>Learn about our governance plans</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/contact">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Share feedback and suggestions</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
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