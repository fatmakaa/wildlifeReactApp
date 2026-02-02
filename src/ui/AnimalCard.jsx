import { Link } from "react-router-dom";

export default function AnimalCard({ animal }) {
  return (
    <Link to={`/animals/${animal.id}`} className="card block hover:shadow-md transition">
      <img
        src={`/${animal.image}`}
        alt={animal.name}
        className="w-full h-40 object-cover rounded-xl"
        loading="lazy"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{animal.name}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{animal.location}</p>
      </div>
      <p className="mt-2 text-sm">{animal.description}</p>
    </Link>
  );
}