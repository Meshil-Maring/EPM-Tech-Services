import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./routes/ProtectedRoute";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Transaction = lazy(() => import("./pages/Transaction"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

// Footer pages
const AboutUs = lazy(() => import("./pages/footer/About-us"));
const ServiceFAQs = lazy(() => import("./pages/footer/ServiceFAQ"));
const Web = lazy(() => import("./pages/footer/Web"));
const DevelopmentServices = lazy(
  () => import("./pages/footer/DevelopmentServices")
);
const Design = lazy(() => import("./pages/footer/DesignServices"));
const Consulting = lazy(() => import("./pages/footer/Consulting"));
const ResourceDocumentation = lazy(
  () => import("./pages/footer/Documentation")
);
const Support = lazy(() => import("./pages/footer/Support"));
const TermsAndService = lazy(() => import("./pages/footer/TermsService"));
const CookiePolicy = lazy(() => import("./pages/footer/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./pages/footer/PrivacyPolicy"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign-up" element={<Signup />} />
        <Route path="/auth/log-in" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/transaction"
          element={
            <ProtectedRoute>
              <Transaction />
            </ProtectedRoute>
          }
        />

        {/* Footer routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service-faqs" element={<ServiceFAQs />} />
        <Route path="/web" element={<Web />} />
        <Route path="/development" element={<DevelopmentServices />} />
        <Route path="/ui/ux-design" element={<Design />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/documentation" element={<ResourceDocumentation />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms-and-service" element={<TermsAndService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
}

export default App;
