'use client'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Payment Successful!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Thank you for upgrading your AI Meeting Summarizer subscription.
        </p>

        {/* Session ID (for debugging) */}
        {sessionId && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-500 mb-1">Session ID:</p>
            <p className="text-sm font-mono text-gray-700 break-all">{sessionId}</p>
          </div>
        )}

        {/* Details */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Your subscription is now active</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>You can access all premium features immediately</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Confirmation email has been sent to your inbox</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Your subscription will renew monthly automatically</span>
            </li>
          </ul>
        </div>

        {/* Features Unlocked */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Features Unlocked</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center">
              <span className="text-primary-600 mr-2">★</span>
              Export summaries to PDF and Word
            </li>
            <li className="flex items-center">
              <span className="text-primary-600 mr-2">★</span>
              Priority processing for faster results
            </li>
            <li className="flex items-center">
              <span className="text-primary-600 mr-2">★</span>
              Priority email support
            </li>
            <li className="flex items-center">
              <span className="text-primary-600 mr-2">★</span>
              Increased daily limits
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <a
            href="/"
            className="block w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors text-center flex items-center justify-center"
          >
            Back to Application
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a
            href="/pricing"
            className="block w-full border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors text-center"
          >
            View Subscription Details
          </a>
        </div>

        {/* Support Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-center text-gray-600">
            Need help? Contact us at{' '}
            <a href="mailto:support@aimeetingsummarizer.com" className="text-primary-600 hover:underline">
              support@aimeetingsummarizer.com
            </a>
          </p>
          <p className="text-xs text-center text-gray-600 mt-2">
            To manage your subscription, visit the{' '}
            <a href="https://billing.stripe.com/login/test_1SKwRT2OqWX7nascHtAv5Kk1jPct4t4zeKhlC9Taz4aPxmk3vwst0vb" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-primary-600 hover:underline">
              customer portal
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
