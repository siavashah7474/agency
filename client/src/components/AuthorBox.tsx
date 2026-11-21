import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

// Author box shown at the end of every blog post. The blog is English only, and every
// post is written by the founder, so the text is fixed here.
export default function AuthorBox() {
  return (
    <aside className="surface-card mt-12 flex flex-col gap-5 p-6 sm:flex-row sm:items-start" aria-label="About the author" data-testid="author-box">
      <img
        src="/sia-ahmadi-480.webp"
        alt="Sia Ahmadi, founder of Webimot Agency"
        width={1200}
        height={1600}
        loading="lazy"
        decoding="async"
        className="h-20 w-20 flex-shrink-0 rounded-full border border-slate-200 object-cover object-top"
      />
      <div className="min-w-0">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Written by</p>
        <p className="mt-1 text-lg font-bold text-slate-900">
          <Link href="/sia-ahmadi" className="hover:text-primary">Sia Ahmadi</Link>
        </p>
        <p className="mt-0.5 text-sm font-medium text-primary">
          Entrepreneur · Business developer · AI automation specialist · Digital transformation consultant
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Sia founded Webimot in January 2025 and does the client work himself, from sales funnels and ads to AI agents.
          Since 2021 he has worked in sales and marketing for clinics in Istanbul that treat international patients.
        </p>
        <Link
          href="/sia-ahmadi"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          data-testid="link-author-profile"
        >
          See Sia's full profile
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
