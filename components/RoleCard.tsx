import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Shield, Users, Settings } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  address: string;
  type: "multisig" | "wallet" | "contract";
  icon?: React.ReactNode;
  explorerUrl?: string;
  safeUrl?: string;
}

const typeIcons = {
  multisig: <Users className="h-5 w-5" />,
  wallet: <Settings className="h-5 w-5" />,
  contract: <Shield className="h-5 w-5" />,
};

const typeColors = {
  multisig: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  wallet: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  contract: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

export function RoleCard({ 
  title, 
  description, 
  address, 
  type, 
  icon, 
  explorerUrl, 
  safeUrl 
}: RoleCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon || typeIcons[type]}
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge className={typeColors[type]}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Address</p>
            <code className="text-sm bg-muted px-2 py-1 rounded block break-all">
              {address}
            </code>
          </div>
          <div className="flex space-x-2">
            {explorerUrl && (
              <a
                href={explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                View on BaseScan
              </a>
            )}
            {safeUrl && (
              <a
                href={safeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                View on Safe
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
