import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AboutUsRoute from "./Components/AboutUsRoute/AboutUsRoute";
import ContactUsRoute from "./Components/ContactUsRoute/ContactUsRoute";
import HomeRoutesComp from "./Components/HomeRoutesComp/HomeRoutesComp";
import SystemAuditComp from "./Components/SystemAuditComp/SystemAuditComp";
import RiskAssSerComp from "./Components/RiskAssSerComp/RiskAssSerComp";
import SystemInfilComp from "./Components/SystemInfilComp/SystemInfilComp";
import SecImpAndCertificates from "./Components/SecImpAndCertificates/SecImpAndCertificates";
import InfoSecCoaSerComp from "./Components/InfoSecCoaSerComp/InfoSecCoaSerComp";
import ServicesRoute from "./Components/ServicesRoute/ServicesRoute";

function App() {
  return (
    <div className="App">
      {/* <HomeRoutesComp /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoutesComp />} />
          <Route path="/about" element={<AboutUsRoute />} />
          <Route path="/contact" element={<ContactUsRoute />} />
          <Route path="/systemaudit" element={<SystemAuditComp />} />
          <Route path="/riskassesment" element={<RiskAssSerComp />} />
          <Route path="/systeminfiltration" element={<SystemInfilComp />} />
          <Route path="/grcs" element={<SecImpAndCertificates />} />
          <Route path="/secucoahing" element={<InfoSecCoaSerComp />} />
          <Route path="/servicesroute" element={<ServicesRoute />} />
          <Route path="/contact" element={<ContactUsRoute />} />
        </Routes>
      </BrowserRouter>
      {/* <SystemAuditComp /> */}
    </div>
  );
}

export default App;
