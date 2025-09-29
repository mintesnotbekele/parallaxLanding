# Parallax Landing

A modern, responsive landing page built with Next.js 15, featuring smooth parallax animations powered by Framer Motion and styled with Tailwind CSS.

## ✨ Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Smooth Animations**: Parallax effects and animations using Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Turbopack for faster development and builds
- **Component Architecture**: Modular components for easy maintenance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd parallax-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── CommunitySection.tsx
│   ├── CommunityText.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Leaderboard.tsx
│   ├── Partners.tsx
│   └── SecondSection.tsx
├── assets/              # Static assets
└── fonts/               # Custom fonts
```

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Components

The landing page includes several key components:

- **Hero** - Main hero section with parallax effects
- **SecondSection** - Secondary content area
- **CommunitySection** - Community-focused content
- **Partners** - Partner/sponsor showcase
- **Leaderboard** - Interactive leaderboard component
- **Footer** - Site footer with links and information

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



