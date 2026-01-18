
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIEstimator: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!query) return;
    setLoading(true);
    setResult('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a professional construction consultant. Provide a brief, professional expert advice on the following project idea: ${query}. Focus on potential costs, timelines, and material considerations. Keep it under 200 words.`,
      });
      setResult(response.text || 'Unable to generate advice at this time.');
    } catch (error) {
      console.error(error);
      setResult('Error connecting to construction intelligence.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ai-estimator" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tighter">
              AI Project <span className="text-orange-600">Consultant</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Get instant expert insights on your construction project requirements using our Gemini-powered engine.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg shadow-2xl border border-slate-700">
            <label className="block text-sm font-bold uppercase tracking-widest text-orange-600 mb-2">
              Describe your project
            </label>
            <textarea
              className="w-full bg-slate-700 border-none rounded-md p-4 text-white focus:ring-2 focus:ring-orange-600 mb-6 min-h-[120px]"
              placeholder="e.g. I want to build a 3-story residential complex with 12 units using eco-friendly materials in a coastal area..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleConsult}
              disabled={loading}
              className={`w-full py-4 bg-orange-600 hover:bg-orange-700 font-bold uppercase tracking-widest rounded transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <i className="fas fa-circle-notch fa-spin"></i>
                  Analyzing Project Specs...
                </>
              ) : (
                <>
                  <i className="fas fa-brain"></i>
                  Get Expert Insight
                </>
              )}
            </button>

            {result && (
              <div className="mt-10 p-6 bg-slate-900 border-l-4 border-orange-600 rounded">
                <h4 className="text-orange-600 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                  <i className="fas fa-hard-hat"></i> Consultant Report
                </h4>
                <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {result}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEstimator;
