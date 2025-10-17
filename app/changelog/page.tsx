import { Callout } from "@/components/Callout";
import { RiskAlert } from "@/components/RiskAlert";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Settings, Shield } from "lucide-react";

export default function ChangelogPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
        <p className="text-xl text-muted-foreground mt-4">
          Track the latest updates, improvements, and changes to Muscadine Labs vaults and platform.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Latest Updates</h2>
        
        <div className="space-y-8">
          {/* Version 1.2.0 */}
          <div className="border-l-4 border-primary pl-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold m-0">Version 1.2.0</h3>
              <Badge variant="secondary">Latest</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Released: October 17, 2024</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Plus className="h-4 w-4 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium m-0">New Features</h4>
                  <ul className="text-sm mt-1">
                    <li>Enhanced risk management system with real-time monitoring</li>
                    <li>Improved gas optimization reducing transaction costs by 15%</li>
                    <li>New yield strategy for WETH vault with staking integration</li>
                    <li>Advanced rebalancing algorithms for better yield optimization</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Settings className="h-4 w-4 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium m-0">Improvements</h4>
                  <ul className="text-sm mt-1">
                    <li>Updated fee structure to 2% performance fee</li>
                    <li>Enhanced multisig security with additional signers</li>
                    <li>Improved documentation and user guides</li>
                    <li>Better error handling and user feedback</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-4 w-4 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-medium m-0">Security Updates</h4>
                  <ul className="text-sm mt-1">
                    <li>Completed comprehensive security audit by ChainSecurity</li>
                    <li>Enhanced oracle price validation mechanisms</li>
                    <li>Improved emergency pause functionality</li>
                    <li>Additional input validation and error checking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Version 1.1.0 */}
          <div className="border-l-4 border-muted pl-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold m-0">Version 1.1.0</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Released: September 15, 2024</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Plus className="h-4 w-4 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium m-0">New Features</h4>
                  <ul className="text-sm mt-1">
                    <li>Added cbBTC vault with Bitcoin yield strategies</li>
                    <li>Implemented automated fee collection system</li>
                    <li>Enhanced vault monitoring and analytics</li>
                    <li>New user interface for vault interaction</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Settings className="h-4 w-4 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium m-0">Improvements</h4>
                  <ul className="text-sm mt-1">
                    <li>Optimized vault rebalancing frequency</li>
                    <li>Improved gas efficiency for small transactions</li>
                    <li>Enhanced error messages and user guidance</li>
                    <li>Updated documentation with comprehensive guides</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Version 1.0.0 */}
          <div className="border-l-4 border-muted pl-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold m-0">Version 1.0.0</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Released: August 1, 2024</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Plus className="h-4 w-4 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium m-0">Initial Release</h4>
                  <ul className="text-sm mt-1">
                    <li>Launch of USDC vault with automated yield strategies</li>
                    <li>Implementation of role-based access control system</li>
                    <li>Deployment of multisig security infrastructure</li>
                    <li>Basic vault functionality with deposit/withdraw</li>
                    <li>Initial fee structure and economic model</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Upcoming Features</h2>
        
        <div className="bg-muted/30 p-6 rounded-2xl my-6">
          <h3>Version 1.3.0 (Planned)</h3>
          <p className="text-sm text-muted-foreground mb-4">Expected: November 2024</p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Plus className="h-4 w-4 text-green-600" />
              <span className="text-sm">Community governance token launch</span>
            </div>
            <div className="flex items-center space-x-2">
              <Plus className="h-4 w-4 text-green-600" />
              <span className="text-sm">Additional vault strategies for ETH and BTC</span>
            </div>
            <div className="flex items-center space-x-2">
              <Plus className="h-4 w-4 text-green-600" />
              <span className="text-sm">Enhanced risk management with dynamic limits</span>
            </div>
            <div className="flex items-center space-x-2">
              <Plus className="h-4 w-4 text-green-600" />
              <span className="text-sm">Mobile-optimized user interface</span>
            </div>
          </div>
        </div>

        <h2>Security Updates</h2>
        
        <div className="space-y-4">
          <div className="border border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-900 dark:text-yellow-100 m-0">Security Audit - ChainSecurity</h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-2">
              Completed comprehensive security audit covering all vault contracts and management systems. 
              All identified issues have been resolved. <a href="#" className="underline">View Report</a>
            </p>
          </div>
          
          <div className="border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 p-4 rounded-lg">
            <h4 className="font-medium text-green-900 dark:text-green-100 m-0">Oracle Security Enhancement</h4>
            <p className="text-sm text-green-800 dark:text-green-200 mt-2">
              Implemented additional oracle price validation and circuit breakers to protect against 
              price manipulation attacks.
            </p>
          </div>
        </div>

        <h2>Protocol Integrations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">Morpho Protocol</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Integrated Morpho&apos;s lending markets for optimized yield generation across multiple protocols.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">Aave V3</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Added support for Aave V3 lending markets with enhanced risk management features.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">Compound V3</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Integrated Compound V3 for additional lending opportunities and diversification.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">Ethereum Staking</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Added Ethereum staking integration for WETH vault with validator management.
            </p>
          </div>
        </div>

        <h2>Community Contributions</h2>
        
        <p>
          We&apos;re grateful for the community contributions that have helped improve Muscadine Labs:
        </p>
        <ul>
          <li><strong>Security Researchers</strong>: Multiple security researchers have contributed to our bug bounty program</li>
          <li><strong>Documentation</strong>: Community members have helped improve our documentation and guides</li>
          <li><strong>Testing</strong>: Beta testers have provided valuable feedback on new features</li>
          <li><strong>Code Contributions</strong>: Open source contributors have helped optimize our contracts</li>
        </ul>

        <h2>How to Stay Updated</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">GitHub Releases</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Follow our GitHub repository to get notified of new releases and updates.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">Community Channels</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Join our community channels for real-time updates and discussions.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">Email Updates</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Subscribe to our newsletter for important announcements and updates.
            </p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium m-0">Documentation</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Check our documentation regularly for the latest information and guides.
            </p>
          </div>
        </div>

        <Callout type="info">
          <strong>Have feedback?</strong> We welcome your input on our updates and features. 
          Contact us at <a href="mailto:contact@muscadine.box">contact@muscadine.box</a> 
          with your suggestions and feedback.
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
