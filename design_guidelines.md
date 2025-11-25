# Webimot Design Guidelines

## Design Approach
**Selected Approach**: Custom Premium Tech Brand (Reference: Linear's typography precision + Stripe's restraint + modern SaaS aesthetics)

**Core Principles**:
- High-tech meets trustworthy professional services
- Premium feel for B2B medical tourism and real estate clients
- AI/automation visual language throughout
- Bilingual-ready (English/Turkish)

## Brand Identity

**Color Palette**:
- Primary: Navy Blue (#0A1F44, #1E3A5F)
- Secondary: Royal Blue/Cyan (#3B82F6, #06B6D4)
- Base: White (#FFFFFF)
- Backgrounds: Light Grey (#F8FAFC, #F1F5F9)
- Gradients: Navy → Royal Blue (diagonal 45deg)

**Typography**:
- Font Stack: Poppins (preferred) or Inter fallback
- Headings: 600-700 weight
- Body: 400-500 weight
- Hierarchy: Hero (48-64px) → H2 (36-48px) → H3 (24-32px) → Body (16-18px)

## Layout System

**Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, py-12, mt-16)
- Section padding: py-16 (mobile) to py-24 (desktop)
- Component spacing: gap-6 to gap-8
- Container max-width: max-w-7xl with px-6

**Grid Patterns**:
- Services/Features: 3-column desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- AI Products: 3-card row or single-column detailed cards
- Testimonials: 2-3 columns
- Pricing: 3-tier side-by-side cards

## Component Library

**Navigation**:
- Sticky header with logo left, nav center, CTA button right
- Transparent/blur on scroll with subtle shadow
- Mobile: Hamburger menu with full-screen overlay

**Hero Sections**:
- Full-width background with navy → blue gradient
- Centered content with max-w-4xl
- Large headline + subheadline + dual CTA buttons
- Hero image: AI/automation illustrations (dashboards, chatbot interfaces, analytics screens)
- Buttons on gradients: backdrop-blur-sm bg-white/10 border border-white/20

**Cards**:
- Rounded corners (rounded-xl to rounded-2xl)
- Subtle shadows (shadow-lg hover:shadow-xl)
- White backgrounds with light grey borders
- Icon + Title + Description + CTA pattern
- Hover: slight lift (transition transform)

**Buttons**:
- Primary: Navy blue bg with white text, rounded-lg, px-8 py-3
- Secondary: White bg with navy border and text
- CTA: Royal blue with gradient, larger padding (px-10 py-4)
- All buttons: Medium weight text, no hover/active states needed

**Service Detail Pages**:
- Hero section with service name + tagline
- "What/Why/Benefits" sections with icons
- Process timeline (4-6 steps with connecting lines)
- 3-tier pricing cards: Starter/Growth/Elite (side-by-side on desktop)
- FAQ accordion at bottom

**Forms**:
- Clean inputs with light grey borders
- Rounded corners (rounded-lg)
- Focus state: royal blue border
- Labels above inputs
- Submit button: primary style

## Page-Specific Layouts

**Homepage**:
1. Hero with dual CTAs and illustration
2. 4-column value props (icons + short text)
3. 3 AI Products as large cards with detailed features
4. Services grid (8 items, 4 columns)
5. Automation features (icon + text list, 2-column layout)
6. Testimonials (3-column cards)
7. Final CTA (full-width blue gradient banner)

**Services Page**:
- Grid of 11 service cards (3-4 columns)
- Each card: Icon + Title + 2-line description + "Learn More" link

**AI Solutions Page**:
- Each solution gets full section with:
  - Large heading + description
  - Feature list (2-column bullet points with check icons)
  - Automation diagram (flowchart illustration)
  - Integration showcase
  - CTA to book consultation

**About Page**:
- Vision/Mission cards (side-by-side)
- "Why Clinics" section with stats
- "Why AI" timeline
- Differentiators (icon grid)
- Founder section (photo + bio, 2-column)

**Blog Page**:
- Featured post (large card at top)
- Grid of 9 posts (3 columns)
- Each post: Featured image + category tag + title + excerpt + read more

## Images

**Required Images**:
- **Homepage Hero**: AI dashboard/automation interface mockup (1920x800px)
- **WhatsApp AI Agent**: Chat interface screenshot with AI responses
- **SEO Blog Generator**: Content calendar/blog post editor interface
- **AI Analyst**: Analytics dashboard with charts and metrics
- **Service Cards**: Icon illustrations (automation, analytics, marketing themes)
- **About Page**: Team/founder professional photos
- **Blog Posts**: Related stock images (medical tourism, real estate, tech)
- **Testimonials**: Client headshots (if available) or placeholder avatars

**Image Treatment**: Subtle gradients overlay on hero images, rounded corners on all content images (rounded-lg), shadows on card images

## Accessibility
- Clear contrast ratios (navy on white passes WCAG AA)
- Form labels always visible
- Focus states on all interactive elements
- Alt text for all images
- Semantic HTML structure

## Mobile Optimization
- All multi-column layouts stack to single column below md breakpoint
- Hero text sizing scales down (text-4xl on mobile, text-6xl on desktop)
- Touch-friendly tap targets (min 44px height)
- Simplified navigation on mobile

## Visual Enhancements
- Minimal animations: Fade-in on scroll for cards
- Hover states: Subtle shadow increase on cards/buttons
- Gradient backgrounds for hero and CTA sections
- Icon system: Heroicons (outline style for consistency)
- Illustrations: Modern line-art style in royal blue accent color