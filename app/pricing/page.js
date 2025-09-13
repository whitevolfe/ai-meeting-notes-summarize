'use client'
import { Check, Star, Zap } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/ month',
      description: 'Perfect for individuals and small teams trying the tool',
      features: [
        '1 meeting summary/day',
        'Basic text summary',
        'Access to web interface',
        'Email support'
      ],
      limitations: [
        'Limited to 1 summary per day',
        'No export options',
        'Basic support only'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/',
      popular: false,
      badge: 'Free Trial – No Credit Card Needed'
    },
    {
      name: 'Pro',
      price: '$15',
      period: '/ month',
      description: 'Ideal for freelancers and growing startups',
      features: [
        '60 summaries/month',
        'Export to PDF / Word',
        'Priority processing',
        '5 meeting summary/day',
        'Advanced formatting',
        'Priority email support'
      ],
      limitations: [],
      cta: 'Upgrade to Pro',
      ctaLink: 'https://payhere.lk/pay/oa86b6789',
      popular: true,
      badge: null
    },
    {
      name: 'Business',
      price: '$49',
      period: '/ month',
      description: 'Perfect for mid-sized teams, large companies & consulting firms',
      features: [
        'Unlimited summaries',
        'Priority processing',
        'Security & compliance',
        'Dedicated support',
        'Team collaboration',
        'Custom integrations',
        'Advanced analytics',
        'API access'
      ],
      limitations: [],
      cta: 'Upgrade to Business',
      ctaLink: 'https://payhere.lk/pay/oa86b6789',
      popular: false,
      badge: null
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-primary-600 p-2 rounded-lg mr-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">AI Meeting Summarizer</h1>
            </div>
            <a 
              href="/" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to App
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your meetings into actionable insights in seconds. Save hours every week.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-xl text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start">
                    <span className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0">❌</span>
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Feature Comparison
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Meeting Summaries per Day</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">5</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Export to PDF/Word</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">❌</td>
                    <td className="px-6 py-4 text-center text-sm text-green-500">✅</td>
                    <td className="px-6 py-4 text-center text-sm text-green-500">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Priority Processing</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">❌</td>
                    <td className="px-6 py-4 text-center text-sm text-green-500">✅</td>
                    <td className="px-6 py-4 text-center text-sm text-green-500">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Security & Compliance</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">❌</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">❌</td>
                    <td className="px-6 py-4 text-center text-sm text-green-500">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Support Level</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">Email</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">Priority Email</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Start with our free plan and upgrade anytime as your needs grow.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-500">
          <p>&copy; 2025 all rights reserved Azeem.</p>
        </div>
      </footer>
    </div>
  )
}
