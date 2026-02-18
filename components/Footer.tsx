import Link from "next/link";

interface FooterProps {
  links?: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

const productLinks = [
  { label: "App", href: "https://app.muscadine.io/", external: true },
  { label: "Node", href: "https://muscadine.io/node", external: true },
  { label: "Self custody", href: "https://muscadine.io/self-custody", external: true },
  { label: "Curator", href: "https://curator.muscadine.io/", external: true },
];

const legalLinks = [
  { label: "Terms of Service", href: "https://muscadine.io/terms", external: true },
  { label: "Privacy Policy", href: "https://muscadine.io/privacy", external: true },
  { label: "Legal Disclaimer", href: "https://muscadine.io/legal", external: true },
];

export function Footer({ links = [] }: FooterProps) {
  const topRightLinks = [
    { label: "Contact", href: "https://muscadine.io/contact", external: true },
    { label: "Website", href: "https://muscadine.io", external: true },
  ];

  const bottomRightLinks = [...legalLinks, ...links];

  const renderLink = (link: { label: string; href: string; external?: boolean }, key: string) =>
    link.external ? (
      <a
        key={key}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {link.label}
      </a>
    ) : (
      <Link key={key} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        {link.label}
      </Link>
    );

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-muted-foreground">© 2026 Muscadine Labs. All rights reserved.</span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
              {topRightLinks.map((link) => renderLink(link, link.label))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              {productLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
              {bottomRightLinks.map((link, index) => renderLink(link, link.href + index))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
