import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout 
      title="Privacy Policy"
      description="How we handle data: minimal collection, self-custody first, and clear rights."
    >
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p><strong>Last updated:</strong> October 2025</p>
              
              <h3>Company Information</h3>
              <p>Muscadine Labs LLC is a Wyoming limited liability company committed to protecting user privacy while providing blockchain software development and digital asset services.</p>
              
              <h3>Information Collection</h3>
              <p>We collect minimal information necessary for service operation:</p>
              <ul>
                <li><strong>Public blockchain data:</strong> Protocol usage to improve strategies</li>
                <li><strong>Website analytics:</strong> Aggregate usage to improve docs and UX</li>
                <li><strong>Communication data:</strong> Information you share when you contact us</li>
                <li><strong>Node usage data:</strong> Anonymous stats to optimize node performance</li>
              </ul>
              
              <h3>What We Don't Collect</h3>
              <ul>
                <li>Private keys, seed phrases, or wallet credentials</li>
                <li>Personal financial information or transaction details</li>
                <li>Personal identification data (names, addresses, phone numbers)</li>
                <li>Government IDs or payment card data</li>
              </ul>
              
              <h3>Data Usage</h3>
              <ul>
                <li>Improve services, vault strategies, and user experience</li>
                <li>Respond to inquiries and provide support</li>
                <li>Optimize infrastructure performance</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Develop new features and educational resources</li>
              </ul>
              
              <h3>Data Protection and Security</h3>
              <ul>
                <li>Access restricted to authorized personnel</li>
                <li>Industry-standard encryption and security protocols</li>
                <li>Retention only as long as necessary for legitimate purposes</li>
                <li>No selling or transferring personal info to third parties</li>
              </ul>
              
              <h3>Blockchain Transparency and Privacy</h3>
              <p>All transactions are public on-chain (addresses, amounts, confirmations, contract calls). Users interact directly with smart contracts; we do not collect personal identification information during these interactions.</p>
              
              <h3>Self-Custody and User Control</h3>
              <p>We never have access to your private keys. You maintain full control of assets at all times.</p>
              
              <h3>Third-Party Services</h3>
              <p>Integrations with third-party protocols follow those parties’ policies. We do not control their data handling.</p>
              
              <h3>Data Retention</h3>
              <p>Information is retained only as long as needed for the purposes above or as required by law. When no longer needed, it is deleted or anonymized.</p>
              
              <h3>Your Rights</h3>
              <ul>
                <li>Access, correct, or delete personal information we hold</li>
                <li>Object to certain processing</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              
              <h3>Policy Updates</h3>
              <p>We may update this policy; material changes will be communicated via our site or appropriate channels.</p>
              
              <h3>Contact</h3>
              <p>Questions or rights requests: <a href="mailto:muscadinelabs@gmail.com">muscadinelabs@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}