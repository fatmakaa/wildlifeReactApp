import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import animals from "../data/animals.json";
import { fetchWikiSummary } from "../api/wiki";

export default function AnimalDetail() {
  const { id } = useParams();

  const animal = useMemo(() => animals.find((a) => a.id === id), [id]);

  const [wiki, setWiki] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    setErr("");
    setWiki(null);

    if (!animal) return;

    // Works with both formats:
    // - if you have wikiTitle in JSON, it uses it
    // - otherwise generates from name: "Red Fox" -> "Red_Fox"
    const wikiTitle = (animal.wikiTitle || animal.name || "").trim().replaceAll(" ", "_");

    fetchWikiSummary(wikiTitle)
      .then((data) => {
        if (alive) setWiki(data);
      })
      .catch(() => {
        if (alive) setErr("Could not load live info right now.");
      });

    return () => {
      alive = false;
    };
  }, [animal]);

  if (!animal) {
    return (
      <div className="space-y-3">
        <div className="card">
          <p className="text-sm">Animal not found.</p>
        </div>
        <Link className="btn-primary inline-flex w-fit" to="/animals">
          Back to animals
        </Link>
      </div>
    );
  }

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: animal.name,
          text: `Learn about ${animal.name} at Jacob Wildlife Centre.`,
          url: window.location.href,
        });
      } else {
        alert("Share is not available on this browser.");
      }
    } catch {
      // user cancelled share
    }
  };

  return (
    <article className="space-y-3">
      <Link className="text-sm underline" to="/animals">
        ← Back to Animals
      </Link>

      <div className="card">
        {/* Vanilla JSON image support */}
        {animal.image && (
          <img
            src={`/${animal.image}`}
            alt={animal.name}
            className="w-full h-56 [@media(orientation:landscape)]:h-72 object-cover rounded-xl"
            loading="lazy"
          />
        )}

        <div className={animal.image ? "mt-3" : ""}>
          <h2 className="text-2xl font-semibold">{animal.name}</h2>

          {/* Supports either habitat or location */}
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {animal.habitat || animal.location}
          </p>

          <p className="mt-2 text-sm">{animal.description}</p>

          <div className="mt-4 flex gap-2">
            <button className="btn-primary" type="button" onClick={share}>
              Share (mobile)
            </button>

            {/* Optional: quick “Save” hook if you already have favourites logic later */}
            {/* <button className="btn-primary" type="button">Save</button> */}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold">Live info (Wikipedia)</h3>

        {err && <p className="text-sm text-red-500 mt-2">{err}</p>}
        {!err && !wiki && <p className="text-sm mt-2">Loading live summary...</p>}

        {wiki && (
          <div className="mt-3 space-y-2">
            {wiki.thumbnail?.source && (
              <img
                src={wiki.thumbnail.source}
                alt={`${animal.name} photo`}
                className="w-full rounded-xl"
                loading="lazy"
              />
            )}
            <p className="text-sm">{wiki.extract}</p>
          </div>
        )}
      </div>
    </article>
  );
}