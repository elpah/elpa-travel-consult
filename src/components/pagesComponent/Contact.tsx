import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['ELPA Travel Consult', 'East Legon Area', 'Accra, Ghana'],
      action: 'Get Directions',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+233 (0) 50 000 0000', '+233 (0) 24 000 0000', 'Mon - Fri: 9AM - 6PM'],
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@elpatravelconsult.com',
        'support@elpatravelconsult.com',
        'We reply within 24 hours',
      ],
      action: 'Send Email',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+233 (0) 50 000 0000', 'Instant messaging support', 'Available 24/7'],
      action: 'Chat Now',
    },
  ] as any[];
  const faqs = [
    {
      question: 'How long does visa processing take?',
      answer:
        'Processing times vary by destination, typically 2-4 weeks for most countries. We provide detailed timelines during consultation.',
    },
    {
      question: 'What are your consultation fees?',
      answer:
        'Initial consultations are FREE. Service fees vary by package and are transparently communicated upfront.',
    },
    {
      question: 'Do you guarantee visa approval?',
      answer:
        'While we have a 98% success rate, no agency can guarantee approval as final decisions rest with embassies. We provide honest assessments.',
    },
    {
      question: 'Can you help with urgent travel?',
      answer:
        'Yes! We offer expedited processing services for urgent travel needs. Contact us immediately for availability.',
    },
  ] as any[];
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
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
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Let's Start Your Journey</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Have questions? Need guidance? Our expert team is ready to help you navigate your
              travel and visa needs. Reach out today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendar.app.google/igo7gWv9UcxajYLF8"
                target="_blank"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
              >
                Book Free Consultation
              </a>
              <a
                href="https://web.whatsapp.com"
                target="_blank"
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {contactInfo.map((info, idx) => (
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
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <info.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  {info.action} →
                </button>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
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
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-emerald-900 mb-2">Message Sent!</h3>
                    <p className="text-emerald-700">We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="+233 50 000 0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="visa">Visa Assistance</option>
                        <option value="study">Study Abroad</option>
                        <option value="travel">Travel Packages</option>
                        <option value="ticketing">Flight & Hotel Booking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder="Tell us about your travel plans..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
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
              className="space-y-8"
            >
              <div className="bg-blue-600 text-white p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      day: 'Monday - Friday',
                      hours: '9:00 AM - 6:00 PM',
                    },
                    {
                      day: 'Saturday',
                      hours: '10:00 AM - 4:00 PM',
                    },
                    {
                      day: 'Sunday',
                      hours: 'Closed',
                    },
                  ].map((schedule, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center pb-4 border-b border-blue-500 last:border-0"
                    >
                      <span className="font-semibold">{schedule.day}</span>
                      <span className="text-blue-100">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-blue-500 p-6 rounded-2xl">
                  <Calendar className="w-8 h-8 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Book an Appointment</h4>
                  <p className="text-blue-100 text-sm mb-4">
                    Schedule a one-on-one consultation with our experts.
                  </p>
                  <a
                    href="https://calendar.app.google/igo7gWv9UcxajYLF8"
                    target="_blank"
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all w-full"
                  >
                    Schedule Now
                  </a>
                </div>
              </div>

              <div className="bg-slate-100 rounded-3xl overflow-hidden h-80">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 font-semibold">Interactive Map</p>
                    <p className="text-slate-500 text-sm">East Legon Area, Accra</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl xl:container  mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">FAQs</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Contact Our Support Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
