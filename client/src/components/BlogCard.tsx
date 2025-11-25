import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <Card className="hover-elevate h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center flex-wrap gap-2 mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
          {readTime && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          )}
        </div>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link href={`/blog/${slug}`}>
          <Button data-testid={`button-read-${slug}`} variant="outline" className="w-full">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
