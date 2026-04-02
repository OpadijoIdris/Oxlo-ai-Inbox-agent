"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { 
  Sparkles, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  MessageCircle,
  Copy,
  ChevronRight
} from "lucide-react";

interface AnalysisResult {
  id: string;
  category: string;
  urgency: string;
  sentiment: string;
  summary: string;
  suggestedReply: string;
  recommendedAction: string;
}

export default function AnalyzePage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await api.post("/analysis", { message });
      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Analysis failed. Please check your API credentials.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Message Analyzer</h1>
          <p className="text-slate-600 mt-2 text-lg">Paste a customer query below to get instant AI-powered insights.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 mb-10">
          <textarea
            className="w-full h-48 p-6 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-800 resize-none placeholder:text-slate-400"
            placeholder="Paste customer message here (e.g. 'I haven't received my order yet and I'm very frustrated...')"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <div className="mt-6 flex justify-end items-center space-x-4">
            <button
              onClick={handleAnalyze}
              disabled={loading || !message.trim()}
              className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-50 disabled:shadow-none space-x-2"
            >
              {loading ? (
                <>
                  <Sparkles className="animate-spin" size={20} />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  <span>Analyze Message</span>
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl mb-10 flex items-center">
            <AlertCircle className="mr-3" size={20} />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat Briefs */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Category</p>
                <div className="flex items-center text-blue-700 font-bold">
                  <Info className="mr-2" size={16} /> {result.category}
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Urgency</p>
                <div className={`flex items-center font-bold ${
                  result.urgency === 'High' ? 'text-red-600' : 'text-green-600'
                }`}>
                  <AlertCircle className="mr-2" size={16} /> {result.urgency}
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Sentiment</p>
                <div className="flex items-center text-indigo-600 font-bold">
                  <Sparkles className="mr-2" size={16} /> {result.sentiment}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Info className="mr-2 text-blue-600" size={20} /> Summary
                </h4>
                <p className="text-slate-600 leading-relaxed">{result.summary}</p>
              </div>

              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <CheckCircle2 className="mr-2 text-green-600" size={20} /> Recommended Action
                </h4>
                <p className="text-slate-600 leading-relaxed">{result.recommendedAction}</p>
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-white flex items-center">
                  <MessageCircle className="mr-2" size={20} /> Suggested Reply
                </h4>
                <button 
                  onClick={() => copyToClipboard(result.suggestedReply)}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition"
                  title="Copy Reply"
                >
                  <Copy size={18} />
                </button>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-blue-50 leading-relaxed italic">
                &ldquo;{result.suggestedReply}&rdquo;
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
