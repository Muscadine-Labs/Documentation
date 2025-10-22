"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  Users, 
  Link as LinkIcon, 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Info,
  Building2,
  BarChart3,
  FileText,
  Scale,
  Settings,
  BookOpen,
  Wallet,
  HardDrive,
  Calendar,
  FileCheck,
  Phone,
  ChevronDown,
  ChevronRight
} from "lucide-react";

const navigation = {
  introduction: [
    {
      name: "About",
      href: "/welcome",
      icon: Info,
    },
    {
      name: "Contributors",
      href: "/contributors",
      icon: Users,
    },
    {
      name: "Quick Links",
      href: "/quick-links",
      icon: LinkIcon,
    },
  ],
  defi101: [
    {
      name: "What Is DeFi?",
      href: "/defi/what-is-defi",
      icon: BookOpen,
    },
    {
      name: "Core Concepts",
      href: "/defi/core-concepts",
      icon: TrendingUp,
    },
    {
      name: "Risks",
      href: "/defi/risks",
      icon: Shield,
    },
    {
      name: "Wallet Setup",
      href: "/defi/wallet-setup",
      icon: Wallet,
    },
  ],
  vaults: {
    name: "Vaults",
    icon: BarChart3,
    items: [
      {
        name: "Fees",
        href: "/fees",
        icon: DollarSign,
      },
      {
        name: "Vault Architecture",
        href: "/vault-architecture/how-vaults-work",
        icon: BarChart3,
      },
      {
        name: "Roles & Security",
        href: "/roles-security/role-system",
        icon: Settings,
      },
      {
        name: "Contracts",
        href: "/contracts",
        icon: FileText,
      },
    ],
  },
  selfCustody: {
    name: "Self-Custody Solutions",
    icon: Shield,
    items: [
      {
        name: "Bitcoin",
        href: "/self-custody/bitcoin",
        icon: Building2,
      },
      {
        name: "DeFi Wallet",
        href: "/self-custody/defi-wallet",
        icon: Wallet,
      },
      {
        name: "Recovery",
        href: "/self-custody/recovery",
        icon: HardDrive,
      },
    ],
  },
  roadmap: [
    {
      name: "Upcoming Features",
      href: "/roadmap/features",
      icon: Calendar,
    },
    {
      name: "Governance & Community",
      href: "/roadmap/governance",
      icon: Users,
    },
  ],
  legalCompliance: [
    {
      name: "Terms of Use",
      href: "/legal/terms",
      icon: Scale,
    },
    {
      name: "Risk Disclosures",
      href: "/legal/risk-disclosures",
      icon: Shield,
    },
    {
      name: "Privacy Policy",
      href: "/legal/privacy",
      icon: FileCheck,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
    },
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    vaults: true,
    selfCustody: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  interface NavigationItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }

  interface CollapsibleSectionType {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    items: NavigationItem[];
  }

  const CollapsibleSection = ({ sectionKey, section }: { sectionKey: string, section: CollapsibleSectionType }) => {
    const isExpanded = expandedSections[sectionKey];
    const hasActiveChild = section.items.some((item: NavigationItem) => 
      pathname === item.href || pathname.startsWith(item.href + "/")
    );

    return (
      <div>
        <button
          onClick={() => toggleSection(sectionKey)}
          className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm transition-colors ${
            hasActiveChild
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
          }`}
        >
          <div className="flex items-center space-x-3">
            <section.icon className="h-4 w-4" />
            <span>{section.name}</span>
          </div>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isExpanded && (
          <nav className="ml-6 mt-2 space-y-1">
            {section.items.map((item: NavigationItem) => {
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
        )}
      </div>
    );
  };

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
        {/* Introduction & Overview Section */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            Introduction & Overview
          </h3>
          <nav className="space-y-2">
            {navigation.introduction.map((item) => {
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

        {/* DeFi 101 Section */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            DeFi 101
          </h3>
          <nav className="space-y-2">
            {navigation.defi101.map((item) => {
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

        {/* Vaults Section */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            Products
          </h3>
          <nav className="space-y-2">
            <CollapsibleSection sectionKey="vaults" section={navigation.vaults} />
          </nav>
        </div>

        {/* Self-Custody Solutions Section */}
        <div className="p-6">
          <nav className="space-y-2">
            <CollapsibleSection sectionKey="selfCustody" section={navigation.selfCustody} />
          </nav>
        </div>

        {/* Roadmap Section */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            Roadmap
          </h3>
          <nav className="space-y-2">
            {navigation.roadmap.map((item) => {
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

        {/* Legal & Compliance Section */}
        <div className="p-6">
          <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            Legal & Compliance
          </h3>
          <nav className="space-y-2">
            {navigation.legalCompliance.map((item) => {
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

    </div>
  );
}
