"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-muted-foreground/20 mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What can you do?</CardTitle>
              <CardDescription>
                Here are some helpful options to get you back on track
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="w-full sm:w-auto">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => window.history.back()}
                  className="w-full sm:w-auto"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="w-full sm:w-auto"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
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
            <p>Still can't find what you're looking for?</p>
            <p>
              <a href="mailto:contact@muscadine.io" className="text-primary hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
