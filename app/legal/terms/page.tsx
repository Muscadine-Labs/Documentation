import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";

export default function TermsOfUsePage() {
  return (
    <PageLayout 
      title="Terms of Use"
      description="Conditions for using Muscadine services. Please read before interacting."
    >
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p><strong>Last updated:</strong> October 2025</p>
              
              <h3>Company Information</h3>
              <p>Muscadine Labs LLC is a Wyoming limited liability company providing blockchain software development and digital asset services.</p>
              
              <h3>Acceptance of Terms</h3>
              <p>By accessing or using Muscadine services, you agree to these terms. If you do not agree, do not use our services.</p>
              
              <h3>Services Description</h3>
              <ul>
                <li>DeFi vault strategies and yield optimization</li>
                <li>Self-custody Bitcoin and digital asset solutions</li>
                <li>Blockchain infrastructure and smart contract development</li>
                <li>Educational resources and documentation</li>
                <li>Node services and blockchain verification tools</li>
              </ul>
              
              <h3>User Responsibilities</h3>
              <ul>
                <li>Maintain control of private keys and seed phrases</li>
                <li>Understand risks of DeFi and blockchain</li>
                <li>Comply with laws in your jurisdiction</li>
                <li>Verify all transactions before execution</li>
                <li>Keep wallet software and security measures current</li>
              </ul>
              
              <h3>Self-Custody and Asset Control</h3>
              <p>Users control assets at all times. We never have access to private keys or the ability to move funds without explicit authorization.</p>
              
              <h3>Software and Services</h3>
              <p>Software is provided as-is under open-source licensing. No warranties on performance, security, or availability. Users assume all risks.</p>
              
              <h3>Limitation of Liability</h3>
              <p>Muscadine Labs LLC is not liable for direct, indirect, incidental, special, or consequential damages, including loss of funds, data, or profits.</p>
              
              <h3>Regulatory Compliance</h3>
              <p>Users must ensure compliance with applicable laws. Muscadine operates under Wyoming state law.</p>
              
              <h3>Modifications</h3>
              <p>We may modify these terms. Continued use after modifications constitutes acceptance of the updated terms.</p>
              
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
