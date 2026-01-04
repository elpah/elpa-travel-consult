import { values, milestones, team } from '../data/aboutPageData';
import { Target, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 xl:container ">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
              About <span className="text-blue-600">ELPA Travel Consult</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We are Ghana's premier travel and visa consultancy firm, dedicated to making your
              international travel and study abroad dreams a seamless reality.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600 text-sm uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-slate-600 text-sm uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-slate-600 text-sm uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-slate-600 text-sm uppercase tracking-wider">Destinations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className=" max-w-screen-xl xl:container  mx-auto px-6">
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
              <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Empowering Ghanaians to Explore the World
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  ELPA Travel Consult was born from a simple observation: too many Ghanaians faced
                  unnecessary obstacles in pursuing their international travel and education dreams.
                </p>
                <p>
                  Our founder, El-Pachris Obeng, witnessed firsthand the confusion and frustration
                  caused by complex visa processes and the lack of reliable guidance. He envisioned
                  a company that would bridge this gap with expertise, transparency, and genuine
                  care.
                </p>
                <p>
                  Today, we've helped over 2,500 Ghanaians successfully navigate visa applications,
                  secure admission to top international institutions, and create unforgettable
                  travel experiences. Our 98% success rate speaks to our commitment to excellence.
                </p>
                <p className="font-semibold text-slate-900">
                  We don't just process paperwork, ...we transform dreams into boarding passes.
                </p>
              </div>
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
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <Award className="w-12 h-12 mb-4" />
                <p className="font-bold text-lg mb-2">Industry Recognition</p>
                <p className="text-blue-100 text-sm">
                  Awarded Best Travel Consultancy in Ghana 2022
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
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
              className="bg-white p-12 rounded-3xl shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide transparent, reliable, and comprehensive travel and visa consultancy
                services that empower Ghanaians to pursue international opportunities with
                confidence and ease.
              </p>
            </motion.div>

            <motion.div
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
                delay: 0.1,
              }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 rounded-3xl shadow-lg text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                To become Africa's most trusted travel consultancy by 2035, recognized for our
                unwavering commitment to client success and innovation in global mobility solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
              Our Values
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              What We Stand For
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every client interaction we have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
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
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">
              Our Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Milestones & Achievements</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, idx) => (
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
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {milestone.year}
                  </div>
                  {idx !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-600/30 mt-4" />
                  )}
                </div>
                <div className="pb-12">
                  <h4 className="text-2xl font-bold mb-2">{milestone.title}</h4>
                  <p className="text-slate-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
              Meet the Team
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              The Experts Behind Your Journey
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our diverse team of travel consultants, visa specialists, and customer success
              managers are dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
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
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-square bg-slate-100 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Why Choose ELPA Travel?
              </h3>
              <p className="text-slate-600 text-lg">
                We go beyond paperwork to provide a holistic, supportive experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Personalized consultation tailored to your unique situation',
                'Transparent pricing with no hidden fees',
                'Expert knowledge of embassy requirements and processes',
                '98% visa approval success rate',
                'End-to-end support from application to departure',
                'Flexible payment plans for all budgets',
                'Comprehensive travel insurance options',
                'Post-arrival support and guidance',
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: idx * 0.05,
                  }}
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
