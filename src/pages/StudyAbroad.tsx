import {
  GraduationCap,
  Star,
  BookOpen,
  FileText,
  CheckCircle2,
  Globe,
  Users,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const StudyAbroad = () => {
  const navigate = useNavigate();
  const destinations = [
    {
      country: 'Canada',
      val: 'canada',
      flag: '🇨🇦',
      universities: '50+ Partner Universities',
      programs: 'Bachelor, Master, Diploma',
      highlights: ['Work while studying', 'Post-graduation work permit', 'Pathway to PR'],
      image:
        'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800',
    },
    {
      country: 'United Kingdom',
      val: 'uk',
      flag: '🇬🇧',
      universities: '40+ Partner Universities',
      programs: 'Undergraduate, Postgraduate',
      highlights: ['World-class education', '2-year post-study visa', 'Rich cultural experience'],
      image:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    },
    {
      country: 'USA',
      val: 'usa',
      flag: '🇺🇸',
      universities: '60+ Partner Universities',
      programs: 'Associate, Bachelor, Master, PhD',
      highlights: [
        'Top-ranked institutions',
        'OPT work authorization',
        'Scholarship opportunities',
      ],
      image:
        'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&q=80&w=800',
    },
    {
      country: 'Australia',
      val: 'australia',
      flag: '🇦🇺',
      universities: '30+ Partner Universities',
      programs: 'TAFE, Bachelor, Master',
      highlights: ['Part-time work rights', 'Skilled migration pathways', 'High quality of life'],
      image:
        'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800',
    },
    {
      country: 'Europe',
      val: 'germany',
      flag: '🇪🇺',
      universities: '500+ Universities across multiple countries',
      programs: 'Bachelor, Master, PhD',
      highlights: [
        'Schengen travel access',
        'Affordable or free tuition in some countries',
        'Strong post-study work opportunities',
      ],
      image:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    },
    {
      country: 'China',
      val: 'china',
      flag: '🇨🇳',
      universities: '200+ Universities',
      programs: 'Bachelor, Master, PhD, Short-term courses',
      highlights: [
        'Affordable tuition and living costs',
        'Scholarship opportunities for international students',
        'Rich cultural experience and language learning',
      ],
      image:
        'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmF8ZW58MHx8MHx8fDI%3D',
    },
  ];
  const services = [
    {
      icon: Globe,
      title: 'University Selection',
      description:
        'Personalized guidance to choose the right institution based on your profile, budget, and career goals.',
    },
    {
      icon: FileText,
      title: 'Application Support',
      description:
        'Complete assistance with admission applications, document preparation, and submission tracking.',
    },
    {
      icon: BookOpen,
      title: 'SOP & Essay Writing',
      description:
        'Professional statement of purpose and essay writing services that highlight your unique story.',
    },
    {
      icon: Award,
      title: 'Scholarship Guidance',
      description:
        'Identification and application support for scholarships and financial aid opportunities.',
    },
    {
      icon: CheckCircle2,
      title: 'Visa Processing',
      description:
        'End-to-end student visa application support with high success rates for all destinations.',
    },
    {
      icon: Users,
      title: 'Pre-Departure',
      description:
        'Comprehensive orientation covering accommodation, travel, and settling into your new country.',
    },
  ];
  const successStories = [
    {
      name: 'Abena Mensah',
      program: 'MBA, University of Toronto',
      country: 'Canada',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=abena',
      quote:
        'ELPA Travel made my dream of studying in Canada come true. Their SOP assistance was exceptional!',
    },
    {
      name: 'Kwame Boateng',
      program: 'Computer Science, University of Manchester',
      country: 'UK',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kwame2',
      quote:
        'The team guided me through every step. I got admission to my dream university with a scholarship!',
    },
    {
      name: 'Ama Osei',
      program: 'Public Health, University of Melbourne',
      country: 'Australia',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ama2',
      quote:
        'Professional, reliable, and supportive. They turned my study abroad dreams into reality.',
    },
  ];
  const requirements = [
    'Valid passport',
    'Academic transcripts and certificates',
    'English proficiency test (IELTS/TOEFL)',
    'Statement of Purpose',
    'Letters of recommendation',
    'Financial proof documents',
    'CV/Resume',
    'Passport-sized photographs',
  ];
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-screen-xl xl:container  mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                <GraduationCap className="w-4 h-4" />
                Education Consulting
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Study Abroad <span className="text-blue-200">Your Way</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-10">
                Turn your international education dreams into reality with expert guidance,
                comprehensive support, and proven success strategies for top universities worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className=" cursor-pointer bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
                >
                  Start Your Journey
                </button>
                <button
                  onClick={() => navigate('/resources')}
                  className="cursor-pointer bg-white/10 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur"
                >
                  Download Guide
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">200+</div>
                  <div className="text-blue-200 text-sm">Students Placed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-blue-200 text-sm">Visa Success</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-blue-200 text-sm">Universities</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
              }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1702740205565-39aa1cb0474d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJsYWNrJTIwZ3JhZHVhdGVzJTIwc21pbGluZ3xlbnwwfHwwfHx8Mg%3D%3D"
                alt="Students"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
              Popular Destinations
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Where Can You Study?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We have partnerships with top universities in the world's most sought-after study
              destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.1,
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className="text-4xl mb-2">{dest.flag}</div>
                    <h4 className="text-2xl font-bold">{dest.country}</h4>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">
                      {dest.universities}
                    </span>
                    <span className="text-slate-500">{dest.programs}</span>
                  </div>
                  <ul className="space-y-3">
                    {dest.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/study-abroad/countries/${dest.val.toLowerCase()}`)}
                    className="cursor-pointer mt-6 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                  >
                    Explore Programs →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Complete Study Abroad Support
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From university selection to visa approval, we handle every aspect of your study
              abroad journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.1,
                }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl xl:container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">
                Get Prepared
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">What You'll Need</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We'll guide you through gathering all necessary documents for your application.
                Here's a general checklist to get you started:
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
                Download Full Checklist
              </button>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="bg-slate-800 p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold mb-6">Document Requirements</h4>
              <ul className="space-y-4">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
              Success Stories
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              From Ghana to Global Universities
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet some of our successful students who are now thriving in their international
              universities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.1,
                }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-bold text-slate-900">{story.name}</h4>
                    <p className="text-xs text-slate-500">{story.country}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-blue-600 mb-4">{story.program}</p>
                <p className="text-slate-600 italic">"{story.quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-blue-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Study Abroad?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Book a free consultation with our education experts and start your journey to
              international education.
            </p>
            <a
              href="https://calendar.app.google/igo7gWv9UcxajYLF8"
              target="_blank"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default StudyAbroad;
