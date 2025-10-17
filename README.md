# Muscadine Labs Documentation

A modern, production-ready documentation site for Muscadine Labs built with Next.js 14, TypeScript, Tailwind CSS, and MDX.

## Features

- 🚀 **Next.js 14** with App Router
- 📝 **MDX** content management with Contentlayer
- 🎨 **Tailwind CSS** with shadcn/ui components
- 🔍 **Client-side search** with Fuse.js
- 📱 **Responsive design** with mobile-first approach
- 🎯 **SEO optimized** with next-seo
- 📊 **Analytics ready** with Vercel Analytics
- 🔒 **Security headers** and best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Content**: MDX via Contentlayer
- **Search**: Fuse.js for client-side fuzzy search
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd docs.muscadine.box
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (docs)/            # Documentation layout group
│   │   ├── [...slug]/     # Dynamic MDX pages
│   │   └── layout.tsx     # Docs layout with sidebar
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── Callout.tsx        # MDX callout component
│   ├── Metric.tsx         # MDX metric component
│   ├── Glossary.tsx       # MDX glossary component
│   ├── Search.tsx         # Search functionality
│   ├── DocsSidebar.tsx    # Navigation sidebar
│   └── DocsToc.tsx        # Table of contents
├── content/               # MDX content files
│   ├── welcome.mdx
│   ├── products/
│   ├── defi/
│   ├── fees/
│   ├── contracts/
│   ├── risk/
│   └── faq/
├── lib/                   # Utility functions
├── contentlayer.config.ts # Contentlayer configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.ts         # Next.js configuration
└── vercel.json           # Vercel deployment configuration
```

## Content Management

### Adding New Pages

1. **Create MDX file** in the appropriate `content/` directory
2. **Add frontmatter** with title and description
3. **Update navigation** in `DocsSidebar.tsx` if needed
4. **Build and test** locally

### MDX Components

The following components are available in MDX files:

- `<Callout type="info|warning|success|error">` - Highlighted information boxes
- `<Metric label="" value="" hint="" />` - Key metrics display
- `<Glossary term="">` - Hover tooltips for definitions

### Search Configuration

Search is automatically configured to index:
- Page titles
- Page descriptions  
- Heading content
- Frontmatter fields

## Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy automatically** on git push

### Manual Deployment

```bash
npm run build
npm start
```

## Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any required environment variables here
```

### Customization

- **Styling**: Modify `tailwind.config.ts` and `app/globals.css`
- **Components**: Update components in `components/` directory
- **Content**: Add/edit MDX files in `content/` directory
- **Navigation**: Update `DocsSidebar.tsx` for menu changes

## Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## License

This project is licensed under the MIT License.

## Muscadine Ecosystem

This documentation site is part of the broader Muscadine ecosystem:

- **📚 [docs.muscadine.box](https://docs.muscadine.box)** - This documentation site
- **🌐 [muscadine.box](https://muscadine.box)** - Official website with comprehensive information about our company, team, and mission
- **📱 [app.muscadine.box](https://app.muscadine.box)** - Main application for interacting with our DeFi products

## Support

For questions or support:
- **Email**: [contact@muscadine.box](mailto:contact@muscadine.box)
- **Documentation**: This site
- **Issues**: GitHub Issues

---

Built with ❤️ by Muscadine Labs