import { useRoute, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ArrowRight, MessageSquare, Phone } from "lucide-react";
const WHATSAPP_LINK = "https://wa.me/31628753175";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  const post = blogPosts.find(p => p.slug === slug);
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Medical Tourism Marketing Blog`}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, medical tourism marketing, lead generation, clinic marketing, ${post.category.toLowerCase()} tips, medical tourism blog, healthcare marketing, Turkey medical tourism, clinic lead generation, patient acquisition, medical tourism strategies`}
        canonicalUrl={`https://webimotagency.com/blog/${post.slug}`}
        ogType="article"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          <section className="relative py-16 md:py-24 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-none">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-white/80 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="text-sm text-white/80 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <p className="text-lg text-white/90">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-12">
                <article className="lg:col-span-2">
                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert
                      prose-headings:font-bold prose-headings:text-foreground
                      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                      prose-p:text-muted-foreground prose-p:leading-relaxed
                      prose-li:text-muted-foreground
                      prose-strong:text-foreground
                      prose-ul:my-4 prose-ol:my-4
                      prose-table:my-6
                      prose-th:bg-muted prose-th:p-3 prose-th:text-left
                      prose-td:p-3 prose-td:border-b"
                    dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                  />
                  
                  <div className="mt-12 pt-8 border-t">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                      {prevPost ? (
                        <Link href={`/blog/${prevPost.slug}`} className="flex-1">
                          <Button variant="outline" className="w-full justify-start gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="truncate">{prevPost.title}</span>
                          </Button>
                        </Link>
                      ) : <div className="flex-1" />}
                      {nextPost && (
                        <Link href={`/blog/${nextPost.slug}`} className="flex-1">
                          <Button variant="outline" className="w-full justify-end gap-2">
                            <span className="truncate">{nextPost.title}</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>

                <aside className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-2">Need Expert Help?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Every business is unique. Book a free strategy call to discuss what's best for your specific situation.
                        </p>
                        <Link href="/book-consultation">
                          <Button data-testid="button-blog-cta" className="w-full mb-3">
                            <Phone className="mr-2 h-4 w-4" />
                            Book Free Strategy Call
                          </Button>
                        </Link>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button data-testid="button-blog-whatsapp" variant="outline" className="w-full">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Chat on WhatsApp
                          </Button>
                        </a>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                        <div className="space-y-4">
                          {blogPosts
                            .filter(p => p.slug !== slug && p.category === post.category)
                            .slice(0, 3)
                            .map((relatedPost) => (
                              <Link 
                                key={relatedPost.slug} 
                                href={`/blog/${relatedPost.slug}`}
                                className="block group"
                              >
                                <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                  {relatedPost.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                              </Link>
                            ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-bold text-lg mb-4">Categories</h3>
                        <div className="flex flex-wrap gap-2">
                          {Array.from(new Set(blogPosts.map(p => p.category))).map((category) => (
                            <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary/10">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="relative py-16 md:py-24 bg-[#020817] overflow-hidden">
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Don't guess what works. Book a free 20-minute strategy call and get expert advice tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-consultation">
                  <Button
                    data-testid="button-blog-footer-cta"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Book Your Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    data-testid="button-blog-footer-whatsapp"
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function formatContent(content: string): string {
  return content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) {
        return `<h2>${escapeHtml(line.slice(3))}</h2>`;
      }
      if (line.startsWith('### ')) {
        return `<h3>${escapeHtml(line.slice(4))}</h3>`;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return `<p><strong>${escapeHtml(line.slice(2, -2))}</strong></p>`;
      }
      if (line.startsWith('- ')) {
        return `<li>${formatInlineMarkdown(escapeHtml(line.slice(2)))}</li>`;
      }
      if (line.startsWith('| ')) {
        return escapeHtml(line);
      }
      if (line.trim() === '') {
        return '';
      }
      return `<p>${formatInlineMarkdown(escapeHtml(line))}</p>`;
    })
    .join('\n')
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
}

function formatInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
