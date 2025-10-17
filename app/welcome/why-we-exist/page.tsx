import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, Lightbulb } from "lucide-react";

const philosophyTopics = [
  {
    title: "About Muscadine",
    description: "Learn more about our mission and values",
    href: "/welcome",
    icon: Heart,
  },
  {
    title: "Contributors",
    description: "Meet the team behind Muscadine Labs",
    href: "/contributors",
    icon: Users,
  },
  {
    title: "Network",
    description: "Our ecosystem and partnerships",
    href: "/network",
    icon: Globe,
  },
  {
    title: "Innovation",
    description: "Our approach to DeFi innovation",
    href: "/welcome",
    icon: Lightbulb,
  },
];

export default function WhyWeExistPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Why We Exist
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding the mission and philosophy behind Muscadine Labs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {philosophyTopics.map((topic) => (
              <Link key={topic.href} href={topic.href}>
                <Card className="w-80 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-left">
                    <div className="flex items-center space-x-3">
                      <topic.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <span>Democratizing DeFi</span>
                </CardTitle>
                <CardDescription>
                  Making sophisticated DeFi strategies accessible to everyone, regardless of technical expertise.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <span>Innovation First</span>
                </CardTitle>
                <CardDescription>
                  Continuously innovating to provide better yield opportunities while maintaining security and transparency.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
