import { Calendar, User, ArrowRight } from 'lucide-react';
import AuthButton from '../../components/AuthButton';

const blogs = [
  {
    id: 1,
    title: 'How AI Meeting Summarizers are Revolutionizing Productivity',
    excerpt:
      'Discover how artificial intelligence is transforming the way teams document and follow up on their meetings.',
    author: 'Fintech Digital',
    date: '2025-11-15',
    readTime: '5 min read',
    category: 'Productivity',
  },
  {
    id: 2,
    title: 'Best Practices for Effective Meeting Notes',
    excerpt:
      'Learn the essential techniques for capturing meeting discussions that drive actionable outcomes.',
    author: 'Sarah Johnson',
    date: '2025-11-10',
    readTime: '7 min read',
    category: 'Meetings',
  },
  {
    id: 3,
    title: 'Future of AI in Corporate Communication',
    excerpt:
      'Explore the upcoming trends and technologies shaping how businesses communicate internally.',
    author: 'Mike Chen',
    date: '2025-11-05',
    readTime: '6 min read',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Maximizing Team Collaboration Through Better Summaries',
    excerpt:
      'Understanding how structured meeting summaries can enhance team performance and alignment.',
    author: 'Emma Wilson',
    date: '2025-10-28',
    readTime: '8 min read',
    category: 'Teamwork',
  },
];

export default function BlogsPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Navigation Header */}
      <nav className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 flex items-center'>
                <div className='h-8 w-8 text-indigo-600 mr-2'>
                  <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                    />
                  </svg>
                </div>
                <a href='/' className='text-xl font-bold text-gray-900'>
                  AI Meeting Summarizer
                </a>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <a
                href='/pricing'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Pricing
              </a>
              <a
                href='/dashboard'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Dashboard
              </a>
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Blog</h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Insights, tips, and updates about AI-powered meeting summarization
              and productivity enhancement.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='p-6'>
                <div className='flex items-center mb-3'>
                  <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800'>
                    {blog.category}
                  </span>
                </div>
                <h2 className='text-xl font-semibold text-gray-900 mb-2 line-clamp-2'>
                  {blog.title}
                </h2>
                <p className='text-gray-600 mb-4 line-clamp-3'>
                  {blog.excerpt}
                </p>
                <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                  <div className='flex items-center'>
                    <User className='h-4 w-4 mr-1' />
                    {blog.author}
                  </div>
                  <div className='flex items-center'>
                    <Calendar className='h-4 w-4 mr-1' />
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>{blog.readTime}</span>
                  <button className='inline-flex items-center text-primary-600 hover:text-primary-700 font-medium'>
                    Read more
                    <ArrowRight className='h-4 w-4 ml-1' />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-900 text-white mt-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center'>
            <p>&copy; 2025 All rights reserved. Fintech Digital.</p>
            <div className='mt-4 space-x-6'>
              <a
                href='/privacy-policy'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='/refund-policy'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Refund Policy
              </a>
              <a
                href='/terms'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Terms & Conditions
              </a>
              <a
                href='/blogs'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Blogs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
