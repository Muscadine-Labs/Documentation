import { Callout } from "@/components/Callout";
import { Metric } from "@/components/Metric";

export default function PerformanceFeePage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Performance Fee — 2%</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Understanding Muscadine Labs&apos; transparent 2% performance fee structure.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>How the Performance Fee Works</h2>
        
        <h3>Fee Structure</h3>
        <ul>
          <li><strong>Rate</strong>: 2% of profits</li>
          <li><strong>Timing</strong>: Charged when profits are realized</li>
          <li><strong>Basis</strong>: Only on gains, never on principal</li>
          <li><strong>Transparency</strong>: All fee calculations visible on-chain</li>
        </ul>

        <h3>Example Calculation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Metric label="Initial Deposit" value="$10,000" hint="Your original investment" />
          <Metric label="Vault Value After 1 Year" value="$11,000" hint="Including all gains" />
          <Metric label="Profit Generated" value="$1,000" hint="Value increase" />
          <Metric label="Performance Fee (2%)" value="$20" hint="Fee on profits only" />
          <Metric label="Your Net Return" value="$980" hint="Profit minus fee" />
        </div>

        <h2>When Fees Are Charged</h2>
        
        <h3>Realization Events</h3>
        <p>Performance fees are charged when:</p>
        <ul>
          <li>You withdraw funds from a vault</li>
          <li>The vault rebalances positions</li>
          <li>Periodic fee collection cycles occur</li>
          <li>Vault strategies are optimized</li>
        </ul>

        <h3>Fee Collection Process</h3>
        <ol>
          <li><strong>Calculate Profits</strong>: Determine gains since last fee collection</li>
          <li><strong>Apply Fee Rate</strong>: Charge 1% of the profit amount</li>
          <li><strong>Deduct from Vault</strong>: Fee is taken from vault assets</li>
          <li><strong>Update Records</strong>: Fee collection is recorded on-chain</li>
        </ol>

        <h2>Fee Transparency</h2>
        
        <h3>On-Chain Verification</h3>
        <p>All fee collections are:</p>
        <ul>
          <li><strong>Recorded on blockchain</strong>: Fully transparent and auditable</li>
          <li><strong>Timestamped</strong>: Exact timing of fee collection</li>
          <li><strong>Calculated publicly</strong>: Fee amounts can be verified</li>
          <li><strong>Tracked historically</strong>: Complete fee history available</li>
        </ul>

        <h2>Why Performance Fees?</h2>
        
        <h3>Alignment of Interests</h3>
        <p>Performance fees ensure that:</p>
        <ul>
          <li><strong>We only earn when you earn</strong>: No fees on losses</li>
          <li><strong>Incentivize performance</strong>: Our success depends on vault performance</li>
          <li><strong>Sustainable operations</strong>: Covers operational costs and development</li>
          <li><strong>Professional management</strong>: Compensates for active strategy management</li>
        </ul>

        <h3>Industry Standard</h3>
        <p>Performance fees are common in:</p>
        <ul>
          <li><strong>Traditional finance</strong>: Hedge funds and investment managers</li>
          <li><strong>DeFi protocols</strong>: Many yield strategies use similar structures</li>
          <li><strong>Professional management</strong>: Standard for active investment management</li>
        </ul>

        <h2>Fee Comparison</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Fee Structure</th>
                <th>Muscadine Labs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Traditional Savings</strong></td>
                <td>Fixed rate (low)</td>
                <td>Performance-based</td>
              </tr>
              <tr>
                <td><strong>Hedge Funds</strong></td>
                <td>2% + 20% performance</td>
                <td>0% + 1% performance</td>
              </tr>
              <tr>
                <td><strong>DeFi Protocols</strong></td>
                <td>Variable (0.1-5%)</td>
                <td>1% performance only</td>
              </tr>
              <tr>
                <td><strong>Robo-Advisors</strong></td>
                <td>0.25-0.5% annually</td>
                <td>1% on profits only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="success">
          <strong>Advantage</strong>: Our fee structure means you only pay when the vault generates profits, making it more favorable than fixed annual fees.
        </Callout>

        <h2>Additional Costs</h2>
        
        <h3>Gas Fees</h3>
        <ul>
          <li><strong>Network costs</strong>: Ethereum gas fees for transactions</li>
          <li><strong>Not our fees</strong>: These go to network validators</li>
          <li><strong>Optimization</strong>: We batch operations to minimize gas costs</li>
          <li><strong>User responsibility</strong>: Gas fees are paid by users, not Muscadine Labs</li>
        </ul>

        <h3>Protocol Fees</h3>
        <ul>
          <li><strong>Third-party costs</strong>: Fees charged by underlying DeFi protocols</li>
          <li><strong>Passed through</strong>: These are not additional Muscadine fees</li>
          <li><strong>Transparent</strong>: All protocol fees are visible in vault operations</li>
          <li><strong>Minimal impact</strong>: Typically much smaller than performance fees</li>
        </ul>

        <Callout type="info">
          <strong>Questions about fees?</strong> Our fee structure is designed to be transparent and fair. If you have specific questions about fee calculations, please contact us at <a href="mailto:contact@muscadine.box">contact@muscadine.box</a>.
        </Callout>
      </div>
    </article>
  );
}
