import { Callout } from "@/components/Callout";

export default function ContractsPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Contracts & Addresses</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Smart contract addresses and verification information for all Muscadine Labs vaults and management contracts.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>All Muscadine Labs contracts are deployed on the <strong>Base</strong> network and are fully auditable on-chain. Below are the contract addresses for our vaults and management infrastructure.</p>

        <h2>Vault Contracts</h2>
        
        <h3>Muscadine USDC Vault</h3>
        <ul>
          <li><strong>Contract Address</strong>: <code>0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Asset</strong>: USD Coin (USDC)</li>
          <li><strong>Strategy</strong>: Optimized lending across multiple protocols</li>
        </ul>

        <h3>Muscadine cbBTC Vault</h3>
        <ul>
          <li><strong>Contract Address</strong>: <code>0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0xaecc8113a7bd0cfaf7000ea7a31affd4691ff3e9" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Asset</strong>: Coinbase Wrapped Bitcoin (cbBTC)</li>
          <li><strong>Strategy</strong>: Bitcoin-backed lending and yield farming</li>
        </ul>

        <h3>Muscadine WETH Vault</h3>
        <ul>
          <li><strong>Contract Address</strong>: <code>0x21e0d366272798da3A977FEBA699FCB91959d120</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0x21e0d366272798da3A977FEBA699FCB91959d120" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Asset</strong>: Wrapped Ethereum (WETH)</li>
          <li><strong>Strategy</strong>: Ethereum staking and DeFi yield optimization</li>
        </ul>

        <h2>Management Contracts</h2>
        
        <h3>Owner Multisig</h3>
        <ul>
          <li><strong>Contract Address</strong>: <code>0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Type</strong>: Safe Multisig</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Safe Interface</strong>: <a href="https://app.safe.global/home?safe=base:0x4E5D3ef790C75682ac4f6d4C1dDCc08b36fC100A" target="_blank" rel="noopener noreferrer">View on Safe</a></li>
          <li><strong>Role</strong>: Ultimate control over vault parameters and upgrades</li>
        </ul>

        <h3>Guardian Multisig</h3>
        <ul>
          <li><strong>Contract Address</strong>: <code>0x64e804eEF4F5a53272A8623b563ad2724E98A0a9</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Type</strong>: Safe Multisig</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0x64e804eEF4F5a53272A8623b563ad2724E98A0a9" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Safe Interface</strong>: <a href="https://app.safe.global/home?safe=base:0x64e804eEF4F5a53272A8623b563ad2724E98A0a9" target="_blank" rel="noopener noreferrer">View on Safe</a></li>
          <li><strong>Role</strong>: Emergency controls and security monitoring</li>
        </ul>

        <h3>Curator Multisig</h3>
        <ul>
          <li><strong>Contract Address</strong>: <code>0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Type</strong>: Safe Multisig</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Safe Interface</strong>: <a href="https://app.safe.global/home?safe=base:0xb6d1d784e9Bc3570546e231caCB52B4E0f1ED8b1" target="_blank" rel="noopener noreferrer">View on Safe</a></li>
          <li><strong>Role</strong>: Strategy curation and protocol selection</li>
        </ul>

        <h2>Allocator Addresses</h2>
        
        <h3>Public Allocator</h3>
        <ul>
          <li><strong>Contract</strong>: Morpho Smart Contract</li>
          <li><strong>Role</strong>: Automated allocation across lending protocols</li>
          <li><strong>Integration</strong>: Built into vault strategies</li>
        </ul>

        <h3>Muscadine Hot Wallet</h3>
        <ul>
          <li><strong>Address</strong>: <code>0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0xf35B121bA32cBeaA27716abEfFb6B65a55f9B333" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Role</strong>: Operational wallet for vault management</li>
        </ul>

        <h3>Ignas Smart Wallet</h3>
        <ul>
          <li><strong>Address</strong>: <code>0x0D5A708B651FeE1DAA0470431c4262ab3e1D0261</code></li>
          <li><strong>Network</strong>: Base</li>
          <li><strong>Explorer</strong>: <a href="https://basescan.org/address/0x0D5A708B651FeE1DAA0470431c4262ab3e1D0261" target="_blank" rel="noopener noreferrer">View on BaseScan</a></li>
          <li><strong>Role</strong>: Additional operational wallet</li>
        </ul>

        <h2>Fee Structure</h2>
        
        <h3>Current Fee Rates</h3>
        <ul>
          <li><strong>All Muscadine V1 Vaults</strong>: 2% performance fee</li>
          <li><strong>Fee Recipients</strong>: Muscadine Hot Wallet and Ignas Smart Wallet</li>
          <li><strong>Fee Splitting</strong>: Managed through smart contract automation</li>
        </ul>

        <Callout type="info">
          <strong>Note</strong>: The fee structure may be updated as we develop more sophisticated fee splitting mechanisms. All changes will be transparently communicated and implemented through governance processes.
        </Callout>

        <h2>Contract Verification</h2>
        
        <h3>How to Verify Contracts</h3>
        <ol>
          <li><strong>Visit BaseScan</strong>: Go to <a href="https://basescan.org" target="_blank" rel="noopener noreferrer">basescan.org</a></li>
          <li><strong>Search Address</strong>: Enter the contract address</li>
          <li><strong>Check Contract Tab</strong>: Look for "Contract" tab</li>
          <li><strong>Verify Source Code</strong>: Ensure source code is verified</li>
          <li><strong>Review Functions</strong>: Examine available functions and permissions</li>
        </ol>

        <h3>What to Look For</h3>
        <ul>
          <li><strong>Source Code Verified</strong>: Green checkmark indicating verified code</li>
          <li><strong>ABI Available</strong>: Contract interface is accessible</li>
          <li><strong>Read Functions</strong>: Ability to query contract state</li>
          <li><strong>Write Functions</strong>: Understanding of available operations</li>
          <li><strong>Events</strong>: Transaction logs and contract events</li>
        </ul>

        <h2>Security Considerations</h2>
        
        <h3>Multisig Security</h3>
        <p>All management functions are protected by multisig wallets requiring multiple signatures for:</p>
        <ul>
          <li><strong>Parameter Changes</strong>: Modifying vault settings</li>
          <li><strong>Upgrades</strong>: Contract upgrades and migrations</li>
          <li><strong>Emergency Actions</strong>: Pausing or emergency withdrawals</li>
          <li><strong>Fee Changes</strong>: Modifying fee structures</li>
        </ul>

        <h3>Transparency Features</h3>
        <ul>
          <li><strong>Open Source</strong>: All contracts are open source</li>
          <li><strong>Auditable</strong>: Full transaction history available</li>
          <li><strong>Verifiable</strong>: Contract code can be independently verified</li>
          <li><strong>Governance</strong>: Community input on major decisions</li>
        </ul>

        <Callout type="warning">
          <strong>Security Reminder</strong>: Always verify contract addresses before interacting. Double-check that you're using the correct addresses listed above.
        </Callout>

        <h2>Network Information</h2>
        
        <h3>Base Network</h3>
        <ul>
          <li><strong>Chain ID</strong>: 8453</li>
          <li><strong>RPC URL</strong>: <code>https://mainnet.base.org</code></li>
          <li><strong>Block Explorer</strong>: <a href="https://basescan.org" target="_blank" rel="noopener noreferrer">basescan.org</a></li>
          <li><strong>Native Token</strong>: ETH</li>
          <li><strong>Gas Token</strong>: ETH</li>
        </ul>

        <h3>Adding Base to Your Wallet</h3>
        <ol>
          <li><strong>Network Name</strong>: Base</li>
          <li><strong>RPC URL</strong>: <code>https://mainnet.base.org</code></li>
          <li><strong>Chain ID</strong>: 8453</li>
          <li><strong>Currency Symbol</strong>: ETH</li>
          <li><strong>Block Explorer</strong>: <code>https://basescan.org</code></li>
        </ol>

        <h2>Getting Started</h2>
        
        <h3>Interacting with Contracts</h3>
        <ol>
          <li><strong>Connect Wallet</strong>: Ensure your wallet is connected to Base network</li>
          <li><strong>Verify Address</strong>: Double-check you're using the correct contract address</li>
          <li><strong>Review Functions</strong>: Understand what operations are available</li>
          <li><strong>Start Small</strong>: Begin with small amounts to test functionality</li>
          <li><strong>Monitor Transactions</strong>: Track all interactions on BaseScan</li>
        </ol>

        <h3>Support Resources</h3>
        <ul>
          <li><strong>Documentation</strong>: Comprehensive guides in this documentation</li>
          <li><strong>BaseScan</strong>: Real-time contract interaction and verification</li>
          <li><strong>Safe Interface</strong>: Multisig management and monitoring</li>
          <li><strong>Community</strong>: Join our community for updates and support</li>
        </ul>

        <Callout type="success">
          <strong>Ready to interact?</strong> Start by exploring our vault contracts on BaseScan to understand their current state and available functions.
        </Callout>
      </div>
    </article>
  );
}
