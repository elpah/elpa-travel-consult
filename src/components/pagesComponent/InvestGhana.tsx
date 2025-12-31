import { motion } from 'framer-motion';
import {
  TrendingUp,
  MapPin,
  Sprout,
  Building,
  Factory,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Shield,
  Users,
  FileText,
  Globe,
} from 'lucide-react';
export const InvestGhana = () => {
  const investmentCategories = [
    {
      icon: MapPin,
      title: 'Land Acquisition',
      description: 'Prime plots in developing areas with high appreciation potential',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      opportunities: [
        {
          name: 'Residential Plots - Accra Suburbs',
          size: '0.5 - 2 acres',
          price: '$15,000 - $80,000',
        },
        {
          name: 'Commercial Land - Tema',
          size: '1 - 5 acres',
          price: '$50,000 - $300,000',
        },
        {
          name: 'Agricultural Land - Eastern Region',
          size: '5 - 50 acres',
          price: '$20,000 - $200,000',
        },
        {
          name: 'Beachfront Property - Ada',
          size: '0.25 - 1 acre',
          price: '$40,000 - $150,000',
        },
      ],
    },
    {
      icon: Sprout,
      title: 'Agricultural Investments',
      description: "Profitable farming ventures in Ghana's fertile lands",
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      opportunities: [
        {
          name: 'Cocoa Plantation',
          size: '10+ acres',
          price: '$30,000 - $100,000',
          roi: '15-20% annually',
        },
        {
          name: 'Palm Oil Farm',
          size: '20+ acres',
          price: '$50,000 - $200,000',
          roi: '18-25% annually',
        },
        {
          name: 'Cashew Farming',
          size: '15+ acres',
          price: '$25,000 - $80,000',
          roi: '20-30% annually',
        },
        {
          name: 'Poultry Farm Setup',
          size: '2+ acres',
          price: '$40,000 - $120,000',
          roi: '25-35% annually',
        },
      ],
    },
    {
      icon: Building,
      title: 'Real Estate Development',
      description: 'Build rental properties or commercial spaces',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      opportunities: [
        {
          name: 'Apartment Complex (4-8 units)',
          size: 'Varies',
          price: '$150,000 - $500,000',
          roi: '12-18% annually',
        },
        {
          name: 'Commercial Plaza',
          size: 'Varies',
          price: '$200,000 - $800,000',
          roi: '15-22% annually',
        },
        {
          name: 'Guest House/Hotel',
          size: 'Varies',
          price: '$100,000 - $400,000',
          roi: '18-28% annually',
        },
        {
          name: 'Residential Development',
          size: 'Varies',
          price: '$250,000+',
          roi: '20-30% on sale',
        },
      ],
    },
    {
      icon: Factory,
      title: 'Business & Manufacturing',
      description: 'Establish or invest in local businesses and production',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      opportunities: [
        {
          name: 'Food Processing Plant',
          size: 'Industrial',
          price: '$80,000 - $300,000',
          roi: '20-35% annually',
        },
        {
          name: 'Import/Export Business',
          size: 'N/A',
          price: '$30,000 - $150,000',
          roi: '25-40% annually',
        },
        {
          name: 'Manufacturing Facility',
          size: 'Industrial',
          price: '$100,000+',
          roi: '18-30% annually',
        },
        {
          name: 'Tourism Business',
          size: 'Varies',
          price: '$50,000 - $200,000',
          roi: '20-35% annually',
        },
      ],
    },
  ] as any[];
  const services = [
    {
      icon: Shield,
      title: 'Legal Due Diligence',
      description: 'Complete legal verification, title searches, and document authentication',
    },
    {
      icon: Users,
      title: 'Local Partners',
      description: 'Connect with trusted local partners, managers, and business consultants',
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Assistance with all paperwork, permits, registrations, and compliance',
    },
    {
      icon: Globe,
      title: 'Investment Management',
      description: 'Ongoing support, reporting, and management of your Ghana investments',
    },
  ] as any[];
  const benefits = [
    'Ghana ranked #1 for ease of doing business in West Africa',
    'Stable democracy with investor-friendly policies',
    'Growing economy with 6-7% annual GDP growth',
    'English-speaking country with common law system',
    'Gateway to West African market of 400+ million people',
    'Foreign land ownership allowed in most regions',
    'Tax incentives for investors in priority sectors',
    'Strong agricultural sector with year-round production',
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-screen-xl xl:container  mx-auto ">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              High Growth Investment Opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Invest in <span className="text-emerald-600">Ghana</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Unlock wealth-building opportunities in one of Africa's fastest-growing economies.
              From prime land to profitable farms, we guide your investment journey every step of
              the way.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Why Invest in Ghana?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-screen-xl xl:container  mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Investment Opportunities
          </h2>

          <div className="space-y-12">
            {investmentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`${category.color} p-6 border-b`}>
                  <div className="flex items-center gap-4">
                    <div className={`${category.iconColor} p-3 bg-white rounded-xl`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                      <p className="text-slate-600">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.opportunities.map((opp, oppIndex) => (
                      <div
                        key={oppIndex}
                        className="border border-slate-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-md transition-all"
                      >
                        <h4 className="font-bold text-slate-900 mb-2">{opp.name}</h4>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>
                            <span className="font-semibold">Size:</span> {opp.size}
                          </p>
                          <p>
                            <span className="font-semibold">Investment:</span> {opp.price}
                          </p>
                          {opp.roi && (
                            <p className="text-emerald-600 font-semibold">
                              <span className="text-slate-600">ROI:</span> {opp.roi}
                            </p>
                          )}
                        </div>
                        <button className="mt-4 w-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-screen-xl xl:container  mx-auto ">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Complete Investment Support
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We provide end-to-end support to ensure your investment is secure, legal, and profitable
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-screen-xl xl:container  mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-center text-white shadow-2xl"
          >
            <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold mb-4">Ready to Build Wealth in Ghana?</h2>
            <p className="text-xl mb-8 text-emerald-50">
              Schedule a free consultation to discuss your investment goals and explore
              opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendar.app.google/igo7gWv9UcxajYLF8"
                target="_blank"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all hover:shadow-xl flex items-center justify-center gap-2"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <button className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-emerald-600 transition-all">
                Download Investment Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
