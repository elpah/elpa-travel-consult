# ELPA Travel Consult

## 🌍 Project Overview

**ELPA Travel Consult** is a modern, fully-featured travel and education consultancy platform built for Ghanaian clients seeking visa assistance, study abroad support, and international travel services.

This single-page application showcases a complete travel consultancy business with multiple service offerings, comprehensive program information, and client support resources.

---

## ✨ Key Features

### 🏠 Multi-Page Navigation

- **Home** - Hero section with service overview and success statistics
- **Services** - Detailed service offerings with pricing and features
- **Study Abroad** - Destination guides and university partnerships
- **Programs** - Computer Science programs across 13 countries
- **About** - Company mission, team, and values
- **Resources** - Digital guides, blog posts, and video tutorials
- **Contact** - Contact form, location info, and FAQs

### Design Excellence

- Responsive mobile-first design
- Smooth animations with Framer Motion
- Modern UI components

---

## 🛠️ Tech Stack

| Layer             | Technology            |
| ----------------- | --------------------- |
| **Framework**     | React 19 + TypeScript |
| **Build Tool**    | Vite 6                |
| **Styling**       | Tailwind CSS 4        |
| **Animations**    | Framer Motion         |
| **Form Handling** | React Hook Form       |
| **Icons**         | Lucide React          |
| **Utilities**     | Clsx, Tailwind Merge  |

---

## 📦 Installation & Setup

```bash
npm install

npm run dev

npm run build

npm run preview

npm run lint

# Code formatting
npm run format
```

---

## 📁 Project Structure

```
src/
├── components/   		   	   # components
│   ├── Navigation.tsx         # Top navigation bar
│   └── Footer.tsx             # Footer section
├──	pages
│	│── Home.tsx        	   # Landing section
│   ├── Services.tsx       	   # Service offerings
│   ├── StudyAbroad.tsx        # Study destinations
│   ├── Programs.tsx           # Study programs by country
│   ├── VisitGhana.tsx         # Visit Ghana Page
│   ├── InvestGhana.tsx        # Invest in Ghana Page
│   ├── About.tsx        	   # Company information
│   ├── Resources.tsx    	   # Learning hub & guides
│   ├── Contact.tsx      	   # Contact form & info
│   ├── CountryDetailsPage.tsx # Detailed country info
├── hooks/                     # Custom React hooks
│   └── use-mobile.ts          # Mobile detection hook
├── lib/                       # Utility functions
│   └── utils.ts               # cn() helper, mode utilities
├── settings/                  # Configuration
│   ├── theme.ts               # Theme configuration
│   └── types.d.ts             # Type definitions
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles

```

---

## 🎨 Design Highlights

- **Color Scheme**: Blue primary (#2563eb), Purple accents, neutral grays
- **Typography**:
  - Headings: Bold, up to 6xl for heroes
  - Body: Medium weight, good contrast
  - Small text: Uppercase labels with tracking
- **Spacing**: Consistent padding/margins using Tailwind scale
- **Shadows**: Subtle to dramatic based on component importance
- **Animations**: Fade-in, slide, scale effects on scroll

---

## 📱 Responsive Design

- **Mobile First** approach with Tailwind breakpoints
- Hamburger menu on mobile
- Stacked layouts for small screens
- Touch-friendly button sizes
- Optimized image loading

---

## Key Features Implementation

### Dynamic Country Filtering

```typescript
const handleCountryChange = (country: string) => {
  setCurrentCountry(country);
};
```

### Smooth Page Transitions

```typescript
// Scroll-to-top on navigation
window.scrollTo({ top: 0, behavior: 'smooth' });
```

## Data Structure

All data is organized as TypeScript objects with:

- **services**: Icons, descriptions, features, pricing
- **programs**: Multiple countries, universities, tuition ranges
- **testimonials**: Client success stories with ratings
- **team**: Staff profiles with roles
- **FAQs**: Q&A pairs with clear answers
- **countries**: Comprehensive study destination info

---

## ✅ Best Practices Implemented

- ✨ Component modularity
- 📱 Mobile-responsive design
- ♿ Semantic HTML structure
- 🎯 Clear CTAs and user flows
- 🔒 Type-safe TypeScript
- 🎨 Consistent design language
- ⚡ Performance optimized
- 🌍 Accessibility-friendly

---

## 📄 License

This project is licensed under the MIT License
