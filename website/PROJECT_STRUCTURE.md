# Project Structure & Best Practices Guide

## 📁 Directory Structure

```
website/
├── app/                          # Next.js 13+ App Router
│   ├── (auth)/                   # Route groups
│   ├── api/                      # API routes
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── loading.tsx               # Global loading UI
│   ├── error.tsx                 # Global error UI
│   └── not-found.tsx             # 404 page
├── src/                          # Source code
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # Basic UI components (buttons, inputs, etc.)
│   │   ├── layout/               # Layout components (header, footer, nav)
│   │   ├── sections/             # Page sections (hero, features, etc.)
│   │   └── forms/                # Form components
│   ├── hooks/                    # Custom React hooks
│   ├── utils/                    # Utility functions
│   ├── lib/                      # Third-party library configurations
│   ├── types/                    # TypeScript type definitions
│   ├── styles/                   # Additional styles and theme
│   ├── constants/                # Application constants
│   ├── data/                     # Static data and mock data
│   ├── providers/                # Context providers
│   ├── store/                    # State management (Zustand/Redux)
│   └── config/                   # Configuration files
├── public/                       # Static assets
│   ├── images/                   # Images
│   ├── icons/                    # Icon files
│   └── documents/                # PDFs and other documents
├── docs/                         # Documentation
└── tests/                        # Test files
```

## 🏗️ Component Structure Best Practices

### 1. Component Organization

Each component should follow this structure:

```
components/
├── ComponentName/
│   ├── index.ts                  # Export file
│   ├── ComponentName.tsx         # Main component
│   ├── ComponentName.types.ts    # Type definitions
│   ├── ComponentName.styles.ts   # Styled components (if using)
│   └── ComponentName.test.tsx    # Tests
```

### 2. Component Categories

- **UI Components** (`src/components/ui/`): Basic, reusable components
  - Button, Input, Modal, Card, etc.
  - No business logic
  - Highly reusable

- **Layout Components** (`src/components/layout/`): Structure components
  - Header, Footer, Sidebar, Navigation
  - App-wide layout elements

- **Section Components** (`src/components/sections/`): Page sections
  - Hero, Features, Testimonials, Contact
  - Business logic components

- **Form Components** (`src/components/forms/`): Form-related components
  - Contact forms, Login forms, etc.
  - Form validation and submission logic

### 3. Component Naming Conventions

- Use PascalCase for component files: `Button.tsx`
- Use kebab-case for folders: `user-profile/`
- Prefix boolean props with `is`, `has`, or `should`: `isLoading`, `hasError`
- Use descriptive names: `SubmitButton` instead of `Button`

## 🪝 Hooks Best Practices

### 1. Hook Organization

```
hooks/
├── useAuth.ts                    # Authentication hooks
├── useApi.ts                     # API call hooks
├── useLocalStorage.ts            # Local storage hooks
└── index.ts                      # Export all hooks
```

### 2. Hook Naming

- Always prefix with `use`: `useUserData`
- Be descriptive: `useDebounce`, `useLocalStorage`
- Group related hooks: `useAuth`, `useAuthRedirect`

### 3. Hook Structure

```typescript
// hooks/useExample.ts
import { useState, useEffect } from 'react';

interface UseExampleOptions {
  initialValue?: string;
}

interface UseExampleReturn {
  value: string;
  setValue: (value: string) => void;
  reset: () => void;
}

export const useExample = (options: UseExampleOptions = {}): UseExampleReturn => {
  const { initialValue = '' } = options;
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);

  return { value, setValue, reset };
};
```

## 🛠️ Utils Organization

### 1. Utils Structure

```
utils/
├── formatters.ts                 # Data formatting functions
├── validators.ts                 # Validation functions
├── constants.ts                  # Utility constants
├── helpers.ts                    # General helper functions
├── api.ts                        # API utilities
└── index.ts                      # Export all utils
```

### 2. Utils Best Practices

- Keep functions pure (no side effects)
- Use descriptive names
- Add JSDoc comments
- Export individual functions

```typescript
// utils/formatters.ts

/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};
```

## 📝 TypeScript Best Practices

### 1. Type Organization

```
types/
├── api.ts                        # API response types
├── components.ts                 # Component prop types
├── global.ts                     # Global types
├── auth.ts                       # Authentication types
└── index.ts                      # Export all types
```

### 2. Type Naming Conventions

- Use PascalCase: `UserProfile`
- Suffix interfaces with interface purpose: `UserProfileProps`
- Use descriptive names: `ApiResponse<T>` instead of `Response<T>`

### 3. Type Examples

```typescript
// types/components.ts
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

// types/api.ts
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}
```

## 🎨 Styling Best Practices

### 1. Tailwind CSS Organization

- Use consistent spacing scale
- Create reusable component classes
- Use CSS variables for theme colors

### 2. Global Styles Structure

```
styles/
├── globals.css                   # Global styles
├── components.css                # Component-specific styles
├── utilities.css                 # Utility classes
└── variables.css                 # CSS variables
```

## 📱 Page Structure Best Practices

### 1. Page Organization

```typescript
// app/page.tsx
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';

export const metadata: Metadata = {
  title: 'Home - Orison Digital',
  description: 'Welcome to Orison Digital',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
```

### 2. Layout Patterns

- Use consistent layouts
- Implement loading and error states
- Add proper SEO metadata

## 🔧 Configuration Best Practices

### 1. Environment Variables

```
config/
├── env.ts                        # Environment validation
├── database.ts                   # Database configuration
├── auth.ts                       # Authentication config
└── api.ts                        # API configuration
```

### 2. Constants Organization

```
constants/
├── routes.ts                     # Route definitions
├── api-endpoints.ts              # API endpoint constants
├── ui.ts                         # UI constants
└── validation.ts                 # Validation constants
```

## 🧪 Testing Best Practices

### 1. Test Structure

```
tests/
├── components/                   # Component tests
├── hooks/                        # Hook tests
├── utils/                        # Utility tests
├── pages/                        # Page tests
└── setup.ts                      # Test setup
```

### 2. Testing Guidelines

- Test behavior, not implementation
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies

## 📦 Import/Export Best Practices

### 1. Index Files

Create `index.ts` files for clean imports:

```typescript
// components/ui/index.ts
export { Button } from './Button';
export { Input } from './Input';
export { Modal } from './Modal';

// Usage
import { Button, Input } from '@/components/ui';
```

### 2. Import Order

1. React imports
2. Third-party libraries
3. Internal imports (components, hooks, utils)
4. Type imports

```typescript
import React from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui';
import { useAuth } from '@/hooks';
import { formatDate } from '@/utils';

import type { User } from '@/types';
```

## 🚀 Performance Best Practices

### 1. Component Optimization

- Use `React.memo()` for expensive components
- Implement proper code splitting
- Lazy load components when appropriate

### 2. Image Optimization

- Use Next.js Image component
- Provide proper alt text
- Use appropriate image formats

### 3. Bundle Optimization

- Use dynamic imports for large libraries
- Implement tree shaking
- Monitor bundle size

## 📋 Code Quality Guidelines

### 1. ESLint Configuration

- Use strict TypeScript rules
- Implement consistent formatting
- Add custom rules for project standards

### 2. Commit Guidelines

- Use conventional commits
- Write descriptive commit messages
- Keep commits atomic

### 3. Code Review Checklist

- [ ] Code follows naming conventions
- [ ] Components are properly typed
- [ ] No console.logs in production code
- [ ] Proper error handling
- [ ] Accessibility considerations
- [ ] Performance implications considered

## 🔄 Development Workflow

### 1. Feature Development

1. Create feature branch
2. Implement component in isolation
3. Add tests
4. Update documentation
5. Create pull request

### 2. Code Organization

- One component per file
- Group related files together
- Use consistent file naming
- Implement proper error boundaries

This structure ensures scalability, maintainability, and follows Next.js and React best practices.
