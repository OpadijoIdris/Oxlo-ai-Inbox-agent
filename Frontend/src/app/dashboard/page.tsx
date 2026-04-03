"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { 
  BarChart3, 
  AlertTriangle, 
  Frown, 
  CheckCircle2, 
  TrendingUp, 
  Clock,
  ArrowRight,
  MessageSquarePlus
} from "lucide-react";
import Link from "next/link";

interface Stats {
  total: number;
  highUrgency: number;
  angrySentiment: number;
  latest: any;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/analysis/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch stats");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Analyzed",
      value: stats?.total || 0,
      icon: BarChart3,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      description: "Lifetime messages processed"
    },
    {
      title: "High Urgency",
      value: stats?.highUrgency || 0,
      icon: AlertTriangle,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      description: "Require immediate attention"
    },
    {
      title: "Angry Sentiment",
      value: stats?.angrySentiment || 0,
      icon: Frown,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      description: "Frustrated customers"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-64px)]">
          <div className="animate-pulse text-foreground/30">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-10 pt-24">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-foreground/50 mt-1">Monitor your customer support performance at a glance.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {statCards.map((stat, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl border border-border flex items-start space-x-4 hover:border-accent/40 transition-all group">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/40">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                <p className="text-xs text-foreground/30 mt-1">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Latest Analysis Card */}
          <div className="bg-card p-6 rounded-2xl border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
              <Clock className="mr-2 text-blue-500" size={20} />
              Latest Analysis
            </h3>
            
            {stats?.latest ? (
              <div className="space-y-4">
                <div className="p-4 bg-foreground/3 rounded-xl border border-border">
                  <p className="text-sm text-foreground/70 line-clamp-2 italic">
                    &ldquo;{stats.latest.originalMessage}&rdquo;
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold border border-blue-500/20">
                    {stats.latest.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    stats.latest.urgency === 'High' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                  }`}>
                    {stats.latest.urgency} Urgency
                  </span>
                </div>
                <Link href={`/history/${stats.latest.id}`} className="inline-flex items-center text-sm font-bold text-blue-500 hover:text-blue-600 group mt-2 transition-colors">
                  View Detail <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-foreground/30 text-sm mb-4">No messages analyzed yet.</p>
                <Link href="/analyze" className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
                  Start Analyzing
                </Link>
              </div>
            )}
          </div>

          {/* Quick Actions Card */}
          <div className="bg-linear-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Ready for a new analysis?</h3>
              <p className="text-white/70 text-sm mb-6 max-w-70">Paste a customer message and get instant AI-powered insights and draft replies.</p>
              <Link href="/analyze" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center hover:bg-blue-50 transition shadow-md active:scale-95">
                <MessageSquarePlus className="mr-2" size={18} />
                Analyze Now
              </Link>
            </div>
            <TrendingUp size={120} className="absolute -bottom-4 -right-4 text-white/10 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </main>
    </div>
  );
}
