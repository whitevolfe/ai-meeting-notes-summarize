'use client'
import { ArrowLeft } from 'lucide-react'

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Refund & Cancellation Policy</h1>
            <a 
              href="/" 
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to App
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              This Refund and Cancellation Policy outlines the terms and conditions for refunds and cancellations for our AI Meeting Summarizer service. Please read this policy carefully before making any purchases.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Refund Policy</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                <p className="text-blue-800">
                  Due to the nature of our AI-powered service and the immediate processing of meeting summaries, we generally do not offer refunds once a subscription has been activated and used. However, we may consider refunds in exceptional circumstances as outlined below.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. When Refunds May Be Considered</h2>
              <p className="text-gray-700 mb-4">
                We may consider refunds only in the following specific circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Technical Issues</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Service is completely non-functional for more than 48 hours</li>
                <li>Critical bugs that prevent core functionality from working</li>
                <li>Data loss due to our system failures</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Billing Errors</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Duplicate charges</li>
                <li>Incorrect billing amounts</li>
                <li>Unauthorized charges</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Service Misrepresentation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Service features significantly differ from what was advertised</li>
                <li>Core functionality is not available as described</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Process</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Refund Process:</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li><strong>Contact Support:</strong> Email us at support@aimeetingsummarizer.com within 7 days of the issue</li>
                  <li><strong>Provide Details:</strong> Include your account information and detailed description of the issue</li>
                  <li><strong>Investigation:</strong> We will investigate your request within 5 business days</li>
                  <li><strong>Decision:</strong> We will notify you of our decision and reasoning</li>
                  <li><strong>Processing:</strong> If approved, refunds will be processed within 10 business days</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Items</h2>
              <p className="text-gray-700 mb-3">
                The following are generally not eligible for refunds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Services that have been used or consumed</li>
                <li>Change of mind or personal preference</li>
                <li>Failure to understand how the service works</li>
                <li>Meeting summaries that have already been generated</li>
                <li>Subscription renewals that have been active for more than 24 hours</li>
                <li>Free trial periods (no payment involved)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Subscription Cancellation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>You may cancel your subscription at any time</li>
                <li>Cancellation takes effect at the end of your current billing period</li>
                <li>No partial refunds for unused time within a billing period</li>
                <li>You retain access to the service until the end of your paid period</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 How to Cancel</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>To cancel your subscription:</strong> Contact us at support@aimeetingsummarizer.com with your account details and cancellation request. We will process your cancellation within 2 business days.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Processing</h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  <strong>Payment Processor:</strong> All payments are processed securely through Stripe, a trusted global payment gateway.
                </p>
                <p>
                  <strong>Refund Method:</strong> Refunds, when approved, will be processed back to the original payment method used for the purchase.
                </p>
                <p>
                  <strong>Processing Time:</strong> Refunds may take 5-10 business days to appear in your account, depending on your bank or payment provider.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-700 mb-3">
                If you are not satisfied with our refund decision, you may:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Request a review by our management team</li>
                <li>Contact Stripe directly if the issue is payment-related</li>
                <li>Seek resolution through consumer protection agencies in Sri Lanka</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700">
                We reserve the right to modify this Refund and Cancellation Policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our service after any modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-3">
                For refund requests, cancellations, or questions about this policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@aimeetingsummarizer.com<br />
                  <strong>Subject Line:</strong> Refund Request / Cancellation Request<br />
                  <strong>Response Time:</strong> Within 2 business days<br />
                  <strong>Company:</strong> Fintech Digital
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Legal Compliance</h2>
              <p className="text-gray-700">
                This policy complies with applicable consumer protection laws in Sri Lanka. If any provision of this policy is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 all rights reserved Fintech Digital.</p>
            <div className="mt-4 space-x-6">
              <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a>
              <a href="/refund-policy" className="text-primary-600 hover:text-primary-700">Refund Policy</a>
              <a href="/terms" className="text-primary-600 hover:text-primary-700">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
