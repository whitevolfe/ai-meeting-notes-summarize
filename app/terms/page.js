'use client'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Terms & Conditions</h1>
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
              These Terms and Conditions ("Terms") govern your use of the AI Meeting Summarizer service ("Service") provided by Fintech Digital ("Company", "we", "us", or "our"). By accessing or using our Service, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-3">
                By accessing, using, or subscribing to our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Service.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">
                  <strong>Important:</strong> These Terms constitute a legally binding agreement between you and Fintech Digital. Please read them carefully.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-3">
                AI Meeting Summarizer is an AI-powered service that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Processes meeting transcripts using artificial intelligence</li>
                <li>Generates comprehensive meeting summaries</li>
                <li>Provides export options for summaries (PDF, Word)</li>
                <li>Offers different subscription tiers with varying features</li>
                <li>Maintains user accounts and usage tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Eligibility</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must be at least 18 years old to use our Service</li>
                <li>You must have the legal capacity to enter into these Terms</li>
                <li>You may not create multiple accounts to circumvent usage limits</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription Plans and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Available Plans</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Free Plan:</strong> 1 meeting summary per day, basic features</li>
                <li><strong>Pro Plan:</strong> 60 summaries per month, export features, priority support</li>
                <li><strong>Business Plan:</strong> Unlimited summaries, advanced features, dedicated support</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Payment Terms</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>All payments are processed securely through PayHere</li>
                <li>Subscriptions are billed in advance on a monthly basis</li>
                <li>Prices are subject to change with 30 days' notice</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>You authorize us to charge your payment method for recurring fees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Usage Limits</h3>
              <p className="text-gray-700">
                Each subscription plan has specific usage limits. Exceeding these limits may result in additional charges or service restrictions. See our Refund Policy for details on refund eligibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Permitted Use</h3>
              <p className="text-gray-700 mb-3">You may use our Service only for lawful purposes and in accordance with these Terms. You agree to use the Service to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Summarize legitimate business or personal meetings</li>
                <li>Process meeting transcripts that you have the right to use</li>
                <li>Generate summaries for your own use or with proper authorization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Prohibited Activities</h3>
              <p className="text-gray-700 mb-3">You agree NOT to use our Service to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Process content that violates any laws or regulations</li>
                <li>Upload confidential information without proper authorization</li>
                <li>Attempt to reverse engineer or copy our AI technology</li>
                <li>Use automated systems to access the Service (except with permission)</li>
                <li>Share your account credentials with others</li>
                <li>Generate summaries for commercial resale without authorization</li>
                <li>Upload malicious code or attempt to disrupt our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Our Intellectual Property</h3>
              <p className="text-gray-700 mb-3">
                The Service, including its design, functionality, AI models, and underlying technology, is owned by Fintech Digital and protected by intellectual property laws. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Copy, modify, or distribute our proprietary technology</li>
                <li>Create derivative works based on our Service</li>
                <li>Remove or alter any proprietary notices</li>
                <li>Use our trademarks or branding without permission</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Your Content</h3>
              <p className="text-gray-700 mb-3">
                You retain ownership of any meeting transcripts or content you upload. By using our Service, you grant us a limited license to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Process your content to provide the Service</li>
                <li>Store your content temporarily for Service delivery</li>
                <li>Generate summaries based on your content</li>
                <li>Improve our AI models using anonymized data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-3">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We implement security measures to protect your data</li>
                <li>We do not sell your personal information to third parties</li>
                <li>You have rights regarding your personal data as outlined in our Privacy Policy</li>
                <li>We comply with applicable data protection laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability and Modifications</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Service Availability</h3>
              <p className="text-gray-700 mb-4">
                While we strive to maintain high service availability, we do not guarantee uninterrupted access. The Service may be temporarily unavailable due to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Scheduled maintenance</li>
                <li>Technical issues or system upgrades</li>
                <li>Force majeure events</li>
                <li>Security incidents</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Service Modifications</h3>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice of significant changes that affect your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Service Disclaimers</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800">
                  <strong>Important Disclaimer:</strong> Our Service is provided "as is" without warranties of any kind. While we strive for accuracy, AI-generated summaries may contain errors or omissions. You should always verify important information independently.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Limitation of Liability</h3>
              <p className="text-gray-700 mb-3">
                To the maximum extent permitted by law, Fintech Digital shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages exceeding the amount paid for the Service in the past 12 months</li>
                <li>Third-party actions or content</li>
                <li>Service interruptions or technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Termination by You</h3>
              <p className="text-gray-700 mb-4">
                You may terminate your account at any time by contacting us. Termination will be effective at the end of your current billing period, and no refunds will be provided for unused time.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 Termination by Us</h3>
              <p className="text-gray-700 mb-3">
                We may suspend or terminate your account if you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Violate these Terms or our policies</li>
                <li>Fail to pay subscription fees</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Pose a security risk to our Service or other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-3">
                These Terms are governed by the laws of Sri Lanka. Any disputes arising from these Terms or your use of the Service will be resolved through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Good faith negotiations between the parties</li>
                <li>Mediation if negotiations fail</li>
                <li>Arbitration in Colombo, Sri Lanka if mediation fails</li>
                <li>Courts of Sri Lanka as a last resort</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these Terms from time to time. We will notify you of material changes by email or through the Service. Your continued use of the Service after changes are posted constitutes acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-3">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@aimeetingsummarizer.com<br />
                  <strong>Support:</strong> support@aimeetingsummarizer.com<br />
                  <strong>Company:</strong> Fintech Digital<br />
                  <strong>Address:</strong> Sri Lanka
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will remain in full force and effect.
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
