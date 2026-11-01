# Site restructure — "AI automation systems for clinics & small businesses"

Date: 2026-11-01 · Branch: `restructure` · Restore point: tag `backup-before-restructure-2026-11-01`

## Why

The site presented 11 marketing services, 7 named AI products, 5 industry pages and three overlapping
overview pages (/services, /solutions, /ai-solutions). The proof (case studies, blog, the webimot.com
product) is almost all clinics and medical tourism, and the owner wants to be known for AI automation
systems for clinics *and* small businesses. The fix is one promise, two audiences, four systems.

## Positioning

- **Promise:** "AI automation systems that run your daily work." For clinics and small businesses.
- **Two audiences:** `/clinics` (flagship vertical) and `/small-business` (horizontal; real estate,
  e-commerce, finance/legal, services as examples).
- **Four systems** (the ladder; product names as sub-labels — decision 3):
  1. Capture system (WhatsApp AI · LeadFire)
  2. Follow-up system (NurtureLoop · ReviveIQ)
  3. Operations system (DocuMind · AI agents for daily tasks)
  4. Reporting system (ClearDesk)
- **Add-ons** that feed the capture system: Meta Ads, Google Ads, SEO / SEO Blog AI.
- Shared vocabulary lives in `client/src/data/systemsData.ts`.

## Decisions taken with the owner

1. Pricing: no numbers — three tiers mapped to the ladder, "Request a quote".
2. Parked marketing services (branding, content creation, website development, reputation
   management, Shopify automation, funnel automation, AI ops autopilot): pages stay live and in the
   sitemap but are removed from nav, footer and home.
3. Product names kept as sub-labels under system names; product URLs unchanged.

## Routes

| Route | Status | Notes |
|---|---|---|
| `/` | rewritten | promise → audience cards → ladder → proof → FAQ → CTA |
| `/systems` | new | replaces /solutions, /services, /ai-solutions |
| `/clinics` | new | replaces /industries/healthcare and /ai-solutions content |
| `/small-business` | new | replaces /industries/{small-business,real-estate,ecommerce,finance-legal} |
| `/pricing` | reworked | tiers from `TIERS`, quote CTA |
| `/products/*` | kept | "Part of the ___ system" label |
| `/services/:slug` | kept | parked ones hidden; meta-ads, google-ads, seo linked as add-ons |
| `/case-studies`, `/blog`, `/about`, `/contact`, `/clients`, legal | kept | |

301 redirects (vercel.json): `/solutions`→`/systems`, `/services`→`/systems`, `/ai-solutions`→`/clinics`,
`/who-we-help`→`/`, `/industries/healthcare`→`/clinics`, other `/industries/*`→`/small-business`,
plus `www` bare-homepage → apex (gap found in production).

Nav: Systems · Clinics · Small Business · Pricing · Work · Blog · Book a demo.

## Build plan

Three parallel agents with disjoint files:
- **Home + i18n:** Home.tsx, WhoWeHelpSection (audience cards), WhatWeDoSection (ladder), 4 locale files.
- **New pages + routing:** Systems/Clinics/SmallBusiness pages, App.tsx, deletions, vercel.json,
  prerender seeds for hidden pages, blogData link targets.
- **Chrome + pricing:** Navigation, Footer, PricingPackagesSection/Pricing, ProductPageLayout +
  product pages (system label), BookingModal service options, chatbot recommendations, llms files.

Verification: tsc, vite build, dev-server smoke of every route, mobile/desktop screenshots of the
four new/rewritten pages, redirect table checked against App.tsx routes.
