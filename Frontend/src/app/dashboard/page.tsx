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
      color: "bg-blue-50 text-blue-600",
      description: "Lifetime messages processed"
    },
    {
      title: "High Urgency",
      value: stats?.highUrgency || 0,
      icon: AlertTriangle,
      color: "bg-amber-50 text-amber-600",
      description: "Require immediate attention"
    },
    {
      title: "Angry Sentiment",
      value: stats?.angrySentiment || 0,
      icon: Frown,
      color: "bg-red-50 text-red-600",
      description: "Frustrated customers"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-64px)]">
          <div className="animate-pulse text-slate-400">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard Overivew</h1>
          <p className="text-slate-600 mt-1">Monitor your customer support performance at a glance.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {statCards.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Latest Analysis Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Clock className="mr-2 text-blue-600" size={20} />
              Latest Analysis
            </h3>
            
            {stats?.latest ? (
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-sm text-slate-600 line-clamp-2 italic">
                    &ldquo;{stats.latest.originalMessage}&rdquo;
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {stats.latest.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    stats.latest.urgency === 'High' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {stats.latest.urgency} Urgency
                  </span>
                </div>
                <Link href={`/history/${stats.latest.id}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group mt-2">
                  View Detail <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-slate-400 text-sm mb-4">No messages analyzed yet.</p>
                <Link href="/analyze" className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                  Start Analyzing
                </Link>
              </div>
            )}
          </div>

          {/* Quick Actions Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Ready for a new analysis?</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-[280px]">Paste a customer message and get instant AI-powered insights and draft replies.</p>
              <Link href="/analyze" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center hover:bg-blue-50 transition shadow-md">
                <MessageSquarePlus className="mr-2" size={18} />
                Analyze Now
              </Link>
            </div>
            <TrendingUp size={120} className="absolute -bottom-4 -right-4 text-white/10" />
          </div>
        </div>
      </main>
    </div>
  );
}
