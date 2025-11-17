# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15+ boilerplate with Tailwind CSS v4.1 and shadcn/ui components. It uses TypeScript and includes a pre-configured setup with dark mode support using next-themes.

## Tech Stack

- **Next.js** ^15.4.7 with App Router
- **React** ^19.1.0
- **TypeScript** ^5
- **Tailwind CSS** ^4.1.4
- **shadcn/ui** with Radix UI primitives
- **next-themes** ^0.4.4 for dark mode
- **lucide-react** ^0.477.0 for icons
- **ESLint** ^8 + **Prettier** ^3.5.2

## Development Commands

### Development

```bash
yarn dev        # Start development server
yarn build      # Build production bundle
yarn start      # Start production server
yarn lint       # Run ESLint
yarn prettier   # Check code formatting with Prettier
```

## Architecture

### Directory Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - **`(Main)/`** - Route group with MainLayout wrapper
  - Uses route groups for shared layouts without affecting URL structure
- **`src/components/`** - React components organized by category
  - **`ui/`** - shadcn/ui components (button, dropdown-menu, etc.)
  - **`layouts/`** - Layout components (Header, Footer, MainLayout)
  - **`theme/`** - Theme-related components (ThemeProvider, ModeToggle)
  - **`common/`** - Common/shared components
- **`src/constants/`** - Application constants including routes
- **`src/lib/`** - Utility functions (includes `cn()` for Tailwind class merging)
- **`src/hooks/`** - Custom React hooks
- **`src/css/`** - Global styles and Tailwind configuration
- **`src/api/`** - API-related code

### Path Aliases

TypeScript paths are configured with `@/*` pointing to `src/*`:

```typescript
import { cn } from '@/lib/utils';
import { Header } from '@/components/layouts/Header';
```

### Layout System

The app uses a nested layout structure:

1. **Root Layout** (`src/app/layout.tsx`) - Wraps everything with ThemeProvider
2. **Main Layout** (`src/app/(Main)/layout.tsx`) - Applies MainLayout component to pages in the (Main) route group
3. **MainLayout Component** (`src/components/layouts/MainLayout.tsx`) - Contains Header, main content area, and Footer with predefined spacing

### Theming

- Uses **next-themes** with class-based dark mode (`attribute="class"`)
- Theme toggles between light/dark/system modes
- Custom color tokens defined in `src/css/globals.css` using OKLCH color space
- CSS variables for layout dimensions:
  - `--header-height: 64px`
  - `--container-max-width: 1200px`
  - `--container-px: 16px`

### Styling Approach

- **Tailwind CSS v4.1** with native CSS imports (`@import 'tailwindcss'`)
- Uses Pretendard font loaded from CDN
- `cn()` utility function combines clsx and tailwind-merge for conditional classes
- Prettier with `prettier-plugin-tailwindcss` automatically sorts Tailwind classes

### shadcn/ui Configuration

The project uses shadcn/ui with the following config (from `components.json`):

- **Style**: default
- **Base color**: zinc
- **CSS Variables**: enabled
- **Icon library**: lucide-react
- **RSC**: enabled (React Server Components)

To add new shadcn/ui components, the config expects:

- Components in `@/components` (mapped to `src/components/`)
- UI components in `@/components/ui`
- Utils in `@/lib/utils`

### Code Style

ESLint and Prettier are configured:

- Extends `next/core-web-vitals` and `prettier`
- Single quotes, semicolons, 2-space indentation
- Trailing commas for ES5
- 80 character line width

### Navigation

Navigation routes are centralized in `src/constants/routes.ts` as `NAV_LIST` array with `name` and `href` properties.
