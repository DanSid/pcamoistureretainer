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
        </Routes>
        <Footer />
        <CouponPopup />
      </SiteShell>
    </BrowserRouter>
  )
}
