import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PeoplePage from "./pages/PeoplePage";
import {
  AdmissionsPage,
  NewsPage,
  EventsPage,
  ResearchPage,
  StudentsPage,
  GalleryPage,
  ContactPage,
} from "./pages/OtherPages";
import "./styles/global.css";

// Simple hash-based routing
function useRoute() {
  const [route, setRoute] = useState(window.location.hash || "#home");

  const navigate = (hash) => {
    window.location.hash = hash;
    setRoute(hash);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen for hash changes
  window.onhashchange = () => setRoute(window.location.hash);

  return [route, navigate];
}

function PageContent({ route }) {
  const r = route.replace("#", "").split("/")[0];
  switch (r) {
    case "about": return <AboutPage />;
    case "people": return <PeoplePage />;
    case "admissions": return <AdmissionsPage />;
    case "news": return <NewsPage />;
    case "events": return <EventsPage />;
    case "research": return <ResearchPage />;
    case "students": return <StudentsPage />;
    case "gallery": return <GalleryPage />;
    case "contact": return <ContactPage />;
    default: return <HomePage />;
  }
}

export default function App() {
  const [route] = useRoute();

  return (
    <div className="app">
      <Navbar />
      <main>
        <PageContent route={route} />
      </main>
      <Footer />
    </div>
  );
}
