"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/register", { fullName, email, password });
      router.push("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 selection:bg-blue-500/30 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 p-10 bg-card rounded-3xl shadow-2xl border border-border backdrop-blur-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        <div className="text-center relative z-10">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Create Account</h2>
          <p className="mt-2 text-sm text-foreground/50">
            Join InboxPilot AI to analyze support messages
          </p>
        </div>
        
        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 px-4 py-3 rounded-xl text-sm relative z-10">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6 relative z-10" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-foreground/70 ml-1">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="block w-full px-4 py-3 rounded-2xl bg-foreground/[0.03] border border-border focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none transition-all text-foreground placeholder:text-foreground/20"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-foreground/70 ml-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 rounded-2xl bg-foreground/[0.03] border border-border focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none transition-all text-foreground placeholder:text-foreground/20"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-foreground/70 ml-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 rounded-2xl bg-foreground/[0.03] border border-border focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none transition-all text-foreground placeholder:text-foreground/20"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-2xl shadow-lg shadow-blue-500/20 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-50 active:scale-95"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm relative z-10">
          <span className="text-foreground/50">Already have an account? </span>
          <Link href="/login" className="font-bold text-blue-500 hover:text-blue-400 underline-offset-4 hover:underline transition-all">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}
