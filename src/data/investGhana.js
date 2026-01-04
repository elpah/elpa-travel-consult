import { MapPin, Sprout, Building, Factory, Shield, Users, FileText, Globe } from 'lucide-react';

export const investmentCategories = [
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
];

export const investGhanaServices = [
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
];
