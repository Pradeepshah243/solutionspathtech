import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Top 5 Trends in Digital Transformation',
    excerpt: 'Discover the latest trends shaping the future of digital transformation in 2026 and how they can benefit your business.',
    image: 'https://images.unsplash.com/photo-1694340016914-e684a924f5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5JTIwYXJ0aWNsZXxlbnwxfHx8fDE3NzAwMTEwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'January 28, 2026',
    author: 'Ram Prasad Neupane',
    category: 'Digital Transformation'
  },
  {
    title: 'Why Nepal Needs Scalable IT Solutions',
    excerpt: 'Exploring how scalable technology solutions can drive growth and innovation for businesses across Nepal.',
    image: 'https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcwMDExMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'January 20, 2026',
    author: 'Rajesh Sharma',
    category: 'Business Growth'
  },
  {
    title: 'Cloud Computing: The Future of Business',
    excerpt: 'Learn how cloud computing can reduce costs, increase efficiency, and provide better security for your business operations.',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3klMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzAwMTEwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'January 15, 2026',
    author: 'Sita Thapa',
    category: 'Cloud Technology'
  }
];

export function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#6D28D9] uppercase tracking-wider text-sm mb-2">Blog & Insights</div>
          <h2 className="text-4xl lg:text-5xl text-[#111827] mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest insights on technology, digital transformation, and industry trends.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-[#6D28D9] text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl text-[#111827] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#6D28D9] hover:gap-3 transition-all"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9] text-white rounded-full hover:shadow-[0_0_30px_rgba(109,40,217,0.5)] transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
