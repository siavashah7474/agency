import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const VIDEO_ID = "qWQpi0v1s0o";

export interface DemoVideoTexts {
  posterText: string;
  playLabel: string;
  closeLabel: string;
  iframeTitle: string;
  regionLabel: string;
}

// Click-to-play demo video. Nothing loads from YouTube until the visitor presses play;
// the poster is a styled gradient, not the YouTube thumbnail.
export default function DemoVideo({ texts }: { texts: DemoVideoTexts }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);
  const wasOpened = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpened.current = true;
      closeRef.current?.focus();
    } else if (wasOpened.current) {
      playRef.current?.focus();
    }
  }, [open]);

  return (
    <div
      role="region"
      aria-label={texts.regionLabel}
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg"
      onKeyDown={(e) => {
        if (open && e.key === "Escape") setOpen(false);
      }}
    >
      {open ? (
        <>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title={texts.iframeTitle}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label={texts.closeLabel}
            className="absolute end-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </>
      ) : (
        <button
          ref={playRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={texts.playLabel}
          className="group relative flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-[#0b1f3a] to-blue-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-secondary"
        >
          <span className="absolute inset-0 neural-grid pointer-events-none" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <span className="relative z-10 text-center">
            <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-transform group-hover:scale-105 md:h-20 md:w-20" aria-hidden="true">
              <Play className="ml-1 h-7 w-7 md:h-8 md:w-8" />
            </span>
            <span className="block px-4 text-sm font-semibold text-white md:text-base">{texts.posterText}</span>
          </span>
        </button>
      )}
    </div>
  );
}
