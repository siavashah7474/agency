# Webimot - Digital Marketing & Automation Platform

## Overview

Webimot is a digital marketing and automation agency specializing in medical tourism clinics, real estate, and service-based businesses. The platform combines traditional digital marketing services with intelligent automation solutions, including 24/7 WhatsApp agents, SEO content generation, and marketing analytics.

The application is a full-stack React + Express web application featuring a marketing website with multiple pages showcasing services, automation solutions, client testimonials, and consultation booking.

## Recent Changes

- **Exit-Intent Popup**: Added popup to capture visitors about to leave with a free marketing audit offer (uses sessionStorage to prevent repeated popups)
- **Case Studies Section**: Added Case Studies page with 4 detailed success stories showing metrics, testimonials, and outcomes (Challenge → Solution → Results structure)
- **Blog Category Filtering**: Added category filter buttons to the blog page with memoized filtering for performance
- **Breadcrumb Navigation**: Added breadcrumb component to service detail and case study pages for better UX and SEO
- **Legal Compliance Pages**: Added Privacy Policy and Terms of Service pages with comprehensive content and footer links
- **Performance Optimization**: Added lazy loading for all pages using React.lazy and Suspense
- **SEO Enhancement**: Enhanced SEO component with:
  - Open Graph and Twitter card support
  - Keywords and canonical URL support
  - Structured data (JSON-LD) for Organization and WebSite
  - Optimized font loading (only Poppins and Inter)
- **Code Cleanup**: Removed unused example files and directories
- **Documentation**: Added comprehensive IMPLEMENTATION_GUIDE.md with:
  - Customization instructions for all content areas
  - SEO configuration guide
  - Deployment instructions for Hostinger VPS, Vercel, Netlify, Railway
  - Maintenance and troubleshooting guides
- **Chatbot Improvements**: Session management with proper timeout cleanup

## User Preferences

Preferred communication style: Simple, everyday language.

## Key Customization Files

| What to Change | File Location |
|----------------|---------------|
| Services content | `client/src/data/servicesData.ts` |
| Blog posts | `client/src/data/blogData.ts` |
| Case studies | `client/src/data/caseStudiesData.ts` |
| Chatbot config | `client/src/data/chatbotConfig.ts` |
| Colors/branding | `client/src/index.css` |
| Navigation | `client/src/components/Navigation.tsx` |
| Footer | `client/src/components/Footer.tsx` |
| Homepage | `client/src/pages/Home.tsx` |
| Privacy Policy | `client/src/pages/PrivacyPolicy.tsx` |
| Terms of Service | `client/src/pages/TermsOfService.tsx` |
| Site metadata | `client/index.html` |

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type safety
- Vite for fast builds and HMR
- Wouter for client-side routing
- Lazy loading for code splitting

**UI Component Strategy**
- Shadcn/ui with Radix UI primitives
- Tailwind CSS for styling
- Lucide React for icons

**State Management**
- TanStack Query for server state
- React hooks for UI state

**Design System**
- Color palette: Navy Blue primary, Royal Blue/Cyan secondary
- Typography: Poppins (primary), Inter (fallback)
- HSL-based color variables in CSS

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API
- Separate development and production entry points
- JSON body parsing with raw body preservation

**API Design**
- RESTful API with `/api` prefix
- Centralized route registration

### Data Files

**Content is stored in TypeScript files for type safety:**
- `client/src/data/servicesData.ts` - All 11 services
- `client/src/data/blogData.ts` - Blog posts with full content
- `client/src/data/caseStudiesData.ts` - Case studies with metrics and testimonials
- `client/src/data/chatbotConfig.ts` - Chatbot configuration

### External Dependencies

**UI Libraries**
- Radix UI primitives
- Tailwind CSS
- Lucide React icons
- Framer Motion for animations

**Form & Validation**
- React Hook Form
- Zod validation

**Development Tools**
- TypeScript
- ESBuild
- Drizzle ORM (for future database needs)

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend, backend, and shared code in single repository
2. **Type Safety**: TypeScript across entire codebase
3. **Component Library**: Shadcn/ui for customizable components
4. **Path Aliases**: `@/`, `@shared/`, `@assets/` for clean imports
5. **Lazy Loading**: React.lazy for code splitting
6. **Content-as-Code**: TypeScript data files for type-safe content management
