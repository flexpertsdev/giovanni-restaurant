# Giovanni's Restaurant Website

A modern, responsive restaurant website for Giovanni's - authentic Trieste cuisine where tradition meets hospitality.

## Features

- **Mobile-First Responsive Design**: Optimized for all devices with adaptive navigation
- **Menu Showcase**: Filterable menu with dietary indicators
- **Photo Gallery**: Visual journey through ambiance, dishes, and events
- **Online Reservations**: Form validation with special Thursday music night options
- **Story Section**: Three generations of culinary tradition
- **Live Music Events**: Thursday night performances showcase

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

1. Install dependencies:
```bash
cd giovanni-restaurant
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Design System

The website uses a custom design system inspired by Trieste's coastal heritage:

- **Colors**: Mediterranean blue, warm terracotta, golden amber
- **Typography**: Playfair Display (headers), Open Sans (body)
- **Spacing**: 8px base unit system
- **Mobile-First**: Bottom navigation on mobile, elegant top nav on desktop

## Project Structure

```
src/
├── app/              # Next.js app directory pages
├── components/       # Reusable components
│   ├── navigation/   # Navigation components
│   └── sections/     # Homepage sections
└── styles/          # Global styles and design system
```

## Development

The site is built with modern web standards:
- Semantic HTML
- Accessible components
- Performance optimized
- SEO friendly

## Deployment

Ready for deployment on Vercel or any Node.js hosting platform.