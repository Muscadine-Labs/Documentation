import { Callout } from "@/components/Callout";
import { RoleCard } from "@/components/RoleCard";
import { RiskAlert } from "@/components/RiskAlert";

export default function RoleSystemPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Role-Based Control System</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Understanding Muscadine Labs&apos; sophisticated role-based access control system for vault management.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p>
          Muscadine Labs implements a sophisticated role-based access control (RBAC) system that distributes 
          power across multiple entities. This design ensures that no single party has complete control over 
          vault operations, reducing centralization risks while maintaining operational efficiency.
        </p>

        <h2>Core Principles</h2>
        
        <h3>Separation of Powers</h3>
        <p>
          Different roles have different responsibilities and permissions. This separation ensures that 
          critical operations require coordination between multiple parties, preventing unilateral actions 
          that could harm users.
        </p>

        <h3>Multisig Protection</h3>
        <p>
          All management roles are protected by multisig wallets, requiring multiple signatures for 
          important operations. This adds an additional layer of security and prevents single points of failure.
        </p>

        <h3>Transparent Operations</h3>
        <p>
          All role-based operations are transparent and auditable on-chain. Users can verify who has 
          what permissions and track all administrative actions.
        </p>

        <h2>Role Hierarchy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <RoleCard
            title="Owner Role"
            description="Ultimate control over vault parameters and upgrades"
            address="0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A"
            type="multisig"
            explorerUrl="https://basescan.org/address/0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A"
            safeUrl="https://app.safe.global/home?safe=base:0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A"
          />
          
          <RoleCard
            title="Guardian Role"
            description="Emergency controls and security monitoring"
            address="0x64e804eEF4F5a53272A8623b563ad2724E98A0a9"
            type="multisig"
            explorerUrl="https://basescan.org/address/0x64e804eEF4F5a53272A8623b563ad2724E98A0a9"
            safeUrl="https://app.safe.global/home?safe=base:0x64e804eEF4F5a53272A8623b563ad2724E98A0a9"
          />
          
          <RoleCard
            title="Curator Role"
            description="Strategy curation and protocol selection"
            address="0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1"
            type="multisig"
            explorerUrl="https://basescan.org/address/0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1"
            safeUrl="https://app.safe.global/home?safe=base:0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1"
          />
          
          <RoleCard
            title="Muscadine Hot Wallet"
            description="Operational wallet for vault management"
            address="0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333"
            type="wallet"
            explorerUrl="https://basescan.org/address/0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333"
          />
        </div>

        <h2>Permission Matrix</h2>
        
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Owner</th>
                <th>Guardian</th>
                <th>Curator</th>
                <th>Allocators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vault Parameter Changes</strong></td>
                <td>✓</td>
                <td>✗</td>
                <td>✗</td>
                <td>✗</td>
              </tr>
              <tr>
                <td><strong>Emergency Pause</strong></td>
                <td>✓</td>
                <td>✓</td>
                <td>✗</td>
                <td>✗</td>
              </tr>
              <tr>
                <td><strong>Strategy Updates</strong></td>
                <td>✓</td>
                <td>✗</td>
                <td>✓</td>
                <td>✗</td>
              </tr>
              <tr>
                <td><strong>Protocol Selection</strong></td>
                <td>✓</td>
                <td>✗</td>
                <td>✓</td>
                <td>✗</td>
              </tr>
              <tr>
                <td><strong>Asset Allocation</strong></td>
                <td>✗</td>
                <td>✗</td>
                <td>✗</td>
                <td>✓</td>
              </tr>
              <tr>
                <td><strong>Fee Collection</strong></td>
                <td>✓</td>
                <td>✗</td>
                <td>✗</td>
                <td>✗</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Security Benefits</h2>
        
        <h3>Reduced Centralization Risk</h3>
        <p>
          By distributing control across multiple roles, we eliminate single points of failure. 
          No single entity can unilaterally make decisions that could harm users.
        </p>

        <h3>Operational Resilience</h3>
        <p>
          If one role becomes unavailable, other roles can continue to operate the vaults. 
          This ensures continuity of service even during unexpected events.
        </p>

        <h3>Audit Trail</h3>
        <p>
          All role-based operations are recorded on-chain, providing a complete audit trail. 
          Users can verify who performed what actions and when.
        </p>

        <h3>Gradual Escalation</h3>
        <p>
          Different types of operations require different levels of authorization. Routine 
          operations can be performed by allocators, while critical changes require owner approval.
        </p>

        <h2>Multisig Structure</h2>
        
        <h3>Safe Multisig Implementation</h3>
        <p>
          All management roles use Safe multisig wallets, which provide additional security 
          features including:
        </p>
        <ul>
          <li><strong>Threshold Signatures</strong>: Require multiple signatures for transactions</li>
          <li><strong>Time Delays</strong>: Optional delays for critical operations</li>
          <li><strong>Module Support</strong>: Extensible architecture for additional features</li>
          <li><strong>Recovery Mechanisms</strong>: Built-in recovery options for lost keys</li>
        </ul>

        <h3>Signature Requirements</h3>
        <p>
          Each multisig has different signature requirements based on the sensitivity of operations:
        </p>
        <ul>
          <li><strong>Owner Multisig</strong>: Requires majority of signers for critical operations</li>
          <li><strong>Guardian Multisig</strong>: Requires consensus for emergency actions</li>
          <li><strong>Curator Multisig</strong>: Requires majority for strategy decisions</li>
        </ul>

        <Callout type="info">
          <strong>Want to learn more?</strong> Explore individual role pages to understand the specific 
          responsibilities and permissions of each role in our system.
        </Callout>

        <h2>Future Governance</h2>
        
        <p>
          As Muscadine Labs grows, we plan to transition to community governance. This will involve:
        </p>
        <ul>
          <li><strong>Governance Token</strong>: Community voting on important decisions</li>
          <li><strong>Role Elections</strong>: Community selection of role holders</li>
          <li><strong>Proposal System</strong>: Community-driven improvements and changes</li>
          <li><strong>Transparent Voting</strong>: On-chain voting with full transparency</li>
        </ul>

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
