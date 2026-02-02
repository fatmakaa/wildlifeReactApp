import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import ActionCard from "../ui/ActionCard";

export default function Home() {
  return (
    <section className="space-y-4">
      {/* HERO VIDEO */}
      <div className="card p-0 overflow-hidden">
        <div className="relative">
          <video
            className="w-full h-60 [@media(orientation:landscape)]:h-80 object-cover"
            src="/videos/centre-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Short hero video showing the Wildlife Centre"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between px-4 py-6 bg-black/50 text-white">
            {/* TOP TEXT */}
            <div className="text-center mt-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Jacob Wildlife Centre
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Rescue • Rehabilitate • Protect British wildlife
              </p>
            </div>

            {/* BOTTOM CTA */}
            <div className="flex justify-center mb-6">
              <Link
                to="/events"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium bg-white text-zinc-900 hover:bg-zinc-100 transition"
              >
                View events
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* OUR MISSION */}
      <div className="card">
        <SectionTitle
          title="Our Mission"
          subtitle="Practical conservation and community education."
        />

        <ul className="mt-3 space-y-2 text-sm">
          <li>
            • We support rescued animals through rehabilitation and responsible
            release.
          </li>
          <li>
            • We promote wildlife-friendly habits that protect local habitats.
          </li>
          <li>
            • We run events for adults, families, and children to raise awareness.
          </li>
        </ul>

        {/* SUBSCRIBE CTA */}
        <div className="mt-5 flex justify-center">
          <Link
            to="/subscribe"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-[color:var(--color-brand)] border border-[color:var(--color-brand)] hover:bg-[color:var(--color-brand)] hover:text-white transition"
          >
            Subscribe & get a voucher <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* ACTION CARDS */}
      <div className="grid gap-3 [@media(orientation:landscape)]:grid-cols-2">
        <ActionCard
          title="British animals at the centre"
          text="Explore species we support and learn how to help wildlife safely."
          to="/animals"
          cta="Browse animals"
        />
        <ActionCard
          title="Events for everyone"
          text="Adults-only talks, family trails, and children’s workshops."
          to="/events"
          cta="See event categories"
        />
      </div>

      {/* CONSERVATION EFFORTS */}
      <div className="card">
        <SectionTitle
          title="Conservation efforts"
          subtitle="Small actions from many people make a big difference."
        />

        <div className="mt-3 grid gap-3 [@media(orientation:landscape)]:grid-cols-2">
          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-3">
            <h3 className="font-semibold">Habitat protection</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
              Supporting local habitat care and encouraging wildlife-friendly
              gardens.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 p-3">
            <h3 className="font-semibold">Rescue guidance</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
              Clear public advice: when to intervene, who to call, and what to
              avoid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}