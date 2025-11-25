# Webimot - Implementation & Deployment Guide

A complete guide for customizing, maintaining, and deploying your marketing website.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Customization Guide](#customization-guide)
4. [SEO Configuration](#seo-configuration)
5. [Performance Optimization](#performance-optimization)
6. [Deployment Guide](#deployment-guide)
7. [Maintenance & Updates](#maintenance--updates)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application runs on `http://localhost:5000`.

---

## Project Structure

```
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── data/              # Content data files (EDIT THESE)
│   │   ├── pages/             # Page components
│   │   ├── lib/               # Utilities and helpers
│   │   └── hooks/             # Custom React hooks
│   └── index.html             # HTML template
├── server/                    # Backend Express server
│   ├── routes.ts              # API routes
│   └── storage.ts             # Data storage interface
├── shared/                    # Shared types and schemas
└── attached_assets/           # Static images and assets
```

---

## Customization Guide

### 1. Company Information

**File:** `client/src/data/chatbotConfig.ts`

```typescript
export const chatbotConfig = {
  companyName: "Your Company Name",
  agentName: "Your Agent Name",
  whatsappNumber: "YOUR_WHATSAPP_NUMBER",  // Format: country code + number (no + or spaces)
  whatsappMessage: "Your custom message...",
  welcomeMessage: "Your welcome message...",
  // ... more options
};
```

### 2. Services Content

**File:** `client/src/data/servicesData.ts`

Each service has:
- `title` - Service name
- `tagline` - Short marketing tagline
- `what` - What the service includes
- `why` - Why customers need it
- `benefits` - Array of benefits
- `deliverables` - What customers receive
- `process` - Step-by-step process
- `faqs` - Frequently asked questions

**To edit a service:**
```typescript
"your-service-slug": {
  title: "Your Service Title",
  tagline: "Your catchy tagline here",
  what: "Description of what the service includes...",
  why: "Why customers need this service...",
  benefits: [
    "Benefit 1",
    "Benefit 2",
    // Add more benefits
  ],
  // ... continue editing
}
```

### 3. Blog Posts

**File:** `client/src/data/blogData.ts`

Each blog post has:
- `slug` - URL-friendly identifier (e.g., "my-blog-post")
- `title` - Post title
- `excerpt` - Short preview text
- `category` - Category name
- `date` - Publication date
- `readTime` - Estimated read time
- `content` - Full article in Markdown format

**To add a new blog post:**
```typescript
{
  slug: "your-post-url",
  title: "Your Blog Post Title",
  excerpt: "A brief summary of the post...",
  category: "Your Category",
  date: "Dec 1, 2025",
  readTime: "5 min read",
  content: `
## Your First Section

Your content goes here. Use **bold** and *italic* for emphasis.

## Second Section

More content...
  `
}
```

### 4. Navigation & Pages

**File:** `client/src/components/Navigation.tsx`

Update menu items in the `menuItems` array:
```typescript
const menuItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // Add or remove items here
];
```

**To add a new page:**
1. Create file in `client/src/pages/YourPage.tsx`
2. Register route in `client/src/App.tsx`
3. Add navigation link in `Navigation.tsx`

### 5. Testimonials

**File:** `client/src/pages/Home.tsx`

Edit the `testimonials` array:
```typescript
const testimonials = [
  {
    name: "Client Name",
    role: "Their Title",
    company: "Company Name",
    content: "What they said about you..."
  },
  // Add more testimonials
];
```

### 6. Chatbot Questions

**File:** `client/src/data/chatbotConfig.ts`

Customize the questionnaire:
```typescript
questions: [
  {
    id: "question-id",
    question: "Your question here?",
    options: [
      { 
        label: "Option displayed to user", 
        value: "option-value",
        tags: ["tag1", "tag2"]  // Used for recommendations
      },
      // More options...
    ]
  }
]
```

### 7. Colors & Branding

**File:** `client/src/index.css`

Update CSS variables in `:root`:
```css
:root {
  --primary: 222 47% 11%;        /* Main brand color */
  --secondary: 217 91% 60%;      /* Secondary brand color */
  --accent: 217 91% 60%;         /* Accent color */
  --background: 0 0% 100%;       /* Background color */
  --foreground: 222 47% 11%;     /* Text color */
  /* ... more variables */
}
```

**Color format:** HSL values without `hsl()` wrapper: `H S% L%`

### 8. Footer Information

**File:** `client/src/components/Footer.tsx`

Update:
- Company name and description
- Contact information
- Social media links
- Copyright text

---

## SEO Configuration

### Page-Level SEO

Each page uses the `<SEO>` component:

```typescript
import SEO from "@/components/SEO";

export default function YourPage() {
  return (
    <>
      <SEO 
        title="Page Title - Brand Name"
        description="A compelling 150-160 character description with keywords."
      />
      {/* Page content */}
    </>
  );
}
```

### SEO Best Practices

1. **Title Tags** (50-60 characters)
   - Include primary keyword
   - Include brand name
   - Be descriptive and compelling

2. **Meta Descriptions** (150-160 characters)
   - Include primary keyword naturally
   - Add a call-to-action
   - Make it compelling to click

3. **URL Structure**
   - Use descriptive, keyword-rich slugs
   - Keep URLs short and readable
   - Use hyphens, not underscores

4. **Content Structure**
   - Use one H1 per page
   - Use H2-H6 for section hierarchy
   - Include keywords in headings naturally

### Structured Data

**File:** `client/index.html`

Add structured data in the `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "sales"
  }
}
</script>
```

---

## Performance Optimization

### Built-in Optimizations

This website includes:
- **Code Splitting** - Pages load only when needed
- **Image Optimization** - Use WebP format for images
- **CSS Minification** - Production builds are optimized
- **Lazy Loading** - Components load as needed

### Image Guidelines

1. **Format:** Use WebP for best compression
2. **Size:** Optimize images before uploading
3. **Dimensions:** Specify width/height to prevent layout shift
4. **Alt Text:** Always include descriptive alt text

**Tools for image optimization:**
- [Squoosh](https://squoosh.app/) - Free online tool
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression

### Adding New Images

1. Place images in `attached_assets/` folder
2. Import in your component:
```typescript
import myImage from "@assets/my-image.png";
```
3. Use with proper alt text:
```tsx
<img src={myImage} alt="Descriptive alt text" />
```

---

## Deployment Guide

### Option 1: Hostinger VPS (Recommended for Full-Stack)

**Requirements:** Hostinger VPS plan ($4.99+/month)

#### Step 1: Server Setup

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
npm install pm2@latest -g

# Install Nginx
sudo apt install nginx -y
```

#### Step 2: Deploy Application

```bash
# Clone your repository
cd /var/www
git clone https://github.com/your-username/your-repo.git webimot
cd webimot

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "webimot" -- start
pm2 save
pm2 startup
```

#### Step 3: Configure Nginx

Create `/etc/nginx/sites-available/webimot`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/webimot /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### Step 4: Add SSL Certificate

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Option 2: Vercel (Easiest for Frontend)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
5. Click Deploy

**Note:** For full-stack features, use Vercel Functions or deploy backend separately.

### Option 3: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist/public`

### Option 4: Railway

1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Railway auto-detects Node.js
4. Configure environment variables
5. Deploy

### Environment Variables

For any deployment, set these environment variables:

```env
NODE_ENV=production
SESSION_SECRET=your-secure-random-string
DATABASE_URL=your-database-url (if using database)
```

---

## Maintenance & Updates

### Updating Content

1. Edit the relevant data file:
   - Services: `client/src/data/servicesData.ts`
   - Blog: `client/src/data/blogData.ts`
   - Chatbot: `client/src/data/chatbotConfig.ts`

2. Push changes to your repository

3. On your server:
```bash
cd /var/www/webimot
git pull
npm install
npm run build
pm2 restart webimot
```

### Adding New Features

1. **New Pages:** Create in `client/src/pages/`, register in `App.tsx`
2. **New Components:** Create in `client/src/components/`
3. **New Data Files:** Create in `client/src/data/`

### Security Updates

Regularly update dependencies:
```bash
npm update
npm audit fix
```

### Backup Recommendations

- **Code:** Keep on GitHub/GitLab
- **Assets:** Backup `attached_assets/` folder
- **Database:** If using database, set up automated backups

---

## Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

**Port Already in Use:**
```bash
# Find and kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

**PM2 Issues:**
```bash
pm2 logs webimot      # View logs
pm2 restart webimot   # Restart app
pm2 delete webimot    # Remove and re-add
```

**Nginx Issues:**
```bash
sudo nginx -t                        # Test config
sudo systemctl status nginx          # Check status
sudo tail -f /var/log/nginx/error.log  # View errors
```

### Getting Help

1. Check browser console for frontend errors
2. Check server logs: `pm2 logs`
3. Check Nginx logs: `/var/log/nginx/`

---

## File Quick Reference

| What to Change | File Location |
|----------------|---------------|
| Services content | `client/src/data/servicesData.ts` |
| Blog posts | `client/src/data/blogData.ts` |
| Chatbot | `client/src/data/chatbotConfig.ts` |
| Colors/branding | `client/src/index.css` |
| Navigation | `client/src/components/Navigation.tsx` |
| Footer | `client/src/components/Footer.tsx` |
| Homepage | `client/src/pages/Home.tsx` |
| Page SEO | Individual page files |
| Site metadata | `client/index.html` |

---

## Technology Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Express.js, Node.js
- **Build Tool:** Vite
- **Routing:** Wouter
- **State:** TanStack Query
- **Animations:** Framer Motion

---

*Last updated: November 2025*
