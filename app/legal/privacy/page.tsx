import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Scale, Eye } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how Muscadine Labs collects, uses, and protects your information.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                  <CardTitle>Information We Collect</CardTitle>
                </div>
                <CardDescription className="text-base space-y-4">
                  <div>
                    <strong>Public Blockchain Data:</strong> We may analyze publicly available blockchain data to understand protocol usage and optimize our strategies.
                  </div>
                  <div>
                    <strong>Website Analytics:</strong> We use analytics tools to understand how visitors interact with our website and documentation.
                  </div>
                  <div>
                    <strong>Communication Data:</strong> When you contact us via email or other channels, we collect the information you provide.
                  </div>
                  <div>
                    <strong>No Personal Financial Data:</strong> We do not collect or store your private keys, seed phrases, or personal financial information.
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle>How We Use Information</CardTitle>
                </div>
                <CardDescription className="text-base space-y-4">
                  <div>
                    <strong>Service Improvement:</strong> We use collected data to improve our services, optimize vault strategies, and enhance user experience.
                  </div>
                  <div>
                    <strong>Communication:</strong> We may use your contact information to respond to inquiries and provide support.
                  </div>
                  <div>
                    <strong>Analytics:</strong> We analyze usage patterns to understand how our platform is used and identify areas for improvement.
                  </div>
                  <div>
                    <strong>Compliance:</strong> We may use information to comply with applicable laws and regulations.
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle>Data Protection</CardTitle>
                </div>
                <CardDescription className="text-base space-y-4">
                  <div>
                    <strong>Security Measures:</strong> We implement appropriate technical and organizational measures to protect your information.
                  </div>
                  <div>
                    <strong>Limited Access:</strong> Access to personal information is restricted to authorized personnel who need it for legitimate business purposes.
                  </div>
                  <div>
                    <strong>Data Retention:</strong> We retain information only as long as necessary for the purposes outlined in this policy.
                  </div>
                  <div>
                    <strong>No Third-Party Sharing:</strong> We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <CardTitle>Your Rights</CardTitle>
                </div>
                <CardDescription className="text-base space-y-4">
                  <div>
                    <strong>Access:</strong> You have the right to request access to the personal information we hold about you.
                  </div>
                  <div>
                    <strong>Correction:</strong> You can request correction of inaccurate or incomplete information.
                  </div>
                  <div>
                    <strong>Deletion:</strong> You may request deletion of your personal information, subject to legal and operational requirements.
                  </div>
                  <div>
                    <strong>Objection:</strong> You can object to certain processing of your personal information.
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Important Disclaimers</h2>
            <div className="space-y-6">
              <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                <CardHeader>
                  <CardTitle className="text-yellow-800 dark:text-yellow-200">Blockchain Transparency</CardTitle>
                  <CardDescription className="text-yellow-700 dark:text-yellow-300">
                    All transactions on our platform are recorded on public blockchains and are visible to anyone. This includes wallet addresses, transaction amounts, and timing.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200">No Personal Data Collection</CardTitle>
                  <CardDescription className="text-blue-700 dark:text-blue-300">
                    Our DeFi protocols operate without collecting personal identification information. Users interact directly with smart contracts using their wallet addresses.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200">Self-Custody</CardTitle>
                  <CardDescription className="text-green-700 dark:text-green-300">
                    Users maintain full control of their assets. We never have access to your private keys or the ability to move your funds without your authorization.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-xl text-muted-foreground mb-8">
              If you have questions about this privacy policy or our data practices, please contact us.
            </p>
            <div className="space-y-4">
              <div>
                <strong>Email:</strong> <a href="mailto:privacy@muscadine.io" className="text-primary hover:underline">privacy@muscadine.io</a>
              </div>
              <div>
                <strong>General Contact:</strong> <a href="mailto:contact@muscadine.io" className="text-primary hover:underline">contact@muscadine.io</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Policy Updates</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We may update this privacy policy from time to time. We will notify users of any material changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/legal/terms">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Terms of Use</CardTitle>
                    <CardDescription>Read our terms and conditions</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/legal/risk-disclosures">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Risk Disclosures</CardTitle>
                    <CardDescription>Important risk information</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/contact">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                  <CardHeader className="text-center">
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Get in touch with questions</CardDescription>
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