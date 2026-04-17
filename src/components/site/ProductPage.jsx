import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, PlayCircle } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { products } from '../../data/products'
import { AmazonRatingBadge, CouponStrip, PromoBanner } from './PromoElements'
import { QuantumNodes } from './QuantumNodes'
import { Reveal } from './Reveal'

function RelatedProducts({ currentSlug }) {
  const related = products.filter((product) => product.slug !== currentSlug).slice(0, 3)

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        {/* <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="section-label">More signature pages</p>
          <h2 className="mt-4 font-display text-5xl leading-none text-[#f2dfdf]">
            Continue through the collection.
          </h2>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/[0.68] transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div> */}

      {/* <div className="grid gap-5 md:grid-cols-3">
        {related.map((product, index) => (
          <Reveal key={product.slug} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.08}>
            <Link to={product.route} className="dudley-card dudley-card-hover block p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#d59ca1]">{product.eyebrow}</p>
              <h3 className="mt-3 font-display text-3xl text-[#f4e9e9]">{product.shortName}</h3>
              <p className="mt-3 text-sm leading-6 text-white/[0.62]">{product.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#efc868]">
                View page
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div> */}
    </section>
  )
}

// Modal component for displaying enlarged images
const ImageModal = ({ imageUrl, altText, onClose, onNext, onPrev }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300"
        onClick={onClose}
      >
        &times;
      </button>
      
      <button 
        className="absolute left-4 text-white text-3xl z-10 hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        &#8249;
      </button>
      
      <button 
        className="absolute right-4 text-white text-3xl z-10 hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        &#8250;
      </button>
      
      <div 
        className="max-w-6xl max-h-[90vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt={altText} 
          className="max-h-[85vh] max-w-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default function ProductPage({ product }) {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.22 })
  const heroParticlesY = useTransform(smoothProgress, [0, 1], [0, 160])
  const heroTextY = useTransform(smoothProgress, [0, 1], [0, 72])
  const heroImageY = useTransform(smoothProgress, [0, 1], [0, -86])
  const heroImageRotate = useTransform(smoothProgress, [0, 1], [0, 4])
  const heroAccentY = useTransform(smoothProgress, [0, 1], [0, -40])
  
  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Function to handle image click
  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };
  
  // Function to navigate to next image
  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === product.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Function to navigate to previous image
  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? product.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="relative overflow-hidden bg-transparent">
      <motion.div style={{ y: heroParticlesY }} className="absolute inset-0">
        <QuantumNodes />
      </motion.div>

      <section ref={heroRef} className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(circle at top, rgba(225, 237, 255, 0.76), transparent 30%), linear-gradient(180deg, rgba(164, 189, 221, 0.94), rgba(130, 160, 201, 0.98))',
          }}
        />
        <div className="dudley-grid absolute inset-0 opacity-[0.16]" />
        <motion.div
          style={{ y: heroAccentY }}
          className="pointer-events-none absolute -right-10 top-24 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(236,244,255,0.46),transparent_68%)] blur-3xl lg:block"
        />
        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, 55]) }}
          className="pointer-events-none absolute left-0 top-32 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(196,219,247,0.34),transparent_70%)] blur-3xl lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28">
          <Reveal direction="down" className="mb-8 flex flex-wrap items-center gap-4">
            <CouponStrip className="w-fit" />
            <PromoBanner className="!w-fit !max-w-none px-6 py-3 text-sm shadow-none" />
          </Reveal>
{/* 
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.62] transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link> */}

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div style={{ y: heroTextY }}>
              <Reveal direction="left">
                <div>
              <p className="hero-pill w-fit">{product.eyebrow}</p>
              <h1 className="mt-8 font-display text-[3.8rem] leading-[0.9] tracking-[-0.04em] text-[#f0d4d6] sm:text-[5.2rem] lg:text-[6.8rem]">
                {product.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.66]">{product.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AmazonRatingBadge dark />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/70"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={product.shopLink}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-pill min-w-[220px]"
                >
                  Shop product
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#routine" className="secondary-pill-dark min-w-[220px]">
                  View routine
                </a>
              </div>
                </div>
              </Reveal>
            </motion.div>

      <motion.div style={{ y: heroImageY, rotate: heroImageRotate }}>
        <Reveal direction="right">
          <div className="hero-media-card relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at top right, ${product.accent}55, transparent 40%)`,
              }}
            />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/[0.35] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/[0.72]">
              {product.badge}
            </div>
            {product.heroImage?.endsWith('.mp4') ? (
               <video
                src={product.heroImage}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                className="relative z-10 h-full min-h-[560px] w-full object-contain p-8 pt-16 pb-24 lg:p-10 lg:pt-20 lg:pb-32"
              />
            ) : (
              <img
                src={product.heroImage}
                alt={product.name}
                className="relative z-10 h-full min-h-[560px] w-full object-contain p-8 pt-16 pb-24 lg:p-10 lg:pt-20 lg:pb-32"
              />
            )}
          </div>
          <motion.div
            style={{ y: useTransform(smoothProgress, [0, 1], [0, -34]) }}
            className="relative mt-4 rounded-[1.5rem] border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#efc868]">Parallax detail</p>
            <p className="mt-2 font-display text-2xl text-[#f6e9e9]">{product.callout}</p>
          </motion.div>
        </Reveal>
      </motion.div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal direction="left">
            <div className="dudley-card p-8">
              <p className="section-label">Signature note</p>
              <h2 className="mt-4 font-display text-4xl text-[#f3e3e3]">{product.callout}</h2>
              <p className="mt-4 text-base leading-7 text-white/[0.62]">
                The landing page now carries the same ambient motion and editorial contrast as the
                homepage, so the product story feels like part of one premium campaign.
              </p>
            </div>
          </Reveal>

          {product.highlights.map((item, index) => (
            <Reveal key={item.title} direction={index % 2 === 0 ? 'up' : 'right'} delay={index * 0.08}>
              <div className="dudley-card dudley-card-hover p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <Check className="h-5 w-5 text-[#efc868]" />
                </div>
                <h3 className="mt-5 font-display text-3xl text-[#f3e9e9]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/[0.64]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

  <section className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-10">
  <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
    <Reveal direction="left">
      <div className="dudley-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="section-label">Gallery</p>
            <h2 className="mt-3 font-display text-4xl text-[#f3e4e4]">Updated product imagery</h2>
          </div>
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-2">
          {product.gallery.map((image, index) => (
            <Reveal key={`${image}-${index}`} direction={index % 2 === 0 ? 'up' : 'right'} delay={index * 0.08}>
              <div 
                className="dudley-media-panel h-[360px] sm:h-[400px] lg:h-[440px] cursor-pointer"
                onClick={() => openImageModal(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="h-full w-full object-contain p-6" 
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>

    <div className="grid gap-6">
      {(product.detailImage || product.detailImage2) && (
        <Reveal direction="right">
          <div className="dudley-card overflow-hidden p-4">
            <div className="grid gap-6">
              {product.detailImage && (
                <Reveal direction="up">
                  <div 
                    className="dudley-media-panel h-[360px] sm:h-[400px] lg:h-[440px] cursor-pointer"
                    onClick={() => openImageModal(product.gallery.length)} // Index for first detail image
                  >
                    <img 
                      src={product.detailImage} 
                      alt={`${product.name} detail`} 
                      className="h-full w-full object-contain p-6" 
                    />
                  </div>
                </Reveal>
              )}
              {product.detailImage2 && (
                <Reveal direction="up" delay={0.08}>
                  <div 
                    className="dudley-media-panel h-[360px] sm:h-[400px] lg:h-[440px] cursor-pointer"
                    onClick={() => openImageModal(product.gallery.length + 1)} // Index for second detail image
                  >
                    <img 
                      src={product.detailImage2} 
                      alt={`${product.name} alternate detail`} 
                      className="h-full w-full object-contain p-6" 
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </Reveal>
      )}

      {(product.video || product.detailVideo) && (
        <Reveal direction="up" delay={0.12}>
          <div className="dudley-card p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                <PlayCircle className="h-6 w-6 text-[#efc868]" />
              </div>
              <div>
                <p className="section-label">Motion moment</p>
                <h3 className="mt-2 font-display text-3xl text-[#f3e5e5]">Editorial movement built in</h3>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
              <video
                src={product.video || product.detailVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-full max-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      )}
    </div>
  </div>
</section>

      {product.extraImages && product.extraImages.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <Reveal direction="up">
            <p className="section-label">Additional views</p>
            <h2 className="mt-4 font-display text-5xl text-[#f3e1e1]">More of the ritual and finish.</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {product.extraImages.map((image, index) => (
              <Reveal key={`${image}-${index}`} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.08}>
                <div 
                  className="dudley-card dudley-media-panel h-[360px] overflow-hidden cursor-pointer"
                  onClick={() => openImageModal(product.gallery.length + (product.detailImage ? 1 : 0) + (product.detailImage2 ? 1 : 0) + index)} // Calculate correct index
                >
                  <img 
                    src={image} 
                    alt={`${product.name} extra ${index + 1}`} 
                    className="h-full w-full object-contain p-4" 
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section id="routine" className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <Reveal direction="up">
          <div className="dudley-card p-8 lg:p-10">
            <p className="section-label">Routine</p>
            <h2 className="mt-4 font-display text-5xl text-[#f2dfdf]">A simple ritual flow for the landing page.</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {product.routine.map((step, index) => (
                <Reveal key={step} direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'} delay={index * 0.08}>
                  <div className="dudley-card dudley-card-hover p-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#efc868]">{`0${index + 1}`}</div>
                    <h3 className="mt-4 font-display text-3xl text-[#f4eaea]">{step}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/[0.62]">
                      Presented in a cleaner step layout so the visitor can understand the routine at a
                      glance without losing the premium visual rhythm.
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <RelatedProducts currentSlug={product.slug} />
      
      {/* Image Modal */}
      {modalOpen && (
        <ImageModal 
          imageUrl={
            currentImageIndex < product.gallery.length 
              ? product.gallery[currentImageIndex] 
              : currentImageIndex < product.gallery.length + (product.detailImage ? 1 : 0) 
                ? product.detailImage 
                : currentImageIndex < product.gallery.length + (product.detailImage ? 1 : 0) + (product.detailImage2 ? 1 : 0) 
                  ? product.detailImage2 
                  : product.extraImages[currentImageIndex - product.gallery.length - (product.detailImage ? 1 : 0) - (product.detailImage2 ? 1 : 0)]
          }
          altText={`Enlarged view of product`}
          onClose={() => setModalOpen(false)}
          onNext={goToNextImage}
          onPrev={goToPreviousImage}
        />
      )}
    </main>
  )
}
