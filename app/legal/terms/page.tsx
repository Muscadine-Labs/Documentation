import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";

export default function TermsOfUsePage() {
  return (
    <PageLayout 
      title="Terms of Use"
      description="Terms of use for Muscadine Labs LLC services and platform."
    >
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Terms of Use</h2>
              <p>Last updated: October 2025</p>
              
              <h3>Company Information</h3>
              <p>Muscadine Labs LLC is a Wyoming limited liability company providing blockchain software development and digital asset services.</p>
              
              <h3>Acceptance of Terms</h3>
              <p>By accessing or using Muscadine Labs services, you agree to be bound by these terms. If you do not agree to these terms, do not use our services.</p>
              
              <h3>Services Description</h3>
              <p>Muscadine Labs provides:</p>
              <ul>
                <li>DeFi vault strategies and yield optimization</li>
                <li>Self-custody Bitcoin and digital asset solutions</li>
                <li>Blockchain infrastructure and smart contract development</li>
                <li>Educational resources and documentation</li>
                <li>Node services and blockchain verification tools</li>
              </ul>
              
              <h3>User Responsibilities</h3>
              <p>Users are responsible for:</p>
              <ul>
                <li>Maintaining complete control of their private keys and seed phrases</li>
                <li>Understanding the risks associated with DeFi protocols and blockchain technology</li>
                <li>Compliance with applicable laws and regulations in their jurisdiction</li>
                <li>Verifying all transactions before execution</li>
                <li>Keeping their wallet software and security measures up to date</li>
              </ul>
              
              <h3>Self-Custody and Asset Control</h3>
              <p>Muscadine Labs operates on principles of self-custody and financial sovereignty. Users maintain full control of their assets at all times. We never have access to your private keys or the ability to move your funds without your explicit authorization.</p>
              
              <h3>Software and Services</h3>
              <p>Our software is provided as-is under open-source licensing. We make no warranties regarding the performance, security, or availability of our services. Users assume all risks associated with blockchain and DeFi activities.</p>
              
              <h3>Limitation of Liability</h3>
              <p>Muscadine Labs LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of funds, data, or profits.</p>
              
              <h3>Regulatory Compliance</h3>
              <p>Users are responsible for ensuring their use of our services complies with all applicable laws and regulations in their jurisdiction. Muscadine Labs LLC operates in compliance with Wyoming state law.</p>
              
              <h3>Modifications</h3>
              <p>We reserve the right to modify these terms at any time. Continued use of our services after modifications constitutes acceptance of the updated terms.</p>
              
              <h3>Contact</h3>
              <p>For questions about these terms, contact Muscadine Labs LLC at <a href="mailto:muscadinelabs@gmail.com">muscadinelabs@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
