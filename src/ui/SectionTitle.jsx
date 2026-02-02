export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      )}
    </div>
  );
}