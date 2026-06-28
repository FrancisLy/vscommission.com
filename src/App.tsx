import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Advertisers from "@/pages/Advertisers";
import AdvertisersHowItWorks from "@/pages/AdvertisersHowItWorks";
import Publishers from "@/pages/Publishers";
import PublishersNetwork from "@/pages/PublishersNetwork";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import Brands from "@/pages/Brands";
import About from "@/pages/About";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advertisers" element={<Advertisers />} />
          <Route path="/advertisers/how-it-works" element={<AdvertisersHowItWorks />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/publishers/network" element={<PublishersNetwork />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
