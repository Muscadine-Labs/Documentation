import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Settings, Shield } from "lucide-react";

const roleTopics = [
  {
    title: "Role System",
    description: "Overview of our role-based control system",
    href: "/roles-security/role-system",
    icon: Settings,
  },
  {
    title: "Owner Role",
    description: "Responsibilities and powers of the owner role",
    href: "/roles-security/owner-role",
    icon: Shield,
  },
  {
    title: "Guardian Role",
    description: "Security and emergency response capabilities",
    href: "/roles-security/guardian-role",
    icon: Shield,
  },
  {
    title: "Curator Role",
    description: "Strategy management and optimization",
    href: "/roles-security/curator-role",
    icon: Users,
  },
  {
    title: "Allocators",
    description: "Asset allocation and rebalancing responsibilities",
    href: "/roles-security/allocators",
    icon: FileText,
  },
  {
    title: "Multisig Structure",
    description: "Multi-signature wallet configuration and governance",
    href: "/roles-security/multisig-structure",
    icon: Settings,
  },
];

export default function RolesSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Roles & Security
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding Muscadine Labs' role-based security system and governance structure.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Security Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleTopics.map((topic) => (
              <Link key={topic.href} href={topic.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <topic.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Security Principles</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Decentralized Control</h3>
                <p className="text-muted-foreground">
                  No single entity has complete control over the system. Multiple roles work together to ensure security and proper governance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Transparent Operations</h3>
                <p className="text-muted-foreground">
                  All role activities and security measures are transparent and auditable by the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Muscadine Labs. All rights reserved.
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
