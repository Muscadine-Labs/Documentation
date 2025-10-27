import Link from "next/link";

interface FooterProps {
  links?: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

export function Footer({ links = [] }: FooterProps) {
  const defaultLinks = [
    { label: "Contact", href: "https://muscadine.io/contact", external: true },
    { label: "Website", href: "https://muscadine.io", external: true },
  ];

  const allLinks = [...defaultLinks, ...links];

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Muscadine Labs. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {allLinks.map((link, index) => (
              link.external ? (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
