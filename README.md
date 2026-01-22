# Crystal Cave Resources - Mining Solutions Website

A professional, modern website for Crystal Cave Resources, built with Next.js 14 App Router and Tailwind CSS.

## Features

- **Modern Design**: Dark, corporate mining aesthetic with neutral color palette
- **Fully Responsive**: Optimized for all device sizes
- **6 Complete Pages**: Home, About, Services, Sectors, Supply Chain & Logistics, and Contact
- **Reusable Components**: Navbar, Footer, Hero, and Section components
- **Professional Animations**: Subtle hover effects for enhanced user experience
- **Clean Structure**: Well-organized folder structure for easy maintenance

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Latest React features

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── sectors/
│   │   └── page.tsx          # Sectors page
│   ├── supply-chain/
│   │   └── page.tsx          # Supply Chain page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section component
│   ├── Navbar.tsx            # Navigation component
│   └── Section.tsx           # Section wrapper component
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Customization

### Colors

The color palette is defined in `tailwind.config.js`. You can customize:
- `dark-bg`: Main background color
- `dark-surface`: Surface/card backgrounds
- `dark-card`: Card backgrounds
- `accent`: Primary accent color (white)
- `accent-muted`: Muted text color

### Content

All page content is easily editable in the respective page files:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/services/page.tsx` - Services listings
- `app/sectors/page.tsx` - Mining sectors
- `app/supply-chain/page.tsx` - Supply chain information
- `app/contact/page.tsx` - Contact form and information

### Images

Currently using placeholder backgrounds. Replace the `backgroundImage` prop in Hero components with your actual image URLs or paths.

## Notes

- The contact form is UI-only (no backend integration)
- All images are placeholders and should be replaced with actual assets
- Text content is placeholder and should be updated with real company information

## License

This project is created for Crystal Cave Resources.
