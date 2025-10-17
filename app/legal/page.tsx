import { Callout } from "@/components/Callout";
import { RiskAlert } from "@/components/RiskAlert";

export default function LegalDisclosurePage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Legal Disclosure</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Important legal information and disclaimers for Muscadine Labs vault users.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <RiskAlert type="critical" title="Important Notice">
          <p>
            <strong>Muscadine Labs does not provide investment advice.</strong> Vaults are experimental 
            DeFi smart contracts and may carry risk of loss. Users are responsible for their own decisions. 
            DYOR (Do Your Own Research).
          </p>
        </RiskAlert>

        <h2>General Disclaimer</h2>
        <p>
          The information provided in this documentation is for educational and informational purposes only. 
          It does not constitute financial, investment, legal, or tax advice. Users should consult with 
          qualified professionals before making any investment decisions.
        </p>

        <h2>DeFi Risk Disclosure</h2>
        
        <h3>Smart Contract Risk</h3>
        <p>
          Muscadine vaults are built on smart contracts that may contain bugs, vulnerabilities, or other 
          technical issues. While we conduct thorough testing and audits, smart contracts are experimental 
          technology and carry inherent risks.
        </p>

        <h3>Market Risk</h3>
        <p>
          Cryptocurrency markets are highly volatile and unpredictable. Users may experience significant 
          losses due to market fluctuations, even when using automated strategies.
        </p>

        <h3>Liquidity Risk</h3>
        <p>
          DeFi protocols may experience liquidity issues that could affect vault operations. Users may 
          not be able to withdraw funds immediately or may experience slippage during transactions.
        </p>

        <h3>Protocol Risk</h3>
        <p>
          Underlying DeFi protocols may experience technical issues, governance changes, or other problems 
          that could affect vault performance or user funds.
        </p>

        <h3>Oracle Risk</h3>
        <p>
          Vaults rely on price oracles for various operations. Oracle failures or manipulation could 
          lead to incorrect valuations or improper execution of strategies.
        </p>

        <h2>Regulatory Considerations</h2>
        
        <h3>Regulatory Uncertainty</h3>
        <p>
          The regulatory environment for DeFi and cryptocurrency is evolving rapidly. Changes in 
          regulations could affect vault operations, user access, or the legality of certain activities.
        </p>

        <h3>Compliance Responsibility</h3>
        <p>
          Users are responsible for ensuring compliance with applicable laws and regulations in their 
          jurisdiction. Muscadine Labs does not provide legal advice regarding regulatory compliance.
        </p>

        <h3>Tax Implications</h3>
        <p>
          Vault activities may have tax implications. Users should consult with tax professionals to 
          understand their tax obligations related to DeFi activities.
        </p>

        <h2>Limitation of Liability</h2>
        
        <h3>No Guarantees</h3>
        <p>
          Muscadine Labs makes no guarantees regarding vault performance, returns, or the safety of 
          user funds. Past performance does not guarantee future results.
        </p>

        <h3>Limitation of Damages</h3>
        <p>
          To the maximum extent permitted by law, Muscadine Labs shall not be liable for any direct, 
          indirect, incidental, special, or consequential damages arising from the use of vaults.
        </p>

        <h3>Force Majeure</h3>
        <p>
          Muscadine Labs shall not be liable for any failure to perform due to circumstances beyond 
          our reasonable control, including but not limited to natural disasters, government actions, 
          or technical failures.
        </p>

        <h2>User Responsibilities</h2>
        
        <h3>Due Diligence</h3>
        <p>
          Users are responsible for conducting their own research and due diligence before using vaults. 
          This includes understanding the risks, mechanics, and potential outcomes.
        </p>

        <h3>Risk Tolerance</h3>
        <p>
          Users should only invest amounts they can afford to lose. DeFi activities carry significant 
          risks and may result in total loss of invested funds.
        </p>

        <h3>Security</h3>
        <p>
          Users are responsible for maintaining the security of their wallets, private keys, and other 
          access credentials. Muscadine Labs is not responsible for losses due to user security failures.
        </p>

        <h2>Intellectual Property</h2>
        
        <h3>Open Source</h3>
        <p>
          Muscadine Labs vault contracts are open source and available under appropriate licenses. 
          Users may review, audit, and contribute to the codebase.
        </p>

        <h3>Documentation</h3>
        <p>
          This documentation is provided under appropriate licenses. Users may reference and share 
          this information for educational purposes.
        </p>

        <h2>Privacy and Data</h2>
        
        <h3>On-Chain Transparency</h3>
        <p>
          All vault operations are transparent and recorded on-chain. Users should be aware that 
          their transactions and holdings may be publicly visible.
        </p>

        <h3>Data Collection</h3>
        <p>
          Muscadine Labs may collect certain data for operational purposes, including analytics and 
          user support. We are committed to protecting user privacy and following applicable data 
          protection laws.
        </p>

        <h2>Updates and Changes</h2>
        
        <h3>Documentation Updates</h3>
        <p>
          This documentation may be updated periodically to reflect changes in vault operations, 
          features, or legal requirements. Users should review updates regularly.
        </p>

        <h3>Vault Updates</h3>
        <p>
          Vault contracts may be updated or upgraded to improve functionality, security, or compliance. 
          Users will be notified of significant changes through appropriate channels.
        </p>

        <h2>Contact Information</h2>
        
        <p>
          For questions about this legal disclosure or other legal matters, please contact:
        </p>
        <ul>
          <li><strong>Email</strong>: <a href="mailto:contact@muscadine.box">contact@muscadine.box</a></li>
          <li><strong>Legal Inquiries</strong>: Please include "Legal Inquiry" in the subject line</li>
        </ul>

        <h2>Governing Law</h2>
        
        <p>
          This legal disclosure is governed by applicable laws and regulations. Any disputes arising 
          from the use of Muscadine vaults shall be resolved according to applicable legal procedures.
        </p>

        <Callout type="warning">
          <strong>Last Updated</strong>: This legal disclosure was last updated on the date of publication. 
          Users should review this information regularly for any changes.
        </Callout>

        <RiskAlert type="critical" title="Final Reminder">
          <p>
            <strong>Remember</strong>: Muscadine Labs does not provide investment advice. Vaults are 
            experimental DeFi smart contracts and may carry risk of loss. Users are responsible for 
            their own decisions. DYOR.
          </p>
        </RiskAlert>
      </div>
    </article>
  );
}
