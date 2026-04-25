interface ServiceData {
  title: string;
  tagline: string;
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
    what: "Our WhatsApp AI Agent is a sophisticated automation system that handles incoming messages on WhatsApp 24/7. It uses advanced AI to understand customer inquiries, qualify leads, evaluate photos with Vision AI, transcribe voice messages, and automatically book consultations. The system integrates with your calendar, CRM, and provides real-time dashboards for monitoring performance.",
    why: "In the medical tourism and service industries, speed is everything. Studies show that leads contacted within 5 minutes are 21x more likely to convert. Our AI agent ensures you never miss a lead, responds instantly in multiple languages, and books consultations automatically - even when your team is asleep. This means more conversions, better customer experience, and significant cost savings.",
    benefits: [
      "Never miss a lead - 100% response rate 24/7",
      "Instant replies in multiple languages",
      "AI-powered photo evaluation for medical cases",
      "Automatic lead qualification and scoring",
      "Direct calendar booking without human intervention",
      "Reduced staff workload by 70%",
      "Increased conversion rates by 40-60%",
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
      { title: "Testing", description: "Comprehensive testing with real scenarios to ensure perfect responses" },
      { title: "Launch & Monitor", description: "Go live with continuous monitoring and optimization for 30 days" },
      { title: "Ongoing Support", description: "Regular updates, performance reviews, and AI improvements" }
    ],
    faqs: [
      {
        question: "How long does setup take?",
        answer: "Typically 7-10 business days from contract signing to go-live, including AI training and testing."
      },
      {
        question: "What languages does the AI support?",
        answer: "The AI supports 50+ languages including English, Turkish, Arabic, Russian, German, and French. We can add custom languages as needed."
      },
      {
        question: "Can the AI handle complex medical questions?",
        answer: "The AI is trained on your specific services and can handle most common inquiries. For complex medical questions, it seamlessly escalates to your human team with full context."
      },
      {
        question: "How accurate is the photo evaluation?",
        answer: "Our Vision AI achieves 95%+ accuracy in evaluating common medical tourism cases (dental, hair transplant, cosmetic). It provides preliminary assessments and always recommends professional consultation."
      },
      {
        question: "What happens if the AI doesn't understand something?",
        answer: "The AI is designed to ask clarifying questions. If it still cannot help, it escalates to a human supervisor with complete conversation history and context."
      }
    ]
  },
  "seo-blog-generator": {
    title: "SEO Blog Generator AI",
    tagline: "Automated Content Creation & Publishing System",
    what: "Our SEO Blog Generator AI is an automated content marketing system that generates SEO-optimized blog posts based on your industry, keywords, and RSS feed sources. It handles everything from content generation to meta tag optimization, internal linking, scheduling, and publishing - all without manual intervention.",
    why: "Content marketing is essential for SEO but extremely time-consuming. Manual blog creation takes 4-6 hours per post. Our AI system generates 20-30 SEO-optimized posts monthly for the cost of one freelance writer, helping you dominate search rankings and drive organic traffic at scale.",
    benefits: [
      "20-30 SEO-optimized posts per month",
      "Save 80+ hours of content creation time",
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
    what: "AI Operations Autopilot is an end-to-end internal automation system that handles the repetitive work that drains your team's time every day. From automatically sending invoice emails and payment reminders to managing HR onboarding checklists, scheduling internal meetings, and flagging overdue tasks — the system coordinates your back-office operations around the clock. It integrates with your existing tools (email, Google Workspace, Notion, Slack, HR platforms) and acts as a tireless operations coordinator that never misses a deadline.",
    why: "The average team wastes 20+ hours per week on administrative tasks that follow a predictable pattern — chasing invoices, sending reminder emails, assigning recurring tasks, updating spreadsheets, and manually escalating overdue items. These tasks don't require judgment; they require consistency. Our AI handles all of it automatically, freeing your team to focus on work that actually moves the business forward. Clients typically recover 15-25 hours of staff time per week within the first month.",
    benefits: [
      "Automated invoice generation and payment reminder emails",
      "HR task automation — onboarding checklists, contract reminders, holiday tracking",
      "Internal task planning with AI-assigned priorities and deadlines",
      "Escalation workflows — overdue items automatically flagged to managers",
      "Recurring admin tasks handled on schedule without manual intervention",
      "Meeting scheduling and agenda preparation automation",
      "Weekly internal status reports generated and distributed automatically",
      "Save 15-25 hours of staff time per week"
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
        question: "How long until we see the time savings?",
        answer: "Most clients see meaningful time savings within the first week as invoice and reminder automations go live. Full automation of all workflows typically takes 3-4 weeks."
      },
      {
        question: "Can the AI handle different departments — finance, HR, and operations?",
        answer: "Yes. We build department-specific workflows. Finance gets invoice and payment automation, HR gets onboarding and compliance reminders, and operations gets task coordination and escalation workflows — all running in parallel."
      }
    ]
  },
  "meta-ads": {
    title: "Meta Ads Management",
    tagline: "Expert Facebook & Instagram Advertising",
    what: "Professional management of your Facebook and Instagram advertising campaigns. We handle everything from strategy and creative to targeting, optimization, and reporting. Our team uses advanced techniques and AI tools to maximize your return on ad spend.",
    why: "Meta's advertising platform is powerful but complex. Without expertise, businesses waste 30-50% of their ad budget. Our proven strategies and continuous optimization ensure every dollar works harder, delivering qualified leads at the lowest possible cost.",
    benefits: [
      "Lower cost per lead by 30-50%",
      "Professional ad creative and copywriting",
      "Advanced targeting and audience research",
      "A/B testing and optimization",
      "Detailed performance reporting",
      "Retargeting campaigns",
      "Lead generation funnels",
      "Dedicated account manager"
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
        answer: "We recommend a minimum of $500/month in ad spend to have enough data for optimization. This is separate from our management fee."
      },
      {
        question: "How long until I see results?",
        answer: "Most clients see initial results within 2-4 weeks. Full optimization typically takes 2-3 months as we gather data and refine campaigns."
      },
      {
        question: "Do you create ad visuals?",
        answer: "Yes, all plans include professionally designed ad creatives. Elite plans also include video ad production."
      },
      {
        question: "Can you target international audiences?",
        answer: "Absolutely. We specialize in international targeting, particularly for medical tourism and real estate."
      },
      {
        question: "What if the ads don't perform?",
        answer: "We continuously test and optimize. If campaigns underperform, we revise strategy, creative, and targeting until we achieve your goals."
      }
    ]
  },
  "google-ads": {
    title: "Google Ads Management",
    tagline: "Search & Display Advertising That Converts",
    what: "Professional Google Ads management including Search, Display, and YouTube advertising. We create data-driven campaigns that put your business in front of customers actively searching for your services. From keyword research to ad creation and optimization, we handle everything.",
    why: "Google processes 8.5 billion searches per day. Your potential customers are searching right now. Without expert Google Ads management, you're leaving money on the table. Our certified specialists ensure you appear at the top of search results for high-intent keywords that drive conversions.",
    benefits: [
      "Immediate visibility in Google search results",
      "Pay only for clicks from interested prospects",
      "Advanced keyword targeting",
      "Geographic and demographic targeting",
      "Retargeting across Google network",
      "Detailed conversion tracking",
      "Lower cost per acquisition",
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
        answer: "It depends on your industry and goals. We typically recommend starting with $1,000-2,000/month and scaling up as we prove ROI."
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
    what: "Comprehensive search engine optimization services to improve your website's visibility in Google and other search engines. We handle technical SEO, on-page optimization, content strategy, link building, and local SEO to help you rank higher for valuable keywords.",
    why: "75% of users never scroll past the first page of search results. If you're not ranking on page one, you're invisible to most potential customers. Our proven SEO strategies help you climb the rankings, drive qualified organic traffic, and reduce your dependence on paid advertising.",
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
        answer: "SEO is a long-term strategy. Most clients see initial improvements in 2-3 months, with significant results in 6-12 months."
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
        answer: "Community management is included in Growth and Elite plans. We can add it to Starter for an additional fee."
      },
      {
        question: "What about video content?",
        answer: "Growth plans include simple video editing. Elite plans include professional video production."
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
        answer: "Essentials package takes 2 weeks, Complete takes 4 weeks, and Premium takes 6 weeks from kickoff to final delivery."
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
    what: "Complete sales funnel development and automation. We build high-converting landing pages, email sequences, and automation workflows that guide prospects from first click to paying customer. Integration with CRM, email marketing, and payment systems included.",
    why: "Most businesses lose 90% of website visitors because they lack proper follow-up systems. Automated funnels ensure every lead is nurtured, educated, and guided toward purchase - even while you sleep. This dramatically increases conversion rates and revenue per visitor.",
    benefits: [
      "Higher conversion rates",
      "Automated follow-up sequences",
      "Lead nurturing on autopilot",
      "Reduced sales cycle time",
      "Better lead qualification",
      "Increased revenue per visitor",
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
        answer: "Yes, all packages include professional email copywriting based on proven conversion formulas."
      },
      {
        question: "Can you integrate with my CRM?",
        answer: "Yes, we integrate with major CRMs including HubSpot, Salesforce, Pipedrive, and others."
      },
      {
        question: "How long until I see results?",
        answer: "You'll see initial results immediately after launch. Full optimization typically takes 30-60 days as we gather data and refine."
      },
      {
        question: "What if my funnel doesn't convert?",
        answer: "We include optimization periods and use proven conversion principles. We'll work with you to improve performance until goals are met."
      }
    ]
  },
  "reputation-management": {
    title: "Reputation Management",
    tagline: "Monitor & Enhance Your Online Reputation",
    what: "Comprehensive online reputation monitoring and management. We track mentions of your brand across review sites, social media, and the web. Respond to reviews, address negative feedback, and build a positive online presence that attracts new customers.",
    why: "88% of consumers trust online reviews as much as personal recommendations. A single negative review can cost you dozens of customers. Our proactive reputation management ensures your online presence accurately reflects the quality of your service.",
    benefits: [
      "Improved online ratings",
      "More positive reviews",
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
        answer: "Results vary, but most clients see rating improvements within 2-3 months as new positive reviews accumulate."
      }
    ]
  },
  "shopify-ecommerce-automation": {
    title: "Shopify & eCommerce Automation",
    tagline: "Find Winning Products, Automate Operations, Scale Revenue",
    what: "We build end-to-end AI automation systems for Shopify and eCommerce stores — from finding profitable products before your competitors do, to running inventory, pricing, email flows, and fulfillment on autopilot. Whether you're launching a new store or scaling an existing one, we turn your eCommerce operation into a machine that runs itself.",
    why: "Most eCommerce store owners spend 80% of their time on tasks a machine could do — restocking inventory, writing product descriptions, chasing abandoned carts, monitoring competitor prices. Our automation systems eliminate all of that, giving you back your time while your store generates revenue around the clock. Stores we automate typically see 2-4× revenue growth within 90 days.",
    benefits: [
      "AI finds winning products before they go viral — first-mover advantage",
      "Inventory auto-managed: reorders triggered before you run out",
      "Dynamic pricing adjusts in real-time based on competitor data",
      "Abandoned cart flows recover 15-25% of lost revenue automatically",
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
        answer: "Yes — dropshipping stores benefit most from our product research and order routing automations. We connect directly to your suppliers and automate the full fulfillment chain."
      },
      {
        question: "How does the AI find winning products?",
        answer: "We use AI to monitor trending hashtags, TikTok ads, Amazon bestseller movements, AliExpress order volumes, and competitor store updates daily. Products with rising demand and low competition are surfaced to you with margin analysis included."
      },
      {
        question: "What platforms do you support?",
        answer: "We specialize in Shopify and Shopify Plus, but also work with WooCommerce and custom stores. Shopify is our strongest integration."
      },
      {
        question: "Can you help with existing stores or only new ones?",
        answer: "Both. For existing stores, we audit what's working, fix conversion killers, and layer automations on top. For new stores, we build the right foundation from day one."
      },
      {
        question: "How long before I see results?",
        answer: "Abandoned cart flows and email sequences start recovering revenue within the first week. Product research and pricing automation compound over time — most stores see meaningful revenue uplift within 30-60 days."
      },
      {
        question: "Do I need to know how to code?",
        answer: "No. We handle all the technical setup. You get a dashboard and weekly reports — no code, no complicated tools to manage yourself."
      }
    ]
  }
};
