import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout 
      title="Privacy Policy"
      description="Privacy policy for Muscadine Labs LLC services and platform."
    >
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Privacy Policy</h2>
              <p>Last updated: October 2025</p>
              
              <h3>Company Information</h3>
              <p>Muscadine Labs LLC is a Wyoming limited liability company committed to protecting user privacy while providing blockchain software development and digital asset services.</p>
              
              <h3>Information Collection</h3>
              <p>Muscadine Labs LLC collects minimal information necessary for service operation:</p>
              <ul>
                <li><strong>Public Blockchain Data:</strong> We analyze publicly available blockchain data to understand protocol usage, optimize vault strategies, and improve our services</li>
                <li><strong>Website Analytics:</strong> We use analytics tools to understand how visitors interact with our website and documentation for service improvement</li>
                <li><strong>Communication Data:</strong> When you contact us via email or other channels, we collect the information you provide to respond to inquiries</li>
                <li><strong>Node Usage Data:</strong> We may collect anonymous usage statistics from our Bitcoin node services to optimize performance</li>
              </ul>
              
              <h3>What We Don't Collect</h3>
              <p>Muscadine Labs LLC does not collect or store:</p>
              <ul>
                <li>Private keys, seed phrases, or wallet credentials</li>
                <li>Personal financial information or transaction details</li>
                <li>Personal identification data (names, addresses, phone numbers)</li>
                <li>Social security numbers or government identification</li>
                <li>Bank account information or credit card details</li>
              </ul>
              
              <h3>Data Usage</h3>
              <p>We use collected information exclusively to:</p>
              <ul>
                <li>Improve our services, vault strategies, and user experience</li>
                <li>Respond to inquiries and provide technical support</li>
                <li>Optimize blockchain infrastructure and node performance</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Develop new features and educational resources</li>
              </ul>
              
              <h3>Data Protection and Security</h3>
              <p>Muscadine Labs LLC implements appropriate technical and organizational measures to protect your information:</p>
              <ul>
                <li>Access to personal information is restricted to authorized personnel</li>
                <li>We use industry-standard encryption and security protocols</li>
                <li>We retain information only as long as necessary for legitimate business purposes</li>
                <li>We do not sell, trade, or transfer personal information to third parties</li>
              </ul>
              
              <h3>Blockchain Transparency and Privacy</h3>
              <p>All transactions on our platform are recorded on public blockchains and visible to anyone. This includes:</p>
              <ul>
                <li>Wallet addresses and transaction amounts</li>
                <li>Transaction timing and blockchain confirmations</li>
                <li>Smart contract interactions and vault activities</li>
              </ul>
              <p>Users interact directly with smart contracts using their wallet addresses. We do not collect personal identification information during these interactions.</p>
              
              <h3>Self-Custody and User Control</h3>
              <p>Muscadine Labs LLC operates on principles of self-custody and financial sovereignty. Users maintain full control of their assets and private keys at all times. We never have access to your private keys or the ability to move your funds without your explicit authorization.</p>
              
              <h3>Third-Party Services</h3>
              <p>Our services may integrate with third-party blockchain networks and DeFi protocols. These integrations are subject to the privacy policies of the respective third parties. We do not control how these third parties collect or use your information.</p>
              
              <h3>Data Retention</h3>
              <p>We retain collected information only as long as necessary for the purposes outlined in this policy or as required by law. When information is no longer needed, we securely delete or anonymize it.</p>
              
              <h3>Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to certain processing of your personal information</li>
                <li>Withdraw consent for data processing where applicable</li>
              </ul>
              
              <h3>Policy Updates</h3>
              <p>We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify users of any material changes through our website or other appropriate means.</p>
              
              <h3>Contact</h3>
              <p>For privacy questions or to exercise your rights, contact Muscadine Labs LLC at <a href="mailto:muscadinelabs@gmail.com">muscadinelabs@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}