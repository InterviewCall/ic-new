# AGENTS.md - Developer Guidelines for ic-new

## Project Overview

Next.js 16 web application for InterviewCall - a platform for interview preparation:
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS v4
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form + Zod validation
- **Package Manager**: npm

---

## Build, Lint, and Test Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:3000
```

### Build
```bash
npm run build      # Create production build
npm run start      # Start production server (after build)
```

### Linting
```bash
npm run lint       # Run ESLint on entire project
npm run lint -- --fix   # Run ESLint with auto-fix
```

### Type Checking
```bash
npx tsc --noEmit   # Run TypeScript type checker
```

---

## Code Style Guidelines

### File Organization
- Use the `src/` directory as the root for all source code
- App Router pages and components go in `src/app/`
- Reusable components go in `src/app/components/`
- Forms go in `src/app/components/forms/`
- Redux code goes in `src/lib/redux/`
- Validations go in `src/validation/`
- Constants go in `src/constants/`

### Import Conventions
- Use double quotes for all imports: `import { foo } from "bar";`
- Use absolute imports with `@/` prefix: `import { foo } from "@/components/foo";`
- Order imports: external libraries → absolute paths → relative paths

### TypeScript
- **Always** define prop types for components (inline or interfaces)
- Use explicit return types for functions when not obvious
- Enable strict mode - do not use `any` type
- Use type inference when type is obvious
- Export types alongside implementations when reused

### Naming Conventions
- **Components**: PascalCase (`CohortForms.tsx`)
- **Files**: camelCase for utilities, PascalCase for components
- **Variables/functions**: camelCase
- **Constants**: camelCase or UPPER_SNAKE_CASE for config values

### React/Next.js Patterns
- Use `"use client"` directive for client-side components only
- Use Server Components by default
- Use `export default function` for exports
- Keep client-side logic in separate components

### Form Handling
- Use React Hook Form with Zod resolvers
- Define schemas in `src/validation/` directory
- Export inferred types from schema files

### Redux Toolkit
- Create slices in `src/lib/redux/slices/`
- Use TypeScript for state and actions
- Export typed hooks in `src/lib/redux/hooks.ts`
- Use `useAppDispatch` and `useAppSelector` hooks in components

### Styling with TailwindCSS v4
- Use Tailwind utility classes directly in components
- Use arbitrary values sparingly: `className="w-[300px]"`
- Use consistent color palette from design system
- Use `bg-radial` custom class for gradient backgrounds

### Error Handling
- Wrap localStorage/sessionStorage access in try-catch
- Always provide fallbacks for potentially failing operations
- Handle async operations with proper error states

### Environment Variables
- Never commit `.env` files or any files containing secrets
- Use `.env.local` for local development (already gitignored)
- Access env vars via `process.env.VARIABLE_NAME` in server components
- Use `NEXT_PUBLIC_` prefix for client-side accessible variables
- Document required environment variables in a `.env.example` file

### Accessibility
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- Include `aria-label` for icon-only buttons
- Ensure color contrast meets WCAG AA standards
- Use focus-visible for keyboard navigation styling
- Include alt text for images

### Git Conventions
- Use meaningful commit messages
- Create feature branches for new features
- Run `npm run lint` and verify build passes before committing

---

## Directory Structure
```
src/
├── app/
│   ├── components/          # UI components
│   │   └── forms/           # Form components
│   ├── providers.tsx        # Client component wrappers
│   ├── utils/               # Utility functions
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── constants/               # Configuration files
├── lib/
│   ├── providers/           # Provider wrappers
│   └── redux/               # Redux store, slices, hooks
└── validation/              # Zod schemas
```

---

## Common Tasks
- **New Component**: Create in `src/app/components/`, define prop types, export as default
- **New Form**: Create Zod schema in `src/validation/`, form in `src/app/components/forms/`
- **New Redux State**: Create slice in `src/lib/redux/slices/`, add to store, export typed hooks