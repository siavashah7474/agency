interface ServiceData {
  title: string;
  tagline: string;
  metaDescription: string;
  what: string;
  why: string;
  benefits: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const serviceData: Record<string, ServiceData> = {
  "whatsapp-ai-agent": {
    title: "WhatsApp AI Agent",
    tagline: "24/7 Intelligent Lead Handling & Booking Automation",
    metaDescription: "AI WhatsApp agent for clinics that answers patient inquiries 24/7, qualifies leads, evaluates photos with Vision AI, and books consultations automatically.",
    what: "Our WhatsApp AI Agent is a sophisticated automation system that handles incoming messages on WhatsApp 24/7. It uses advanced AI to understand customer inquiries, qualify leads, evaluate photos with Vision AI, transcribe voice messages, and automatically book consultations. The system integrates with your calendar, CRM, and provides real-time dashboards for monitoring performance.",
    why: "In the medical tourism and service industries, speed is everything. Fast replies win more leads. Our AI agent is designed to answer every enquiry in under 3 seconds, in the customer's language, and book consultations automatically - even when your team is asleep.",
    benefits: [
      "Never miss a lead - every enquiry answered 24/7",
      "Instant replies in multiple languages",
      "AI-powered photo evaluation for medical cases",
      "Automatic lead qualification and scoring",
      "Direct calendar booking without human intervention",
      "Less time spent by staff on repetitive questions",
      "Complete conversation history and analytics"
    ],
    deliverables: [
      "Fully configured WhatsApp Business API integration",
      "Custom AI agent trained on your services",
      "Voice-to-text transcription system",
      "Vision AI photo evaluation",
      "Lead qualification workflow",
      "Calendar booking integration",
      "CRM integration (optional)",
      "Real-time dashboard",
      "Training documentation",
      "30 days of optimization support"
    ],
    process: [
      { title: "Discovery & Setup", description: "We analyze your business, define conversation flows, and set up the WhatsApp Business API" },
      { title: "AI Training", description: "We train the AI on your services, pricing, FAQs, and typical customer questions" },
      { title: "Integration", description: "Connect calendar, CRM, and other tools for seamless automation" },
      { title: "Testing", description: "Testing with realistic scenarios before go-live" },
      { title: "Launch & Monitor", description: "Go live with continuous monitoring and optimization for 30 days" },
      { title: "Ongoing Support", description: "Regular updates, performance reviews, and AI improvements" }
    ],
    faqs: [
      {
        question: "How long does setup take?",
        answer: "The WhatsApp AI is live within 48 hours of onboarding, including AI training and testing. Wider builds with CRM and calendar integrations take 2–4 weeks."
      },
      {
        question: "What languages does the AI support?",
        answer: "The AI supports 40+ languages including English, Turkish, Arabic, Russian, German, and French. We can add custom languages as needed."
      },
      {
        question: "Can the AI handle complex medical questions?",
        answer: "The AI is trained on your specific services and can handle most common inquiries. For complex medical questions, it seamlessly escalates to your human team with full context."
      },
      {
        question: "How accurate is the photo evaluation?",
        answer: "The photo evaluation gives a preliminary assessment only, for common cases such as dental, hair transplant and cosmetic enquiries. It is not a diagnosis, and it always recommends a professional consultation."
      },
      {
        question: "What happens if the AI doesn't understand something?",
        answer: "The AI is designed to ask clarifying questions. If it still cannot help, it escalates to a human supervisor with complete conversation history and context."
      }
    ]
  },
  "seo-blog-generator": {
    title: "SEO Blog AI",
    tagline: "Automated Content Creation & Publishing System",
    metaDescription: "Automated SEO blog generator that writes, optimizes, and publishes 20-30 keyword-targeted posts per month on autopilot — no manual writing needed.",
    what: "Our SEO Blog AI is an automated content marketing system that generates SEO-optimized blog posts based on your industry, keywords, and RSS feed sources. It handles everything from content generation to meta tag optimization, internal linking, scheduling, and publishing - all without manual intervention.",
    why: "Content marketing is essential for SEO but extremely time-consuming. Writing each post by hand takes hours. Our AI system is built to generate 20-30 SEO-optimized posts a month, so your site keeps publishing without a content team.",
    benefits: [
      "20-30 SEO-optimized posts per month",
      "No manual writing or scheduling",
      "Automatic keyword research and optimization",
      "Internal linking for better SEO",
      "Multi-language content generation",
      "Consistent publishing schedule",
      "Built-in plagiarism checking",
      "Performance tracking and analytics"
    ],
    deliverables: [
      "Custom AI content engine setup",
      "RSS feed integration",
      "Keyword research system",
      "Content templates for your niche",
      "Auto-publishing integration",
      "Internal linking automation",
      "Meta tag optimization",
      "Performance dashboard",
      "Monthly content calendar",
      "Training and documentation"
    ],
    process: [
      { title: "Industry Analysis", description: "We research your niche, competitors, and high-value keywords" },
      { title: "AI Configuration", description: "Set up content templates, tone of voice, and SEO parameters" },
      { title: "RSS & Source Setup", description: "Connect industry news sources and trending topics for content ideas" },
      { title: "Testing Phase", description: "Generate sample posts for your review and approval" },
      { title: "Launch", description: "Activate automated publishing with your approved schedule" },
      { title: "Optimization", description: "Monitor performance and refine content strategy monthly" }
    ],
    faqs: [
      {
        question: "Is the content original?",
        answer: "Yes, all content is generated by AI and passes plagiarism checks. We use advanced models to ensure uniqueness and quality."
      },
      {
        question: "Can I review posts before publishing?",
        answer: "Absolutely. You can choose auto-publish or review mode where posts are saved as drafts for your approval."
      },
      {
        question: "How does the AI know what to write about?",
        answer: "The AI analyzes your RSS feeds, trending topics in your industry, keyword opportunities, and your content calendar to generate relevant posts."
      },
      {
        question: "What about SEO optimization?",
        answer: "Every post is optimized with target keywords, meta descriptions, proper heading structure, internal links, and SEO-friendly URLs."
      },
      {
        question: "Can I customize the writing style?",
        answer: "Yes, we train the AI on your preferred tone, style, and brand voice during setup. You can adjust this at any time."
      }
    ]
  },
  "ai-ops-autopilot": {
    title: "AI Operations Autopilot",
    tagline: "Plan, Coordinate & Automate Your Internal Business Operations",
    metaDescription: "AI automation for business operations — handles invoices, HR tasks, meeting prep, and recurring admin on autopilot, using the tools you already have.",
    what: "AI Operations Autopilot is an end-to-end internal automation system that handles the repetitive work that drains your team's time every day. From automatically sending invoice emails and payment reminders to managing HR onboarding checklists, scheduling internal meetings, and flagging overdue tasks — the system coordinates your back-office operations around the clock. It integrates with your existing tools (email, Google Workspace, Notion, Slack, HR platforms) and acts as a tireless operations coordinator that never misses a deadline.",
    why: "Teams lose hours every week to administrative tasks that follow a predictable pattern — chasing invoices, sending reminder emails, assigning recurring tasks, updating spreadsheets, and manually escalating overdue items. These tasks don't require judgment; they require consistency. Our AI is built to handle them automatically, freeing your team to focus on work that actually moves the business forward.",
    benefits: [
      "Automated invoice generation and payment reminder emails",
      "HR task automation — onboarding checklists, contract reminders, holiday tracking",
      "Internal task planning with AI-assigned priorities and deadlines",
      "Escalation workflows — overdue items automatically flagged to managers",
      "Recurring admin tasks handled on schedule without manual intervention",
      "Meeting scheduling and agenda preparation automation",
      "Weekly internal status reports generated and distributed automatically"
    ],
    deliverables: [
      "Business operations audit and workflow mapping",
      "Automated invoice email system with follow-up sequences",
      "HR automation workflows (onboarding, reminders, document collection)",
      "Internal task management automation with priority scoring",
      "Escalation and notification system for overdue items",
      "Recurring task scheduler (daily, weekly, monthly)",
      "Meeting and planning automation (agendas, summaries, action items)",
      "Weekly internal report generation and distribution",
      "Integration with email, Slack, Notion, Google Workspace, or equivalent",
      "Training documentation and 30 days of optimization support"
    ],
    process: [
      { title: "Operations Audit", description: "We map every recurring task your team does manually — emails, reports, reminders, checklists, and escalations" },
      { title: "Workflow Design", description: "We design automation workflows for each task, defining triggers, conditions, and output actions" },
      { title: "AI Configuration", description: "We configure the AI to draft, send, and track communications and tasks using your tone and templates" },
      { title: "Tool Integration", description: "Connect your email, Slack, HR platform, project management tools, and accounting software" },
      { title: "Testing & Handover", description: "Test every workflow with real scenarios, then run in parallel with your team before full handover" },
      { title: "Ongoing Optimization", description: "Monthly reviews to add new automations as your operations grow and evolve" }
    ],
    faqs: [
      {
        question: "What kinds of tasks can this automate?",
        answer: "Anything that follows a repeatable pattern: invoice emails, payment chasers, HR onboarding steps, contract renewal reminders, recurring meeting prep, internal status updates, task assignment, deadline escalations, and more."
      },
      {
        question: "What tools does it integrate with?",
        answer: "We integrate with Gmail, Outlook, Google Workspace, Slack, Notion, Trello, Asana, ClickUp, QuickBooks, Xero, HubSpot, and most major business tools via API or automation middleware."
      },
      {
        question: "Do we need to change how we currently work?",
        answer: "No. We build automations around your existing tools and workflows. Your team keeps using the same platforms — the AI just handles the repetitive parts in the background."
      },
      {
        question: "How long does it take to set up?",
        answer: "Invoice and reminder automations are usually the first to go live. We plan for full automation of all workflows in about 3-4 weeks."
      },
      {
        question: "Can the AI handle different departments — finance, HR, and operations?",
        answer: "Yes. We build department-specific workflows. Finance gets invoice and payment automation, HR gets onboarding and compliance reminders, and operations gets task coordination and escalation workflows — all running in parallel."
      }
    ]
  },
  "meta-ads": {
    title: "Meta Ads Management",
    tagline: "Facebook & Instagram Advertising, Managed for You",
    metaDescription: "Meta Ads management for clinics and medical tourism businesses. We plan, build, and optimise your Facebook and Instagram campaigns and report weekly.",
    what: "Professional management of your Facebook and Instagram advertising campaigns. We handle everything from strategy and creative to targeting, optimization, and reporting. We use AI tools alongside hands-on optimisation to get more from your ad spend.",
    why: "Meta's advertising platform is powerful but complex. Without careful setup and tracking, ad budget is easily wasted. We structure, test, and optimise campaigns continuously, aiming for qualified leads at a lower cost.",
    benefits: [
      "Campaigns optimised toward cost per qualified lead",
      "Professional ad creative and copywriting",
      "Advanced targeting and audience research",
      "A/B testing and optimization",
      "Detailed performance reporting",
      "Retargeting campaigns",
      "Lead generation funnels",
      "Conversion tracking setup"
    ],
    deliverables: [
      "Complete campaign strategy",
      "Audience research and targeting",
      "Ad creative design (5-10 variants)",
      "Ad copywriting",
      "Campaign setup and launch",
      "Daily monitoring and optimization",
      "A/B testing",
      "Weekly performance reports",
      "Monthly strategy calls",
      "Conversion tracking setup"
    ],
    process: [
      { title: "Strategy Development", description: "We analyze your business, competitors, and define campaign objectives" },
      { title: "Audience Research", description: "Identify and segment your ideal customers on Meta platforms" },
      { title: "Creative Production", description: "Design compelling ad visuals and write persuasive copy" },
      { title: "Campaign Launch", description: "Set up tracking, launch campaigns with optimized targeting" },
      { title: "Optimization", description: "Daily monitoring and adjustments for maximum performance" },
      { title: "Scaling", description: "Gradually increase budget on winning campaigns while maintaining ROI" }
    ],
    faqs: [
      {
        question: "What's the minimum ad spend?",
        answer: "We recommend a minimum of €500/month in ad spend to have enough data for optimization. This is separate from our management fee."
      },
      {
        question: "How long until I see results?",
        answer: "Campaigns need time to gather data. Expect the first few weeks to be a learning phase, with optimisation continuing over the following 2-3 months. Results depend on your market, offer, and budget."
      },
      {
        question: "Do you create ad visuals?",
        answer: "Yes, all plans include professionally designed ad creatives. Scale plans also include video ad production."
      },
      {
        question: "Can you target international audiences?",
        answer: "Yes. We set up international targeting by country and language, which suits medical tourism and real estate campaigns."
      },
      {
        question: "What if the ads don't perform?",
        answer: "We continuously test and optimize. If campaigns underperform, we revise strategy, creative, and targeting and tell you plainly what we are changing and why."
      }
    ]
  },
  "google-ads": {
    title: "Google Ads Management",
    tagline: "Search & Display Advertising That Converts",
    metaDescription: "Google Ads management for medical tourism clinics. We build Search, Display, and YouTube campaigns for high-intent searches, with tracking.",
    what: "Professional Google Ads management including Search, Display, and YouTube advertising. We create data-driven campaigns that put your business in front of customers actively searching for your services. From keyword research to ad creation and optimization, we handle everything.",
    why: "Your potential customers are searching on Google right now. Google Ads puts your business in front of them at the moment they are looking. We build and manage campaigns around high-intent keywords, with conversion tracking so you can see what each lead costs.",
    benefits: [
      "Immediate visibility in Google search results",
      "Pay only for clicks from interested prospects",
      "Advanced keyword targeting",
      "Geographic and demographic targeting",
      "Retargeting across Google network",
      "Detailed conversion tracking",
      "Ongoing bid and keyword optimisation",
      "Scalable campaigns"
    ],
    deliverables: [
      "Comprehensive keyword research",
      "Competitor analysis",
      "Ad copywriting (multiple variants)",
      "Landing page recommendations",
      "Campaign structure and setup",
      "Conversion tracking implementation",
      "Daily bid optimization",
      "Quality Score improvements",
      "Weekly performance reports",
      "Monthly strategy sessions"
    ],
    process: [
      { title: "Keyword Research", description: "Identify high-intent keywords your customers are searching for" },
      { title: "Campaign Structure", description: "Build organized campaigns and ad groups for maximum relevance" },
      { title: "Ad Creation", description: "Write compelling ads that drive clicks and conversions" },
      { title: "Tracking Setup", description: "Implement conversion tracking and analytics" },
      { title: "Launch & Monitor", description: "Go live and monitor performance closely" },
      { title: "Optimize", description: "Continuous testing and optimization for better results" }
    ],
    faqs: [
      {
        question: "How much should I spend on Google Ads?",
        answer: "It depends on your industry and goals. We typically recommend starting with €1,000-2,000/month and scaling up once the campaigns show a return."
      },
      {
        question: "What's the difference between Search and Display?",
        answer: "Search ads appear when people search for your keywords. Display ads show on websites across Google's network. We typically recommend starting with Search for direct response."
      },
      {
        question: "How do you measure success?",
        answer: "We track clicks, conversions, cost per conversion, and ROI. Success means achieving your business goals at an acceptable cost per acquisition."
      },
      {
        question: "Can you beat my competitors?",
        answer: "We use competitive intelligence and optimization techniques to improve your ad position while maintaining profitable economics."
      },
      {
        question: "Do I need a landing page?",
        answer: "For best results, yes. We can provide recommendations or work with your existing pages to improve conversion rates."
      }
    ]
  },
  "website-development": {
    title: "Website Development",
    tagline: "Fast, Beautiful, Conversion-Optimized Websites",
    metaDescription: "Custom website design for clinics and medical tourism businesses. Fast, mobile-ready, SEO-optimized sites built to convert visitors into booked patients.",
    what: "We build modern, responsive websites that look stunning and convert visitors into customers. Using the latest technologies and best practices, we create fast-loading, mobile-friendly websites optimized for search engines and user experience. From simple landing pages to complex multi-page sites.",
    why: "Your website is often the first impression customers have of your business. A slow, outdated, or confusing website drives customers away. Our conversion-focused approach ensures your website not only looks professional but actually drives business results.",
    benefits: [
      "Professional, modern design",
      "Mobile-responsive on all devices",
      "Fast loading speed (< 3 seconds)",
      "SEO-optimized structure",
      "Conversion-focused layout",
      "Easy content management",
      "Security and SSL included",
      "Analytics integration"
    ],
    deliverables: [
      "Custom website design mockups",
      "Responsive development",
      "Content management system",
      "Contact forms",
      "Google Analytics setup",
      "SEO optimization",
      "SSL certificate",
      "One month of updates",
      "Training documentation",
      "Source code and assets"
    ],
    process: [
      { title: "Discovery", description: "Understand your business, goals, and target audience" },
      { title: "Design", description: "Create custom mockups and get your approval" },
      { title: "Development", description: "Build your website with clean, modern code" },
      { title: "Content", description: "Add all content, images, and copy" },
      { title: "Testing", description: "Test on all devices and browsers for quality" },
      { title: "Launch", description: "Deploy your website and provide training" }
    ],
    faqs: [
      {
        question: "How long does it take?",
        answer: "Landing pages take 2 weeks, business sites 4-6 weeks, and custom projects vary based on complexity."
      },
      {
        question: "Can I update the website myself?",
        answer: "Yes, we include a user-friendly content management system and provide training so you can make updates easily."
      },
      {
        question: "Is hosting included?",
        answer: "Hosting is separate but we can recommend reliable providers or manage hosting for you at an additional cost."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All websites are fully responsive and optimized for mobile devices."
      },
      {
        question: "What if I need changes after launch?",
        answer: "All packages include post-launch support. Additional changes can be made at our standard hourly rate or through a maintenance package."
      }
    ]
  },
  "seo": {
    title: "SEO Services",
    tagline: "Rank Higher & Drive Organic Traffic",
    metaDescription: "SEO services for medical tourism clinics and businesses. Technical SEO, content strategy, and link building to rank higher and drive organic leads.",
    what: "Comprehensive search engine optimization services to improve your website's visibility in Google and other search engines. We handle technical SEO, on-page optimization, content strategy, link building, and local SEO to help you rank higher for valuable keywords.",
    why: "Most people never look past the first page of search results. If you're not ranking there, most potential customers won't find you. Our SEO work is aimed at improving your rankings, bringing in qualified organic traffic, and reducing your dependence on paid advertising.",
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Better quality leads",
      "Reduced advertising costs",
      "Improved website authority",
      "Long-term sustainable results",
      "Competitive advantage",
      "Better user experience"
    ],
    deliverables: [
      "Comprehensive SEO audit",
      "Keyword research and strategy",
      "Technical SEO fixes",
      "On-page optimization",
      "Content optimization",
      "Link building campaign",
      "Local SEO (if applicable)",
      "Monthly ranking reports",
      "Traffic and conversion analytics",
      "Ongoing optimization"
    ],
    process: [
      { title: "Audit", description: "Analyze your current SEO performance and identify opportunities" },
      { title: "Strategy", description: "Develop a customized SEO strategy for your business" },
      { title: "Technical SEO", description: "Fix technical issues affecting your rankings" },
      { title: "On-Page", description: "Optimize pages, content, and metadata" },
      { title: "Link Building", description: "Build high-quality backlinks to increase authority" },
      { title: "Monitor & Refine", description: "Track rankings and continuously optimize" }
    ],
    faqs: [
      {
        question: "How long until I see results?",
        answer: "SEO is a long-term strategy. It usually takes a few months before changes show in rankings, and longer for competitive keywords. Timelines depend on your market and starting point."
      },
      {
        question: "Can you guarantee #1 rankings?",
        answer: "No ethical SEO company can guarantee specific rankings. We focus on improving your overall visibility and driving qualified traffic."
      },
      {
        question: "What's the difference between local and national SEO?",
        answer: "Local SEO targets customers in specific geographic areas. National SEO targets broader keywords across the country or internationally."
      },
      {
        question: "Do you create content?",
        answer: "Yes, SEO requires quality content. We can optimize your existing content or create new content as part of our strategy."
      },
      {
        question: "What if my rankings drop?",
        answer: "Rankings fluctuate naturally. We monitor continuously and respond quickly to any significant changes with strategy adjustments."
      }
    ]
  },
  "content-creation": {
    title: "Social Media Content Creation",
    tagline: "Engaging Content That Drives Results",
    metaDescription: "Professional social media content creation for clinics and businesses. Strategy, graphics, copywriting, and daily scheduling handled for you.",
    what: "Professional social media content creation and management services. We create compelling posts, graphics, videos, and stories for your social media channels. From strategy to creation to scheduling, we handle everything to keep your brand active and engaging online.",
    why: "Consistent, quality social media content is essential for building brand awareness and engaging customers. But creating content daily is time-consuming. Our team ensures your channels stay active with professional content that resonates with your audience and drives engagement.",
    benefits: [
      "Professional, branded content",
      "Consistent posting schedule",
      "Increased engagement",
      "Time savings",
      "Multi-platform management",
      "Hashtag research",
      "Community management",
      "Performance analytics"
    ],
    deliverables: [
      "Content strategy",
      "Monthly content calendar",
      "15-30 posts per month",
      "Custom graphics",
      "Copywriting",
      "Hashtag research",
      "Content scheduling",
      "Community management (optional)",
      "Monthly analytics reports",
      "Strategy adjustments"
    ],
    process: [
      { title: "Brand Analysis", description: "Understand your brand, audience, and goals" },
      { title: "Strategy Development", description: "Create content themes and posting schedule" },
      { title: "Content Creation", description: "Design graphics and write compelling copy" },
      { title: "Approval", description: "Review and approve content before scheduling" },
      { title: "Scheduling", description: "Schedule posts for optimal engagement times" },
      { title: "Management", description: "Monitor performance and engage with audience" }
    ],
    faqs: [
      {
        question: "What platforms do you manage?",
        answer: "We manage Instagram, Facebook, LinkedIn, Twitter/X, TikTok, and YouTube depending on your package."
      },
      {
        question: "Can I review content before posting?",
        answer: "Yes, we provide content calendars for your approval before scheduling anything."
      },
      {
        question: "Do you respond to comments?",
        answer: "Community management is included in Growth and Scale plans. We can add it to Starter for an additional fee."
      },
      {
        question: "What about video content?",
        answer: "Growth plans include simple video editing. Scale plans include professional video production."
      },
      {
        question: "How do you measure success?",
        answer: "We track engagement rate, follower growth, reach, and website clicks. Monthly reports show all key metrics."
      }
    ]
  },
  "branding": {
    title: "Branding & Identity",
    tagline: "Build a Memorable Brand That Stands Out",
    metaDescription: "Complete brand identity design for clinics and businesses. Logo, color palette, typography, and brand guidelines that build patient trust and stand out.",
    what: "Complete brand identity development services including logo design, color palette, typography, brand guidelines, and visual assets. We help you create a cohesive, professional brand that resonates with your target audience and differentiates you from competitors.",
    why: "Your brand is more than a logo - it's how customers perceive your business. A strong brand builds trust, commands premium pricing, and makes marketing more effective. Our strategic approach ensures your brand accurately reflects your values and appeals to your ideal customers.",
    benefits: [
      "Professional, memorable brand identity",
      "Stand out from competitors",
      "Build customer trust",
      "Consistent brand presence",
      "Premium positioning",
      "Marketing clarity",
      "Scalable visual system",
      "Brand guidelines for consistency"
    ],
    deliverables: [
      "Brand strategy session",
      "Logo design (3 concepts)",
      "Color palette",
      "Typography system",
      "Brand guidelines document",
      "Business card design",
      "Letterhead and email signature",
      "Social media templates",
      "Source files (AI, PNG, SVG)",
      "Usage guidelines"
    ],
    process: [
      { title: "Discovery", description: "Deep dive into your business, values, and target audience" },
      { title: "Research", description: "Analyze competitors and market positioning" },
      { title: "Concepts", description: "Create multiple logo and brand concepts" },
      { title: "Refinement", description: "Refine chosen concept based on feedback" },
      { title: "System Development", description: "Develop complete visual identity system" },
      { title: "Guidelines", description: "Create comprehensive brand guidelines" }
    ],
    faqs: [
      {
        question: "How long does branding take?",
        answer: "Starter package takes 2 weeks, Growth takes 4 weeks, and Scale takes 6 weeks from kickoff to final delivery."
      },
      {
        question: "What if I don't like the designs?",
        answer: "We include multiple revisions and work closely with you until you're completely satisfied with the result."
      },
      {
        question: "Do I own the brand files?",
        answer: "Yes, upon final payment you receive all source files and full ownership of your brand assets."
      },
      {
        question: "Can you refresh my existing brand?",
        answer: "Absolutely. We can modernize your existing brand while maintaining recognition, or create a completely new identity."
      },
      {
        question: "What about trademark?",
        answer: "We design unique logos and check basic availability, but trademark registration is separate and handled by legal professionals."
      }
    ]
  },
  "funnel-automation": {
    title: "Funnel Automation",
    tagline: "Convert More Visitors Into Customers",
    metaDescription: "Sales funnel automation for clinics and businesses. Landing pages, email sequences, and CRM workflows that turn visitors into paying patients automatically.",
    what: "Complete sales funnel development and automation. We build high-converting landing pages, email sequences, and automation workflows that guide prospects from first click to paying customer. Integration with CRM, email marketing, and payment systems included.",
    why: "Most website visitors leave without taking action, and many businesses have no follow-up system for the ones who do. Automated funnels make sure every lead is nurtured, educated, and guided toward purchase - even while you sleep.",
    benefits: [
      "A clear path from first click to purchase",
      "Automated follow-up sequences",
      "Lead nurturing on autopilot",
      "Better lead qualification",
      "Scalable sales process",
      "Detailed conversion tracking"
    ],
    deliverables: [
      "Funnel strategy and mapping",
      "Landing page design and development",
      "Email sequence copywriting (5-10 emails)",
      "Thank you and confirmation pages",
      "CRM integration",
      "Email marketing setup",
      "Payment integration",
      "Analytics and tracking",
      "A/B testing setup",
      "30 days optimization support"
    ],
    process: [
      { title: "Strategy", description: "Map out your customer journey and funnel stages" },
      { title: "Landing Pages", description: "Design and build high-converting landing pages" },
      { title: "Email Sequences", description: "Write persuasive email sequences for each stage" },
      { title: "Integration", description: "Connect CRM, email, payment, and other tools" },
      { title: "Testing", description: "Test entire funnel flow and fix any issues" },
      { title: "Optimize", description: "Launch and optimize based on conversion data" }
    ],
    faqs: [
      {
        question: "What platforms do you build funnels on?",
        answer: "We work with most major platforms including ClickFunnels, Unbounce, WordPress, and custom solutions depending on your needs."
      },
      {
        question: "Do you write the email copy?",
        answer: "Yes, all packages include professional email copywriting."
      },
      {
        question: "Can you integrate with my CRM?",
        answer: "Yes, we integrate with major CRMs including HubSpot, Salesforce, Pipedrive, and others."
      },
      {
        question: "How long until I see results?",
        answer: "The funnel starts collecting data as soon as it launches. We plan 30-60 days of optimisation as that data comes in. Results depend on your traffic and offer."
      },
      {
        question: "What if my funnel doesn't convert?",
        answer: "We include an optimisation period. We review the data with you, find where people drop off, and change pages and emails accordingly."
      }
    ]
  },
  "reputation-management": {
    title: "Reputation Management",
    tagline: "Monitor & Enhance Your Online Reputation",
    metaDescription: "Online reputation management for clinics and businesses. Monitor reviews, respond professionally, and build your ratings on Google, Facebook, and Trustpilot.",
    what: "Comprehensive online reputation monitoring and management. We track mentions of your brand across review sites, social media, and the web. Respond to reviews, address negative feedback, and build a positive online presence that attracts new customers.",
    why: "People read online reviews before they choose a business, and an unanswered negative review can put them off. Our reputation management is designed to make your online presence reflect the quality of your service.",
    benefits: [
      "Every review monitored and answered",
      "A steady flow of review requests to happy customers",
      "Quick response to negative feedback",
      "Increased customer trust",
      "Better search engine visibility",
      "Competitive advantage",
      "Crisis management preparedness",
      "Review generation system"
    ],
    deliverables: [
      "Reputation audit",
      "Review monitoring setup",
      "Review response templates",
      "Monthly review requests",
      "Negative review management",
      "Social media monitoring",
      "Monthly reputation reports",
      "Crisis management plan",
      "Review generation campaigns",
      "Ongoing optimization"
    ],
    process: [
      { title: "Audit", description: "Analyze your current online reputation across all platforms" },
      { title: "Strategy", description: "Develop plan to improve ratings and generate reviews" },
      { title: "Monitoring", description: "Set up automated monitoring of all review sites" },
      { title: "Response", description: "Respond professionally to all reviews" },
      { title: "Generation", description: "Implement system to generate new positive reviews" },
      { title: "Maintenance", description: "Ongoing monitoring and reputation building" }
    ],
    faqs: [
      {
        question: "Can you remove negative reviews?",
        answer: "We can't remove legitimate reviews, but we can help address concerns, respond professionally, and in some cases request removal of fake or policy-violating reviews."
      },
      {
        question: "How do you generate positive reviews?",
        answer: "We implement automated email and SMS campaigns asking satisfied customers to leave reviews. We make it easy with direct links and follow-up reminders."
      },
      {
        question: "What platforms do you monitor?",
        answer: "Google, Facebook, Yelp, TripAdvisor, Trustpilot, and industry-specific review sites relevant to your business."
      },
      {
        question: "Do you respond to reviews?",
        answer: "Yes, we respond to all reviews (positive and negative) with professional, branded responses."
      },
      {
        question: "How long until my rating improves?",
        answer: "It varies. Ratings move as new reviews come in, so it depends on how many customers you serve and how many respond to review requests."
      }
    ]
  },
  "shopify-ecommerce-automation": {
    title: "Shopify & eCommerce Automation",
    tagline: "Find Winning Products, Automate Operations, Scale Revenue",
    metaDescription: "Shopify and eCommerce automation that finds winning products, manages inventory, automates pricing, and recovers abandoned carts — all on autopilot.",
    what: "We build end-to-end AI automation systems for Shopify and eCommerce stores — from finding profitable products before your competitors do, to running inventory, pricing, email flows, and fulfillment on autopilot. Whether you're launching a new store or scaling an existing one, we turn your eCommerce operation into a machine that runs itself.",
    why: "Many eCommerce store owners spend most of their time on tasks a machine could do — restocking inventory, writing product descriptions, chasing abandoned carts, monitoring competitor prices. Our automation systems are built to take those tasks over, giving you back your time while your store keeps running around the clock.",
    benefits: [
      "AI product research that surfaces trending products early",
      "Inventory auto-managed: reorders triggered before you run out",
      "Dynamic pricing adjusts in real-time based on competitor data",
      "Abandoned cart flows follow up with shoppers automatically",
      "Bulk AI-written product descriptions — 100 products in hours, not weeks",
      "Supplier sourcing automation with margin analysis built in",
      "Order routing and fulfillment handled without manual input",
      "Weekly revenue dashboards delivered straight to your inbox"
    ],
    deliverables: [
      "AI product research system (trend + competition + margin analysis)",
      "Shopify store audit & conversion rate optimization",
      "Inventory management automation with reorder rules",
      "Dynamic pricing engine with competitor tracking",
      "Abandoned cart & post-purchase email/SMS flows",
      "Bulk AI product description generator",
      "Supplier sourcing workflow with profit margin calculator",
      "Order fulfillment & dropshipping automation",
      "Customer review collection automation",
      "Weekly revenue & performance dashboard"
    ],
    process: [
      { title: "Store Audit", description: "We audit your current store, identify revenue leaks, and map the highest-impact automation opportunities" },
      { title: "Product Research Setup", description: "Deploy AI tools to scan trending products across TikTok, Amazon, AliExpress, and competitor stores daily" },
      { title: "Automation Build", description: "Set up inventory rules, pricing engine, email flows, and order routing tailored to your business" },
      { title: "AI Content Engine", description: "Generate SEO-optimized product titles, descriptions, and meta tags for your entire catalog" },
      { title: "Launch & Test", description: "Go live with all automations running, test edge cases, and monitor closely for 2 weeks" },
      { title: "Scale", description: "Monthly performance reviews, add new automations as you grow, optimize ad feeds and product mix" }
    ],
    faqs: [
      {
        question: "Does this work for dropshipping stores?",
        answer: "Yes — dropshipping stores are a good fit for our product research and order routing automations. We connect directly to your suppliers and automate the full fulfillment chain."
      },
      {
        question: "How does the AI find winning products?",
        answer: "We use AI to monitor trending hashtags, TikTok ads, Amazon bestseller movements, AliExpress order volumes, and competitor store updates daily. Products with rising demand and low competition are surfaced to you with margin analysis included."
      },
      {
        question: "What platforms do you support?",
        answer: "We work mainly with Shopify and Shopify Plus, and also with WooCommerce and custom stores."
      },
      {
        question: "Can you help with existing stores or only new ones?",
        answer: "Both. For existing stores, we audit what's working, fix conversion killers, and layer automations on top. For new stores, we build the right foundation from day one."
      },
      {
        question: "How long before I see results?",
        answer: "Abandoned cart flows and email sequences start running as soon as they go live. Product research and pricing automation take longer to show an effect. Results depend on your traffic, products, and margins."
      },
      {
        question: "Do I need to know how to code?",
        answer: "No. We handle all the technical setup. You get a dashboard and weekly reports — no code, no complicated tools to manage yourself."
      }
    ]
  }
};
