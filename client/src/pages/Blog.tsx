import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((post) => post.category)));
    return ["All", ...cats];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      <SEO
        title="Blog - Marketing & Automation Insights for Medical Tourism Clinics"
        description="Expert insights on AI automation, lead generation, website design, SEO, and digital marketing strategies for medical tourism clinics in Turkey. Learn how to grow your clinic with proven marketing tactics."
        keywords="medical tourism marketing blog, lead generation tips, clinic marketing strategies, AI automation blog, website design tips, SEO blog, digital marketing blog, medical tourism SEO, clinic lead generation tips, healthcare marketing blog, Turkey medical tourism blog, AI agent blog, blog generator, patient acquisition strategies, medical tourism content marketing"
        canonicalUrl="https://webimotagency.com/blog"
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main id="main-content" className="flex-1">
          <section className="relative py-20 md:py-32 overflow-hidden bg-[#020817]">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />
            <div className="absolute inset-0 neural-grid pointer-events-none" />
            <div className="container mx-auto px-6 text-center text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <FileText className="h-4 w-4" />
                Insights & Tips
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Blog
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Insights on AI automation, digital marketing, and growing your
                business
              </p>
            </div>
          </section>

          <section className="py-8 border-b">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2">
                  Filter by:
                </span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    data-testid={`button-category-${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {category}
                    {category !== "All" && (
                      <span className="ml-1 text-xs opacity-70">
                        (
                        {
                          blogPosts.filter((p) => p.category === category)
                            .length
                        }
                        )
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No posts found in this category.
                  </p>
                </div>
              ) : (
                <>
                  {featuredPost && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-6">
                        {selectedCategory === "All"
                          ? "Featured Post"
                          : `${selectedCategory} Articles`}
                      </h2>
                      <div className="max-w-4xl">
                        <BlogCard {...featuredPost} />
                      </div>
                    </div>
                  )}

                  {otherPosts.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">
                        {selectedCategory === "All"
                          ? "Latest Articles"
                          : "More Articles"}
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.map((post, index) => (
                          <BlogCard key={post.slug} {...post} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
