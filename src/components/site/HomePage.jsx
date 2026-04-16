import { ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { products } from '../../data/products'
import { AmazonRatingBadge, CouponStrip, PromoBanner } from './PromoElements'
import { AmbientParticles } from './AmbientParticles'
import { Reveal } from './Reveal'

const shopUrl = 'https://shop.dudleyq.com'

function FeatureCard({ product, index }) {
  return (
    <Link to={product.route} className="dudley-card dudley-card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden border-b border-white/10 bg-[#130d11]">
        <div
          className="absolute inset-0 opacity-70 transition duration-500 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle at top right, ${product.accent}50, transparent 45%), linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.5))`,
          }}
        />
        <img
          src={product.heroImage}
          alt={product.name}
          className="h-72 w-full object-contain p-8 transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
        />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/[0.35] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-[#d38d92]" />
          {product.badge}
        </div>
        <div className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
          0{index + 1}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#d7a1a4]">{product.eyebrow}</p>
          <h3 className="font-display text-4xl leading-none text-[#f3e8e8]">{product.shortName}</h3>
          <p className="text-base leading-7 text-white/[0.66]">{product.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.notes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/[0.62]"
            >
              {note}
            </span>
          ))}
        </div>

        <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#f1c868] transition group-hover:text-[#ffd988]">
          View landing page
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const signatureProducts = [products[1], products[2], products[3]]
  const landingCards = [products[0], products[3], products[4], products[2]]
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 })
  const heroParticlesY = useTransform(smoothProgress, [0, 1], [0, 180])
  const heroContentY = useTransform(smoothProgress, [0, 1], [0, 90])
  const heroContentScale = useTransform(smoothProgress, [0, 1], [1, 0.94])
  const heroCardsY = useTransform(smoothProgress, [0, 1], [0, -70])
  const heroCardsRotate = useTransform(smoothProgress, [0, 1], [0, 8])
  const heroCardsRotateAlt = useTransform(smoothProgress, [0, 1], [0, -8])
  const heroGlowOpacity = useTransform(smoothProgress, [0, 0.7], [0.95, 0.35])

  return (
    <main className="relative overflow-hidden bg-[#080507] text-white">
      <motion.div style={{ y: heroParticlesY, opacity: heroGlowOpacity }} className="absolute inset-0">
        <AmbientParticles />
      </motion.div>

      <section ref={heroRef} className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(211,141,146,0.18),transparent_32%),linear-gradient(180deg,rgba(7,4,6,0.88),rgba(7,4,6,0.98))]" />
        <div className="dudley-grid absolute inset-0 opacity-[0.18]" />
        <motion.div
          style={{ y: heroCardsY, rotate: heroCardsRotate }}
          className="absolute left-[4%] top-[22%] hidden w-56 xl:block"
        >
          <div className="dudley-card hero-floating-card p-5">
            <p className="section-label">Runway texture</p>
            <h3 className="mt-3 font-display text-3xl text-[#f4e5e5]">Editorial finish</h3>
            <p className="mt-3 text-sm leading-6 text-white/[0.62]">
              Motion, depth, and premium framing carried across the homepage hero.
            </p>
          </div>
        </motion.div>
        <motion.div
          style={{ y: heroCardsY, rotate: heroCardsRotateAlt }}
          className="absolute right-[5%] top-[18%] hidden w-60 xl:block"
        >
          <div className="dudley-card hero-floating-card p-5">
            <div className="flex items-center gap-2 text-[#efc868]">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <h3 className="mt-4 font-display text-3xl text-[#f4e5e5]">Luxury campaign motion</h3>
            <p className="mt-3 text-sm leading-6 text-white/[0.62]">
              Particles and glow layers stay active while the hero content drifts with scroll.
            </p>
          </div>
        </motion.div>
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10 lg:pb-32 lg:pt-20">
          <motion.div style={{ y: useTransform(smoothProgress, [0, 1], [0, 40]) }}>
            <Reveal direction="down" className="mx-auto mb-10 w-fit">
              <CouponStrip className="mx-auto w-fit" />
            </Reveal>
          </motion.div>

          <motion.div
            style={{ y: heroContentY, scale: heroContentScale }}
            className="mx-auto max-w-5xl text-center will-change-transform"
          >
            <Reveal direction="up" delay={0.05}>
              <div className="hero-pill mx-auto mb-8">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c9858c]" />
                Over 50 years of Black excellence
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.12}>
              <h1 className="font-display text-[4rem] leading-[0.9] tracking-[-0.04em] text-[#d99a9f] sm:text-[5.75rem] lg:text-[8rem]">
                Timeless
                <span className="block font-serif text-[0.84em] italic text-[#d7cdce]">
                  Beauty, Rooted in
                </span>
                <span className="block text-[#e0ba55]">Legacy</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/[0.64] sm:text-xl">
                Professional hair care and cosmetics crafted for textured and curly hair. Born in
                Greensboro, NC and trusted by generations of stylists, salons, and beauty lovers.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.28}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="#collection" className="primary-pill min-w-[240px]">
                  Explore products
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#heritage" className="secondary-pill-dark min-w-[240px]">
                  Our story
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.34}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <AmazonRatingBadge dark />
                <PromoBanner className="!w-fit !max-w-none px-6 py-3 text-sm shadow-none" />
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4 text-left sm:grid-cols-3">
              {[
                'Salon-trusted formulas',
                'Stronger landing-page storytelling',
                'Premium motion and hover depth',
              ].map((item, index) => (
                <Reveal key={item} direction={index === 1 ? 'up' : index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                  <div className="dudley-card flex items-center gap-3 px-4 py-4">
                    <CheckCircle2 className="h-5 w-5 text-[#e7bf64]" />
                    <span className="text-sm uppercase tracking-[0.16em] text-white/[0.72]">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="heritage" className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left">
            <div className="dudley-card relative overflow-hidden p-8 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,141,146,0.18),transparent_34%)]" />
              <div className="relative">
                <p className="section-label">Heritage</p>
                <h2 className="font-display mt-5 text-5xl leading-none text-[#f2d8d8] sm:text-6xl">
                  A beauty house shaped by texture, ritual, and trust.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68]">
                  The redesign carries the drama of the reference hero into the Dudley brand:
                  elegant typography, richer depth, layered particles, and product cards that feel
                  editorial instead of flat.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {signatureProducts.map((product, index) => (
              <Reveal key={product.slug} direction="right" delay={index * 0.1}>
                <div className="dudley-card dudley-card-hover flex items-center gap-4 p-5">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at top, ${product.accent}55, rgba(255,255,255,0.03))`,
                    }}
                  >
                    <Sparkles className="h-7 w-7 text-white/80" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#d9a3a7]">{product.eyebrow}</p>
                    <h3 className="mt-2 font-display text-3xl text-[#f5eded]">{product.shortName}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/[0.62]">{product.tagline}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <Reveal direction="up">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Landing pages</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-[#f2dfdf] sm:text-6xl">
                Rebuilt with the same hero energy and card depth.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/[0.62]">
              Every product page now shares the same visual language: cinematic dark gradients,
              ambient particles, layered cards, and stronger product framing.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <Reveal
              key={product.slug}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              delay={index * 0.06}
            >
              <FeatureCard product={product} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal direction="left">
            <div className="dudley-card p-8 lg:p-10">
              <p className="section-label">Collection preview</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-[#f4e2e2]">
                Product stories that feel premium before the click.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/[0.66]">
                The hover behavior, glass cards, and motion lighting give the homepage a stronger
                first impression while still letting visitors move quickly into a specific landing
                page or the Dudley shop.
              </p>
              <a
                href={shopUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f0c86a]"
              >
                Visit Dudley shop
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {landingCards.map((product, index) => (
              <Reveal key={product.slug} direction={index % 2 === 0 ? 'up' : 'right'} delay={index * 0.08}>
                <div className="dudley-card dudley-card-hover overflow-hidden">
                  <div
                    className="h-44"
                    style={{
                      background: `radial-gradient(circle at top, ${product.accent}55, rgba(255,255,255,0.02))`,
                    }}
                  >
                    <img src={product.gallery[0]} alt={product.name} className="h-full w-full object-contain p-6" />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#dba6aa]">{product.eyebrow}</p>
                    <h3 className="mt-2 font-display text-3xl text-[#f2e7e7]">{product.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/[0.62]">{product.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
