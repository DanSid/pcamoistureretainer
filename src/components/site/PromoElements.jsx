import { Gift, ShoppingBag, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { amazonRating, couponOffer } from '../../data/products'

const mainDudleyUrl = 'https://shop.dudleyq.com'

export function AmazonRatingBadge({ dark = false, className = '' }) {
  return (
    <div
      className={`inline-flex w-fit flex-wrap items-center gap-3 rounded-2xl border px-4 py-3 ${
        dark
          ? 'border-white/10 bg-white/10 text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl'
          : 'border-white/10 bg-white/[0.04] text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl'
      } ${className}`}
    >
      <div className="flex items-center gap-1 text-[#f4c44a]" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <div className="flex flex-wrap items-baseline gap-2 text-white">
        <span className="text-base font-extrabold">
          {amazonRating.score} {amazonRating.label}
        </span>
        <span className="text-sm font-semibold text-white/70">{amazonRating.reviews}</span>
      </div>
    </div>
  )
}

export function PromoBanner({ className = '' }) {
  return (
    <a
      href={mainDudleyUrl}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex w-full max-w-[570px] items-center justify-between gap-4 rounded-full border border-[#d8a1a5]/25 bg-[linear-gradient(135deg,#171013_0%,#26181e_40%,#1a1215_100%)] px-5 py-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <span className="inline-flex items-center gap-3 text-left text-base font-semibold uppercase tracking-[0.18em] text-[#f2dddd] md:text-[15px]">
        <ShoppingBag size={18} />
        {couponOffer.cta}
      </span>
      <span className="hidden text-[#efc868] transition group-hover:translate-x-0.5 sm:inline">→</span>
    </a>
  )
}

export function CouponStrip({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <div className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#c9858c_0%,#e0b0b4_100%)] px-6 py-3 text-[14px] font-extrabold uppercase tracking-[0.28em] text-[#160d10] shadow-[0_18px_40px_rgba(201,133,140,0.2)]">
        {couponOffer.code}
      </div>
      <p className="text-base text-white/70 md:text-lg">= {couponOffer.text}</p>
    </div>
  )
}

export function CouponPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const openPopup = () => setIsOpen(true)
    const timeoutId = window.setTimeout(openPopup, 120000)
    const intervalId = window.setInterval(openPopup, 120000)

    return () => {
      window.clearTimeout(timeoutId)
      window.clearInterval(intervalId)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/[0.65] p-4 backdrop-blur-sm md:items-center">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0f0a0d] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.5)] md:p-8">
        <button
          type="button"
          aria-label="Close coupon popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#d59ca1]/20 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-[#efc868]/15 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d59ca1]/25 bg-[#d59ca1]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#efc9cb]">
            <Gift size={14} /> Limited offer
          </div>
          <h3 className="mt-5 max-w-lg font-display text-5xl leading-tight text-[#f7e8e8]">{couponOffer.code}</h3>
          <p className="mt-3 max-w-lg text-base leading-7 text-white/70 md:text-lg">
            Get {couponOffer.text}. Use the code on the Dudley shop and continue browsing the
            refreshed collection experience.
          </p>

          <div className="mt-6">
            <AmazonRatingBadge dark />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mainDudleyUrl} target="_blank" rel="noreferrer" className="primary-pill">
              Go to Dudley shop
            </a>
            <button type="button" onClick={() => setIsOpen(false)} className="secondary-pill-dark">
              Keep browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
