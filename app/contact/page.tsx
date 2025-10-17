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
                href="mailto:contact@muscadine.box" 
                className="text-primary hover:underline font-medium"
              >
                contact@muscadine.box
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
                href="mailto:contact@muscadine.box" 
                className="text-primary hover:underline font-medium"
              >
                contact@muscadine.box
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

        <h2>Support Categories</h2>
        
        <h3>General Questions</h3>
        <p>
          For questions about how vaults work, fee structures, or general platform information, 
          please check our <a href="/faq">FAQ</a> first, then contact us if you need additional help.
        </p>

        <h3>Technical Support</h3>
        <p>
          For technical issues, wallet connection problems, or transaction errors, please include:
        </p>
        <ul>
          <li>Your wallet address (if relevant)</li>
          <li>Transaction hash (if applicable)</li>
          <li>Error messages you&apos;re seeing</li>
          <li>Steps you took before the issue occurred</li>
        </ul>

        <h3>Security Issues</h3>
        <p>
          If you discover a security vulnerability or have concerns about vault security, 
          please report it privately to <a href="mailto:contact@muscadine.box">contact@muscadine.box</a> 
          with &quot;Security Issue&quot; in the subject line.
        </p>

        <h3>Business Inquiries</h3>
        <p>
          For partnership opportunities, integrations, or business development inquiries, 
          please contact us at <a href="mailto:contact@muscadine.box">contact@muscadine.box</a> 
          with &quot;Business Inquiry&quot; in the subject line.
        </p>

        <h2>Response Times</h2>
        
        <div className="bg-muted/30 p-6 rounded-2xl my-6">
          <h4>Expected Response Times</h4>
          <ul>
            <li><strong>General Questions</strong>: 24-48 hours</li>
            <li><strong>Technical Issues</strong>: 12-24 hours</li>
            <li><strong>Security Issues</strong>: 4-8 hours</li>
            <li><strong>Business Inquiries</strong>: 48-72 hours</li>
          </ul>
        </div>

        <h2>Before Contacting Us</h2>
        
        <h3>Check Documentation</h3>
        <p>
          Our documentation covers most common questions and scenarios. Please review the relevant 
          sections before reaching out:
        </p>
        <ul>
          <li><a href="/welcome">Welcome Guide</a> - Getting started</li>
          <li><a href="/products">Vault Overview</a> - How vaults work</li>
          <li><a href="/fees/performance-fee">Fee Structure</a> - Understanding fees</li>
          <li><a href="/contracts">Contract Addresses</a> - Technical details</li>
          <li><a href="/faq">FAQ</a> - Common questions</li>
        </ul>

        <h3>Check Community Resources</h3>
        <p>
          Our community channels often have answers to common questions and can provide 
          peer-to-peer support:
        </p>
        <ul>
          <li>GitHub Discussions for technical questions</li>
          <li>Twitter for announcements and updates</li>
          <li>Community Discord (when available)</li>
        </ul>

        <h2>Feedback and Suggestions</h2>
        
        <h3>Feature Requests</h3>
        <p>
          We welcome feedback and suggestions for improving our vaults and platform. 
          Please share your ideas at <a href="mailto:contact@muscadine.box">contact@muscadine.box</a> 
          with &quot;Feature Request&quot; in the subject line.
        </p>

        <h3>Documentation Improvements</h3>
        <p>
          If you find errors in our documentation or have suggestions for improvements, 
          please let us know. Good documentation helps everyone in the community.
        </p>

        <h3>User Experience</h3>
        <p>
          We&apos;re always looking to improve the user experience. Share your thoughts 
          on what works well and what could be better.
        </p>

        <h2>Emergency Contact</h2>
        
        <Callout type="warning">
          <strong>Emergency Situations</strong>: For critical security issues or emergency 
          situations that could affect user funds, please contact us immediately at 
          <a href="mailto:contact@muscadine.box">contact@muscadine.box</a> with 
          &quot;EMERGENCY&quot; in the subject line.
        </Callout>

        <h2>Stay Updated</h2>
        
        <h3>Newsletter</h3>
        <p>
          Subscribe to our updates to receive important announcements, new features, 
          and educational content about DeFi and yield strategies.
        </p>

        <h3>Social Media</h3>
        <p>
          Follow us on social media for real-time updates, community discussions, 
          and educational content:
        </p>
        <ul>
          <li><strong>Twitter</strong>: <a href="https://twitter.com/muscadinelabs" target="_blank" rel="noopener noreferrer">@muscadinelabs</a></li>
          <li><strong>GitHub</strong>: <a href="https://github.com/muscadine-labs" target="_blank" rel="noopener noreferrer">muscadine-labs</a></li>
        </ul>

        <h2>Partnership Opportunities</h2>
        
        <p>
          We&apos;re always interested in exploring partnerships with:
        </p>
        <ul>
          <li>DeFi protocols and platforms</li>
          <li>Security auditors and researchers</li>
          <li>Educational content creators</li>
          <li>Community builders and influencers</li>
          <li>Technology integrators</li>
        </ul>

        <p>
          If you&apos;re interested in partnering with Muscadine Labs, please contact us 
          at <a href="mailto:contact@muscadine.box">contact@muscadine.box</a> with 
          &quot;Partnership&quot; in the subject line.
        </p>

        <Callout type="info">
          <strong>Thank you for your interest in Muscadine Labs!</strong> We appreciate 
          your support and look forward to helping you succeed with DeFi yield strategies.
        </Callout>

        <RiskAlert type="warning" title="Important Disclaimer">
          <p>
            Muscadine Labs does not provide investment advice. Vaults are experimental DeFi smart contracts 
            and may carry risk of loss. Users are responsible for their own decisions. DYOR.
          </p>
        </RiskAlert>
      </div>
    </article>
  );
}
