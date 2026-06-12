import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";
import Faq from "./pages/Faq";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HowDoes from "./pages/HowDoes";
import Information from "./pages/Information";
import BecomeDealer from "./pages/BecomeDealer";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LanguageModal from "./components/LanguageModal";


const languages = ["en", "es"];

function LangWrapper({ children }) {
  const { lang } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (languages.includes(lang)) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang); // 👈 optional persistence
    }
  }, [lang, location.pathname]);

  if (!languages.includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  return children;
}


function App() {
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);
  return (
    
    <BrowserRouter>
      <LanguageModal />
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />

            <Route
              path="/:lang"
              element={
                <LangWrapper>
                  <Home />
                </LangWrapper>
              }
            />

            <Route
              path="/:lang/howDoesItWork"
              element={
                <LangWrapper>
                  <HowDoes />
                </LangWrapper>
              }
            />

            <Route
              path="/:lang/informationRequired"
              element={
                <LangWrapper>
                  <Information />
                </LangWrapper>
              }
            />

            <Route
              path="/:lang/becomeDealer"
              element={
                <LangWrapper>
                  <BecomeDealer />
                </LangWrapper>
              }
            />

            <Route
              path="/:lang/faqs"
              element={
                <LangWrapper>
                  <Faq />
                </LangWrapper>
              }
            />

            <Route
              path="/:lang/termsConditions"
              element={
                <LangWrapper>
                  <TermsConditions />
                </LangWrapper>
              }
            />

            <Route
              path="/:lang/privacyPolicy"
              element={
                <LangWrapper>
                  <PrivacyPolicy />
                </LangWrapper>
              }
            />

            <Route
              path="/:lang/contact"
              element={
                <LangWrapper>
                  <Contact />
                </LangWrapper>
              }
            />

            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;