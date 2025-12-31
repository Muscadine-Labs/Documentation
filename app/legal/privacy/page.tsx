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
              <p><strong>Last updated:</strong> January 2026</p>
              
              <h2>1. Information We Collect</h2>
              <p>Muscadine ("we," "our," or "us") is committed to protecting your privacy. We collect minimal information necessary to provide our services, which include risk curation for non-custodial vaults, Bitcoin security guidance, DeFi protocol access, and educational content:</p>
              <ul>
                <li><strong>Contact Information:</strong> Email addresses provided voluntarily through contact forms or service inquiries</li>
                <li><strong>Usage Data:</strong> Basic website analytics to improve user experience and service delivery</li>
                <li><strong>Communication Records:</strong> Correspondence related to our services, including risk curation consultations and support requests</li>
                <li><strong>Service Interaction Data:</strong> Information about your use of our services, such as which protocols or vaults you access through our platform (if applicable)</li>
              </ul>
              
              <p><strong>Important Privacy Note:</strong></p>
              <p>We do <strong>not</strong> collect, store, or have access to your wallet private keys, seed phrases, or any digital assets. All non-custodial vault interactions occur directly between you and the smart contracts - we never have custody or control over your assets.</p>
              
              <h2>2. How We Use Your Information</h2>
              <p>We use collected information solely for:</p>
              <ul>
                <li>Providing risk curation services for non-custodial vaults and DeFi protocols</li>
                <li>Delivering educational content about Bitcoin security, self-custody, and DeFi</li>
                <li>Responding to inquiries about our services, including risk assessments and protocol evaluations</li>
                <li>Improving our website, services, and educational materials</li>
                <li>Providing access to curated DeFi protocols and Bitcoin node services</li>
                <li>Monitoring and analyzing protocol health and risks for our risk curation services</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>
              
              <p><strong>We do not:</strong> Sell your personal information, use your data for marketing purposes without consent, or share your information with third parties except as described in this policy.</p>
              
              <h2>3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only:</p>
              <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal requirements, court orders, or regulatory requests</li>
                <li>To protect our rights, prevent fraud, or ensure service security</li>
                <li>With service providers who assist in operating our services (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer, merger, or acquisition (with notice to users)</li>
              </ul>
              
              <p><strong>Third-Party Protocols:</strong></p>
              <p>When you interact with third-party DeFi protocols through our curated services, those protocols may collect information according to their own privacy policies. We are not responsible for the privacy practices of third-party protocols or smart contracts.</p>
              
              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              <ul>
                <li>Encryption of data in transit using industry-standard protocols</li>
                <li>Secure storage of collected information with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
              
              <p><strong>Important Security Reminder:</strong></p>
              <p>We never request your wallet private keys, seed phrases, or passwords. Never share these credentials with anyone, including Muscadine. Your digital assets remain in your control through non-custodial smart contracts.</p>
              
              <h2>5. Third-Party Services</h2>
              <p>Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party sites.</p>
              
              <h2>6. Cookies and Tracking</h2>
              <p>We use minimal cookies for essential website functionality. You can disable cookies in your browser settings.</p>
              
              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of communications</li>
              </ul>
              
              <h2>8. Children's Privacy</h2>
              <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children.</p>
              
              <h2>9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page.</p>
              
              <h2>10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:muscadinelabs@gmail.com">muscadinelabs@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://muscadine.io">muscadine.io</a></p>
              
              <h2>11. Service Disclaimers</h2>
              <p><strong>Risk Curation Services:</strong></p>
              <p>Our risk curation for non-custodial vaults involves evaluating protocols, assessing smart contract security, and providing risk assessments. However, our curation does not guarantee safety or eliminate risks. All participation in DeFi protocols involves significant risk of total loss.</p>
              
              <p><strong>Important:</strong> Muscadine provides educational content and risk curation services. We do not provide financial advice, investment recommendations, or custody services. We do not custody, hold, or control your digital assets. All information and risk assessments are for educational and informational purposes only. Users are responsible for their own financial decisions and should consult with qualified professionals before making any financial decisions.</p>
              <ul>
                <li>We do not custody or control your digital assets</li>
                <li>All vault interactions occur through non-custodial smart contracts</li>
                <li>Our risk curation is informational and does not guarantee safety</li>
                <li>You are solely responsible for your participation in any DeFi protocol</li>
              </ul>
              
              <h2>12. Open Source</h2>
              <p>This website and its educational content are open source. You can view the source code and contribute to the project:</p>
              <p><strong>GitHub Repository:</strong> <a href="https://github.com/Muscadine-Labs" target="_blank" rel="noopener noreferrer">https://github.com/Muscadine-Labs</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
