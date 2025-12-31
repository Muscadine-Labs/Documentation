import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { LegalContent } from "@/components/LegalContent";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout 
      title="Privacy Policy"
      description="How we handle data: minimal collection, self-custody first, and clear rights."
    >
      <LegalContent sourceUrl="https://muscadine.io/privacy" />
      <Footer />
    </PageLayout>
  );
}
