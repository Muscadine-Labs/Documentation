"use client";

import { useEffect, useState, useRef } from "react";

interface LegalContentProps {
  className?: string;
  sourceUrl?: string;
}

// Client-side cache to avoid redundant API calls
const contentCache = new Map<string, { content: string; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function LegalContent({ className = "", sourceUrl }: LegalContentProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Ensure consistent dependency value
  const effectiveSourceUrl = sourceUrl || "https://muscadine.io/legal";

  useEffect(() => {
    // Cancel any pending requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    async function fetchContent() {
      try {
        setLoading(true);
        setError(null);
        
        // Check cache first
        const cached = contentCache.get(effectiveSourceUrl);
        const now = Date.now();
        
        if (cached && (now - cached.timestamp) < CACHE_DURATION) {
          // Use cached content
          setContent(cached.content);
          setLoading(false);
          return;
        }
        
        const apiUrl = `/api/legal-content?url=${encodeURIComponent(effectiveSourceUrl)}`;
        
        // Create new abort controller for this request
        abortControllerRef.current = new AbortController();
        
        const response = await fetch(apiUrl, {
          signal: abortControllerRef.current.signal,
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch legal content");
        }

        const html = await response.text();
        
        // Parse HTML and extract main content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        
        // Try to find the main content area
        let contentElement = 
          doc.querySelector("main") ||
          doc.querySelector("article") ||
          doc.querySelector('[role="main"]') ||
          doc.querySelector(".content") ||
          doc.querySelector("#content") ||
          doc.body;

        // Create a temporary container
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = contentElement.innerHTML;

        // Remove unwanted elements
        tempDiv.querySelectorAll(
          "script, style, nav, header, footer, .navigation, .nav, .navbar, .header, .footer, .sidebar, .menu, [class*='nav'], [class*='header'], [class*='footer']"
        ).forEach(el => el.remove());

        // Update links to open in new tabs and make relative links absolute
        tempDiv.querySelectorAll("a").forEach(link => {
          const href = link.getAttribute("href");
          if (href) {
            if (href.startsWith("/") && !href.startsWith("//")) {
              // Make relative links absolute to muscadine.io
              link.setAttribute("href", `https://muscadine.io${href}`);
            }
            // Open all links in new tab
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
          }
        });

        // Remove inline styles that might conflict with our design
        tempDiv.querySelectorAll("[style]").forEach(el => {
          const style = el.getAttribute("style") || "";
          // Keep only layout-related styles, remove color/font styles
          const cleanedStyle = style
            .replace(/color\s*:[^;]+;?/gi, "")
            .replace(/background[^:]*:[^;]+;?/gi, "")
            .replace(/font-family[^:]*:[^;]+;?/gi, "")
            .replace(/font-size[^:]*:[^;]+;?/gi, "");
          if (cleanedStyle.trim()) {
            el.setAttribute("style", cleanedStyle);
          } else {
            el.removeAttribute("style");
          }
        });

        const finalContent = tempDiv.innerHTML;
        setContent(finalContent);
        
        // Cache the content
        contentCache.set(effectiveSourceUrl, {
          content: finalContent,
          timestamp: Date.now(),
        });
      } catch (err) {
        // Don't show error if request was aborted
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }
        console.error("Error loading legal content:", err);
        setError("Failed to load legal content. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchContent();

    // Cleanup function to abort pending requests
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [effectiveSourceUrl]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading legal content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`py-12 ${className}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <p className="text-destructive">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-sm underline"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="legal-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}

