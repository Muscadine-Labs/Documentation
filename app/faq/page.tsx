import { Callout } from "@/components/Callout";
import { RiskAlert } from "@/components/RiskAlert";
import Link from "next/link";

export default function FAQPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Common questions about Muscadine Labs vaults, DeFi strategies, and platform operations.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>General Questions</h2>
        
        <h3>What is Muscadine Labs?</h3>
        <p>
          Muscadine Labs is a DeFi infrastructure company that creates automated yield strategies 
          through vault contracts. We simplify complex DeFi operations while maintaining transparency 
          and security.
        </p>

        <h3>How do Muscadine vaults work?</h3>
        <p>
          Our vaults are smart contracts that automatically manage your DeFi assets. They deposit 
          funds across multiple protocols, continuously optimize for the best yields, and handle 
          rebalancing automatically.
        </p>

        <h3>What networks do you support?</h3>
        <p>
          Currently, all Muscadine vaults operate on the <strong>Base</strong> network. We may 
          expand to additional networks based on user demand and technical feasibility.
        </p>

        <h2>Vault Operations</h2>
        
        <h3>How do I deposit into a vault?</h3>
        <p>
          To deposit into a vault:
        </p>
        <ol>
          <li>Connect your wallet to the Base network</li>
          <li>Navigate to the vault contract address</li>
          <li>Call the deposit function with your desired amount</li>
          <li>Confirm the transaction in your wallet</li>
        </ol>

        <h3>Can I withdraw my funds anytime?</h3>
        <p>
          Yes, all Muscadine vaults support instant withdrawals with no lock-up periods. However, 
          you may need to wait for the next rebalancing cycle in some cases.
        </p>

        <h3>What is the minimum deposit amount?</h3>
        <p>
          There is no minimum deposit amount for Muscadine vaults. You can start with any amount 
          you&apos;re comfortable with.
        </p>

        <h3>How often do vaults rebalance?</h3>
        <p>
          Rebalancing frequency depends on market conditions and strategy optimization opportunities. 
          Typically, vaults rebalance when significant yield improvements are available.
        </p>

        <h2>Fees and Economics</h2>
        
        <h3>What fees do you charge?</h3>
        <p>
          Muscadine Labs charges a <strong>2% performance fee</strong> on vault profits. This fee 
          is only applied to gains, never to your principal investment.
        </p>

        <h3>When are fees charged?</h3>
        <p>
          Performance fees are charged when:
        </p>
        <ul>
          <li>You withdraw funds from a vault</li>
          <li>The vault rebalances positions</li>
          <li>Periodic fee collection cycles occur</li>
        </ul>

        <h3>Are there any other costs?</h3>
        <p>
          You&apos;ll pay Ethereum gas fees for transactions, but these go to network validators, 
          not Muscadine Labs. We optimize operations to minimize gas costs.
        </p>

        <h3>How do I track my returns?</h3>
        <p>
          All vault performance is tracked on-chain and visible through blockchain explorers. 
          You can also monitor performance through our interface.
        </p>

        <h2>Security and Risk</h2>
        
        <h3>Are Muscadine vaults audited?</h3>
        <p>
          Yes, all vault contracts undergo professional security audits before deployment. 
          Audit reports are publicly available.
        </p>

        <h3>What are the main risks?</h3>
        <p>
          Key risks include:
        </p>
        <ul>
          <li>Smart contract vulnerabilities</li>
          <li>Market volatility</li>
          <li>Protocol failures</li>
          <li>Liquidity constraints</li>
          <li>Oracle manipulation</li>
        </ul>

        <h3>How do you manage risk?</h3>
        <p>
          We employ a comprehensive risk management framework including:
        </p>
        <ul>
          <li>Protocol diversification</li>
          <li>Continuous monitoring</li>
          <li>Emergency controls</li>
          <li>Regular security assessments</li>
        </ul>

        <h3>Can I lose my funds?</h3>
        <p>
          Yes, DeFi protocols carry inherent risks. While we implement extensive risk management, 
          you could lose funds due to smart contract bugs, market conditions, or protocol failures.
        </p>

        <h2>Technical Questions</h2>
        
        <h3>What wallets are supported?</h3>
        <p>
          Any wallet that supports the Base network, including MetaMask, Coinbase Wallet, and others.
        </p>

        <h3>How do I verify contract addresses?</h3>
        <p>
          Always verify contract addresses on <a href="https://basescan.org" target="_blank" rel="noopener noreferrer">BaseScan</a> 
          before interacting. Our official addresses are listed in our <Link href="/contracts">Contracts</Link> documentation.
        </p>

        <h3>Can I interact with vaults programmatically?</h3>
        <p>
          Yes, all vault functions are available through smart contract interfaces. Check our 
          contract documentation for ABI details.
        </p>

        <h3>What happens if Base network has issues?</h3>
        <p>
          In case of network issues, vault operations may be temporarily paused. Emergency 
          procedures are in place to protect user funds.
        </p>

        <h2>Support and Community</h2>
        
        <h3>How can I get help?</h3>
        <p>
          For support, you can:
        </p>
        <ul>
          <li>Browse our comprehensive documentation</li>
          <li>Email us at <a href="mailto:contact@muscadine.box">contact@muscadine.box</a></li>
          <li>Join our community channels</li>
          <li>Check our GitHub repository for technical issues</li>
        </ul>

        <h3>Do you have a community?</h3>
        <p>
          Yes, we maintain active community channels for updates, discussions, and support. 
          Check our website for current community links.
        </p>

        <h3>How do I report bugs or issues?</h3>
        <p>
          Report security issues privately to <a href="mailto:contact@muscadine.box">contact@muscadine.box</a>. 
          For general bugs, use our GitHub repository.
        </p>

        <h3>Can I contribute to development?</h3>
        <p>
          Yes, Muscadine Labs is committed to open source development. Check our GitHub repository 
          for contribution guidelines.
        </p>

        <h2>Regulatory and Legal</h2>
        
        <h3>Is Muscadine Labs regulated?</h3>
        <p>
          Muscadine Labs operates as a technology company providing DeFi infrastructure. We comply 
          with applicable regulations in our operating jurisdictions.
        </p>

        <h3>What are the legal disclaimers?</h3>
        <p>
          All users should review our <Link href="/legal">Legal Disclosure</Link> and risk disclosures. 
          DeFi protocols are experimental and carry significant risks.
        </p>

        <h3>Are there geographic restrictions?</h3>
        <p>
          Muscadine vaults are available globally, but users should ensure compliance with local 
          regulations in their jurisdiction.
        </p>

        <h3>How do you handle user data?</h3>
        <p>
          We prioritize user privacy and only collect necessary data for service provision. All 
          operations are transparent and on-chain.
        </p>

        <h2>Future Development</h2>
        
        <h3>What&apos;s coming next?</h3>
        <p>
          We&apos;re continuously developing new strategies and features. Follow our updates for 
          the latest developments.
        </p>

        <h3>Will you add more vault types?</h3>
        <p>
          Yes, we plan to expand our vault offerings based on user demand and market opportunities.
        </p>

        <h3>Do you plan to support other networks?</h3>
        <p>
          We may expand to additional networks based on technical feasibility and user demand.
        </p>

        <h3>How can I stay updated?</h3>
        <p>
          Subscribe to our updates, follow our community channels, and check our documentation 
          regularly for the latest information.
        </p>

        <h2>Advanced Questions</h2>
        
        <h3>How do you choose which protocols to use?</h3>
        <p>
          We evaluate protocols based on security, yield potential, liquidity, and community 
          health. Our curator role manages protocol selection and strategy updates.
        </p>

        <h3>What happens during extreme market conditions?</h3>
        <p>
          Vaults have built-in risk management that can pause operations or reduce exposure during 
          extreme market conditions. Emergency procedures are in place to protect user funds.
        </p>

        <h3>How do you handle protocol upgrades?</h3>
        <p>
          We monitor protocol upgrades and governance changes. When necessary, we update strategies 
          or migrate to newer versions to maintain optimal performance.
        </p>

        <h3>Can vaults be customized for specific needs?</h3>
        <p>
          Currently, vaults use standardized strategies. Future versions may allow for more 
          customization based on user preferences and risk tolerance.
        </p>

        <Callout type="info">
          <strong>Still have questions?</strong> Don&apos;t hesitate to reach out to us at 
          <a href="mailto:contact@muscadine.box">contact@muscadine.box</a> for personalized assistance.
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
