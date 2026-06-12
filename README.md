# Smart Treasury Account

A modern landing page for Smart Treasury - secure, policy-driven treasury operations for Web3 built on Stellar.

## Overview

This application showcases the Smart Treasury product through a responsive, animated landing page that demonstrates:

- **Hero Section**: Introduction to Smart Treasury with animated visuals
- **Product Section**: Core features and capabilities
- **Workflow Section**: Visual representation of the treasury operation flow
- **Use Cases**: Real-world applications and scenarios
- **Stellar Integration**: Integration with Stellar ecosystem tools
- **Early Access**: Call-to-action for user onboarding

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Instrument Sans (via next/font/google)

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── landing/            # Landing page components
│   │   ├── Hero.tsx
│   │   ├── WorkflowSection.tsx
│   │   ├── ProductSection.tsx
│   │   ├── UseCases.tsx
│   │   ├── StellarSection.tsx
│   │   ├── CoreFeature.tsx
│   │   ├── EarlyAccess.tsx
│   │   ├── Footer.tsx
│   │   ├── SiteNav.tsx
│   │   └── landingData.tsx # Content data
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
