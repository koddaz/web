# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio web application with a retro/pixel art aesthetic, built with React, TypeScript, and Vite. It showcases mobile development projects, skills, education, and experience for an Android and iOS developer.

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start development server (runs on port 3000, auto-opens browser)
- `npm run build` - Build for production (output to `build/` directory)

## Architecture

### Tech Stack
- **Build Tool**: Vite 6.3.5 with React SWC plugin
- **Framework**: React 18.3.1 with TypeScript
- **UI Components**: Extensive Radix UI primitives for accessible components
- **Styling**: CSS with custom retro/pixel theme variables
- **Icons**: Lucide React

### Project Structure

```
src/
├── App.tsx                 # Main app component with page routing and layout
├── main.tsx               # Entry point
├── components/
│   ├── Hero.tsx           # Home page with bio, experience, education, skills
│   ├── Current.tsx        # Current projects page
│   ├── Previous.tsx       # Previous projects page
│   ├── PixelButton.tsx    # Custom retro-styled button component
│   ├── PixelCard.tsx      # Custom retro-styled card component
│   ├── figma/             # Figma-specific components
│   └── ui/                # Shadcn-style UI components (50+ Radix-based components)
├── styles/
│   └── globals.css        # Global styles with retro theme CSS variables
└── index.css              # Additional base styles
```

### Design System

The app uses a retro/pixel aesthetic with:
- **Color Palette**: Dark background (#0a0a14) with neon accents (primary: #ff006e, secondary: #8338ec, accent: #ffbe0b, terminal green: #00ff41)
- **Typography**: Press Start 2P font for retro gaming aesthetic
- **Visual Effects**: Scanline effects, glitch animations, pixel corners (sharp edges via border-radius: 0)
- **Component Styling**: All custom components use 4px borders, box shadows, and the pixel-corners class

### Routing & Navigation

The app uses simple state-based routing (not React Router):
- Page state managed via `useState<Page>` in App.tsx:712
- Three pages: 'home' (Hero), 'current' (Current), 'previous' (Previous)
- Navigation via PixelButton components in header

### Component Patterns

**Custom Components** (in `src/components/`):
- `PixelButton`: Supports variants (primary/secondary/accent), active states, and pixel styling
- `PixelCard`: Container with optional glitch hover effect
- `Hero`: Home page displaying bio, work experience (emmiSense app development), education, and skills
- `Current`: Showcases the current project (emmiSense) with screenshots, GitHub link, and tech stack
- `Previous`: Lists completed projects (demo buttons are commented out)

**UI Components** (in `src/components/ui/`):
- Built on Radix UI primitives following shadcn/ui patterns
- All components are self-contained with TypeScript interfaces
- Use the retro theme via CSS variables

### Portfolio Content

**Skills**: Swift, SwiftUI, Kotlin, Jetpack Compose, React Native, TypeScript, Python, PostgreSQL, Figma, Git

**Education**: Android and iOS developer from Malmö Yrkeshögskola (2025)

**Experience**: Work experience developing emmiSense mobile app (2024-2025)

**Current Project**: emmiSense - Cross-platform mobile application
- GitHub: https://github.com/koddaz/EMLLMOL.git
- Screenshots located in `src/img/emmisense/`

### Path Aliases

Vite is configured with `@` alias pointing to `./src` for clean imports:
```typescript
import { Button } from '@/components/ui/button'
```

### Styling Conventions

- CSS variables defined in `globals.css` for all theme colors
- Custom utility classes: `pixel-corners`, `scanline`
- Component styling uses Tailwind-style utility classes
- Box shadows and borders create the 3D pixel art effect
