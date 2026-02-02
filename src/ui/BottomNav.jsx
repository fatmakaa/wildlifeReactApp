import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  "flex-1 text-center py-3 text-sm " +
  (isActive
    ? "text-[color:var(--color-brand)] font-semibold"
    : "text-zinc-600 dark:text-zinc-300");

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-200/70 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto max-w-3xl flex">
        <NavLink to="/" className={linkClass} aria-label="Home">
          Home
        </NavLink>
        <NavLink to="/animals" className={linkClass} aria-label="Animals">
          Animals
        </NavLink>
        <NavLink to="/events" className={linkClass} aria-label="Events">
          Events
        </NavLink>
        <NavLink to="/subscribe" className={linkClass} aria-label="Subscribe">
          Subscribe
        </NavLink>
      </div>
    </nav>
  );
}