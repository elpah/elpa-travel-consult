import {
  Globe,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageCircle,
  Star,
  MapPin,
  Users,
  GraduationCap,
  FileText,
  Hotel,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
};
const ServiceCard = ({ icon: Icon, title, description, items }: ServiceCardProps) => (
  <motion.div
    whileHover={{
      y: -5,
    }}
    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
      <Icon className="text-blue-600 w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{description}</p>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center text-sm text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);
const testimonials = [
  {
    name: 'Kwame Mensah',
    role: 'International Student',
    text: 'ELPA Travel Consult made my dream of studying in Canada a reality. Their SOP writing assistance was professional and successful.',
    rating: 5,
  },
  {
    name: 'Abena Osei',
    role: 'Business Traveler',
    text: "The best visa assistance I've ever had in Ghana. Transparent, honest, and they handle everything with extreme precision.",
    rating: 5,
  },
  {
    name: 'Kofi Boateng',
    role: 'Family Vacationer',
    text: 'Our family trip to Dubai was seamless thanks to their hotel and flight reservation services. Highly recommended!',
    rating: 5,
  },
];

const services = [
  {
    icon: FileText,
    title: 'Visa & Documentation',
    description: 'Expert guidance for visa applications and documentation.',
    items: [
      'UK, Canada & USA',
      'Europe & Schengen',
      'Dubai & Asia',
      'Birth Certificates',
      'Passport',
      'Flight Reservation',
      'Hotel Reservation',
      'Travel Insurance',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Study Abroad',
    description: 'Unlock international education opportunities with end-to-end support.',
    items: [
      'Course & Program Guidance',
      'School Selection',
      'Cover Letter & SOP',
      'Admission Application',
      'Visa Processing',
      'Pre-departure Orientation',
    ],
  },
  {
    icon: Globe,
    title: 'Travel Packages',
    description: 'Curated experiences for couples and groups in world-class destinations.',
    items: [
      'Dubai Holiday Packages',
      'South Africa Tours',
      'European Escapes',
      'China Business Trips',
    ],
  },
  {
    icon: Hotel,
    title: 'Ticketing & Booking',
    description: 'Seamless logistical arrangements for your next journey.',
    items: [
      'Flight Bookings',
      'Hotel Bookings',
      'Conference Bookings',
      'Tour & Excursion Bookings',
      'Travel Itinerary Planning',

      'Car Rentals',
    ],
  },
];

const whyChoose = [
  {
    title: 'Ghana-focused Expertise',
    description: 'Deep understanding of the local landscape and embassy requirements in Accra.',
    icon: MapPin,
  },
  {
    title: 'Transparent Consultation',
    description: 'Honest assessment of your profile and success chances without false promises.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable & Flexible',
    description: 'Competitive pricing structures and payment plans designed for our clients.',
    icon: Clock,
  },
  {
    title: 'End-to-End Support',
    description: "We don't just fill forms; we guide you from the first call to your safe arrival.",
    icon: Users,
  },
];

const ebooks = [
  {
    title: 'Canada Visit Visa Application Guide',
    price: 'GH₵ 550',
    paragraph: 'Learn how to apply correctly and avoid common mistakes that lead to rejection.',
    color: 'bg-red-500/10',
  },
  {
    title: 'UK Visit Visa Application Guide',
    price: 'GH₵ 550',
    paragraph: 'Learn how to apply correctly and avoid common mistakes that lead to rejection.',
    color: 'bg-blue-500/10',
  },
];

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] hidden md:block" />
        <div className="max-w-screen-xl mx-auto px-6 xl:container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Globe className="w-3 h-3" />
                Trusted Travel Partner in Ghana
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Travel Abroad <span className="text-blue-600">Made Simple</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Your reliable partner for Visa assistance, Study Abroad programs, and unforgettable
                International Travel packages. We simplify the complex to get you where you want to
                be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendar.app.google/igo7gWv9UcxajYLF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                >
                  Book a Consultation <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://web.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-4 rounded-xl font-bold hover:bg-emerald-100 transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
              <div className="mt-12 flex items-center gap-4 text-slate-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                        alt="User"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  Joined by <span className="text-slate-900 font-bold">2,500+</span>
                  travelers
                </p>
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
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative"
            >
              <div className=" hidden relative z-10 rounded-3xl overflow-hidden shadow-2xl lg:block">
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDI%3D"
                  alt="Travel and Tourism"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <ShieldCheck className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">98% Success Rate</p>
                    <p className="text-slate-500 text-xs">Visa applications processed</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:block border border-slate-100">
                <div className="flex items-center gap-2">
                  <Star className="text-amber-400 fill-amber-400 w-4 h-4" />
                  <span className="font-bold text-slate-900">4.9/5</span>
                  <span className="text-slate-500 text-xs">Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-6 xl:container">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
              Our Expertise
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Comprehensive Travel Solutions
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From individual visa processing to corporate travel arrangements, we provide
              specialized services tailored to meet your global mobility needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 xl:container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img
                    src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400"
                    className="rounded-2xl shadow-lg h-64 w-full object-cover"
                    alt="Travel 1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=400"
                    className="rounded-2xl shadow-lg h-48 w-full object-cover"
                    alt="Travel 2"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=400"
                    className="rounded-2xl shadow-lg h-48 w-full object-cover"
                    alt="Travel 3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400"
                    className="rounded-2xl shadow-lg h-64 w-full object-cover"
                    alt="Travel 4"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay rounded-2xl" />
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
                Why Choose <span className="text-blue-600">ELPA Travel</span>
              </h2>
              <div className="space-y-8">
                {whyChoose.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <item.icon className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ebooks" className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl mx-auto px-6 xl:container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-lg">
              <h2 className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">
                Digital Learning
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Expert Visa Guides</h3>
              <p className="text-slate-400">
                Master the application process yourself with our comprehensive, step-by-step digital
                guides crafted by industry professionals.
              </p>
            </div>
            <button
              onClick={() => navigate('/resources')}
              className="flex items-center cursor-pointer gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors"
            >
              View All Resources <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ebooks.map((ebook, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/50 border border-slate-700 p-8 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div
                  className={`absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-20 ${idx === 0 ? 'bg-red-500' : 'bg-blue-500'}`}
                />
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-44 bg-slate-700 rounded-lg shadow-2xl flex-shrink-0 flex items-center justify-center p-4 border-l-4 border-blue-500">
                    <BookOpen className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold mb-2">{ebook.title}</h4>
                    <p className="text-slate-400 text-sm mb-6">{ebook.paragraph}</p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <span className="text-xl font-bold text-blue-400">{ebook.price}</span>
                      <button className="text-sm bg-white text-slate-900 px-4 py-2 rounded-full  font-bold hover:bg-blue-400 hover:text-white transition-all md:text-xs xl:text-sm ">
                        Coming soon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 xl:container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Success Stories
            </h3>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-600">
              Rated Excellent by hundreds of happy travelers across Ghana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
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
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative"
              >
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-xl">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`}
                      alt={t.name}
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 max-w-screen-xl mx-auto px-6 xl:container">
        <div className="bg-blue-600 rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-8">
              Ready to travel or study abroad?
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
              Join thousands of Ghanaians who have successfully navigated the travel process with
              our expert guidance. Your journey starts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://calendar.app.google/igo7gWv9UcxajYLF8"
                target="_blank"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
              >
                Book a Consultation
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  label: 'Visa Success',
                  value: '98%',
                },
                {
                  label: 'Happy Clients',
                  value: '500+',
                },
                {
                  label: 'Destinations',
                  value: '25+',
                },
                {
                  label: 'Consultants',
                  value: '10+',
                },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
