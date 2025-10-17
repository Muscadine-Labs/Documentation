import { Callout } from "@/components/Callout";
import { Metric } from "@/components/Metric";
import Link from "next/link";

export default function ProductsOverviewPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Products Overview</h1>
        <p className="text-xl text-muted-foreground mt-4">
          An overview of Muscadine Labs&apos; DeFi vault products and automated yield strategies.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>What We Offer</h2>
        <p>Our vaults are automated investment strategies that:</p>
        <ul>
          <li><strong>Automatically rebalance</strong> portfolios based on market conditions</li>
          <li><strong>Optimize yields</strong> across multiple DeFi protocols</li>
          <li><strong>Manage risk</strong> through diversification and monitoring</li>
          <li><strong>Handle gas costs</strong> efficiently through batch operations</li>
          <li><strong>Provide transparency</strong> with on-chain verification</li>
        </ul>

        <h2>Current Vault Offerings</h2>
        
        <h3>USDC Vault</h3>
        <ul>
          <li><strong>Asset</strong>: USD Coin (USDC)</li>
          <li><strong>Strategy</strong>: Optimized lending across multiple protocols</li>
          <li><strong>Risk Level</strong>: Conservative</li>
          <li><strong>Target Yield</strong>: Competitive with market rates</li>
        </ul>

        <h3>cbBTC Vault</h3>
        <ul>
          <li><strong>Asset</strong>: Coinbase Wrapped Bitcoin (cbBTC)</li>
          <li><strong>Strategy</strong>: Bitcoin-backed lending and yield farming</li>
          <li><strong>Risk Level</strong>: Moderate</li>
          <li><strong>Target Yield</strong>: Enhanced Bitcoin returns</li>
        </ul>

        <h3>WETH Vault</h3>
        <ul>
          <li><strong>Asset</strong>: Wrapped Ethereum (WETH)</li>
          <li><strong>Strategy</strong>: Ethereum staking and DeFi yield optimization</li>
          <li><strong>Risk Level</strong>: Moderate</li>
          <li><strong>Target Yield</strong>: Maximized ETH returns</li>
        </ul>

        <h2>How Vaults Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <Metric label="Performance Fee" value="1%" hint="Only charged on profits" />
          <Metric label="Minimum Deposit" value="No minimum" hint="Start with any amount" />
          <Metric label="Withdrawal" value="Instant" hint="No lock-up periods" />
        </div>

        <h3>Key Features</h3>
        <ol>
          <li><strong>Automated Management</strong>: Vaults automatically execute strategies without manual intervention</li>
          <li><strong>Risk Diversification</strong>: Funds are spread across multiple protocols to reduce risk</li>
          <li><strong>Gas Optimization</strong>: Batch operations minimize transaction costs</li>
          <li><strong>Real-time Monitoring</strong>: Continuous monitoring of positions and market conditions</li>
          <li><strong>Transparent Reporting</strong>: All activities are visible on-chain</li>
        </ol>

        <h2>Getting Started</h2>
        <p>To begin using our vaults:</p>
        <ol>
          <li><strong>Choose a Vault</strong>: Select the asset and strategy that matches your risk tolerance</li>
          <li><strong>Deposit Funds</strong>: Transfer your assets to the vault contract</li>
          <li><strong>Monitor Performance</strong>: Track your returns through our interface</li>
          <li><strong>Withdraw Anytime</strong>: Access your funds whenever needed</li>
        </ol>

        <Callout type="success">
          <strong>Ready to start?</strong> Visit our <Link href="/contracts">Contracts & Addresses</Link> page to find the vault addresses and begin depositing.
        </Callout>

        <h2>Risk Considerations</h2>
        <p>All DeFi strategies carry inherent risks. Please review our <Link href="/risk/framework">Risk Framework</Link> before investing and ensure you understand:</p>
        <ul>
          <li>Smart contract risks</li>
          <li>Market volatility</li>
          <li>Liquidity risks</li>
          <li>Protocol-specific risks</li>
        </ul>

        <Callout type="warning">
          <strong>Important</strong>: Never invest more than you can afford to lose. DeFi protocols are experimental and carry significant risks.
        </Callout>
      </div>
    </article>
  );
}
