import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";

export default function RiskDisclosuresPage() {
  return (
    <PageLayout 
      title="Risk Disclosures"
      description="Important risk disclosures for Muscadine Labs LLC services and DeFi protocols."
    >
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Risk Disclosures</h2>
              <p>Last updated: October 2025</p>
              
              <h3>Company Information</h3>
              <p>Muscadine Labs LLC is a Wyoming limited liability company providing blockchain software development and digital asset services. This risk disclosure applies to all our services including DeFi vaults, self-custody solutions, and blockchain infrastructure.</p>
              
              <h3>General Blockchain and DeFi Risks</h3>
              <p>All blockchain and DeFi activities involve significant risks:</p>
              <ul>
                <li><strong>Smart Contract Risks:</strong> Vulnerabilities, bugs, or exploits in smart contracts can result in total loss of funds</li>
                <li><strong>Market Volatility:</strong> Digital asset prices can fluctuate dramatically and unpredictably</li>
                <li><strong>Liquidity Risks:</strong> Markets may become illiquid, making it difficult to exit positions</li>
                <li><strong>Regulatory Risks:</strong> Changes in laws or regulations may affect the legality or viability of services</li>
                <li><strong>Technology Risks:</strong> Network congestion, forks, or technical failures can impact operations</li>
                <li><strong>Counterparty Risks:</strong> Risks associated with third-party protocols and services</li>
              </ul>
              
              <h3>Muscadine Vault-Specific Risks</h3>
              <p>Our DeFi vaults involve additional risks:</p>
              <ul>
                <li><strong>Underlying Protocol Risks:</strong> Risks from AAVE, Moonwell, Morpho, and other integrated protocols</li>
                <li><strong>Liquidation Risks:</strong> Overcollateralized loans may be liquidated if collateral values fall below thresholds</li>
                <li><strong>Interest Rate Risks:</strong> Fluctuations in lending rates can affect vault performance</li>
                <li><strong>Cross-Chain Bridge Risks:</strong> Risks associated with moving assets between different blockchain networks</li>
                <li><strong>Strategy Risks:</strong> Automated strategies may not perform as expected due to market conditions</li>
                <li><strong>Gas Fee Risks:</strong> High network fees can impact profitability and execution</li>
              </ul>
              
              <h3>Self-Custody and Bitcoin Risks</h3>
              <p>Self-custody solutions carry unique risks:</p>
              <ul>
                <li><strong>Key Loss Risks:</strong> Loss of private keys or seed phrases results in permanent loss of funds with no recovery options</li>
                <li><strong>Hardware Failures:</strong> Hardware wallet malfunctions can prevent access to funds</li>
                <li><strong>User Error:</strong> Mistakes in transactions, addresses, or amounts can result in loss of funds</li>
                <li><strong>Security Risks:</strong> Phishing, malware, or physical theft can compromise wallet security</li>
                <li><strong>Node Risks:</strong> Running Bitcoin nodes involves technical risks and ongoing maintenance requirements</li>
                <li><strong>BIP-85 Risks:</strong> Hierarchical key generation requires careful implementation and backup procedures</li>
              </ul>
              
              <h3>Operational and Business Risks</h3>
              <p>Additional risks related to our operations:</p>
              <ul>
                <li><strong>Service Availability:</strong> Our services may experience downtime or interruptions</li>
                <li><strong>Regulatory Compliance:</strong> We operate under Wyoming state law and applicable federal regulations</li>
                <li><strong>Third-Party Dependencies:</strong> Our services depend on external blockchain networks and protocols</li>
                <li><strong>Software Risks:</strong> Our software is provided "as is" and may contain bugs or vulnerabilities</li>
                <li><strong>Market Risks:</strong> Changes in DeFi markets can impact the viability of our strategies</li>
              </ul>
              
              <h3>No Guarantees or Warranties</h3>
              <p>Muscadine Labs LLC provides all services "as is" without any warranties, express or implied. We make no guarantees regarding:</p>
              <ul>
                <li>Performance or returns on investments</li>
                <li>Security of smart contracts or protocols</li>
                <li>Availability or reliability of services</li>
                <li>Protection against losses</li>
              </ul>
              <p>Past performance does not guarantee future results. Users assume all risks associated with their activities.</p>
              
              <h3>Financial and Legal Disclaimer</h3>
              <p>This information is not financial, legal, or tax advice. Users should:</p>
              <ul>
                <li>Consult with qualified professionals before making investment decisions</li>
                <li>Understand applicable tax implications of their activities</li>
                <li>Ensure compliance with all applicable laws and regulations</li>
                <li>Only invest what they can afford to lose</li>
              </ul>
              
              <h3>User Responsibilities</h3>
              <p>Users are solely responsible for:</p>
              <ul>
                <li>Understanding the risks associated with blockchain and DeFi activities</li>
                <li>Maintaining security of their private keys and wallets</li>
                <li>Verifying all transactions before execution</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Due diligence on any investments or strategies</li>
              </ul>
              
              <h3>Contact</h3>
              <p>For questions about these risk disclosures, contact Muscadine Labs LLC at <a href="mailto:muscadinelabs@gmail.com">muscadinelabs@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
