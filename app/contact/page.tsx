import { Callout } from "@/components/Callout";
import { RiskAlert } from "@/components/RiskAlert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Github, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Contact & Support</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Get in touch with the Muscadine Labs team for support, questions, or collaboration.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Get Help</h2>
        <p>
          We&apos;re here to help you understand and use Muscadine vaults effectively. 
          Choose the best way to reach us based on your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle>General Support</CardTitle>
              </div>
              <CardDescription>
                For general questions, support, or feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:contact@muscadine.io" 
                className="text-primary hover:underline font-medium"
              >
                contact@muscadine.io
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                We typically respond within 24-48 hours
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <CardTitle>Technical Issues</CardTitle>
              </div>
              <CardDescription>
                For technical problems or bug reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:contact@muscadine.io" 
                className="text-primary hover:underline font-medium"
              >
                contact@muscadine.io
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Include &quot;Technical Issue&quot; in the subject line
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Github className="h-6 w-6 text-primary" />
                <CardTitle>Open Source</CardTitle>
              </div>
              <CardDescription>
                Contribute to our codebase or report issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://github.com/muscadine-labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                GitHub Repository
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Open source contracts and documentation
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Twitter className="h-6 w-6 text-primary" />
                <CardTitle>Community</CardTitle>
              </div>
              <CardDescription>
                Follow us for updates and announcements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://twitter.com/muscadinelabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                @muscadinelabs
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Latest news and community discussions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
}
