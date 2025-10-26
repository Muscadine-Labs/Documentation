"use client";

import Link from "next/link";
import Image from "next/image";
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
  Package,
  ChevronDown,
  ChevronRight
} from "lucide-react";

const navigation = {
  overview: {
    name: "Overview",
    icon: Info,
    items: [
      {
        name: "About",
        href: "/",
        icon: Info,
      },
      {
        name: "Contributors",
        href: "/overview/contributors",
        icon: Users,
      },
      {
        name: "Quick Links",
        href: "/overview/quick-links",
        icon: LinkIcon,
      },
    ],
  },
  defi101: {
    name: "DeFi 101",
    icon: BookOpen,
    items: [
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
  },
  products: {
    name: "Products",
    icon: Package,
    items: [
      {
        name: "Vaults",
        href: "/vault/about",
        icon: BarChart3,
        subItems: [
          {
            name: "About",
            href: "/vault/about",
            icon: Info,
          },
          {
            name: "Architecture",
            href: "/vault/architecture",
            icon: BarChart3,
          },
          {
            name: "Roles & Security",
            href: "/vault/roles-security",
            icon: Settings,
          },
          {
            name: "Fees",
            href: "/vault/fees",
            icon: DollarSign,
          },
          {
            name: "Contracts",
            href: "/vault/contracts",
            icon: FileText,
          },
        ],
      },
      {
        name: "Self-Custody Solutions",
        href: "/self-custody/about",
        icon: Shield,
        subItems: [
          {
            name: "About",
            href: "/self-custody/about",
            icon: Info,
          },
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
        ],
      },
      {
        name: "Roadmap",
        href: "/roadmap/features",
        icon: Calendar,
        subItems: [
          {
            name: "Upcoming Features",
            href: "/roadmap/features",
            icon: Calendar,
          },
        ],
      },
    ],
  },
  legalCompliance: {
    name: "Legal & Compliance",
    icon: Scale,
    items: [
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
    ],
  },
  contact: {
    name: "Contact",
    icon: Phone,
    items: [
      {
        name: "Contact & Support",
        href: "/contact",
        icon: Phone,
      },
    ],
  },
};

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    overview: true,
    defi101: false,
    products: true,
    'products-vaults': false,
    'products-self-custody-solutions': false,
    'products-roadmap': false,
    legalCompliance: false,
    contact: false,
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
    subItems?: NavigationItem[];
  }

  interface CollapsibleSectionType {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    items: NavigationItem[];
  }

  const CollapsibleSection = ({ sectionKey, section }: { sectionKey: string, section: CollapsibleSectionType }) => {
    const isExpanded = expandedSections[sectionKey];
    const hasActiveChild = section.items.some((item: NavigationItem) => {
      if (item.subItems) {
        return item.subItems.some((subItem: NavigationItem) => 
          pathname === subItem.href || pathname.startsWith(subItem.href + "/")
        );
      }
      return pathname === item.href || pathname.startsWith(item.href + "/");
    });

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
              const hasActiveSubItem = item.subItems?.some((subItem: NavigationItem) => 
                pathname === subItem.href || pathname.startsWith(subItem.href + "/")
              );
              const itemKey = `${sectionKey}-${item.name.toLowerCase().replace(/\s+/g, '-')}`;
              const isItemExpanded = expandedSections[itemKey];

              return (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleSection(itemKey)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive || hasActiveSubItem
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </div>
                        {isItemExpanded ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {isItemExpanded && (
                        <nav className="ml-6 mt-1 space-y-1">
                          {item.subItems.map((subItem: NavigationItem) => {
                            const isSubActive = pathname === subItem.href || pathname.startsWith(subItem.href + "/");
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={onNavigate}
                                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                                  isSubActive
                                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                                }`}
                              >
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.name}</span>
                              </Link>
                            );
                          })}
                        </nav>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
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
          onClick={onNavigate}
          className="flex items-center space-x-2 text-xl font-bold hover:text-sidebar-primary transition-colors"
        >
          <Image 
            src="/muscadinelogo.jpg" 
            alt="Muscadine Labs Logo" 
            width={24} 
            height={24}
            className="rounded-sm"
          />
          <span>Muscadine Labs</span>
        </a>
        <p className="text-sm text-sidebar-foreground/70 mt-1">Documentation</p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Overview Section */}
        <div className="px-6 py-4">
          <nav className="space-y-2">
            <CollapsibleSection sectionKey="overview" section={navigation.overview} />
          </nav>
        </div>

        {/* DeFi 101 Section */}
        <div className="px-6 py-4">
          <nav className="space-y-2">
            <CollapsibleSection sectionKey="defi101" section={navigation.defi101} />
          </nav>
        </div>

        {/* Products Section */}
        <div className="px-6 py-4">
          <nav className="space-y-2">
            <CollapsibleSection sectionKey="products" section={navigation.products} />
          </nav>
        </div>

        {/* Legal & Compliance Section */}
        <div className="px-6 py-4">
          <nav className="space-y-2">
            <CollapsibleSection sectionKey="legalCompliance" section={navigation.legalCompliance} />
          </nav>
        </div>

        {/* Contact Section */}
        <div className="px-6 py-4">
          <nav className="space-y-2">
            <CollapsibleSection sectionKey="contact" section={navigation.contact} />
          </nav>
        </div>
      </div>

    </div>
  );
}
