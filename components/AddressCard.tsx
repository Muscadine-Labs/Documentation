import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

interface AddressCardProps {
  title: string;
  description: string;
  address: string;
  network: string;
  explorerUrl: string;
  type?: string;
}

export function AddressCard({ 
  title, 
  description, 
  address, 
  network, 
  explorerUrl, 
  type 
}: AddressCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex items-center space-x-2">
            {type && (
              <Badge variant="secondary">{type}</Badge>
            )}
            <Badge variant="outline">{network}</Badge>
          </div>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">Contract Address</p>
            <div className="flex items-center space-x-2">
              <code className="text-sm bg-muted px-2 py-1 rounded flex-1 break-all">
                {address}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-1 hover:bg-muted rounded transition-colors"
                title="Copy address"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          <div className="flex space-x-2">
            <a
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              View on BaseScan
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
