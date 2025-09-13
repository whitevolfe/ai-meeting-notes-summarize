'use client'
import { useState, useEffect } from 'react'
import { FileText, Sparkles, Download, Upload, Loader2, CheckCircle, AlertCircle, Crown, ExternalLink } from 'lucide-react'

export default function Home() {
  const [transcript, setTranscript] = useState('')
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [dailyUsage, setDailyUsage] = useState(0)
  const [plan, setPlan] = useState('free') // free, pro, business

  // Load daily usage from localStorage
  useEffect(() => {
    const today = new Date().toDateString()
    const stored = localStorage.getItem('dailyUsage')
    const storedDate = localStorage.getItem('usageDate')
    
    if (storedDate === today) {
      setDailyUsage(parseInt(stored) || 0)
    } else {
      setDailyUsage(0)
      localStorage.setItem('dailyUsage', '0')
      localStorage.setItem('usageDate', today)
    }
  }, [])

  const getDailyLimit = () => {
    switch (plan) {
      case 'free': return 1
      case 'pro': return 5
      case 'business': return Infinity
      default: return 1
    }
  }

  const isLimitReached = () => {
    return dailyUsage >= getDailyLimit()
  }

  const handleSummarize = async () => {
    if (!transcript.trim()) {
      setError('Please enter a meeting transcript')
      return
    }

    if (isLimitReached()) {
      setError('Daily limit reached. Please upgrade to continue.')
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to summarize')
      }

      setSummary(data.summary)
      setSuccess(true)
      
      // Update daily usage
      const newUsage = dailyUsage + 1
      setDailyUsage(newUsage)
      localStorage.setItem('dailyUsage', newUsage.toString())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([summary], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `meeting-summary-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setTranscript(e.target.result)
        setError('')
        setSummary('')
        setSuccess(false)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-primary-600 p-3 rounded-full">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Meeting Summarizer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Transform your meeting transcripts into actionable summaries with the power of AI. 
          Save time and never miss important details again.
        </p>
        
        {/* Usage Counter */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">
              Daily Usage: {dailyUsage}/{getDailyLimit() === Infinity ? '∞' : getDailyLimit()}
            </span>
          </div>
          <a 
            href="/pricing" 
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
          >
            View Pricing <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-primary-600" />
              Meeting Transcript
            </h2>
            
            {/* File Upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload transcript file (optional)
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">TXT files only</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".txt"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>

            {/* Text Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or paste your transcript here
              </label>
              <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Paste your meeting transcript here... 

Example:
John: Good morning everyone, let's start with the quarterly review...
Sarah: The sales numbers are looking strong this quarter...
Mike: We need to discuss the new product launch timeline..."
                className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
              />
            </div>

            <button
              onClick={handleSummarize}
              disabled={loading || !transcript.trim()}
              className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate Summary
                </>
              )}
            </button>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Summary generated successfully!
            </div>
          )}

          {/* Upgrade CTA when limit reached */}
          {isLimitReached() && plan === 'free' && (
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200 rounded-lg p-6">
              <div className="flex items-start">
                <Crown className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    You've reached your daily limit!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Upgrade to Pro to get 5 summaries per day and export to PDF/Word formats.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://payhere.lk/pay/oa86b6789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Upgrade to Pro - $15/month
                    </a>
                    <a
                      href="/pricing"
                      className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      View All Plans
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <Sparkles className="h-6 w-6 mr-2 text-primary-600" />
                AI Summary
              </h2>
              {summary && (
                <button
                  onClick={handleDownload}
                  className="btn-secondary flex items-center text-sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              )}
            </div>

            <div className="min-h-64">
              {summary ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <pre className="whitespace-pre-wrap text-gray-800 font-sans text-sm leading-relaxed">
                      {summary}
                    </pre>
                  </div>
                  
                  {/* Upgrade prompt for free users */}
                  {plan === 'free' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Crown className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-sm text-blue-800">
                            Want to export to PDF/Word? Upgrade to Pro!
                          </span>
                        </div>
                        <a
                          href="/pricing"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View Plans →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Your AI-generated summary will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered</h3>
          <p className="text-gray-600">Advanced AI technology to understand context and extract key insights from your meetings.</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
            <FileText className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Structured Output</h3>
          <p className="text-gray-600">Get organized summaries with key points, action items, and important decisions clearly highlighted.</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Download className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Export</h3>
          <p className="text-gray-600">Download your summaries as text files to share with your team or store for future reference.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2025 all rights reserved Azeem.</p>
      </footer>
    </div>
  )
}
