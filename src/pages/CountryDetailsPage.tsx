import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { countries, countryData } from '../data/countries';
import {
  ArrowLeft,
  GraduationCap,
  DollarSign,
  Building2,
  CheckCircle2,
  BookOpen,
  Award,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

const CountryDetailsPage = () => {
  const navigate = useNavigate();
  const { countryName } = useParams<{ countryName?: string }>();
  const [currentCountry, setCurrentCountry] = useState<string | undefined>(
    countryName?.toLowerCase()
  );

  const validCountries = [
    'canada',
    'china',
    'uk',
    'usa',
    'australia',
    'poland',
    'germany',
    'czech',
    'austria',
    'belgium',
    'finland',
    'italy',
    'netherlands',
    'sweden',
  ];
  const isValidCountry = currentCountry ? validCountries.includes(currentCountry) : false;

  useEffect(() => {
    if (!currentCountry) return;
    const id = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    return () => cancelAnimationFrame(id);
  }, [currentCountry]);

  const data = countryData[currentCountry ?? 'canada'];
  const handleCountryChange = (country: string) => {
    setCurrentCountry(country);
    navigate(`/study-abroad/countries/${country}`);
  };
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90" />
        <div className="max-w-screen-xl xl:container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/study-abroad')}
            className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Study Abroad</span>
          </button>
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
              <div className="flex items-center gap-4 mb-6">
                {isValidCountry && <span className="text-7xl">{data.flag}</span>}
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold">
                    Study {isValidCountry ? `in ${data.name}` : 'Abroad'}
                  </h1>
                  {isValidCountry && <p className="text-xl text-blue-100 mt-2">{data.tagline}</p>}
                </div>
              </div>

              {isValidCountry && (
                <p className="text-md text-blue-50 leading-relaxed mb-8">{data.description}</p>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    navigate('/contact');
                  }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
                >
                  Get Free Consultation
                </button>
                <a
                  href="mailto:info@elpatravelconsult.com"
                  className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact to Apply
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">Explore Other Countries</h3>
              <p className="text-blue-100 mb-6">
                Compare study destinations and find your perfect match
              </p>
              <div className="relative max-h-[400px]">
                <div
                  className="space-y-3 overflow-y-scroll pr-4 max-h-[400px]"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {countries.map(country => (
                    <button
                      key={country.value}
                      onClick={() => handleCountryChange(country.value)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                        currentCountry === country.value
                          ? 'bg-white text-blue-600 shadow-lg'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-bold text-lg">{country.label}</span>
                      {currentCountry === country.value && (
                        <CheckCircle2 className="w-5 h-5 ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="absolute top-0 right-1 h-full w-1 bg-white/20 rounded-full pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {isValidCountry && (
        <div>
          <section className="py-16 bg-slate-50">
            <div className="max-w-screen-xl xl:container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                Why Study in {data.name}?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {data.benefits.map((benefit: string, idx: number) => (
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
                    className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
                  >
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-3" />
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-screen-xl xl:container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Study Levels & Tuition Rates
                  </h2>
                  <p className="text-slate-600 text-lg">
                    Choose from various academic levels with competitive tuition rates
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {data.studyLevels.map((level: any, idx: number) => (
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
                      className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{level.level}</h3>
                          <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{level.duration}</span>
                          </div>
                        </div>
                        <GraduationCap className="w-10 h-10 text-blue-500" />
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
                          <DollarSign className="w-5 h-5" />
                          <span>{level.tuition}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-600 text-white p-6 rounded-2xl">
                    <h4 className="font-bold text-lg mb-2">Average Tuition Range</h4>
                    <p className="text-2xl font-extrabold">{data.tuitionRange}</p>
                  </div>
                  <div className="bg-purple-600 text-white p-6 rounded-2xl">
                    <h4 className="font-bold text-lg mb-2">Living Costs</h4>
                    <p className="text-2xl font-extrabold">{data.livingCost}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-slate-50">
            <div className="max-w-screen-xl xl:container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                  Popular Courses & Programs
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {data.popularPrograms.map((program: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: idx * 0.05,
                      }}
                      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100"
                    >
                      <BookOpen className="w-8 h-8 text-blue-500 mb-3" />
                      <h3 className="font-bold text-slate-900">{program}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-screen-xl xl:container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                  Top Universities in {data.name}
                </h2>
                <div className="space-y-4">
                  {data.topUniversities.map((uni: any, idx: number) => (
                    <motion.div
                      key={idx}
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
                      transition={{
                        delay: idx * 0.1,
                      }}
                      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">{uni.name}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="flex items-center gap-1 text-slate-600 text-sm">
                              <MapPin className="w-4 h-4" />
                              <span>{uni.location}</span>
                            </div>
                            <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                              <Award className="w-4 h-4" />
                              <span>{uni.ranking}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-slate-900 text-white">
            <div className="max-w-screen-xl xl:container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Student Visa Requirements
                </h2>
                <p className="text-slate-400 text-center mb-12">
                  General requirements for obtaining a student visa to {data.name}
                </p>

                <div className="bg-slate-800 p-8 rounded-3xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.requirements.map((req: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
            <div className="max-w-screen-xl xl:container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Study in {data.name}?
                </h2>
                <p className="text-xl text-blue-100 mb-10">
                  Book a free consultation with our experts and let us guide you through every step
                  of your study abroad journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button
                    onClick={() => {
                      navigate('/contact');
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                    className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
                  >
                    Book Free Consultation
                  </button>
                  <a
                    href="mailto:info@elpatravelconsult.com"
                    className="bg-white/10 border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us Now
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+44 7453 594805</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>info@elpatravelconsult.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CountryDetailsPage;
