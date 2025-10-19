"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  Globe, 
  Link as LinkIcon, 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Info,
  Building2,
  Coins,
  BarChart3,
  FileText,
  HelpCircle,
  Scale,
  Settings
} from "lucide-react";

const navigation = {
  discover: [
    {
      name: "About Muscadine",
      href: "/welcome",
      icon: Info,
    },
    {
      name: "Contributors",
      href: "/contributors",
      icon: Users,
    },
    {
      name: "Network",
      href: "/network",
      icon: Globe,
    },
    {
      name: "Quick Links",
      href: "/quick-links",
      icon: LinkIcon,
    },
  ],
  muscadine: [
    {
      name: "Getting Started",
      href: "/welcome/philosophy",
      icon: TrendingUp,
    },
    {
      name: "Vaults",
      href: "/products",
      icon: Building2,
    },
    {
      name: "Products",
      href: "/products/overview",
      icon: Coins,
    },
    {
      name: "Fees",
      href: "/fees",
      icon: DollarSign,
    },
    {
      name: "Risk Framework",
      href: "/risk",
      icon: Shield,
    },
    {
      name: "Contracts",
      href: "/contracts",
      icon: FileText,
    },
    {
      name: "Roles & Security",
      href: "/roles-security/role-system",
      icon: Settings,
    },
    {
      name: "Vault Architecture",
      href: "/vault-architecture/how-vaults-work",
      icon: BarChart3,
    },
    {
      name: "FAQ",
      href: "/faq",
      icon: HelpCircle,
    },
    {
      name: "Legal",
      href: "/legal",
      icon: Scale,
    },
  ],
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <a 
          href="https://muscadine.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl font-bold hover:text-sidebar-primary transition-colors"
        >
          Muscadine Labs
        </a>
        <p className="text-sm text-sidebar-foreground/70 mt-1">Documentation</p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Discover Section */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            DISCOVER
          </h3>
          <nav className="space-y-2">
            {navigation.discover.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Muscadine Overview Section */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            MUSCADINE OVERVIEW
          </h3>
          <nav className="space-y-2">
            {navigation.muscadine.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-sidebar-border">
        <div className="bg-sidebar-accent/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-sm text-sidebar-foreground/70">
            <Globe className="h-4 w-4" />
            <span>Powered by Muscadine Labs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
