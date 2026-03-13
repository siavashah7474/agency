# OG Image Setup Instructions

## What is an OG Image?

An Open Graph (OG) image is the image that appears when your website is shared on social media platforms like Facebook, LinkedIn, Twitter, etc. It's referenced in your HTML as `/og-image.png`.

## Current Status

❌ **Missing**: The file `/client/public/og-image.png` does not exist yet.

## Required Specifications

- **File Name**: `og-image.png`
- **Location**: `/client/public/og-image.png`
- **Recommended Size**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **File Format**: PNG or JPG
- **File Size**: Under 1MB (optimize for web)

## What Should Be in the Image?

Your OG image should include:
1. **Company Logo**: Webimot logo prominently displayed
2. **Tagline**: "AI-Powered Marketing & Automation for Medical Tourism"
3. **Key Value Proposition**: Something like "24/7 Lead Generation" or "60% Conversion Increase"
4. **Visual Appeal**: Professional, branded design matching your website

## How to Create It

### Option 1: Design Tool (Recommended)
1. Use Canva, Figma, or Adobe Photoshop
2. Create a canvas: 1200 x 630 pixels
3. Add your logo, tagline, and branding
4. Export as PNG
5. Optimize using TinyPNG or similar
6. Save as `og-image.png` in `/client/public/`

### Option 2: Online Generator
- Use tools like:
  - https://www.opengraph.xyz/
  - https://www.bannerbear.com/tools/open-graph-image-generator/
  - https://og-image.vercel.app/

### Option 3: Hire a Designer
- Provide these specs to a designer
- They can create a professional branded image

## Quick Template Ideas

**Template 1: Simple & Clean**
```
[Webimot Logo] (top left)
"AI-Powered Marketing & Automation" (center, large text)
"For Medical Tourism Clinics" (center, smaller text)
Background: Gradient matching your brand colors
```

**Template 2: Stats-Focused**
```
[Webimot Logo] (top)
"60% Conversion Increase" (large, center)
"24/7 AI Automation" (below)
Background: Professional medical/tech imagery
```

## After Creating

1. Save the file as `og-image.png`
2. Place it in `/client/public/og-image.png`
3. Test using:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Testing

After adding the image, test it:
1. Share a page on Facebook/Linkedin/Twitter
2. Check if the image appears correctly
3. Verify it's not too large (should load quickly)

## Temporary Solution

If you need to launch before creating the image:
1. Use a simple placeholder with your logo
2. Update it later with a professional design
3. The site will work without it, but social sharing won't look as good

---

**Priority**: High - Should be done before production launch  
**Time Estimate**: 1-2 hours (design) + 15 minutes (implementation)

