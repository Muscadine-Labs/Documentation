import { Callout } from "@/components/Callout";
import { RiskAlert } from "@/components/RiskAlert";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Philosophy & Design Principles</h1>
        <p className="text-xl text-muted-foreground mt-4">
          The core principles that guide Muscadine Labs&apos; approach to DeFi infrastructure and vault design.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Our Philosophy</h2>
        <p>
          Muscadine Labs operates on the belief that sophisticated DeFi strategies should be accessible to everyone, 
          regardless of technical expertise or time availability. We bridge the gap between complex DeFi protocols 
          and everyday users through thoughtful automation and transparent design.
        </p>

        <h2>Core Design Principles</h2>
        
        <h3>1. Security First</h3>
        <p>
          Every decision prioritizes the safety of user funds. We employ battle-tested protocols, 
          comprehensive risk management, and multiple layers of security controls. Security is not 
          an afterthought—it&apos;s the foundation of everything we build.
        </p>

        <h3>2. Transparency by Design</h3>
        <p>
          All our operations are transparent and auditable on-chain. Users can verify every transaction, 
          fee collection, and vault operation. We believe that trust is built through verifiable actions, 
          not marketing promises.
        </p>

        <h3>3. Accessibility Through Automation</h3>
        <p>
          Complex DeFi strategies are made simple through intelligent automation. Users don&apos;t need 
          to understand the intricacies of yield farming, rebalancing, or protocol interactions—our 
          vaults handle the complexity while maintaining full transparency.
        </p>

        <h3>4. Performance Optimization</h3>
        <p>
          We continuously optimize for the best risk-adjusted returns. Our strategies adapt to market 
          conditions, protocol changes, and emerging opportunities while maintaining appropriate risk levels.
        </p>

        <h3>5. User-Centric Design</h3>
        <p>
          Every feature is designed with the end user in mind. From intuitive interfaces to clear 
          documentation, we prioritize user experience without compromising on functionality or security.
        </p>

        <h2>Technical Philosophy</h2>
        
        <h3>Modular Architecture</h3>
        <p>
          Our vaults are built with modularity in mind. Each component can be upgraded, replaced, 
          or extended without affecting the core functionality. This allows for continuous improvement 
          and adaptation to changing market conditions.
        </p>

        <h3>Role-Based Security</h3>
        <p>
          We implement a sophisticated role-based access control system that distributes power across 
          multiple entities. No single party has complete control, reducing centralization risks while 
          maintaining operational efficiency.
        </p>

        <h3>Fail-Safe Mechanisms</h3>
        <p>
          Every system includes multiple fail-safe mechanisms. From emergency pauses to automatic 
          risk management, our vaults are designed to protect user funds even in extreme scenarios.
        </p>

        <h2>Economic Philosophy</h2>
        
        <h3>Aligned Incentives</h3>
        <p>
          Our fee structure ensures that we only profit when users profit. The 2% performance fee 
          creates alignment between our success and user success, incentivizing us to optimize for 
          the best possible outcomes.
        </p>

        <h3>Sustainable Operations</h3>
        <p>
          Fees are designed to support sustainable operations while remaining competitive. We 
          balance the need for operational funding with fair pricing for users.
        </p>

        <h3>Transparent Economics</h3>
        <p>
          All economic decisions are transparent and documented. Users understand exactly how fees 
          work, when they&apos;re charged, and how they&apos;re used to support the platform.
        </p>

        <h2>Community Philosophy</h2>
        
        <h3>Open Source Commitment</h3>
        <p>
          We believe in the power of open source software. All our contracts are open source, 
          allowing the community to verify, audit, and contribute to our codebase.
        </p>

        <h3>Educational Focus</h3>
        <p>
          We invest heavily in education and documentation. Our goal is not just to provide vaults, 
          but to help users understand DeFi and make informed decisions.
        </p>

        <h3>Community Governance</h3>
        <p>
          As we grow, we plan to transition to community governance. Users will have a voice in 
          important decisions about vault strategies, fee structures, and platform development.
        </p>

        <h2>Risk Philosophy</h2>
        
        <h3>Risk Awareness</h3>
        <p>
          We believe in honest communication about risks. DeFi is experimental, and users should 
          understand both the opportunities and the risks involved.
        </p>

        <h3>Risk Management</h3>
        <p>
          We implement comprehensive risk management strategies, but we don&apos;t claim to eliminate 
          all risks. Instead, we focus on identifying, measuring, and mitigating risks where possible.
        </p>

        <h3>Continuous Monitoring</h3>
        <p>
          Risk management is an ongoing process. We continuously monitor market conditions, protocol 
          health, and vault performance to identify and address emerging risks.
        </p>

        <Callout type="info">
          <strong>Want to learn more?</strong> Explore our <Link href="/vault-architecture/how-vaults-work">Vault Architecture</Link> 
          to see how these principles are implemented in practice.
        </Callout>

        <RiskAlert type="warning" title="Important Disclaimer">
          <p>
            Muscadine Labs does not provide investment advice. Vaults are experimental DeFi smart contracts 
            and may carry risk of loss. Users are responsible for their own decisions. DYOR.
          </p>
        </RiskAlert>
      </div>
    </article>
  );
}
