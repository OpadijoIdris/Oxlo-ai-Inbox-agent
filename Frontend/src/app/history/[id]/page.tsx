"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { 
  ArrowLeft, 
  Copy, 
  Layers, 
  AlertTriangle, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  MessageCircle,
  Calendar
} from "lucide-react";
import Link from "next/link";

interface Analysis {
  id: string;
  category: string;
  urgency: string;
  sentiment: string;
  summary: string;
  suggestedReply: string;
  recommendedAction: string;
  originalMessage: string;
  createdAt: string;
}

export default function HistoryDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await api.get(`/analysis/${id}`);
        setAnalysis(response.data);
      } catch (error) {
        console.error("Failed to fetch detail");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-64px)] animate-pulse text-slate-400">
          Loading report...
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="text-center py-20">
          <p className="text-slate-500 italic">Report not found.</p>
          <Link href="/history" className="text-blue-600 font-bold hover:underline mt-4 inline-block">
            Back to history
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="mr-2 transform transition-transform group-hover:-translate-x-1" />
          Back to History
        </button>

        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="flex items-center space-x-2 text-slate-400 mb-2 font-mono text-xs uppercase tracking-tighter">
              <Calendar size={14} />
              <span>{new Date(analysis.createdAt).toLocaleString()}</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Analysis Report</h1>
          </div>
          
          <div className="flex space-x-2">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-bold flex items-center">
              <Layers size={14} className="mr-1.5" /> {analysis.category}
            </span>
            <span className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center ${
              analysis.urgency === 'High' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              <AlertTriangle size={14} className="mr-1.5" /> {analysis.urgency} Urgency
            </span>
          </div>
        </header>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <MessageCircle className="mr-2 text-slate-400 font-bold" size={20} /> Original Message
            </h3>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 italic leading-relaxed">
              &ldquo;{analysis.originalMessage}&rdquo;
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Info className="mr-2 text-blue-600" size={20} /> Summary
              </h4>
              <p className="text-slate-600 leading-relaxed">{analysis.summary}</p>
            </section>

            <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <CheckCircle2 className="mr-2 text-green-600" size={20} /> Recommended Action
              </h4>
              <p className="text-slate-600 leading-relaxed">{analysis.recommendedAction}</p>
            </section>
          </div>

          <section className="p-8 bg-indigo-700 rounded-3xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold text-white flex items-center">
                <Sparkles className="mr-2" size={20} /> Suggested Reply
              </h4>
              <button 
                onClick={() => copyToClipboard(analysis.suggestedReply)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition"
                title="Copy Reply"
              >
                <Copy size={18} />
              </button>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-blue-50 leading-relaxed italic border border-white/5">
              &ldquo;{analysis.suggestedReply}&rdquo;
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
