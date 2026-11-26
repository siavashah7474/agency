> **Superseded (26 Nov 2026):** webimot.com is now the main and only active domain. The site
> moved from webimotagency.com to webimot.com; webimotagency.com and www.webimotagency.com
> permanently (308) redirect to webimot.com in Vercel. The plan below is kept for history only.

# webimot.com → webimotagency.com redirects

All of webimot.com's content now lives on webimotagency.com:

- the landing page → https://webimotagency.com/products/whatsapp-ai
- the 9 blog posts → https://webimotagency.com/blog/<same-slug>

When webimot.com is switched to a new website, add these permanent (308) redirects to the
**new** webimot.com project, so old links and Google rankings carry over. If the new site is
on Vercel, put them in its `vercel.json`:

```json
{
  "redirects": [
    { "source": "/blog", "destination": "https://webimotagency.com/blog", "permanent": true },
    { "source": "/blog/why-clinics-lose-international-leads", "destination": "https://webimotagency.com/blog/why-clinics-lose-international-leads", "permanent": true },
    { "source": "/blog/whatsapp-automation-medical-tourism", "destination": "https://webimotagency.com/blog/whatsapp-automation-medical-tourism", "permanent": true },
    { "source": "/blog/qualify-international-patients-automatically", "destination": "https://webimotagency.com/blog/qualify-international-patients-automatically", "permanent": true },
    { "source": "/blog/turkey-medical-tourism-guide-2026", "destination": "https://webimotagency.com/blog/turkey-medical-tourism-guide-2026", "permanent": true },
    { "source": "/blog/thailand-medical-tourism-clinics-guide-2026", "destination": "https://webimotagency.com/blog/thailand-medical-tourism-clinics-guide-2026", "permanent": true },
    { "source": "/blog/best-medical-tourism-destinations-turkey-thailand-dubai", "destination": "https://webimotagency.com/blog/best-medical-tourism-destinations-turkey-thailand-dubai", "permanent": true },
    { "source": "/blog/ai-automation-medical-tourism-clinics", "destination": "https://webimotagency.com/blog/ai-automation-medical-tourism-clinics", "permanent": true },
    { "source": "/blog/ai-assistant-medical-tourism-patient-journey", "destination": "https://webimotagency.com/blog/ai-assistant-medical-tourism-patient-journey", "permanent": true },
    { "source": "/blog/replace-manual-followup-ai-medical-clinic", "destination": "https://webimotagency.com/blog/replace-manual-followup-ai-medical-clinic", "permanent": true }
  ]
}
```

What to decide when the new site goes live:

- **The home page (`/`).** If the new webimot.com is a different business, keep its own home
  page and add a visible link to https://webimotagency.com/products/whatsapp-ai. If webimot.com
  stays parked for a while first, redirect everything instead:
  `{ "source": "/(.*)", "destination": "https://webimotagency.com/products/whatsapp-ai", "permanent": true }`
  (put the blog redirects above it, so they still go to the matching posts).
- **Google Search Console.** If webimot.com is verified there, use the Change of Address tool only
  if the whole domain redirects to webimotagency.com; otherwise just let the redirects work.
- **Old demo form and Aria chat.** webimot.com's `/api/demo-request` and `/api/chat` endpoints are
  not moved. On webimotagency.com, Aria is a guided lead chat (no AI, no API key): it emails the
  lead through `/api/contact` and offers WhatsApp with the answers prefilled. Demo requests also
  go through the booking form.
