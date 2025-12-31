import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { LegalContent } from "@/components/LegalContent";

export default function RiskDisclosuresPage() {
  return (
    <PageLayout 
      title="Legal Disclaimer"
      description="Important legal notice and risk disclosures for Muscadine services."
    >
      <LegalContent sourceUrl="https://muscadine.io/legal" />
      <Footer />
    </PageLayout>
  );
}
