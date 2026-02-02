import { useMemo, useState } from "react";
import events from "../data/events.json";

const tabs = [
  { key: "adults", label: "Adults only" },
  { key: "families", label: "Families" },
  { key: "children", label: "Children" }
];

export default function Events() {
  const [active, setActive] = useState("families");
  const filtered = useMemo(() => events.filter((e) => e.audience === active), [active]);

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Events</h2>

      <div className="card p-2 flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={
              "flex-1 rounded-xl px-3 py-2 text-sm " +
              (active === t.key
                ? "bg-[color:var(--color-brand)] text-white"
                : "bg-zinc-100 dark:bg-zinc-800")
            }
            aria-pressed={active === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 [@media(orientation:landscape)]:grid-cols-2">
        {filtered.map((e) => (
          <div key={e.id} className="card">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{e.date}</p>
            <p className="mt-2 text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}