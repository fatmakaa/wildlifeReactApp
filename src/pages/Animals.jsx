import animals from "../data/animals.json";
import AnimalCard from "../ui/AnimalCard";

export default function Animals() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">British Animals</h2>

      {/* Portrait = 1 col, Landscape/Tablet = 2 col */}
      <div className="grid gap-3 [@media(orientation:landscape)]:grid-cols-2">
        {animals.map((a) => (
          <AnimalCard key={a.id} animal={a} />
        ))}
      </div>
    </section>
  );
}