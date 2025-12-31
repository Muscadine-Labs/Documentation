import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { LegalContent } from "@/components/LegalContent";

export default function TermsOfUsePage() {
  return (
    <PageLayout 
      title="Terms of Service"
      description="Conditions for using Muscadine services. Please read before interacting."
    >
      <LegalContent sourceUrl="https://muscadine.io/terms" />
      <Footer />
    </PageLayout>
  );
}
