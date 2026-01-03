import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    'uk',
    'usa',
    'australia',
    'poland',
    'germany',
    'czech',
    'austria',
    'belgium',
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

  const countryData: Record<string, any> = {
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      tagline: 'World-Class Education & Immigration Pathways',
      heroImage:
        'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1200',
      description:
        'Canada offers exceptional education quality, multicultural environment, and clear pathways to permanent residence. With affordable tuition compared to other English-speaking countries and the opportunity to work while studying, Canada is an ideal destination for international students.',
      benefits: [
        'Work up to 20 hours/week during studies',
        'Post-Graduation Work Permit (PGWP) for up to 3 years',
        'Pathway to Permanent Residence',
        'High quality of life and safety',
        'Multicultural and welcoming society',
        'Affordable compared to USA and UK',
      ],
      studyLevels: [
        {
          level: 'Certificate/Diploma',
          duration: '6 months - 2 years',
          tuition: '$8,000 - $15,000 CAD/year',
        },
        {
          level: "Bachelor's Degree",
          duration: '3-4 years',
          tuition: '$15,000 - $35,000 CAD/year',
        },
        {
          level: "Master's Degree",
          duration: '1-2 years',
          tuition: '$18,000 - $40,000 CAD/year',
        },
        {
          level: 'PhD',
          duration: '4-6 years',
          tuition: '$10,000 - $25,000 CAD/year',
        },
      ],
      popularPrograms: [
        'Computer Science & IT',
        'Business Administration',
        'Engineering',
        'Healthcare & Nursing',
        'Hospitality & Tourism',
        'Data Science & AI',
      ],
      topUniversities: [
        {
          name: 'University of Toronto',
          location: 'Toronto, ON',
          ranking: 'Top 20 Globally',
        },
        {
          name: 'University of British Columbia',
          location: 'Vancouver, BC',
          ranking: 'Top 40 Globally',
        },
        {
          name: 'McGill University',
          location: 'Montreal, QC',
          ranking: 'Top 50 Globally',
        },
        {
          name: 'University of Waterloo',
          location: 'Waterloo, ON',
          ranking: 'Top CS Program',
        },
        {
          name: 'University of Alberta',
          location: 'Edmonton, AB',
          ranking: 'Top 100 Globally',
        },
      ],
      tuitionRange: '$8,000 - $40,000 CAD/year',
      livingCost: '$10,000 - $15,000 CAD/year',
      requirements: [
        'Valid passport',
        'Letter of acceptance from DLI',
        'Proof of financial support (~$20,000 CAD)',
        'English proficiency (IELTS 6.0-6.5)',
        'Medical examination',
        'Clean criminal record',
      ],
    },
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      tagline: 'Historic Excellence & Global Recognition',
      description:
        "The UK is home to some of the world's oldest and most prestigious universities. With shorter degree durations, rich cultural heritage, and the new Graduate Route visa, the UK offers excellent value and opportunities for international students.",
      benefits: [
        "Shorter degree programs (3-year Bachelor's, 1-year Master's)",
        '2-year post-study work visa (Graduate Route)',
        'World-renowned universities',
        'Rich history and cultural diversity',
        'Gateway to Europe',
        'Strong alumni networks globally',
      ],
      studyLevels: [
        {
          level: 'Foundation Year',
          duration: '1 year',
          tuition: '£10,000 - £18,000/year',
        },
        {
          level: "Bachelor's Degree",
          duration: '3 years',
          tuition: '£15,000 - £35,000/year',
        },
        {
          level: "Master's Degree",
          duration: '1 year',
          tuition: '£18,000 - £40,000/year',
        },
        {
          level: 'PhD',
          duration: '3-4 years',
          tuition: '£15,000 - £30,000/year',
        },
      ],
      popularPrograms: [
        'Law & Legal Studies',
        'Business & Management',
        'Computer Science',
        'Engineering',
        'Medicine & Healthcare',
        'Arts & Humanities',
      ],
      topUniversities: [
        {
          name: 'University of Oxford',
          location: 'Oxford',
          ranking: '#1-2 Globally',
        },
        {
          name: 'University of Cambridge',
          location: 'Cambridge',
          ranking: '#1-2 Globally',
        },
        {
          name: 'Imperial College London',
          location: 'London',
          ranking: 'Top 10 Globally',
        },
        {
          name: 'University of Edinburgh',
          location: 'Edinburgh',
          ranking: 'Top 20 Globally',
        },
        {
          name: 'University of Manchester',
          location: 'Manchester',
          ranking: 'Top 30 Globally',
        },
      ],
      tuitionRange: '£10,000 - £40,000/year',
      livingCost: '£12,000 - £18,000/year',
      requirements: [
        'Valid passport',
        'CAS from UK university',
        'Proof of funds (tuition + living costs)',
        'English proficiency (IELTS 6.0-7.0)',
        'TB test certificate',
        'Academic transcripts',
      ],
    },

    usa: {
      name: 'United States',
      flag: '🇺🇸',
      tagline: 'Innovation Hub & Career Opportunities',

      description:
        'The USA hosts the highest number of top-ranked universities globally and is the epicenter of innovation and technology. With OPT work authorization and countless scholarship opportunities, the USA offers unmatched career prospects.',
      benefits: [
        'Home to most top-ranked universities',
        'OPT work permit (1-3 years)',
        'Abundant scholarship opportunities',
        'Cutting-edge research facilities',
        'Diverse campus culture',
        'Strong industry connections',
      ],
      studyLevels: [
        {
          level: 'Associate Degree',
          duration: '2 years',
          tuition: '$8,000 - $20,000/year',
        },
        {
          level: "Bachelor's Degree",
          duration: '4 years',
          tuition: '$20,000 - $60,000/year',
        },
        {
          level: "Master's Degree",
          duration: '2 years',
          tuition: '$25,000 - $70,000/year',
        },
        {
          level: 'PhD',
          duration: '5-7 years',
          tuition: 'Often funded',
        },
      ],
      popularPrograms: [
        'Computer Science & Engineering',
        'Business Administration (MBA)',
        'Data Science & Analytics',
        'Medicine & Healthcare',
        'Finance & Economics',
        'Artificial Intelligence',
      ],
      topUniversities: [
        {
          name: 'Massachusetts Institute of Technology',
          location: 'Cambridge, MA',
          ranking: '#1 Globally',
        },
        {
          name: 'Stanford University',
          location: 'Stanford, CA',
          ranking: 'Top 3 Globally',
        },
        {
          name: 'Harvard University',
          location: 'Cambridge, MA',
          ranking: 'Top 3 Globally',
        },
        {
          name: 'UC Berkeley',
          location: 'Berkeley, CA',
          ranking: 'Top 10 Globally',
        },
        {
          name: 'Carnegie Mellon University',
          location: 'Pittsburgh, PA',
          ranking: 'Top CS Program',
        },
      ],
      tuitionRange: '$8,000 - $70,000/year',
      livingCost: '$15,000 - $25,000/year',
      requirements: [
        'Valid passport',
        'I-20 form from university',
        'SEVIS fee payment',
        'English proficiency (TOEFL 80-100)',
        'Standardized tests (SAT/GRE/GMAT)',
        'Financial proof for F-1 visa',
      ],
    },

    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      tagline: 'Quality Education & High Living Standards',
      description:
        'Australia combines world-class education with an exceptional lifestyle. With its sunny climate, friendly culture, and strong job market, Australia is increasingly popular among international students seeking both education and quality of life.',
      benefits: [
        'Part-time work rights (up to 48 hours/fortnight)',
        'Post-study work visa (2-4 years)',
        'High quality of life',
        'Safe and welcoming environment',
        'Skilled migration opportunities',
        'Beautiful weather and lifestyle',
      ],
      studyLevels: [
        {
          level: 'TAFE/Vocational',
          duration: '1-2 years',
          tuition: '$15,000 - $25,000 AUD/year',
        },
        {
          level: "Bachelor's Degree",
          duration: '3 years',
          tuition: '$20,000 - $45,000 AUD/year',
        },
        {
          level: "Master's Degree",
          duration: '1.5-2 years',
          tuition: '$25,000 - $50,000 AUD/year',
        },
        {
          level: 'PhD',
          duration: '3-4 years',
          tuition: '$20,000 - $40,000 AUD/year',
        },
      ],
      popularPrograms: [
        'Engineering',
        'Business & Management',
        'Information Technology',
        'Healthcare & Nursing',
        'Environmental Science',
        'Hospitality & Tourism',
      ],
      topUniversities: [
        {
          name: 'University of Melbourne',
          location: 'Melbourne, VIC',
          ranking: 'Top 15 Globally',
        },
        {
          name: 'Australian National University',
          location: 'Canberra, ACT',
          ranking: 'Top 30 Globally',
        },
        {
          name: 'University of Sydney',
          location: 'Sydney, NSW',
          ranking: 'Top 40 Globally',
        },
        {
          name: 'University of New South Wales',
          location: 'Sydney, NSW',
          ranking: 'Top 50 Globally',
        },
        {
          name: 'Monash University',
          location: 'Melbourne, VIC',
          ranking: 'Top 60 Globally',
        },
      ],
      tuitionRange: '$15,000 - $50,000 AUD/year',
      livingCost: '$20,000 - $27,000 AUD/year',
      requirements: [
        'Valid passport',
        'CoE from Australian university',
        'Overseas Student Health Cover (OSHC)',
        'English proficiency (IELTS 6.0-6.5)',
        'Financial capacity evidence',
        'GTE (Genuine Temporary Entrant) statement',
      ],
    },
    germany: {
      name: 'Germany',
      flag: '🇩🇪',
      tagline: 'High-Quality Education & Strong Economy',
      description:
        'Germany is known for its excellent education system, tuition-free or low-cost public universities, and strong economy. With many English-taught programs and a welcoming environment, it is a top choice for international students.',
      benefits: [
        'Low or no tuition fees at public universities',
        'Affordable living costs in many cities',
        'High standard of education and research',
        'Many programs taught in English',
        'Central European location with travel opportunities',
        'Strong job market for graduates',
      ],
      studyLevels: [
        { level: "Bachelor's Degree", duration: '3-4 years', tuition: '€0 - €3,000/year' },
        { level: "Master's Degree", duration: '1.5-2 years', tuition: '€0 - €4,000/year' },
        { level: 'PhD', duration: '3-5 years', tuition: 'Often tuition-free' },
      ],
      popularPrograms: [
        'Engineering & Technology',
        'Computer Science',
        'Business & Economics',
        'Medicine & Healthcare',
        'Arts & Design',
        'Natural Sciences',
      ],
      topUniversities: [
        { name: 'Technical University of Munich', location: 'Munich', ranking: 'Top in Germany' },
        { name: 'LMU Munich', location: 'Munich', ranking: 'Research Excellence' },
        { name: 'Heidelberg University', location: 'Heidelberg', ranking: 'Top German University' },
        { name: 'Humboldt University', location: 'Berlin', ranking: 'Prestigious History' },
        { name: 'RWTH Aachen University', location: 'Aachen', ranking: 'Engineering Focus' },
        { name: 'University of Erfurt', location: 'Erfurt', ranking: 'Top German University' }, // Added
      ],
      tuitionRange: '€0 - €4,000/year',
      livingCost: '€700 - €1,200/month',
      requirements: [
        'Valid passport',
        'Admission letter from German university',
        'Proof of financial means (~€10,332/year)',
        'English or German proficiency (IELTS/TOEFL or TestDaF)',
        'Health insurance',
        'Academic certificates',
      ],
    },

    poland: {
      name: 'Poland',
      flag: '🇵🇱',
      tagline: 'Affordable European Education',
      description:
        'Poland offers excellent European education at highly affordable costs. With growing English-taught programs, rich history, and central European location, Poland is becoming increasingly popular among international students.',
      benefits: [
        'Very affordable tuition fees',
        'Low cost of living',
        'Central European location',
        'Growing English-taught programs',
        'EU member state benefits',
        'Rich cultural heritage',
      ],
      studyLevels: [
        {
          level: "Bachelor's Degree",
          duration: '3-3.5 years',
          tuition: '€2,000 - €4,000/year',
        },
        {
          level: "Master's Degree",
          duration: '1.5-2 years',
          tuition: '€2,500 - €5,000/year',
        },
        {
          level: 'PhD',
          duration: '3-4 years',
          tuition: '€3,000 - €6,000/year',
        },
      ],
      popularPrograms: [
        'Medicine & Healthcare',
        'Engineering',
        'Computer Science',
        'Business & Economics',
        'Architecture',
        'Arts & Design',
      ],
      topUniversities: [
        {
          name: 'University of Warsaw',
          location: 'Warsaw',
          ranking: 'Top Polish University',
        },
        {
          name: 'Jagiellonian University',
          location: 'Kraków',
          ranking: '500+ Years Old',
        },
        {
          name: 'Warsaw University of Technology',
          location: 'Warsaw',
          ranking: 'Top Engineering',
        },
        {
          name: 'AGH University',
          location: 'Kraków',
          ranking: 'Top Technical',
        },
        {
          name: 'Medical University of Warsaw',
          location: 'Warsaw',
          ranking: 'Top Medical',
        },
      ],
      tuitionRange: '€2,000 - €6,000/year',
      livingCost: '€400 - €700/month',
      requirements: [
        'Valid passport',
        'Admission letter from university',
        'Proof of financial means',
        'English proficiency (IELTS 6.0)',
        'Health insurance',
        'Academic certificates',
      ],
    },
    austria: {
      name: 'Austria',
      flag: '🇦🇹',
      tagline: 'High-Quality Education in Central Europe',
      description:
        'Austria offers high-quality education, a rich cultural heritage, and a safe, student-friendly environment. English-taught programs are growing, and students benefit from affordable tuition and excellent public services.',
      benefits: [
        'Affordable tuition fees',
        'Low living costs',
        'High standard of education',
        'Growing number of English-taught programs',
        'Safe and welcoming environment',
        'Cultural and historical richness',
      ],
      studyLevels: [
        { level: "Bachelor's Degree", duration: '3 years', tuition: '€1,500 - €3,000/year' },
        { level: "Master's Degree", duration: '1.5-2 years', tuition: '€1,500 - €4,000/year' },
        { level: 'PhD', duration: '3-4 years', tuition: '€1,500 - €4,500/year' },
      ],
      popularPrograms: [
        'Engineering & Technology',
        'Business & Economics',
        'Computer Science',
        'Arts & Design',
        'Medicine & Healthcare',
        'Architecture',
      ],
      topUniversities: [
        { name: 'University of Vienna', location: 'Vienna', ranking: 'Top in Austria' },
        {
          name: 'Vienna University of Technology',
          location: 'Vienna',
          ranking: 'Engineering Focus',
        },
        { name: 'University of Graz', location: 'Graz', ranking: 'Top in Austria' },
        { name: 'University of Innsbruck', location: 'Innsbruck', ranking: 'Renowned Research' },
        { name: 'Johannes Kepler University', location: 'Linz', ranking: 'Business & Tech' },
      ],
      tuitionRange: '€1,500 - €4,500/year',
      livingCost: '€800 - €1,200/month',
      requirements: [
        'Valid passport',
        'Admission letter from Austrian university',
        'Proof of financial means',
        'English proficiency (IELTS 6.0-6.5)',
        'Health insurance',
        'Academic transcripts',
      ],
    },

    czech: {
      name: 'Czech Republic',
      flag: '🇨🇿',
      description:
        'The Czech Republic is a vibrant and affordable study destination in Central Europe. With growing English-taught programs and a rich cultural environment, it attracts students seeking quality education at low cost.',
      benefits: [
        'Low tuition fees',
        'Affordable living costs',
        'Cultural and historical richness',
        'English-taught programs available',
        'Central European location',
        'High-quality education',
      ],
      studyLevels: [
        { level: "Bachelor's Degree", duration: '3-4 years', tuition: '€2,000 - €4,000/year' },
        { level: "Master's Degree", duration: '1.5-2 years', tuition: '€2,500 - €5,000/year' },
        { level: 'PhD', duration: '3-4 years', tuition: '€3,000 - €6,000/year' },
      ],
      popularPrograms: [
        'Engineering & Technology',
        'Business & Economics',
        'Computer Science',
        'Medicine & Healthcare',
        'Arts & Humanities',
        'Architecture & Design',
      ],
      topUniversities: [
        { name: 'Charles University', location: 'Prague', ranking: 'Top in Czech Republic' },
        { name: 'Czech Technical University', location: 'Prague', ranking: 'Engineering Focus' },
        { name: 'Masaryk University', location: 'Brno', ranking: 'Research-Oriented' },
        { name: 'University of Ostrava', location: 'Ostrava', ranking: 'Emerging University' },
        {
          name: 'Brno University of Technology',
          location: 'Brno',
          ranking: 'Technical Excellence',
        },
      ],
      tuitionRange: '€2,000 - €6,000/year',
      livingCost: '€500 - €900/month',
      requirements: [
        'Valid passport',
        'Admission letter from Czech university',
        'Proof of financial means',
        'English proficiency (IELTS 6.0-6.5)',
        'Health insurance',
        'Academic certificates',
      ],
    },
    belgium: {
      name: 'Belgium',
      flag: '🇧🇪',
      description:
        'Belgium offers high-quality education in the heart of Europe, with affordable tuition, multilingual programs, and strong academic research. It is an excellent destination for students seeking international exposure and EU-level opportunities.',
      benefits: [
        'Affordable tuition fees',
        'Multilingual education (English, French, Dutch)',
        'High-quality universities',
        'Central location in Europe',
        'Strong research and innovation focus',
        'Excellent quality of life',
      ],
      studyLevels: [
        { level: "Bachelor's Degree", duration: '3 years', tuition: '€900 - €4,000/year' },
        { level: "Master's Degree", duration: '1-2 years', tuition: '€900 - €6,000/year' },
        { level: 'PhD', duration: '3-4 years', tuition: 'Low or funded' },
      ],
      popularPrograms: [
        'Business & Economics',
        'Engineering & Technology',
        'Political Science & EU Studies',
        'Computer Science',
        'Medicine & Health Sciences',
        'International Relations',
      ],
      topUniversities: [
        { name: 'KU Leuven', location: 'Leuven', ranking: 'Top 100 Globally' },
        { name: 'Ghent University', location: 'Ghent', ranking: 'Top 150 Globally' },
        { name: 'UCLouvain', location: 'Louvain-la-Neuve', ranking: 'Top 200 Globally' },
        {
          name: 'Université Libre de Bruxelles',
          location: 'Brussels',
          ranking: 'Top 200 Globally',
        },
        { name: 'Vrije Universiteit Brussel', location: 'Brussels', ranking: 'Top 250 Globally' },
      ],
      tuitionRange: '€900 - €6,000/year',
      livingCost: '€700 - €1,000/month',
      requirements: [
        'Valid passport',
        'Admission letter from Belgian university',
        'Proof of financial means',
        'Health insurance',
        'Language proficiency (English/French/Dutch)',
        'Academic certificates',
      ],
    },
    netherlands: {
      name: 'Netherlands',
      flag: '🇳🇱',
      description:
        'The Netherlands is a top destination for international students, offering innovative teaching methods, globally recognized degrees, and a wide range of English-taught programs in a modern academic environment.',
      benefits: [
        'Wide range of English-taught programs',
        'Highly ranked universities',
        'Strong focus on innovation and research',
        'Excellent career opportunities after graduation',
        'High quality of life',
        'Safe and student-friendly cities',
      ],
      studyLevels: [
        { level: "Bachelor's Degree", duration: '3 years', tuition: '€6,000 - €15,000/year' },
        { level: "Master's Degree", duration: '1-2 years', tuition: '€8,000 - €20,000/year' },
        { level: 'PhD', duration: '4 years', tuition: 'Fully funded / salaried' },
      ],
      popularPrograms: [
        'Business & Management',
        'Engineering & Technology',
        'Computer Science & AI',
        'Data Science',
        'Environmental Sciences',
        'International Relations',
      ],
      topUniversities: [
        { name: 'University of Amsterdam', location: 'Amsterdam', ranking: 'Top 60 Globally' },
        { name: 'Delft University of Technology', location: 'Delft', ranking: 'Top 50 Globally' },
        { name: 'Utrecht University', location: 'Utrecht', ranking: 'Top 75 Globally' },
        { name: 'Leiden University', location: 'Leiden', ranking: 'Top 100 Globally' },
        {
          name: 'Eindhoven University of Technology',
          location: 'Eindhoven',
          ranking: 'Top 150 Globally',
        },
      ],
      tuitionRange: '€6,000 - €20,000/year',
      livingCost: '€800 - €1,200/month',
      requirements: [
        'Valid passport',
        'Admission letter from Dutch university',
        'Proof of sufficient financial means',
        'Health insurance',
        'English proficiency (IELTS 6.0-7.0)',
        'Academic certificates',
      ],
    },
  };
  const countries = [
    {
      value: 'canada',
      label: 'Canada',
      flag: '🇨🇦',
    },
    {
      value: 'uk',
      label: 'United Kingdom',
      flag: '🇬🇧',
    },
    {
      value: 'usa',
      label: 'United States',
      flag: '🇺🇸',
    },
    {
      value: 'germany',
      label: 'Germany',
      flag: '🇩🇪',
    },
    {
      value: 'poland',
      label: 'Poland',
      flag: '🇵🇱',
    },
    {
      value: 'austria',
      label: 'Austria',
      flag: '🇦🇹',
    },
    {
      value: 'czech',
      label: 'Czech Republic',
      flag: '🇨🇿',
    },
    {
      value: 'belgium',
      label: 'Belgium',
      flag: '🇧🇪',
    },
    {
      value: 'netherlands',
      label: 'Netherlands',
      flag: '🇳🇱',
    },
    {
      value: 'australia',
      label: 'Australia',
      flag: '🇦🇺',
    },
  ];

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
                    <span>+233 XX XXX XXXX</span>
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
