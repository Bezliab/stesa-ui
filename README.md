# DSTE Website — Department of Science and Technology Education
## University of Ibadan, Faculty of Education

A professional, modern, and responsive React website for the Department of Science and Technology Education (DSTE), Faculty of Education, University of Ibadan.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd ui-ibadan

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
ui-ibadan/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation with dropdown menus & mobile nav
│   │   ├── Navbar.css          # Navbar styles
│   │   ├── Footer.jsx          # Site footer with links and contact info
│   │   ├── Footer.css          # Footer styles
│   │   └── useScrollAnimation.js  # Custom hook for scroll-triggered animations
│   ├── data/
│   │   └── siteData.js         # All site content: staff, programmes, news, events, etc.
│   ├── pages/
│   │   ├── HomePage.jsx        # Full homepage with all sections
│   │   ├── HomePage.css        # Homepage styles
│   │   ├── AboutPage.jsx       # About, History, Vision & Mission
│   │   ├── PeoplePage.jsx      # Academic & Non-Academic Staff
│   │   ├── OtherPages.jsx      # Admissions, News, Events, Research, Students, Gallery, Contact
│   │   └── InnerPage.css       # Shared styles for all inner pages
│   ├── styles/
│   │   └── global.css          # CSS variables, global styles, utilities
│   ├── App.jsx                 # Main app with hash-based routing
│   └── index.js                # React entry point
└── package.json
```

---

## 🎨 Design System

### Colour Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--ui-blue` | `#003366` | Primary brand colour |
| `--ui-blue-dark` | `#001f3f` | Dark backgrounds |
| `--ui-gold` | `#C9942A` | Accent, CTAs |
| `--ui-gold-light` | `#E8B84B` | Hover states |
| `--ui-cream` | `#FAFAF7` | Background |
| `--ui-white` | `#FFFFFF` | Cards, surfaces |

### Typography
- **Display/Headings:** Playfair Display (Google Fonts)
- **Body Text:** Source Serif 4 (Google Fonts)
- **UI/Interface:** DM Sans (Google Fonts)

---

## 📄 Pages & Sections

| Page | URL Hash | Description |
|------|----------|-------------|
| Homepage | `#home` | Hero, quick links, about snippet, programmes, staff, research, news, CTA |
| About | `#about` | History, timeline, vision & mission, values |
| People | `#people` | Academic staff cards, non-academic staff table |
| Admissions | `#admissions` | Requirements and application process |
| News | `#news` | All news and announcements |
| Events | `#events` | Upcoming events calendar |
| Research | `#research` | Research clusters and collaboration |
| Students | `#students` | Student resources and links |
| Gallery | `#gallery` | Photo gallery grid |
| Contact | `#contact` | Contact info and enquiry form |

---

## ✏️ Customisation

### Updating Content
All site content is centralised in `src/data/siteData.js`. You can update:
- Staff profiles (`academicStaff`, `nonAcademicStaff`)
- Programmes (`programmes`)
- News items (`newsItems`)
- Events (`events`)
- Research clusters (`researchClusters`)
- Gallery images (`galleryImages`)
- Admissions requirements (`admissionsInfo`)

### Adding Real Photos
Replace the placeholder `<div>` elements in staff cards and news cards with `<img>` tags.
Add image paths to the data objects in `siteData.js`.

### Connecting to a Backend
The contact form in `ContactPage` can be wired to any backend API or service (e.g., Formspree, EmailJS, or a custom Node/Django API) by adding a `handleSubmit` function.

---

## 🛠️ Tech Stack
- **React 18** — Component-based UI
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Google Fonts** — Playfair Display, Source Serif 4, DM Sans
- **Lucide React** — Icon library
- **Hash-based routing** — Lightweight client-side navigation (no React Router required)

---

## 📞 Department Contact
- **Email:** dste@ui.edu.ng
- **Phone:** +234 802 345 6789
- **Address:** Faculty of Education Building, University of Ibadan, Ibadan, Oyo State, Nigeria

---

*Built for the Department of Science and Technology Education, Faculty of Education, University of Ibadan.*
