import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Navbar, SiteShell } from './components/site/Layout'
import ScrollToTop from './components/site/ScrollToTop'
import { CouponPopup } from './components/site/PromoElements'
import LandingIndex from './pages/LandingIndex'
import PCAMoistureRetainer from './pages/PCAMoistureRetainer'
import PeppermintCombo from './pages/PeppermintCombo'
import VitaminPowerLeaveIn from './pages/VitaminPowerLeaveIn'
import ScalpandSkin from './pages/ScalpandSkin'
import ProteinBoostSeal from './pages/ProteinBoostSeal'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteShell>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingIndex />} />
          <Route path="/pca-moisture-retainer" element={<PCAMoistureRetainer />} />
          <Route path="/peppermint-combo" element={<PeppermintCombo />} />
          <Route path="/vitamin-power-leave-in" element={<VitaminPowerLeaveIn />} />
          <Route path="/scalp-and-skin" element={<ScalpandSkin />} />
          <Route path="/protein-boost-seal" element={<ProteinBoostSeal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CouponPopup />
      </SiteShell>
    </BrowserRouter>
  )
}
