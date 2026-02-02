import { useAuth } from "../firebase/AuthContext";

export default function Voucher() {
  const { user } = useAuth();
  const code = (user?.uid || "guest").slice(0, 8).toUpperCase();

  return (
    <section className="space-y-3">
      <div className="no-print flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Voucher</h2>
        <button className="btn-primary" type="button" onClick={() => window.print()}>
          Print voucher
        </button>
      </div>

      <div className="card p-5">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Jacob Wildlife Centre
        </p>
        <h3 className="text-2xl font-bold mt-1">10% Discount Voucher</h3>

        <div className="mt-4 space-y-1 text-sm">
          <p><strong>Subscriber:</strong> {user?.email}</p>
          <p><strong>Voucher code:</strong> {code}</p>
          <p><strong>Valid:</strong> Next 30 days</p>
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Present this voucher at the entrance. One voucher per visit. Non-transferable.
        </p>
      </div>
    </section>
  );
}