import { useState } from 'react';
import {
  ArrowLeft,
  GraduationCap,
  Clock,
  DollarSign,
  Globe,
  Calendar,
  CheckCircle2,
  BookOpen,
  FileText,
  Users,
  Award,
  TrendingUp,
  Search,
  Building2,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProgramsPage = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const countries = [
    {
      value: 'all',
      label: 'All Countries',
      flag: '🌍',
    },
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
      value: 'australia',
      label: 'Australia',
      flag: '🇦🇺',
    },
    {
      value: 'china',
      label: 'China',
      flag: '🇨🇳',
    },
    {
      value: 'austria',
      label: 'Austria',
      flag: '🇦🇹',
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
      value: 'finland',
      label: 'Finland',
      flag: '🇫🇮',
    },
    {
      value: 'sweden',
      label: 'Sweden',
      flag: '🇸🇪',
    },
    {
      value: 'poland',
      label: 'Poland',
      flag: '🇵🇱',
    },
  ] as any[];
  const programs = [
    {
      id: 1,
      program: 'Computer Science',
      country: 'canada',
      flag: '🇨🇦',
      countryName: 'Canada',
      universities: [
        'University of Toronto',
        'University of British Columbia',
        'McGill University',
        'University of Waterloo',
        'University of Ottawa',
      ],
      tuitionRange: '$20,000 - $35,000 CAD/year',
      duration: '3-4 Years (Bachelor), 1-2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with 80%+ in Math and Science',
        master: "Bachelor's degree in related field with 3.0+ GPA",
        english: 'IELTS 6.5 (no band less than 6.0) or TOEFL 90+',
      },
      intake: 'September, January, May',
      contactEmail: 'canada@danabeducation.com',
    },
    {
      id: 2,
      program: 'Computer Science',
      country: 'uk',
      flag: '🇬🇧',
      countryName: 'United Kingdom',
      universities: [
        'University of Oxford',
        'University of Cambridge',
        'Imperial College London',
        'University of Edinburgh',
        'University of Manchester',
      ],
      tuitionRange: '£20,000 - £35,000/year',
      duration: '3 Years (Bachelor), 1 Year (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'A-Levels AAB or equivalent with Math',
        master: "Bachelor's degree (2:1 honors) in related field",
        english: 'IELTS 6.5 (no band less than 6.0) or TOEFL 90+',
      },
      intake: 'September',
      contactEmail: 'uk@danabeducation.com',
    },
    {
      id: 3,
      program: 'Computer Science',
      country: 'usa',
      flag: '🇺🇸',
      countryName: 'United States',
      universities: [
        'Massachusetts Institute of Technology (MIT)',
        'Stanford University',
        'Carnegie Mellon University',
        'University of California, Berkeley',
        'University of Washington',
      ],
      tuitionRange: '$30,000 - $60,000 USD/year',
      duration: '4 Years (Bachelor), 2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with strong Math and Science grades',
        master: "Bachelor's degree in related field with 3.0+ GPA, GRE often required",
        english: 'IELTS 7.0 or TOEFL 100+',
      },
      intake: 'Fall (September), Spring (January)',
      contactEmail: 'usa@danabeducation.com',
    },
    {
      id: 4,
      program: 'Computer Science',
      country: 'australia',
      flag: '🇦🇺',
      countryName: 'Australia',
      universities: [
        'University of Melbourne',
        'Australian National University',
        'University of Sydney',
        'University of New South Wales',
        'Monash University',
      ],
      tuitionRange: '$30,000 - $45,000 AUD/year',
      duration: '3 Years (Bachelor), 1.5-2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School completion with Math at advanced level',
        master: "Bachelor's degree in related field with 65%+",
        english: 'IELTS 6.5 (no band less than 6.0) or TOEFL 79+',
      },
      intake: 'February, July',
      contactEmail: 'australia@danabeducation.com',
    },
    {
      id: 5,
      program: 'Computer Science',
      country: 'china',
      flag: '🇨🇳',
      countryName: 'China',
      universities: [
        'Tsinghua University',
        'Peking University',
        'Fudan University',
        'Shanghai Jiao Tong University',
        'Zhejiang University',
      ],
      tuitionRange: '$3,000 - $8,000 USD/year',
      duration: '4 Years (Bachelor), 2-3 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with strong academic record',
        master: "Bachelor's degree in related field",
        english: 'IELTS 6.0 or TOEFL 80+ (for English-taught programs)',
      },
      intake: 'September',
      contactEmail: 'china@danabeducation.com',
    },
    {
      id: 6,
      program: 'Computer Science',
      country: 'austria',
      flag: '🇦🇹',
      countryName: 'Austria',
      universities: [
        'Vienna University of Technology',
        'University of Vienna',
        'Graz University of Technology',
        'Johannes Kepler University Linz',
        'University of Innsbruck',
      ],
      tuitionRange: '€1,500 - €10,000/year',
      duration: '3 Years (Bachelor), 2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma equivalent to Austrian Matura',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.0 or TOEFL 80+ (for English-taught programs)',
      },
      intake: 'October, March',
      contactEmail: 'austria@danabeducation.com',
    },
    {
      id: 7,
      program: 'Computer Science',
      country: 'germany',
      flag: '🇩🇪',
      countryName: 'Germany',
      universities: [
        'Technical University of Munich',
        'RWTH Aachen University',
        'Karlsruhe Institute of Technology',
        'Technical University of Berlin',
        'University of Stuttgart',
      ],
      tuitionRange: '€0 - €3,000/year (Public universities)',
      duration: '3 Years (Bachelor), 2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma (Abitur equivalent) with Math',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.5 or TOEFL 90+ (for English-taught programs)',
      },
      intake: 'October (Winter), April (Summer)',
      contactEmail: 'germany@danabeducation.com',
    },
    {
      id: 8,
      program: 'Computer Science',
      country: 'italy',
      flag: '🇮🇹',
      countryName: 'Italy',
      universities: [
        'Politecnico di Milano',
        'University of Bologna',
        'Sapienza University of Rome',
        'University of Padua',
        'Politecnico di Torino',
      ],
      tuitionRange: '€1,000 - €4,000/year',
      duration: '3 Years (Bachelor), 2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with 12 years of education',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.0 or TOEFL 78+ (for English-taught programs)',
      },
      intake: 'September',
      contactEmail: 'italy@danabeducation.com',
    },
    {
      id: 9,
      program: 'Computer Science',
      country: 'belgium',
      flag: '🇧🇪',
      countryName: 'Belgium',
      universities: [
        'KU Leuven',
        'Ghent University',
        'Université Catholique de Louvain',
        'Vrije Universiteit Brussel',
        'University of Antwerp',
      ],
      tuitionRange: '€900 - €10,000/year',
      duration: '3 Years (Bachelor), 1-2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma equivalent to Belgian certificate',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.5 or TOEFL 90+ (for English-taught programs)',
      },
      intake: 'September',
      contactEmail: 'belgium@danabeducation.com',
    },
    {
      id: 10,
      program: 'Computer Science',
      country: 'netherlands',
      flag: '🇳🇱',
      countryName: 'Netherlands',
      universities: [
        'Delft University of Technology',
        'University of Amsterdam',
        'Eindhoven University of Technology',
        'Utrecht University',
        'Leiden University',
      ],
      tuitionRange: '€8,000 - €15,000/year',
      duration: '3 Years (Bachelor), 2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with Math at advanced level',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.5 or TOEFL 90+',
      },
      intake: 'September, February',
      contactEmail: 'netherlands@danabeducation.com',
    },
    {
      id: 11,
      program: 'Computer Science',
      country: 'finland',
      flag: '🇫🇮',
      countryName: 'Finland',
      universities: [
        'University of Helsinki',
        'Aalto University',
        'University of Turku',
        'University of Oulu',
        'Tampere University',
      ],
      tuitionRange: '€10,000 - €15,000/year (Non-EU)',
      duration: '3 Years (Bachelor), 2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with Math',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.5 or TOEFL 92+',
      },
      intake: 'September',
      contactEmail: 'finland@danabeducation.com',
    },
    {
      id: 12,
      program: 'Computer Science',
      country: 'sweden',
      flag: '🇸🇪',
      countryName: 'Sweden',
      universities: [
        'KTH Royal Institute of Technology',
        'Lund University',
        'Uppsala University',
        'Stockholm University',
        'Chalmers University of Technology',
      ],
      tuitionRange: '€10,000 - €17,000/year (Non-EU)',
      duration: '3 Years (Bachelor), 2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with Math and English',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.5 or TOEFL 90+',
      },
      intake: 'September',
      contactEmail: 'sweden@danabeducation.com',
    },
    {
      id: 13,
      program: 'Computer Science',
      country: 'poland',
      flag: '🇵🇱',
      countryName: 'Poland',
      universities: [
        'University of Warsaw',
        'Jagiellonian University',
        'Warsaw University of Technology',
        'AGH University of Science and Technology',
        'Wrocław University of Technology',
      ],
      tuitionRange: '€2,000 - €5,000/year',
      duration: '3-3.5 Years (Bachelor), 1.5-2 Years (Master)',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      entryRequirements: {
        bachelor: 'High School Diploma with Math',
        master: "Bachelor's degree in Computer Science or related field",
        english: 'IELTS 6.0 or TOEFL 80+ (for English-taught programs)',
      },
      intake: 'October, February',
      contactEmail: 'poland@danabeducation.com',
    },
  ] as any[];
  const filteredPrograms = programs.filter(program => {
    const matchesCountry = selectedCountry === 'all' || program.country === selectedCountry;
    const matchesSearch =
      searchQuery === '' ||
      program.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.universities.some((uni: string) =>
        uni.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCountry && matchesSearch;
  });
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-screen-xl xl:container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('study-abroad')}
            className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Study Abroad</span>
          </button>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Computer Science Programs Worldwide
            </h1>
            <p className="text-xl text-blue-100">
              Explore Computer Science programs across 13 countries with top universities,
              affordable tuition, and excellent career prospects.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-[64px] z-40">
        <div className="max-w-screen-xl xl:container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by country or university..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.flag} {country.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredPrograms.length}</span>{' '}
            destination{filteredPrograms.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-screen-xl xl:container mx-auto px-6">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">No programs found</h3>
              <p className="text-slate-600">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPrograms.map((program, idx) => (
                <motion.div
                  key={program.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: idx * 0.05,
                  }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={program.image}
                        alt={`${program.program} in ${program.countryName}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <span className="text-5xl">{program.flag}</span>
                          <div>
                            <h3 className="text-white font-bold text-xl">{program.countryName}</h3>
                            <p className="text-blue-200 text-sm">{program.program}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <div className="flex flex-col h-full">
                        <div className="mb-6">
                          <div className="flex items-center gap-2 text-slate-700 mb-3">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            <h4 className="font-bold text-lg">Top Universities</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {program.universities.map((uni: string, i: number) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                                <span className="text-slate-700 text-sm">{uni}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-100">
                          <div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                              <DollarSign className="w-4 h-4" />
                              <span>Tuition Range</span>
                            </div>
                            <div className="font-bold text-slate-900 text-sm">
                              {program.tuitionRange}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                              <Clock className="w-4 h-4" />
                              <span>Duration</span>
                            </div>
                            <div className="font-bold text-slate-900 text-sm">
                              {program.duration}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                              <Calendar className="w-4 h-4" />
                              <span>Intake</span>
                            </div>
                            <div className="font-bold text-slate-900 text-sm">{program.intake}</div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-bold text-slate-900 mb-3 text-sm">
                            Entry Requirements
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <GraduationCap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              <div className="text-sm text-slate-700">
                                <span className="font-semibold">Bachelor's:</span>{' '}
                                {program.entryRequirements.bachelor}
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <GraduationCap className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                              <div className="text-sm text-slate-700">
                                <span className="font-semibold">Master's:</span>{' '}
                                {program.entryRequirements.master}
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Globe className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <div className="text-sm text-slate-700">
                                <span className="font-semibold">English:</span>{' '}
                                {program.entryRequirements.english}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-auto flex flex-col sm:flex-row gap-3">
                          <a
                            href={`mailto:${program.contactEmail}`}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            Contact to Apply
                          </a>
                          <button
                            onClick={() => navigate('contact')}
                            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all"
                          >
                            Get Free Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl xl:container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Study Computer Science Abroad?
            </h2>
            <p className="text-xl text-slate-600">
              Computer Science is one of the most in-demand fields globally with excellent career
              prospects and competitive salaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Demand</h3>
              <p className="text-slate-600 text-sm">
                Tech professionals are in high demand worldwide with starting salaries often
                exceeding $60,000-$100,000 annually.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Opportunities</h3>
              <p className="text-slate-600 text-sm">
                Work for leading tech companies globally including Google, Microsoft, Amazon, and
                innovative startups.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Immigration Pathways</h3>
              <p className="text-slate-600 text-sm">
                Many countries offer post-study work visas and pathways to permanent residence for
                tech graduates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl xl:container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              General Application Requirements
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Common documents needed for Computer Science program applications:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-6 rounded-2xl">
                <FileText className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Academic Documents</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Official transcripts and certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Degree certificates (for Master's/PhD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Letters of recommendation (2-3)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">English Proficiency</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>IELTS Academic (6.0-7.5 depending on country)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>TOEFL iBT (80-110 depending on country)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>PTE Academic (accepted by some universities)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <Users className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Personal Documents</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Valid passport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Statement of Purpose (SOP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Resume/CV with projects/experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <DollarSign className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Financial Documents</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Bank statements (6 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Sponsor letters (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Scholarship documentation (if applicable)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-blue-50">
        <div className="max-w-screen-xl xl:container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Start Your Computer Science Journey?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Our education consultants will help you choose the right country and university,
              prepare your application, and guide you through the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendar.app.google/igo7gWv9UcxajYLF8"
                target="_blank"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl"
              >
                Book Free Consultation
              </a>
              <a
                href=""
                className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
