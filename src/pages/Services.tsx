import { services, whyChoose } from '../data/servicesPageData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
type ServiceDetailCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  price: string;
  handleClick: () => void;
};

const ServiceDetailCard = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  handleClick,
}: ServiceDetailCardProps) => (
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
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="text-blue-600 w-10 h-10" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>

    <div className="mb-6">
      <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">What's Included:</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Starting from</p>
        <p className="text-2xl font-bold text-blue-600">{price}</p>
      </div>
      <button
        className=" cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
        onClick={handleClick}
      >
        Get Started <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
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
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Comprehensive travel solutions designed to make your international journey smooth,
              successful, and stress-free. From visa processing to study abroad support, we've got
              you covered.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ServiceDetailCard key={idx} {...service} handleClick={() => navigate('/contact')} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">
              How We Work
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Our Simple 4-Step Process</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We've streamlined our workflow to ensure a hassle-free experience from first contact
              to successful completion.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Free initial assessment of your travel needs and eligibility',
              },
              {
                step: '02',
                title: 'Documentation',
                description: 'Guided document preparation and requirement checklist',
              },
              {
                step: '03',
                title: 'Processing',
                description: 'Application submission and tracking with embassy',
              },
              {
                step: '04',
                title: 'Success',
                description: 'Visa approval and pre-departure support',
              },
            ].map((item, idx) => (
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
                className="text-center relative"
              >
                <div className="text-6xl font-bold text-blue-600/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-blue-600/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-blue-100 text-lg mb-10">
                Book a free consultation with our experts and take the first step toward your
                international journey.
              </p>
              <a
                href="https://calendar.app.google/igo7gWv9UcxajYLF8"
                target="_blank"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
