import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <PageLayout 
      title="Contact & Support"
      description="Get in touch with Muscadine Labs for support, questions, or collaboration."
    >
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Muscadine Labs</h2>
            <p className="text-xl text-muted-foreground">
              Reach out to us for support, questions, or collaboration opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>Email</CardTitle>
                </div>
                <CardDescription>
                  General inquiries and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:muscadinelabs@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  muscadinelabs@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="h-6 w-6 text-primary" />
                  <CardTitle>Website</CardTitle>
                </div>
                <CardDescription>
                  Visit our main website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://muscadine.io/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  muscadine.io/contact
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <CardTitle>LinkedIn</CardTitle>
                </div>
                <CardDescription>
                  Connect with us professionally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.linkedin.com/company/muscadinelabs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Muscadine Labs LinkedIn
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Github className="h-6 w-6 text-primary" />
                  <CardTitle>GitHub</CardTitle>
                </div>
                <CardDescription>
                  View our open source projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://github.com/Muscadine-Labs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Muscadine-Labs GitHub
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
