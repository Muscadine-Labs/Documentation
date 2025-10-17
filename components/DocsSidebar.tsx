"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Welcome",
    href: "/welcome",
    children: [
      { title: "What is Muscadine Labs?", href: "/welcome" },
      { title: "Why We Exist", href: "/welcome/why-we-exist" },
      { title: "Philosophy & Design Principles", href: "/welcome/philosophy" },
    ],
  },
  {
    title: "Products",
    href: "/products",
    children: [
      { title: "What Are Vaults?", href: "/products/vaults" },
      { title: "Supported Assets", href: "/products/supported-assets" },
      { title: "Yield Strategy Architecture", href: "/products/yield-strategy" },
      { title: "Risk Tiers", href: "/products/risk-tiers" },
    ],
  },
  {
    title: "DeFi 101",
    href: "/defi",
    children: [
      { title: "What is DeFi?", href: "/defi/what-is-defi" },
      { title: "What is Lending & Borrowing?", href: "/defi/lending-101" },
      { title: "What are Yield Vaults?", href: "/defi/yield-vaults" },
      { title: "Key Risks", href: "/defi/key-risks" },
    ],
  },
  {
    title: "Vault Architecture",
    href: "/vault-architecture",
    children: [
      { title: "How Vaults Work", href: "/vault-architecture/how-vaults-work" },
      { title: "Lifecycle of a Deposit", href: "/vault-architecture/deposit-lifecycle" },
      { title: "Harvesting & Rebalancing", href: "/vault-architecture/harvesting-rebalancing" },
      { title: "Allocation Logic", href: "/vault-architecture/allocation-logic" },
    ],
  },
  {
    title: "Roles & Security",
    href: "/roles-security",
    children: [
      { title: "Role-Based Control System", href: "/roles-security/role-system" },
      { title: "Owner Role", href: "/roles-security/owner-role" },
      { title: "Guardian Role", href: "/roles-security/guardian-role" },
      { title: "Curator Role", href: "/roles-security/curator-role" },
      { title: "Allocators", href: "/roles-security/allocators" },
      { title: "Multisig Structure", href: "/roles-security/multisig-structure" },
    ],
  },
  {
    title: "Fees & Economics",
    href: "/fees",
    children: [
      { title: "Performance Fee — 2%", href: "/fees/performance-fee" },
      { title: "Why Fees Exist", href: "/fees/why-fees-exist" },
      { title: "How Fees Accrue", href: "/fees/how-fees-accrue" },
      { title: "Fee Splitter Contract", href: "/fees/fee-splitter" },
      { title: "Example Fee Flows", href: "/fees/example-flows" },
    ],
  },
  {
    title: "Contracts & Addresses",
    href: "/contracts",
    children: [
      { title: "Vaults (USDC, cbBTC, WETH)", href: "/contracts/vaults" },
      { title: "Fee Splitter", href: "/contracts/fee-splitter" },
      { title: "Multisigs", href: "/contracts/multisigs" },
      { title: "Onchain Registry", href: "/contracts/registry" },
    ],
  },
  {
    title: "Muscadine Risk Framework",
    href: "/risk",
    children: [
      { title: "Smart Contract Risk", href: "/risk/smart-contract-risk" },
      { title: "Oracle Risk", href: "/risk/oracle-risk" },
      { title: "Liquidity Risk", href: "/risk/liquidity-risk" },
      { title: "Counterparty Risk", href: "/risk/counterparty-risk" },
      { title: "Depeg Risk", href: "/risk/depeg-risk" },
      { title: "Mitigation", href: "/risk/mitigation" },
    ],
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Legal Disclosure",
    href: "/legal",
  },
];

interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("space-y-2", className)}>
      {navigation.map((item) => (
        <div key={item.href}>
          <Link
            href={item.href}
            className={cn(
              "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.title}
            {item.children && (
              <ChevronRight className="h-4 w-4" />
            )}
          </Link>
          {item.children && (
            <div className="ml-4 mt-1 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === child.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
