# Webimot - AI-Powered Marketing & Automation Platform

## Overview

Webimot is a digital marketing and AI automation agency specializing in medical tourism clinics, real estate, and service-based businesses. The platform combines traditional digital marketing services with cutting-edge AI automation solutions, including 24/7 WhatsApp AI agents, SEO blog generation, and AI-driven marketing analytics.

The application is a full-stack React + Express web application featuring a marketing website with multiple pages showcasing services, AI solutions, client testimonials, and consultation booking. The platform is bilingual-ready (English/Turkish) and targets B2B clients in the medical tourism and real estate sectors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type safety and modern component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component Strategy**
- Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system following "New York" style from Shadcn with premium tech brand aesthetics
- Component organization: reusable UI components in `/components/ui`, feature components in `/components`, page-specific components in `/pages`

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- Local component state with React hooks for UI state
- Custom query client configuration with credential-based requests

**Design System**
- Color palette: Navy Blue primary (#0A1F44, #1E3A5F), Royal Blue/Cyan secondary (#3B82F6, #06B6D4)
- Typography: Poppins (preferred) or Inter fallback with defined weight hierarchy
- Spacing scale: Tailwind units following 4px baseline grid
- Custom HSL-based color system with CSS variables for theme flexibility
- Gradient-based hero sections and premium visual language

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Separation of development (index-dev.ts) and production (index-prod.ts) entry points
- Custom middleware for request logging with timestamps and source tracking
- JSON body parsing with raw body preservation for webhook verification

**Development vs Production**
- Development: Vite middleware integration for HMR and live reloading
- Production: Static file serving from pre-built dist/public directory
- Environment-specific server setup through separate entry points

**API Design**
- RESTful API structure with `/api` prefix convention
- Centralized route registration in `registerRoutes` function
- HTTP server created separately from Express app for WebSocket compatibility

### Data Storage Solutions

**Database**
- PostgreSQL as the primary database (configured via Neon serverless driver)
- Drizzle ORM for type-safe database queries and schema management
- Schema-first approach with Drizzle migrations in `/migrations` directory
- Database credentials managed through `DATABASE_URL` environment variable

**Schema Design**
- Users table with UUID primary keys (generated via `gen_random_uuid()`)
- Zod schema validation integrated with Drizzle for runtime type safety
- Separation of insert schemas and select types for strict type checking

**Storage Abstraction**
- `IStorage` interface defining CRUD operations for data access
- `MemStorage` implementation for in-memory storage (development/testing)
- Design allows easy swapping to database-backed storage without changing business logic

### External Dependencies

**UI & Component Libraries**
- Radix UI: Complete set of accessible, unstyled UI primitives (dialog, dropdown, accordion, etc.)
- Tailwind CSS: Utility-first CSS framework with PostCSS processing
- Class Variance Authority (CVA): Type-safe variant styling for components
- Lucide React: Icon library for consistent iconography

**Form Management**
- React Hook Form: Performant form state management
- @hookform/resolvers: Integration with Zod validation schemas
- Zod: Runtime type validation for form inputs and API data

**Development Tools**
- TypeScript: Static type checking across the entire codebase
- ESBuild: Fast bundling for production server code
- Drizzle Kit: Database migration and schema management CLI
- Vite plugins: Runtime error overlay, Replit-specific dev tools (cartographer, dev banner)

**Database & APIs**
- @neondatabase/serverless: PostgreSQL driver optimized for serverless environments
- connect-pg-simple: PostgreSQL session store (for future authentication)
- Date-fns: Date manipulation and formatting utilities

**Key Architectural Decisions**

1. **Monorepo Structure**: Frontend (`/client`), backend (`/server`), and shared code (`/shared`) in single repository for simplified development
2. **Type Safety**: Comprehensive TypeScript coverage with strict compiler options and shared types between frontend/backend
3. **Component Reusability**: Shadcn/ui pattern of copying components into project for full customization control
4. **Path Aliases**: TypeScript path mapping (`@/`, `@shared/`, `@assets/`) for clean imports
5. **Environment Separation**: Clear separation of development and production builds with different serving strategies
6. **Database Flexibility**: Storage interface abstraction allows switching between in-memory and PostgreSQL without code changes