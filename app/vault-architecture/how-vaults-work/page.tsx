import { Callout } from "@/components/Callout";
import { Metric } from "@/components/Metric";
import { RiskAlert } from "@/components/RiskAlert";
import Link from "next/link";

export default function HowVaultsWorkPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">How Vaults Work</h1>
        <p className="text-xl text-muted-foreground mt-4">
          A comprehensive technical overview of Muscadine Labs&apos; vault architecture and operation.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Vault Architecture Overview</h2>
        <p>
          Muscadine vaults are sophisticated smart contracts that automatically manage DeFi assets 
          to optimize yields while handling risk management. Each vault operates as an autonomous 
          investment manager, executing complex strategies without manual intervention.
        </p>

        <h2>Core Components</h2>
        
        <h3>1. Vault Contract</h3>
        <p>
          The main vault contract holds user deposits and manages the overall strategy. It handles 
          deposits, withdrawals, fee collection, and coordination with other components.
        </p>

        <h3>2. Strategy Contracts</h3>
        <p>
          Individual strategy contracts implement specific yield generation logic. Each strategy 
          focuses on a particular protocol or asset class, allowing for modular and upgradeable 
          yield generation.
        </p>

        <h3>3. Allocation Manager</h3>
        <p>
          The allocation manager determines how funds are distributed across different strategies 
          based on current market conditions and risk parameters.
        </p>

        <h3>4. Risk Manager</h3>
        <p>
          Continuous risk monitoring and management system that tracks positions, monitors protocol 
          health, and implements risk controls.
        </p>

        <h2>Vault Lifecycle</h2>
        
        <h3>Initialization Phase</h3>
        <ol>
          <li><strong>Contract Deployment</strong>: Vault contracts are deployed and verified on-chain</li>
          <li><strong>Strategy Registration</strong>: Approved strategies are registered with the vault</li>
          <li><strong>Parameter Setting</strong>: Initial parameters are set by the owner role</li>
          <li><strong>Risk Limits</strong>: Risk management parameters are configured</li>
        </ol>

        <h3>Operation Phase</h3>
        <ol>
          <li><strong>Deposit Processing</strong>: User deposits are accepted and recorded</li>
          <li><strong>Strategy Allocation</strong>: Funds are allocated across approved strategies</li>
          <li><strong>Yield Generation</strong>: Strategies generate returns through DeFi protocols</li>
          <li><strong>Monitoring</strong>: Continuous monitoring of positions and performance</li>
          <li><strong>Rebalancing</strong>: Periodic rebalancing based on market conditions</li>
        </ol>

        <h3>Harvesting Phase</h3>
        <ol>
          <li><strong>Yield Collection</strong>: Generated yields are collected from protocols</li>
          <li><strong>Fee Calculation</strong>: Performance fees are calculated and deducted</li>
          <li><strong>Reinvestment</strong>: Remaining yields are reinvested in strategies</li>
          <li><strong>Reporting</strong>: Performance metrics are updated and reported</li>
        </ol>

        <h2>Strategy Execution Flow</h2>
        
        <div className="bg-muted/30 p-6 rounded-2xl my-6">
          <h4>Step-by-Step Process</h4>
          <ol>
            <li><strong>Market Analysis</strong>: Analyze current market conditions and opportunities</li>
            <li><strong>Strategy Selection</strong>: Choose optimal strategies based on risk-return profile</li>
            <li><strong>Position Sizing</strong>: Determine appropriate position sizes for each strategy</li>
            <li><strong>Execution</strong>: Execute trades and position changes</li>
            <li><strong>Monitoring</strong>: Monitor positions and adjust as needed</li>
            <li><strong>Harvesting</strong>: Collect yields and rebalance positions</li>
          </ol>
        </div>

        <h2>Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Metric label="Automation Level" value="100%" hint="Fully automated operation" />
          <Metric label="Strategy Count" value="Multiple" hint="Diversified across protocols" />
          <Metric label="Rebalancing" value="Dynamic" hint="Based on market conditions" />
          <Metric label="Risk Monitoring" value="24/7" hint="Continuous monitoring" />
        </div>

        <h3>Automated Rebalancing</h3>
        <p>
          Vaults automatically rebalance positions based on:
        </p>
        <ul>
          <li><strong>Yield Opportunities</strong>: Moving funds to higher-yielding strategies</li>
          <li><strong>Risk Management</strong>: Adjusting positions based on risk metrics</li>
          <li><strong>Market Conditions</strong>: Adapting to changing market dynamics</li>
          <li><strong>Protocol Health</strong>: Avoiding or reducing exposure to troubled protocols</li>
        </ul>

        <h3>Gas Optimization</h3>
        <p>
          To minimize transaction costs, vaults employ several optimization strategies:
        </p>
        <ul>
          <li><strong>Batch Operations</strong>: Combining multiple operations into single transactions</li>
          <li><strong>Timing Optimization</strong>: Executing trades during low-gas periods</li>
          <li><strong>Efficient Routing</strong>: Using optimal paths for token swaps</li>
          <li><strong>Threshold Management</strong>: Only executing trades above minimum thresholds</li>
        </ul>

        <h2>Risk Management Integration</h2>
        
        <h3>Real-Time Monitoring</h3>
        <p>
          Vaults continuously monitor:
        </p>
        <ul>
          <li><strong>Position Sizes</strong>: Ensuring positions stay within risk limits</li>
          <li><strong>Protocol Health</strong>: Monitoring protocol metrics and community sentiment</li>
          <li><strong>Market Volatility</strong>: Adjusting strategies based on market conditions</li>
          <li><strong>Liquidity Conditions</strong>: Ensuring sufficient liquidity for operations</li>
        </ul>

        <h3>Automatic Risk Controls</h3>
        <p>
          Built-in risk controls include:
        </p>
        <ul>
          <li><strong>Position Limits</strong>: Maximum exposure to any single protocol</li>
          <li><strong>Volatility Limits</strong>: Automatic reduction during high volatility</li>
          <li><strong>Liquidity Thresholds</strong>: Minimum liquidity requirements</li>
          <li><strong>Emergency Stops</strong>: Automatic pausing during extreme conditions</li>
        </ul>

        <h2>Performance Optimization</h2>
        
        <h3>Yield Maximization</h3>
        <p>
          Vaults optimize for yield through:
        </p>
        <ul>
          <li><strong>Protocol Selection</strong>: Choosing the best-performing protocols</li>
          <li><strong>Timing Optimization</strong>: Entering and exiting positions at optimal times</li>
          <li><strong>Compound Strategies</strong>: Reinvesting yields for compound growth</li>
          <li><strong>Cross-Protocol Arbitrage</strong>: Exploiting yield differences between protocols</li>
        </ul>

        <h3>Fee Minimization</h3>
        <p>
          To maximize net returns, vaults minimize:
        </p>
        <ul>
          <li><strong>Gas Costs</strong>: Optimizing transaction patterns</li>
          <li><strong>Protocol Fees</strong>: Choosing protocols with lower fees</li>
          <li><strong>Slippage</strong>: Using efficient routing and timing</li>
          <li><strong>Opportunity Costs</strong>: Minimizing time between yield opportunities</li>
        </ul>

        <h2>Upgradeability and Maintenance</h2>
        
        <h3>Modular Design</h3>
        <p>
          Vaults are built with modularity in mind:
        </p>
        <ul>
          <li><strong>Strategy Upgrades</strong>: Individual strategies can be upgraded independently</li>
          <li><strong>Parameter Updates</strong>: Risk and operational parameters can be adjusted</li>
          <li><strong>New Protocol Integration</strong>: New protocols can be added without affecting existing strategies</li>
          <li><strong>Emergency Upgrades</strong>: Critical fixes can be deployed quickly</li>
        </ul>

        <h3>Governance Integration</h3>
        <p>
          Future upgrades will be governed by:
        </p>
        <ul>
          <li><strong>Community Voting</strong>: Token holders vote on major changes</li>
          <li><strong>Technical Committees</strong>: Expert committees review technical proposals</li>
          <li><strong>Timelock Mechanisms</strong>: Delays for critical changes to allow review</li>
          <li><strong>Emergency Procedures</strong>: Fast-track procedures for critical fixes</li>
        </ul>

        <Callout type="info">
          <strong>Want to dive deeper?</strong> Explore our <Link href="/vault-architecture/deposit-lifecycle">Deposit Lifecycle</Link> 
          and <Link href="/vault-architecture/harvesting-rebalancing">Harvesting & Rebalancing</Link> pages for more technical details.
        </Callout>

        <RiskAlert type="warning" title="Important Disclaimer">
          <p>
            Muscadine Labs does not provide investment advice. Vaults are experimental DeFi smart contracts 
            and may carry risk of loss. Users are responsible for their own decisions. DYOR.
          </p>
        </RiskAlert>
      </div>
    </article>
  );
}
