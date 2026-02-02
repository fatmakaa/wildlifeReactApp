import { NavLink } from "react-router-dom";
import BottomNav from "../ui/BottomNav";
import ThemeToggle from "../ui/ThemeToggle";

function TopNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "text-sm font-medium transition " +
        (isActive
          ? "text-[color:var(--color-brand)]"
          : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white")
      }
    >
      {label}
    </NavLink>
  );
}

export default function AppLayout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-4">

          {/* LOGO + TITLE */}
          <div className="flex items-center gap-3">
            <img
              src="/icons/icon-192.png"
              alt="Jacob Wildlife Centre logo"
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-base font-semibold">
                Jacob Wildlife Centre
              </h1>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Rescue • Rehabilitate • Protect
              </p>
            </div>
          </div>

          {/* TOP NAV (hidden on very small screens) */}
       <nav className="ml-auto mr-6 hidden sm:flex items-center gap-6">            <TopNavLink to="/" label="Home" />
            <TopNavLink to="/animals" label="Animals" />
            <TopNavLink to="/events" label="Events" />
            <TopNavLink to="/subscribe" label="Subscribe" />
          </nav>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 mx-auto max-w-5xl px-4 pt-4 pb-24">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-950 pb-20">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center space-y-2">
          <p className="text-sm font-medium">Jacob Wildlife Centre</p>
          <p className="text-xs text-zinc-600 dark:text-zinc-300">
            Supporting British wildlife through rescue, rehabilitation and education.
          </p>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Jacob Wildlife Centre · Educational project
          </p>
        </div>
      </footer>

      {/* BOTTOM NAV (mobile primary navigation) */}
      <BottomNav />
    </div>
  );
}