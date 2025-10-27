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
                We are open to any innovation that comes forth to us, we create solutions to fit our clients. This flow chart is the vision for Muscadine, our V1 vaults are just the start, we are only able to supply to Morpho V1 markets, once V2 is created we would shift towards being able to supply to the most liquid and efficient markets, of any DeFi protocol (possibly on any blockchain).
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

      {/* Principles Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Architecture & Risk Management</Badge>
                <h2 className="text-3xl font-bold mb-6">Core Principles</h2>
              </div>

              <div className="space-y-8">
                {/* Trustless Architecture */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Trustless Architecture</h3>
                  <p className="mb-4">
                    Systems should be fully trustless, minimizing reliance on foundations, governance committees, or centralized decision-makers. These dependencies often introduce bottlenecks, misaligned incentives, and security risks.
                  </p>
                  <p className="mb-0">
                    <strong>Solution:</strong> Implement AI agents to autonomously manage vaults, curate assets, and execute risk-management decisions without human intermediaries.
                  </p>
                </div>

                {/* Risk and Leverage Management */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Risk and Leverage Management</h3>
                  <p className="mb-4">
                    Over-leveraging is one of the most common causes of collapse in decentralized systems. Leverage can be a powerful tool, but when unchecked, it amplifies systemic fragility.
                  </p>
                  <p className="mb-0">
                    <strong>Guideline:</strong> Ensure each vault or product maintains independent risk parameters, internal safety limits, and conservative collateralization ratios. Diversification across assets and strategies further reduces correlated risks.
                  </p>
                </div>

                {/* Security Above All */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Security Above All</h3>
                  <p className="mb-4">
                    The most catastrophic event in any protocol is a hack—whether due to smart-contract vulnerabilities, front-end exploits, or compromised infrastructure.
                  </p>
                  <p className="mb-0">
                    <strong>Prevention:</strong> Employ rigorous audit cycles, formal verification where possible, continuous on-chain monitoring, and front-end threat modeling. A zero-error security culture must be non-negotiable.
                  </p>
                </div>

                {/* Borrowing and Liquidity Controls */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Borrowing and Liquidity Controls</h3>
                  <p className="mb-4">
                    If borrowing mechanisms are introduced from vaults, they must be responsibly designed. KYC-based borrowing can mitigate fraud and ensure accountability. For non-KYC designs, the protocol must address the oracle problem (accurate asset pricing) and liquidity constraints to prevent underwater loans. Set borrow caps and dynamic interest models to limit systemic exposure and maintain solvency during volatility.
                  </p>
                </div>

                {/* Additional Guidelines */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Additional Guidelines</h3>
                  <ul className="space-y-3 mb-0">
                    <li>
                      <strong>Governance Minimization:</strong> Favor parameter auto-adjustment via on-chain metrics and AI agents over manual DAO votes.
                    </li>
                    <li>
                      <strong>Transparency:</strong> Publish real-time health metrics for each vault (LTV, utilization, collateral composition) so users can monitor risk.
                    </li>
                    <li>
                      <strong>Composability Considerations:</strong> Ensure integrations (e.g., with oracles, lending protocols, or DEXs) are modular and permissionless but include circuit-breakers to isolate failures.
                    </li>
                    <li>
                      <strong>Documentation:</strong> Document and analyze every incident or parameter breach to build a long-term library of what not to repeat.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}