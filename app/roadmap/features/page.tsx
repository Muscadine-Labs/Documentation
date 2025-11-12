import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";

export default function UpcomingFeaturesPage() {
  return (
    <PageLayout
      title="Roadmap"
      description="We're currently iterating on our product roadmap."
    >
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Building...@roadmap</h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re heads down refining the future of Muscadine Labs. Check back soon for a detailed look at what&apos;s coming next.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}