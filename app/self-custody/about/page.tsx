import { Shield, Key, HardDrive, CheckCircle, Compass } from "lucide-react";

import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Own your keys",
    description: "No custodians. You hold the signing material, always.",
    icon: Key,
  },
  {
    title: "Segment risk",
    description: "Use separate wallets for vaults, trading, and cold storage.",
    icon: Shield,
  },
  {
    title: "Recover safely",
    description: "Backups and procedures that you test, not just write down.",
    icon: HardDrive,
  },
  {
    title: "Operate clearly",
    description: "Document who does what and when for stress scenarios.",
    icon: Compass,
  },
];

const benefits = [
  {
    title: "No counterparty risk",
    description: "Assets aren’t parked with an exchange or custodian.",
  },
  {
    title: "Full ownership",
    description: "Private keys stay with you; no rehypothecation or freezes.",
  },
  {
    title: "Security by design",
    description: "Redundancy, separation of duties, and rehearsed recovery.",
  },
  {
    title: "Flexible control",
    description: "Choose hardware, smart, or paper flows to fit your risk.",
  },
];

export default function SelfCustodyAboutPage() {
  return (
    <PageLayout 
      title="About Self-Custody"
      description="How we structure key ownership, backups, and operational safety so you stay sovereign across Bitcoin and DeFi."
    >
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <Badge variant="outline" className="mx-auto w-fit">Principles</Badge>
              <h2 className="text-3xl font-semibold tracking-tight">A simple self-custody playbook</h2>
              <p className="text-muted-foreground">
                Four pillars cover the lifecycle: holding keys, segmenting risk, backing up, and operating under pressure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((item) => (
                <Card key={item.title} className="h-full hover:-translate-y-1 hover:shadow-md transition-all">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <Badge variant="outline" className="mx-auto w-fit">Why it matters</Badge>
              <h2 className="text-3xl font-semibold tracking-tight">Benefits of doing it right</h2>
              <p className="text-muted-foreground">
                Self-custody is powerful only when it is disciplined. These are the outcomes we anchor on.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </PageLayout>
  );
}