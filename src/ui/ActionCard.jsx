import { Link } from "react-router-dom";

export default function ActionCard({ title, text, to, cta }) {
  return (
    <Link to={to} className="card block hover:shadow-md transition">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">{text}</p>
      <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand)]">
        {cta} <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}