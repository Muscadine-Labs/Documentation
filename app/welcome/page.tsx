import { Callout } from "@/components/Callout";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Muscadine Labs</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Learn about Muscadine Labs and our mission to democratize DeFi access through automated yield strategies.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>What is Muscadine Labs?</h2>
        <p>
          Muscadine Labs is a DeFi infrastructure company focused on creating sophisticated yet accessible yield strategies. We believe that everyone should have access to the best DeFi opportunities, regardless of their technical expertise or time availability.
        </p>

        <p>Our platform provides:</p>
        <ul>
          <li><strong>Automated Vaults</strong>: Self-executing strategies that optimize yields across multiple DeFi protocols</li>
          <li><strong>Risk Management</strong>: Built-in safeguards and monitoring to protect user funds</li>
          <li><strong>Transparent Operations</strong>: Open-source contracts and clear fee structures</li>
          <li><strong>Professional Management</strong>: Experienced team with deep DeFi expertise</li>
        </ul>

        <h2>Mission & Principles</h2>
        
        <h3>Our Mission</h3>
        <p>
          To democratize access to sophisticated DeFi strategies by creating automated, secure, and transparent yield optimization tools that work for everyone.
        </p>

        <h3>Core Principles</h3>
        <p><strong>Security First</strong>: Every strategy is built with security as the primary consideration, using battle-tested protocols and comprehensive risk management.</p>
        
        <p><strong>Transparency</strong>: All contracts are open-source, fees are clearly disclosed, and operations are auditable on-chain.</p>
        
        <p><strong>Accessibility</strong>: Complex DeFi strategies made simple through automation and intuitive interfaces.</p>
        
        <p><strong>Performance</strong>: Continuous optimization to maximize yields while maintaining appropriate risk levels.</p>

        <h2>Getting Started</h2>
        <p>Ready to explore our documentation? Here are some recommended starting points:</p>
        <ul>
          <li><Link href="/products/overview">Products Overview</Link> - Learn about our vault offerings</li>
          <li><Link href="/products">What are Vaults?</Link> - Understand how our automated strategies work</li>
          <li><Link href="/defi">DeFi 101</Link> - Get familiar with decentralized finance basics</li>
          <li><Link href="/fees/performance-fee">Fees & Economics</Link> - Understand our transparent fee structure</li>
        </ul>

        <Callout type="info">
          <strong>New to DeFi?</strong> We recommend starting with our <Link href="/defi">DeFi 101</Link> section to understand the fundamentals before diving into our specific products.
        </Callout>

        <h2>Contact & Support</h2>
        <p>Have questions or need help? We're here to assist:</p>
        <ul>
          <li><strong>Email</strong>: <a href="mailto:contact@muscadine.box">contact@muscadine.box</a></li>
          <li><strong>Documentation</strong>: Browse our comprehensive guides and FAQs</li>
          <li><strong>Contracts</strong>: All our smart contracts are publicly auditable on-chain</li>
        </ul>

        <hr />
        <p><em>This documentation is regularly updated to reflect the latest developments in our platform and the broader DeFi ecosystem.</em></p>
      </div>
    </article>
  );
}
