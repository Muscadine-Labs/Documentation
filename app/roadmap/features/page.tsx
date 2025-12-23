import { CalendarClock, Sparkles, Wrench } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const roadmap = [
  {
    title: "Vault reporting refresh",
    description: "Clearer performance views, fee transparency, and role references.",
    status: "In progress",
  },
  {
    title: "Contract references",
    description: "Publish verified addresses and ABI references inline in docs.",
    status: "Planned",
  },
  {
    title: "Self-custody playbooks",
    description: "Step-by-step ops guides for keys, recovery, and multi-sig.",
    status: "Planned",
  },
  {
    title: "Risk & disclosure sync",
    description: "Align legal/risk pages with vault fee and roles pages.",
    status: "Planned",
  },
];

export default function UpcomingFeaturesPage() {
  return (
    <PageLayout
      title="Roadmap"
      description="What we are shipping next for the docs and product surfaces."
    >
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <Badge variant="outline" className="mx-auto w-fit">Status</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">Docs & product updates</h2>
            <p className="text-muted-foreground">
              Lightweight view; we keep this page short and link to details when live.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {roadmap.map((item) => (
              <Card key={item.title} className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    {item.status === "In progress" ? (
                      <Wrench className="h-5 w-5 text-primary" />
                    ) : (
                      <Sparkles className="h-5 w-5 text-primary" />
                    )}
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit">{item.status}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <CalendarClock className="h-6 w-6 text-primary mx-auto" />
            <h3 className="text-2xl font-semibold">Want something prioritized?</h3>
            <p className="text-muted-foreground">
              Open an issue on GitHub or email contact@muscadine.io with the use case. We triage weekly and publish changes here.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}