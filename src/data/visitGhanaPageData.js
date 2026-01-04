import { Plane, Hotel, Shield, Car, FileText, Heart, Users } from 'lucide-react';
export const touristSites = [
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
    description: 'Popular beach destination with vibrant atmosphere, live music, and local cuisine',
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
    description: 'Seat of the Asante Kingdom showcasing rich cultural heritage and royal artifacts',
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
export const services = [
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
export const packages = [
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
export const whyChoose = [
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
