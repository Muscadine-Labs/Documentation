import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";

export default function UpcomingFeaturesPage() {
  return (
    <PageLayout 
      title="Roadmap"
      description="Discover Muscadine Labs' roadmap and upcoming features for the future of DeFi."
    >
      {/* Roadmap Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full" style={{ aspectRatio: '1920/1080' }}>
              <Image
                src="/MuscadineRoadmap.jpg"
                alt="Muscadine Vaults Architecture and Roadmap"
                fill
                className="object-contain rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Vision</Badge>
                <h2 className="text-3xl font-bold mb-6">Muscadine's Evolution</h2>
              </div>

              <p className="text-lg mb-8">
                This flow chart is the vision for Muscadine, our V1 vaults are just the start, we are only able to supply to Morpho V1 markets, once V2 is created we would shift towards being able to supply to the most liquid and efficient markets, of any DeFi protocol (possibly on any blockchain).
              </p>

              <p className="mb-6">
                Morpho V2 vaults are capable of lending assets to any protocol, not just Morpho (V1 (variable interest, no set time to pay off loan) V2 (pre-determined interest rate + set time loan matures)). Vaults lend assets to borrowers, who borrow through an overcollateralized loan, interest is flowed back to the vault holders. Anyone can freely make any Morpho market, our cbBTC and WETH V2 vaults can be borrowed against USDC, where our USDC vault can supply liquidity for overcollateralized loans.
              </p>

              <p className="mb-6">
                With current innovations, we want our clients to be able to invest in products where most people would not be able to be knowledgeable to do so. We would create Market maker and liquidation bot products, and other infrastructure which usually only High net worth companies or individuals with knowledge to build can use. This would be a higher risk, higher reward, and more complex. We would make a vault, USDC (VINEYARD) V2 Vault, to be able to tokenize these infrastructures, this vault would provide liquidity to areas where only HNW individuals were only allowed into.
              </p>

              <p className="mb-6">
                Any unused capital from our VINEYARD USDC Vault which specializes on these higher return products, will be supplied to our Muscadine USDC V2 vault to accrue interest while not being productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}