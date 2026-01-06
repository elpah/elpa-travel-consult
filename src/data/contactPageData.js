import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Office',
    details: ['', '', ''],
    action: 'Get Directions',
    link: '',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+44 7453 594805', 'Mon - Fri: 9AM - 6PM'],
    action: 'Call Now',
    link: 'tel:+447453594805',
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
    link: 'mailto:info@elpatravelconsult.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['+44 7453 594805', 'Instant messaging support', 'Available 24/7'],
    action: 'Chat Now',
    link: 'https://wa.me/447453594805',
  },
];
export const faqs = [
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
];
