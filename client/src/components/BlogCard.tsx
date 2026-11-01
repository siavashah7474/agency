import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  readTime?: string;
}

export default function BlogCard({ title, excerpt, category, date, slug, readTime }: BlogCardProps) {
  return (
    <Card className="surface-card-interactive flex h-full flex-col border-card-border">
      <CardHeader className="flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <Badge variant="secondary">{category}</Badge>
          <span className="flex items-center gap-1 text-xs text-slate-600">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">Published </span>{date}
          </span>
          {readTime && (
            <span className="flex items-center gap-1 text-xs text-slate-600">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {readTime}
            </span>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-xl leading-snug text-slate-900">
          <Link href={`/blog/${slug}`} className="rounded-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3 text-sm leading-relaxed text-slate-600">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link
          href={`/blog/${slug}`}
          data-testid={`button-read-${slug}`}
          className={buttonVariants({ variant: "outline", className: "w-full" })}
          aria-label={`Read more: ${title}`}
        >
          Read More
        </Link>
      </CardContent>
    </Card>
  );
}
