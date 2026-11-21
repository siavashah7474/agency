// Blog data. The list of posts (title, date, excerpt…) is in ./blog/index.ts and ships with
// the blog pages; each article body is its own file in ./blog/posts/ and is downloaded only
// when that article is opened.
import { blogPosts, type BlogPost } from "./blog/index";

export { blogPosts, type BlogPost };

/** Blog posts sorted newest first (dates are strings like "Oct 30, 2025"). */
export const sortedBlogPosts: BlogPost[] = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const bodyLoaders = import.meta.glob<string>("./blog/posts/*.ts", { import: "default" });
const bodies = new Map<string, string>();
const pending = new Map<string, Promise<string>>();

/** The article body if it has already been downloaded. */
export const getPostBody = (slug: string): string | undefined => bodies.get(slug);

/** Downloads one article body (once). Rejects if the post has no body file. */
export function loadPostBody(slug: string): Promise<string> {
  const ready = bodies.get(slug);
  if (ready !== undefined) return Promise.resolve(ready);
  let job = pending.get(slug);
  if (!job) {
    const load = bodyLoaders[`./blog/posts/${slug}.ts`];
    job = load
      ? load().then((body) => {
          bodies.set(slug, body);
          return body;
        })
      : Promise.reject(new Error(`No article body for "${slug}"`));
    pending.set(slug, job);
  }
  return job;
}
