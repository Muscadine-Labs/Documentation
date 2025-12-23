import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";

export default function RiskDisclosuresPage() {
  return (
    <PageLayout 
      title="Risk Disclosures"
      description="Key risks for Muscadine vaults, self-custody, and on-chain activity."
    >
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p><strong>Last updated:</strong> October 2025</p>
              
              <h3>Company Information</h3>
              <p>Muscadine Labs LLC (Wyoming) provides blockchain software, DeFi vaults, and self-custody solutions. These disclosures apply to all services.</p>
              
              <h3>General Blockchain and DeFi Risks</h3>
              <ul>
                <li><strong>Smart contract:</strong> Bugs or exploits can cause total loss.</li>
                <li><strong>Market volatility:</strong> Prices can move sharply and unpredictably.</li>
                <li><strong>Liquidity:</strong> Markets can become illiquid, blocking exits.</li>
                <li><strong>Regulatory:</strong> Rule changes may impact access or legality.</li>
                <li><strong>Technology:</strong> Congestion, forks, or failures can disrupt operations.</li>
                <li><strong>Counterparty:</strong> Dependencies on third-party protocols/services.</li>
              </ul>
              
              <h3>Muscadine Vault-Specific Risks</h3>
              <ul>
                <li><strong>Underlying protocol:</strong> Risks from AAVE, Moonwell, Morpho, etc.</li>
                <li><strong>Liquidation:</strong> Overcollateralized loans can be liquidated.</li>
                <li><strong>Interest rate:</strong> Lending rates fluctuate.</li>
                <li><strong>Bridge:</strong> Moving assets across chains adds bridge risk.</li>
                <li><strong>Strategy:</strong> Automated strategies may underperform in certain markets.</li>
                <li><strong>Gas fees:</strong> High fees can affect execution and profitability.</li>
              </ul>
              
              <h3>Self-Custody and Bitcoin Risks</h3>
              <ul>
                <li><strong>Key loss:</strong> Lost keys/phrases mean irreversible loss of funds.</li>
                <li><strong>Hardware failure:</strong> Device issues can block access.</li>
                <li><strong>User error:</strong> Mistyped addresses/amounts are irreversible.</li>
                <li><strong>Security:</strong> Phishing, malware, or theft can compromise wallets.</li>
                <li><strong>Node:</strong> Running nodes carries technical/maintenance risk.</li>
                <li><strong>BIP-85:</strong> Requires careful implementation and backups.</li>
              </ul>
              
              <h3>Operational and Business Risks</h3>
              <ul>
                <li><strong>Availability:</strong> Services may experience downtime.</li>
                <li><strong>Compliance:</strong> We operate under applicable laws; users must too.</li>
                <li><strong>Third-party dependencies:</strong> Reliance on external networks/protocols.</li>
                <li><strong>Software:</strong> Provided “as is”; bugs or vulnerabilities may exist.</li>
                <li><strong>Market shifts:</strong> DeFi market changes can affect strategies.</li>
              </ul>
              
              <h3>No Guarantees or Warranties</h3>
              <p>Services are provided “as is.” No guarantees on performance, security, availability, or protection from loss. Past results do not guarantee future outcomes.</p>
              
              <h3>Financial and Legal Disclaimer</h3>
              <ul>
                <li>Not financial, legal, or tax advice.</li>
                <li>Consult qualified professionals and understand tax implications.</li>
                <li>Only invest what you can afford to lose.</li>
              </ul>
              
              <h3>User Responsibilities</h3>
              <ul>
                <li>Understand blockchain/DeFi risks.</li>
                <li>Maintain private key security.</li>
                <li>Verify all transactions before execution.</li>
                <li>Ensure legal compliance.</li>
                <li>Perform due diligence on any investment or strategy.</li>
              </ul>
              
              <h3>Contact</h3>
              <p>Questions: <a href="mailto:muscadinelabs@gmail.com">muscadinelabs@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
