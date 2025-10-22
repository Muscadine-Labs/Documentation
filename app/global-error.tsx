"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We encountered an unexpected error. Our team has been notified and is working to fix it.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What can you do?</CardTitle>
              <CardDescription>
                Try these options to resolve the issue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={reset} className="w-full sm:w-auto">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Link href="/">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/welcome">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Welcome</CardTitle>
                  <CardDescription>Get started with Muscadine Labs</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/defi">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">DeFi 101</CardTitle>
                  <CardDescription>Learn about decentralized finance</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/products">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Products</CardTitle>
                  <CardDescription>Explore our vault offerings</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>If the problem persists, please contact our support team.</p>
            <p>
              <a href="mailto:support@muscadine.io" className="text-primary hover:underline">
                support@muscadine.io
              </a>
            </p>
            {error.digest && (
              <p className="mt-2 text-xs">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
