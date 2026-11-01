import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({ name, role, company, content, rating = 5 }: TestimonialCardProps) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <Card className="h-full min-w-0">
      <CardContent className="flex h-full flex-col p-6 md:p-7">
        <div className="mb-4 flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mb-6 flex-1 text-base leading-relaxed text-slate-700">
          <p>&ldquo;{content}&rdquo;</p>
        </blockquote>
        <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-900">{name}</div>
            <div className="truncate text-sm text-slate-600">{role}, {company}</div>
          </div>
        </figcaption>
      </CardContent>
    </Card>
  );
}
