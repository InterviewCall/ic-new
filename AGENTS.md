# AGENTS.md - Developer Guidelines for ic-new

## Project Overview

This is a Next.js 16 web application for InterviewCall - a platform for interview preparation. The project uses:
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode enabled)
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

> **Note**: This project does not currently have a test framework configured (no Jest, Vitest, or Playwright). Tests should be added before implementing new features.

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

```typescript
// Component with explicit props
export default function MyComponent({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return <div onClick={onClick}>{title}</div>;
}
```

### Naming Conventions
- **Components**: PascalCase (`CohortForms.tsx`, `InputFieldTyped.tsx`)
- **Files**: camelCase for utilities, PascalCase for components
- **Variables/functions**: camelCase
- **Constants**: camelCase or UPPER_SNAKE_CASE for config values
- **Redux slices**: camelCase (`exampleSlice.ts`)

### React/Next.js Patterns
- Use `"use client"` directive for client-side components
- Use Server Components by default; only add `"use client"` when needed
- Use `export default function` for page/component exports
- Keep client-side logic in separate components when possible

### Form Handling
- Use React Hook Form with Zod resolvers
- Define schemas in `src/validation/` directory
- Export inferred types from schema files

```typescript
import { z } from "zod";

export const mySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

export type MyFormData = z.infer<typeof mySchema>;
```

### Redux Toolkit
- Create slices in `src/lib/redux/slices/`
- Use TypeScript for state and actions
- Export typed hooks in `src/lib/redux/hooks.ts`
- Wrap ReduxProvider in `src/app/providers.tsx` for use in Server Components

### Using Redux in Components
1. Use `useAppDispatch` and `useAppSelector` hooks from `src/lib/redux/hooks.ts`
2. Access state: `const isOpen = useAppSelector((state) => state.showCohortForm.isOpen)`
3. Dispatch actions: `useAppDispatch()(openForm())`

### Styling with TailwindCSS v4
- Use Tailwind utility classes directly in components
- Use arbitrary values sparingly: `className="w-[300px]"`
- Use consistent color palette from design system
- Use `bg-radial` custom class for gradient backgrounds

### Error Handling
- Wrap localStorage/sessionStorage access in try-catch
- Always provide fallbacks for potentially failing operations
- Handle async operations with proper error states

```typescript
function getStoredValue(): string {
  try {
    return localStorage.getItem(KEY) ?? defaultValue;
  } catch {
    return defaultValue;
  }
}
```

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
│   ├── utils/               # Utility functions and content
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── constants/               # Configuration files
├── lib/
│   ├── providers/           # Provider wrappers (ReduxProvider)
│   └── redux/               # Redux store, slices, hooks
├── validation/              # Zod schemas
└── ...
```

---

## Common Tasks

### Creating a New Component
1. Create file in appropriate `src/app/components/` directory
2. Define prop types (inline or interface)
3. Export as default function
4. Add to parent component imports

### Adding a New Form
1. Create Zod schema in `src/validation/`
2. Create form component in `src/app/components/forms/`
3. Use React Hook Form with `zodResolver`
4. Export types from validation file

### Adding Redux State
1. Create slice in `src/lib/redux/slices/`
2. Add reducer to store in `src/lib/redux/store.ts`
3. Add typed hooks in `src/lib/redux/hooks.ts`


### Follow up
1. Update AGENTS.md accordingly after each iteration