import { useRef } from 'react';
import { motion } from 'framer-motion';

import {
  Plane,
  MapPin,
  Hotel,
  Shield,
  Camera,
  Car,
  FileText,
  CheckCircle2,
  Heart,
  Users,
  Clock,
  Palmtree,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VisitGhana = () => {
  const navigate = useNavigate();
  const packagesRef = useRef<HTMLDivElement>(null);

  const touristSites = [
    {
      name: 'Cape Coast Castle',
      location: 'Central Region',
      description: 'Historic UNESCO World Heritage Site documenting the trans-Atlantic slave trade',
      image:
        'https://images.unsplash.com/photo-1589362477126-ec659d3c3b1d?auto=format&fit=crop&q=80&w=800',
      category: 'Historical',
    },
    {
      name: 'Kakum National Park',
      location: 'Central Region',
      description:
        'Experience the famous canopy walkway suspended 40 meters above the rainforest floor',
      image:
        'https://images.unsplash.com/photo-1605098293544-25f4c32344c8?auto=format&fit=crop&q=80&w=800',
      category: 'Nature',
    },
    {
      name: 'Kwame Nkrumah Memorial Park',
      location: 'Accra',
      description: "Memorial dedicated to Ghana's first president and Pan-African leader",
      image:
        'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&q=80&w=800',
      category: 'Historical',
    },
    {
      name: 'Mole National Park',
      location: 'Northern Region',
      description:
        "Ghana's largest wildlife refuge with elephants, antelopes, and over 300 bird species",
      image:
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
      category: 'Wildlife',
    },
    {
      name: 'Labadi Beach',
      location: 'Accra',
      description:
        'Popular beach destination with vibrant atmosphere, live music, and local cuisine',
      image:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800',
      category: 'Beach',
    },
    {
      name: 'Wli Waterfalls',
      location: 'Volta Region',
      description: 'Highest waterfall in West Africa, surrounded by lush tropical forest',
      image:
        'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800',
      category: 'Nature',
    },
    {
      name: 'Manhyia Palace Museum',
      location: 'Kumasi',
      description:
        'Seat of the Asante Kingdom showcasing rich cultural heritage and royal artifacts',
      image:
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800',
      category: 'Cultural',
    },
    {
      name: 'Elmina Castle',
      location: 'Central Region',
      description: 'The oldest European building in existence south of the Sahara',
      image:
        'https://images.unsplash.com/photo-1523568129082-87e93d6f75bb?auto=format&fit=crop&q=80&w=800',
      category: 'Historical',
    },
  ];
  const services = [
    {
      icon: FileText,
      title: 'Invitation Letters',
      description: 'Official invitation letters to support your visa application process',
      features: [
        'Verified invitation documentation',
        'Embassy-accepted formats',
        'Fast processing',
        '24-hour turnaround available',
      ],
    },
    {
      icon: Shield,
      title: 'Visa Processing',
      description: 'Complete visa application support for smooth entry into Ghana',
      features: [
        'Document verification',
        'Application submission',
        'Embassy liaison',
        'Status tracking',
      ],
    },
    {
      icon: Hotel,
      title: 'Hotel Bookings',
      description: 'Curated accommodation options from luxury to budget-friendly',
      features: [
        '3-5 star hotel options',
        'Guest houses & apartments',
        'Verified properties',
        'Best rate guarantee',
      ],
    },
    {
      icon: Plane,
      title: 'Flight Reservations',
      description: 'Competitive flight rates to and from Ghana for all airlines',
      features: [
        'Best price comparison',
        'Flexible booking options',
        'Group discounts',
        'Multi-city routes',
      ],
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for peace of mind during your stay',
      features: [
        'Medical coverage',
        'Trip cancellation protection',
        'Lost luggage coverage',
        'Emergency assistance',
      ],
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Safe and comfortable ground transportation throughout your stay',
      features: [
        'Airport pickup & drop-off',
        'Private chauffeur service',
        'Tour bus arrangements',
        'Car rentals',
      ],
    },
  ];
  const packages = [
    {
      name: 'Heritage Explorer',
      duration: '7 Days',
      highlights: [
        'Cape Coast Castle',
        'Elmina Castle',
        'Kakum Canopy Walk',
        'Assin Manso Slave River',
        'Accra city tour',
      ],
      price: 'From $1,200',
      image:
        'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Nature & Wildlife',
      duration: '10 Days',
      highlights: [
        'Mole National Park',
        'Wli Waterfalls',
        'Lake Bosumtwi',
        'Boti Falls',
        'Tafi Atome Monkey Sanctuary',
      ],
      price: 'From $1,800',
      image:
        'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Cultural Immersion',
      duration: '5 Days',
      highlights: [
        'Manhyia Palace',
        'Kejetia Market',
        'Bonwire Kente Village',
        'Kumasi Cultural Centre',
        'Traditional festivals',
      ],
      price: 'From $900',
      image:
        'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Coastal Retreat',
      duration: '6 Days',
      highlights: [
        'Labadi Beach',
        'Kokrobite Beach',
        'Ada Foah',
        'Beach horseback riding',
        'Sunset boat cruise',
      ],
      price: 'From $1,100',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Ancestral Roots Journey',
      duration: '14 Days',
      highlights: [
        'Year of Return sites',
        'Door of No Return',
        'Ancestral home visits',
        'DNA heritage tour',
        'Community engagement',
      ],
      price: 'From $2,500',
      image:
        'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Adventure Seeker',
      duration: '8 Days',
      highlights: [
        'Boti Twin Waterfalls',
        'Aburi Botanical Gardens',
        'Mountain hiking',
        'Zip-lining adventures',
        'Rock climbing',
      ],
      price: 'From $1,400',
      image:
        'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Northern Ghana Discovery',
      duration: '9 Days',
      highlights: [
        'Larabanga Mosque',
        'Paga Crocodile Pond',
        'Bolgatanga craft markets',
        'Mole National Park',
        'Traditional villages',
      ],
      price: 'From $1,600',
      image:
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Culinary & Market Tour',
      duration: '5 Days',
      highlights: [
        'Cooking classes',
        'Makola Market tour',
        'Street food experiences',
        'Local restaurants',
        'Spice farm visits',
      ],
      price: 'From $950',
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Luxury Ghana Experience',
      duration: '12 Days',
      highlights: [
        '5-star accommodations',
        'Private villa stays',
        'Exclusive cultural experiences',
        'Fine dining tours',
        'VIP access events',
      ],
      price: 'From $3,800',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    },
  ];
  const whyChoose = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified partners and 24/7 support throughout your journey',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: "Knowledgeable local guides who bring Ghana's history to life",
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Customized itineraries tailored to your interests and schedule',
    },
  ];
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
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
                <Palmtree className="w-4 h-4" />
                Tourism & Travel
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Visit <span className="text-amber-200">Ghana</span>
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-10">
                Experience the warmth of Ghanaian hospitality. We help diasporans reconnect with
                their roots through seamless travel experiences, comprehensive tour packages, and
                unforgettable journeys across beautiful Ghana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="cursor-pointer bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-xl"
                >
                  Plan Your Trip
                </button>
                <button
                  onClick={() => {
                    packagesRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-pointer bg-white/10 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur"
                >
                  View Packages
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">1000+</div>
                  <div className="text-emerald-200 text-sm">Happy Tourists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-emerald-200 text-sm">Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-emerald-200 text-sm">Support</div>
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
                src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&q=80&w=800"
                alt="Ghana Tourism"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {whyChoose.map((item, idx) => (
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
                className="flex items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Everything You Need for Your Ghana Trip
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From invitation letters, visa application support, airport pickup, tour arrangements,
              we handle every detail of your journey to ensure a smooth and memorable experience.
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
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">
              Explore Ghana
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Must-Visit Tourist Sites
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover Ghana's rich history, vibrant culture, stunning nature, and beautiful
              beaches. From ancient castles to wildlife reserves, there's something for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {touristSites.map((site, idx) => (
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                      {site.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h4 className="text-white font-bold text-lg mb-1">{site.name}</h4>
                    <div className="flex items-center gap-1 text-white/90">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{site.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-slate-600 text-sm">{site.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section ref={packagesRef} className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">
              Travel Packages
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Curated Ghana Tour Packages
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose from our carefully designed tour packages or let us create a custom itinerary
              just for you.
            </p>
          </div>

          {/* What's Included - Highlight Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border-2 border-emerald-200 rounded-3xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  ✨ Every Package Includes Premium Services
                </h4>
                <p className="text-slate-600">
                  All our tour packages come with comprehensive services for a hassle-free
                  experience
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Car className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-center mb-2">Car Rental</h5>
                  <p className="text-sm text-slate-600 text-center">
                    Modern, air-conditioned vehicle for your entire trip duration
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-center mb-2">Personal Driver</h5>
                  <p className="text-sm text-slate-600 text-center">
                    Professional, licensed driver who knows Ghana inside out
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Camera className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-center mb-2">
                    Personal Photographer
                  </h5>
                  <p className="text-sm text-slate-600 text-center">
                    Capture every moment with professional photography services
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm font-semibold text-emerald-700">
                  🎁 These premium services are included in all package prices — no hidden fees!
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
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
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-1">{pkg.name}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h5 className="font-bold text-slate-900 mb-4">Package Highlights:</h5>
                  <ul className="space-y-3 mb-6">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                        Starting from
                      </p>
                      <p className="text-2xl font-bold text-emerald-600">{pkg.price}</p>
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className="cursor-pointer bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Need something different? We can create a custom package for you!
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
            >
              Request Custom Package
            </button>
          </div>
        </div>
      </section>

      {/* Additional Services Banner */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-amber-600 text-white">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Complete Travel Care</h2>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              From the moment you book until you return home, we're with you every step of the way.
              Airport pickup, local SIM cards, tour guides, emergency assistance – we've got you
              covered.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                {
                  icon: Car,
                  label: 'Airport Pickup',
                },
                {
                  icon: Shield,
                  label: 'Travel Insurance',
                },
                {
                  icon: Users,
                  label: 'Tour Guides',
                },
                {
                  icon: Camera,
                  label: 'Photo Tours',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <item.icon className="w-10 h-10 mx-auto mb-3" />
                  <p className="font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Experience Ghana?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Let us help you plan an unforgettable journey to the Gateway of West Africa. Book your
              consultation today!
            </p>
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl">
              Start Planning Your Trip
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitGhana;
