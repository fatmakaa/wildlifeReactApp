import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../firebase/AuthContext";
import { Link } from "react-router-dom";

function friendlyError(code) {
  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password.";
    case "auth/email-already-in-use":
      return "This email is already registered. Please log in.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export default function Subscribe() {
  const { user } = useAuth();

  // "login" = screenshot look, "signup" = subscribe now
  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setMsg("");
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setMsg("Logged in successfully.");
    } catch (e) {
      setError(friendlyError(e.code));
    }
  };

  const handleSignup = async () => {
    setMsg("");
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      setMsg("Account created successfully. You can now access your voucher.");
      setMode("login");
    } catch (e) {
      setError(friendlyError(e.code));
    }
  };

  const logout = async () => {
    await signOut(auth);
    setMsg("You have logged out.");
  };

  // Logged-in view (member area)
  if (user) {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Subscribe</h2>

        <div className="card max-w-md mx-auto space-y-3">
          <p className="text-sm text-center">
            Signed in as <strong>{user.email}</strong>
          </p>

          <div className="flex justify-center gap-3">
            <Link to="/voucher" className="btn-primary">
              Open voucher
            </Link>

            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                         border border-zinc-200 dark:border-zinc-700
                         bg-zinc-100 dark:bg-zinc-800
                         text-zinc-900 dark:text-zinc-100"
            >
              Logout
            </button>
          </div>

          <p className="text-xs text-center text-zinc-500">
            Subscribers can log in to print a discount voucher for use at the centre.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">
        {mode === "login" ? "Login" : "Subscribe"}
      </h2>

      <div
        className="max-w-md mx-auto rounded-2xl border border-zinc-200/70 dark:border-zinc-800
                   bg-white dark:bg-zinc-950 shadow-sm p-5"
      >
        <div className="space-y-4">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800
                         bg-white dark:bg-zinc-900 px-4 py-3 text-sm
                         outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800
                         bg-white dark:bg-zinc-900 px-4 py-3 text-sm
                         outline-none focus:ring-2 focus:ring-[color:var(--color-brand)]"
            />
          </div>

          {/* Big green button like screenshot */}
          <button
            type="button"
            onClick={mode === "login" ? handleLogin : handleSignup}
            className="w-full rounded-2xl px-4 py-4 text-base font-semibold text-white
                       bg-[color:var(--color-brand)] hover:opacity-95 active:opacity-90"
          >
            {mode === "login" ? "Login" : "Create account"}
          </button>

          {/* Helper text (assignment wording) */}
          <p className="text-xs text-center text-zinc-600 dark:text-zinc-300">
            Subscribers can log in to print a discount voucher for use at the centre.
          </p>

          {/* Toggle link like screenshot */}
          <button
            type="button"
            onClick={() => {
              setMsg("");
              setError("");
              setMode((m) => (m === "login" ? "signup" : "login"));
            }}
            className="w-full text-center text-sm font-medium text-[color:var(--color-brand)] hover:underline"
          >
            {mode === "login"
              ? "Don't have an account? Subscribe now!"
              : "Already subscribed? Login"}
          </button>

          {/* Messages */}
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              {error}
            </p>
          )}
          {msg && (
            <p className="text-sm text-green-700 dark:text-green-400 text-center">
              {msg}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}