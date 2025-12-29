import React from 'react';
import { BookOpen, Download, FileText, Video, Newspaper, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
export const Resources = () => {
  const ebooks = [{
    title: 'Canada Visit Visa Application Guide',
    description: 'Comprehensive step-by-step guide to applying for a Canadian visitor visa with insider tips and common pitfalls to avoid.',
    price: 'GH₵ 150',
    pages: '85 pages',
    rating: 4.9,
    downloads: 1200,
    color: 'from-red-500 to-red-600',
    topics: ['Document checklist', 'Interview preparation', 'Financial requirements', 'Common rejection reasons']
  }, {
    title: 'UK Visit Visa Application Guide',
    description: 'Everything you need to know about applying for a UK visitor visa, including document requirements and interview tips.',
    price: 'GH₵ 120',
    pages: '72 pages',
    rating: 4.8,
    downloads: 950,
    color: 'from-blue-500 to-blue-600',
    topics: ['Application process', 'Supporting documents', 'Financial proof', 'Travel history tips']
  }, {
    title: 'USA B1/B2 Visa Success Guide',
    description: 'Master the US visitor visa application with our detailed guide covering DS-160 form, interview strategies, and more.',
    price: 'GH₵ 180',
    pages: '95 pages',
    rating: 5.0,
    downloads: 800,
    color: 'from-indigo-500 to-indigo-600',
    topics: ['DS-160 form filling', 'Embassy interview prep', 'Tie to home country', 'Approval strategies']
  }, {
    title: 'Study Abroad Application Masterclass',
    description: 'Complete guide to applying to international universities including SOP writing, scholarship applications, and more.',
    price: 'GH₵ 250',
    pages: '120 pages',
    rating: 4.9,
    downloads: 650,
    color: 'from-purple-500 to-purple-600',
    topics: ['University selection', 'SOP templates', 'Scholarship hunting', 'Visa process']
  }, {
    title: 'Schengen Visa Application Guide',
    description: 'Navigate the Schengen visa application for multiple European countries with confidence and clarity.',
    price: 'GH₵ 140',
    pages: '68 pages',
    rating: 4.7,
    downloads: 720,
    color: 'from-emerald-500 to-emerald-600',
    topics: ['Country selection', 'Itinerary planning', 'Travel insurance', 'Appointment booking']
  }, {
    title: 'Dubai Tourist Visa Quick Guide',
    description: 'Fast-track your Dubai visa application with our concise, practical guide for Ghanaian travelers.',
    price: 'GH₵ 100',
    pages: '45 pages',
    rating: 4.8,
    downloads: 890,
    color: 'from-amber-500 to-amber-600',
    topics: ['Quick application', 'Requirements', 'Processing times', 'Travel tips']
  }] as any[];
  const blogPosts = [{
    title: '10 Common Visa Rejection Reasons and How to Avoid Them',
    excerpt: 'Learn from the most common mistakes that lead to visa rejections and how to strengthen your application.',
    category: 'Visa Tips',
    readTime: '8 min read',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400'
  }, {
    title: 'Best Countries for Ghanaian Students in 2024',
    excerpt: 'Discover the top study destinations offering quality education, work opportunities, and pathways to permanent residency.',
    category: 'Study Abroad',
    readTime: '12 min read',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400'
  }, {
    title: 'How to Write a Winning Statement of Purpose',
    excerpt: 'Expert tips and strategies for crafting a compelling SOP that gets you accepted into your dream university.',
    category: 'Applications',
    readTime: '10 min read',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400'
  }, {
    title: 'Budget Travel Tips for First-Time International Travelers',
    excerpt: 'Make the most of your travel budget with these practical money-saving tips for international trips.',
    category: 'Travel',
    readTime: '6 min read',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=400'
  }] as any[];
  const videos = [{
    title: 'How to Apply for a Canadian Visa',
    duration: '15:30'
  }, {
    title: 'Student Visa Interview Tips',
    duration: '12:45'
  }, {
    title: 'Document Preparation Checklist',
    duration: '10:20'
  }, {
    title: 'Understanding Embassy Requirements',
    duration: '18:15'
  }] as any[];
  return <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Resources & <span className="text-blue-400">Learning Hub</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Expert guides, ebooks, and resources to help you navigate visa applications, study abroad processes, and international travel with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-blue-200 text-sm">Digital Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">5,000+</div>
                <div className="text-blue-200 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">4.8/5</div>
                <div className="text-blue-200 text-sm">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Digital Library</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Expert Visa & Travel Guides
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Downloadable comprehensive guides written by travel experts with years of visa processing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className={`bg-gradient-to-br ${ebook.color} p-8 relative overflow-hidden`}>
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <BookOpen className="w-16 h-16 text-white mb-4 relative z-10" />
                  <h4 className="text-2xl font-bold text-white mb-2 relative z-10">{ebook.title}</h4>
                  <div className="flex items-center gap-4 text-white/90 text-sm relative z-10">
                    <span>{ebook.pages}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-white" />
                      <span>{ebook.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{ebook.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">What's Inside:</p>
                    <ul className="space-y-2">
                      {ebook.topics.map((topic, i) => <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>)}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{ebook.price}</p>
                      <p className="text-xs text-slate-500">{ebook.downloads} downloads</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Latest Articles</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Travel Tips & Insights</h3>
            </div>
            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors">
              View All Articles <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => <motion.article key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.article>)}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Video Library</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Watch & Learn
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Free video tutorials covering everything from visa applications to travel preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  <Video className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-mono">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold text-sm">{video.title}</h4>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Newspaper className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay Updated with Travel Tips
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Subscribe to our newsletter for exclusive visa tips, study abroad insights, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-xl text-slate-900 outline-none focus:ring-4 focus:ring-blue-300" />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-xs mt-4">Join 3,000+ subscribers. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>;
};