import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get("url") || "https://muscadine.io/legal";
    
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; MuscadineDocs/1.0)",
      },
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error fetching legal content:", error);
    return NextResponse.json(
      { error: "Failed to fetch legal content" },
      { status: 500 }
    );
  }
}

