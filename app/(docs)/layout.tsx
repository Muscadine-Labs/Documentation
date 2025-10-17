import { DocsSidebar } from "@/components/DocsSidebar";
import { DocsToc } from "@/components/DocsToc";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r bg-muted/30">
          <div className="sticky top-0 h-screen">
            <ScrollArea className="h-full">
              <div className="p-6">
                <DocsSidebar />
              </div>
            </ScrollArea>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <div className="flex">
            <div className="flex-1 max-w-4xl mx-auto px-6 py-8">
              {children}
            </div>
            
            {/* Table of Contents */}
            <aside className="hidden xl:block w-64 border-l bg-muted/30">
              <div className="sticky top-0 h-screen">
                <ScrollArea className="h-full">
                  <div className="p-6">
                    <DocsToc />
                  </div>
                </ScrollArea>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
