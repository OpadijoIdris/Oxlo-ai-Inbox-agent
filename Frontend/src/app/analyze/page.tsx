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
  confidence: number;
}

export default function AnalyzePage() {
  const [message, setMessage] = useState("");
  const [analyzedMessage, setAnalyzedMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!message.trim()) return;
    const currentMessage = message;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await api.post("/analysis", { message: currentMessage });
      setResult(response.data);
      setAnalyzedMessage(currentMessage);
      setMessage(""); // Clear input on success
    } catch (err: any) {
      setError(err.response?.data?.message || "Analysis failed. Please check your API credentials.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Use a non-blocking toast or simple state if possible, but alert works for now
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI Assistant Copilot
          </h1>
          <p className="text-foreground/60 mt-2 text-lg italic">
            Company-aware message analysis & response generation.
          </p>
        </div>

        <div className="bg-card p-8 rounded-3xl border border-border backdrop-blur-xl mb-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <textarea
            className="w-full h-48 p-6 rounded-2xl bg-foreground/3 border border-border focus:ring-2 focus:ring-blue-500/50 focus:border-transparent outline-none transition-all text-foreground resize-none placeholder:text-foreground/30 relative z-10"
            placeholder="Paste customer message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <div className="mt-6 flex justify-end items-center space-x-4 relative z-10">
            <button
              onClick={handleAnalyze}
              disabled={loading || !message.trim()}
              className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all disabled:opacity-50 space-x-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
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
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl mb-10 flex items-center">
            <AlertCircle className="mr-3" size={20} />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {result && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Locked Source Message Block */}
            <div className="p-8 bg-card rounded-3xl border border-border border-l-4 border-l-blue-500/50">
              <h4 className="text-[10px] font-bold text-foreground/40 mb-3 flex items-center uppercase tracking-[0.2em] font-mono">
                <MessageCircle className="mr-2 text-blue-500/60" size={14} /> Processed Customer Message
              </h4>
              <p className="text-foreground/60 leading-relaxed text-sm italic">
                &ldquo;{analyzedMessage}&rdquo;
              </p>
            </div>

            {/* Confidence Warning */}
            {result.confidence < 60 && (
              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-center gap-3 text-amber-600 dark:text-amber-400 mb-6">
                <AlertCircle size={20} className="shrink-0" />
                <div className="text-sm">
                  <span className="font-bold uppercase tracking-wider text-xs block mb-0.5 text-amber-500">Low Confidence Warning</span>
                  This analysis has a confidence score of {result.confidence}%. Please review carefully before sending.
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 bg-card rounded-2xl border border-border">
                <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1.5 font-mono">Category</p>
                <div className="flex items-center text-blue-500 font-bold text-sm">
                  <Info className="mr-2" size={14} /> {result.category}
                </div>
              </div>
              <div className="p-5 bg-card rounded-2xl border border-border">
                <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1.5 font-mono">Urgency</p>
                <div className={`flex items-center font-bold text-sm ${
                  result.urgency === 'High' ? 'text-rose-500' : 'text-emerald-500'
                }`}>
                  <AlertCircle className="mr-2" size={14} /> {result.urgency}
                </div>
              </div>
              <div className="p-5 bg-card rounded-2xl border border-border">
                <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1.5 font-mono">Sentiment</p>
                <div className="flex items-center text-indigo-500 font-bold text-sm">
                  <Sparkles className="mr-2" size={14} /> {result.sentiment}
                </div>
              </div>
              <div className="p-5 bg-card rounded-2xl border border-border">
                <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1.5 font-mono">Confidence</p>
                <div className={`flex items-center font-bold text-sm ${
                  result.confidence >= 80 ? 'text-emerald-500' : result.confidence >= 60 ? 'text-amber-500' : 'text-rose-500'
                }`}>
                  <CheckCircle2 className="mr-2" size={14} /> {result.confidence}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-8 bg-card rounded-3xl border border-border">
                <h4 className="text-sm font-bold text-foreground/40 mb-4 flex items-center uppercase tracking-widest font-mono">
                  <Info className="mr-2 text-blue-500" size={18} /> Summary
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">{result.summary}</p>
              </div>

              <div className="p-8 bg-card rounded-3xl border border-border">
                <h4 className="text-sm font-bold text-foreground/40 mb-4 flex items-center uppercase tracking-widest font-mono">
                  <CheckCircle2 className="mr-2 text-emerald-500" size={18} /> Recommended Action
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">{result.recommendedAction}</p>
              </div>
            </div>

            <div className="p-10 bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                <MessageCircle size={150} />
              </div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="text-lg font-bold text-white flex items-center">
                  <MessageCircle className="mr-2" size={20} /> Suggested Reply
                </h4>
                <button 
                  onClick={() => copyToClipboard(result.suggestedReply)}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all active:scale-95"
                  title="Copy Reply"
                >
                  <Copy size={20} />
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white leading-relaxed italic text-lg relative z-10 border border-white/10">
                &ldquo;{result.suggestedReply}&rdquo;
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
