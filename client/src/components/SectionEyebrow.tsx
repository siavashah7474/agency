export default function SectionEyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-secondary ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
      {children}
    </div>
  );
}
