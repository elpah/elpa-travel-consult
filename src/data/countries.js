export const countries = [
  {
    value: 'australia',
    label: 'Australia',
    flag: '🇦🇺',
  },
  {
    value: 'austria',
    label: 'Austria',
    flag: '🇦🇹',
  },
  {
    value: 'belgium',
    label: 'Belgium',
    flag: '🇧🇪',
  },
  {
    value: 'canada',
    label: 'Canada',
    flag: '🇨🇦',
  },
  {
    value: 'china',
    label: 'China',
    flag: '🇨🇳',
  },
  {
    value: 'czech',
    label: 'Czech Republic',
    flag: '🇨🇿',
  },
  {
    value: 'finland',
    label: 'Finland',
    flag: '🇫🇮',
  },
  {
    value: 'germany',
    label: 'Germany',
    flag: '🇩🇪',
  },

  {
    value: 'italy',
    label: 'Italy',
    flag: '🇮🇹',
  },

  {
    value: 'netherlands',
    label: 'Netherlands',
    flag: '🇳🇱',
  },
  {
    value: 'poland',
    label: 'Poland',
    flag: '🇵🇱',
  },

  {
    value: 'sweden',
    label: 'Sweden',
    flag: '🇸🇪',
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
];

export const countryData = {
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
  china: {
    name: 'China',
    flag: '🇨🇳',
    tagline: 'Affordable Education with Rich Cultural Experience',
    heroImage:
      'https://images.unsplash.com/photo-1581091870621-6d6f3df1d1bb?auto=format&fit=crop&q=80&w=1200',
    description:
      'China offers high-quality education at a fraction of the cost of Western countries. International students can enjoy cultural immersion, modern cities, and growing research opportunities. Many programs are now offered in English, making China increasingly attractive for global learners.',
    benefits: [
      'Affordable tuition compared to Western countries',
      'Living costs are relatively low',
      'Programs available in English',
      'Rich cultural and historical experiences',
      'Opportunities for research and internships',
      'Growing global recognition of Chinese universities',
    ],
    studyLevels: [
      {
        level: 'Certificate/Diploma',
        duration: '6 months - 2 years',
        tuition: '$1,500 - $5,000 USD/year',
      },
      {
        level: "Bachelor's Degree",
        duration: '4 years',
        tuition: '$3,000 - $8,000 USD/year',
      },
      {
        level: "Master's Degree",
        duration: '2-3 years',
        tuition: '$4,000 - $10,000 USD/year',
      },
      {
        level: 'PhD',
        duration: '3-5 years',
        tuition: '$5,000 - $12,000 USD/year',
      },
    ],
    popularPrograms: [
      'Engineering & Technology',
      'Business & Economics',
      'Medicine & Healthcare',
      'Computer Science & AI',
      'Arts & Humanities',
      'Environmental Science',
    ],
    topUniversities: [
      {
        name: 'Tsinghua University',
        location: 'Beijing',
        ranking: 'Top 20 Globally',
      },
      {
        name: 'Peking University',
        location: 'Beijing',
        ranking: 'Top 30 Globally',
      },
      {
        name: 'Fudan University',
        location: 'Shanghai',
        ranking: 'Top 50 Globally',
      },
      {
        name: 'Shanghai Jiao Tong University',
        location: 'Shanghai',
        ranking: 'Top 100 Globally',
      },
      {
        name: 'Zhejiang University',
        location: 'Hangzhou',
        ranking: 'Top 100 Globally',
      },
    ],
    tuitionRange: '$1,500 - $12,000 USD/year',
    livingCost: '$3,000 - $8,000 USD/year',
    requirements: [
      'Valid passport',
      'Letter of acceptance from Chinese university',
      'Proof of financial support (~$10,000 USD)',
      'English proficiency (IELTS 5.5-6.5 for English-taught programs) or HSK for Chinese-taught programs',
      'Medical examination',
      'Clean criminal record',
    ],
  },
  sweden: {
    name: 'Sweden',
    flag: '🇸🇪',
    tagline: 'Innovation & High-Quality Education',
    heroImage:
      'https://images.unsplash.com/photo-1581090700225-1c0b0de1b7b4?auto=format&fit=crop&q=80&w=1200',
    description:
      'Sweden offers internationally recognized education, modern campuses, and a strong focus on innovation and research. Programs in English are widely available, and the country provides a safe and welcoming environment for international students.',
    benefits: [
      'High-quality education with English-taught programs',
      'Work up to 20 hours/week during studies',
      'Post-study work opportunities',
      'Safe and inclusive society',
      'Strong focus on innovation and sustainability',
      'Opportunity to network globally',
    ],
    studyLevels: [
      {
        level: 'Bachelor’s Degree',
        duration: '3 years',
        tuition: '€9,000 - €15,000/year (Non-EU)',
      },
      {
        level: 'Master’s Degree',
        duration: '2 years',
        tuition: '€10,000 - €18,000/year (Non-EU)',
      },
      {
        level: 'PhD',
        duration: '4 years',
        tuition: 'Often tuition-free with scholarship',
      },
    ],
    popularPrograms: [
      'Engineering & Technology',
      'Computer Science & AI',
      'Business & Management',
      'Environmental Science & Sustainability',
      'Design & Architecture',
      'Medicine & Life Sciences',
    ],
    topUniversities: [
      {
        name: 'KTH Royal Institute of Technology',
        location: 'Stockholm',
        ranking: 'Top Engineering School in Sweden',
      },
      {
        name: 'Lund University',
        location: 'Lund',
        ranking: 'Top 100 Globally',
      },
      {
        name: 'Uppsala University',
        location: 'Uppsala',
        ranking: 'Top 100 Globally',
      },
      {
        name: 'Stockholm University',
        location: 'Stockholm',
        ranking: 'Top 200 Globally',
      },
      {
        name: 'Chalmers University of Technology',
        location: 'Gothenburg',
        ranking: 'Top 200 Globally',
      },
    ],
    tuitionRange: '€9,000 - €18,000/year (Non-EU)',
    livingCost: '€8,000 - €12,000/year',
    requirements: [
      'Valid passport',
      'Letter of acceptance from Swedish university',
      'Proof of financial support (~€8,000/year)',
      'English proficiency (IELTS 6.5 or TOEFL 90+)',
      'Health insurance',
      'Clean criminal record',
    ],
  },
  finland: {
    name: 'Finland',
    flag: '🇫🇮',
    tagline: 'High-Quality Education & Innovation',
    heroImage:
      'https://images.unsplash.com/photo-1581090913647-f2f0f87d1b26?auto=format&fit=crop&q=80&w=1200',
    description:
      'Finland is known for its high-quality education system, innovative teaching methods, and safe, inclusive society. Many programs are offered in English, making it a popular choice for international students seeking research opportunities and a modern learning environment.',
    benefits: [
      'World-class education system with English-taught programs',
      'Work up to 25 hours/week during studies',
      'Post-study work opportunities for graduates',
      'Safe, welcoming, and multicultural society',
      'Focus on research, innovation, and sustainability',
      'Affordable compared to other Nordic countries',
    ],
    studyLevels: [
      {
        level: "Bachelor's Degree",
        duration: '3 years',
        tuition: '€10,000 - €15,000/year (Non-EU)',
      },
      {
        level: "Master's Degree",
        duration: '2 years',
        tuition: '€12,000 - €17,000/year (Non-EU)',
      },
      {
        level: 'PhD',
        duration: '4 years',
        tuition: 'Often tuition-free with scholarship',
      },
    ],
    popularPrograms: [
      'Engineering & Technology',
      'Computer Science & AI',
      'Business & Management',
      'Environmental Science & Sustainability',
      'Design & Architecture',
      'Life Sciences & Medicine',
    ],
    topUniversities: [
      {
        name: 'University of Helsinki',
        location: 'Helsinki',
        ranking: 'Top 100 Globally',
      },
      {
        name: 'Aalto University',
        location: 'Espoo',
        ranking: 'Top 150 Globally',
      },
      {
        name: 'University of Turku',
        location: 'Turku',
        ranking: 'Top 200 Globally',
      },
      {
        name: 'University of Oulu',
        location: 'Oulu',
        ranking: 'Top 300 Globally',
      },
      {
        name: 'Tampere University',
        location: 'Tampere',
        ranking: 'Top 300 Globally',
      },
    ],
    tuitionRange: '€10,000 - €17,000/year (Non-EU)',
    livingCost: '€9,000 - €12,000/year',
    requirements: [
      'Valid passport',
      'Letter of acceptance from Finnish university',
      'Proof of financial support (~€8,000/year)',
      'English proficiency (IELTS 6.5 or TOEFL 90+)',
      'Health insurance',
      'Clean criminal record',
    ],
  },
  italy: {
    name: 'Italy',
    flag: '🇮🇹',
    tagline: 'Historic Universities & Cultural Immersion',
    heroImage:
      'https://images.unsplash.com/photo-1572144788390-1c0d0e0b5d26?auto=format&fit=crop&q=80&w=1200',
    description:
      'Italy is home to some of the oldest universities in the world, offering a rich cultural experience alongside high-quality education. Many programs are now available in English, attracting international students interested in arts, engineering, and business.',
    benefits: [
      'Affordable tuition compared to other Western European countries',
      'Work part-time while studying',
      'Cultural immersion in historic cities',
      'High quality of life and rich history',
      'Opportunities for internships and research',
      'Scholarly environment with world-renowned programs',
    ],
    studyLevels: [
      {
        level: "Bachelor's Degree",
        duration: '3 years',
        tuition: '€1,000 - €4,000/year',
      },
      {
        level: "Master's Degree",
        duration: '2 years',
        tuition: '€2,000 - €5,000/year',
      },
      {
        level: 'PhD',
        duration: '3-4 years',
        tuition: 'Often tuition-free with scholarship',
      },
    ],
    popularPrograms: [
      'Engineering & Technology',
      'Business & Management',
      'Arts & Humanities',
      'Medicine & Health Sciences',
      'Architecture & Design',
      'Computer Science & IT',
    ],
    topUniversities: [
      {
        name: 'Politecnico di Milano',
        location: 'Milan',
        ranking: 'Top Engineering School in Italy',
      },
      {
        name: 'University of Bologna',
        location: 'Bologna',
        ranking: 'Top 200 Globally',
      },
      {
        name: 'Sapienza University of Rome',
        location: 'Rome',
        ranking: 'Top 300 Globally',
      },
      {
        name: 'University of Padua',
        location: 'Padua',
        ranking: 'Top 300 Globally',
      },
      {
        name: 'Politecnico di Torino',
        location: 'Turin',
        ranking: 'Top 400 Globally',
      },
    ],
    tuitionRange: '€1,000 - €5,000/year',
    livingCost: '€8,000 - €12,000/year',
    requirements: [
      'Valid passport',
      'Letter of acceptance from Italian university',
      'Proof of financial support (~€10,000/year)',
      'English proficiency (IELTS 6.0 or TOEFL 78+) for English-taught programs',
      'Health insurance',
      'Clean criminal record',
    ],
  },
};
