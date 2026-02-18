import { Server, ExternalLink } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NodePage() {
  return (
    <PageLayout title="Node" description="Muscadine node infrastructure and services.">
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <Badge variant="outline" className="mx-auto w-fit">Infrastructure</Badge>
              <h2 className="text-3xl font-semibold tracking-tight">Node services</h2>
              <p className="text-muted-foreground">
                Run and participate in Muscadine node infrastructure.
              </p>
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Server className="h-6 w-6 text-primary" />
                  <CardTitle>Bitcoin Node</CardTitle>
                </div>
                <CardDescription className="mb-4">
                  Connect to our self-hosted Bitcoin node for secure transactions and enhanced privacy. Access a full Bitcoin node for verification and transaction broadcasting.
                </CardDescription>
                <a
                  href="https://muscadine.io/node"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-fit"
                >
                  Connect to Node <ExternalLink className="h-4 w-4" />
                </a>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
