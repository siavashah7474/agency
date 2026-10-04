// True while scripts/prerender.mjs captures static HTML snapshots of each page.
export const isPrerendering =
  typeof window !== "undefined" && Boolean((window as unknown as { __PRERENDER__?: boolean }).__PRERENDER__);
