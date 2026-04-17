import { Link, NavLink } from 'react-router-dom'
import { products } from '../../data/products'

const shopUrl = 'https://shop.dudleyq.com'

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Story', href: '/#heritage' },
  { label: 'Products', href: '/#collection' },
]

export function SiteShell({ children }) {
  return <div className="luxury-shell">{children}</div>
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[linear-gradient(180deg,rgba(130,160,201,0.9),rgba(118,148,190,0.82))] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-6 py-4">
          <Link to="/" className="shrink-0">
            <img
              src="/assets/New Dudley Logo Med.png"
              alt="Dudley Beauty & Cosmetics"
              className="h-14 w-auto object-contain sm:h-16"
            />
          </Link>

          {/* <nav className="hidden items-center gap-7 xl:flex">
            {primaryLinks.map((item) => (
              <a key={item.label} href={item.href} className="nav-link-dudley">
                {item.label}
              </a>
            ))}
          </nav> */}


        <div className="hidden py-3 lg:block">
                  <div className="nav-product-strip">
          {products
            .filter((product, index) => index === 0) // Keep only the third item (VITAMIN POWER)
            .map((product) => (
              <NavLink key={product.slug} to={product.route} className="nav-product-chip">
                {product.shortName}
              </NavLink>
            ))
          }
        </div>
                </div>
          <a
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden border border-[#a46769] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#dba0a5] transition hover:bg-[#dba0a5] hover:text-[#10090b] sm:inline-flex"
          >
            Shop now
          </a>
        </div>

        
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#2f74d9_0%,#235cb4_44%,#173f80_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#f2c8cb]">
              Beauty-led redesign
            </p>
            <h3 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-[#f7dede] sm:text-6xl lg:text-[4.8rem]">
              A richer first impression for Dudley.
            </h3>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/55">
              The new visual system brings the homepage and product landing pages into one
              premium direction: stronger typography, darker editorial contrast, animated
              particles, and more intentional product cards.
            </p>
          </div>

          <div className="flex items-end lg:justify-end">
            <div className="space-y-3 text-sm leading-8 text-white/55">
              <p>Dudley Beauty Corp, LLC</p>
              <p>P.O. Box 168 · High Point, NC 27261</p>
              <p>888-573-8210</p>
              <a href="mailto:admin@dudleyq.com" className="text-[#ffe55c] transition hover:text-[#fff08f]">
                admin@dudleyq.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src="/assets/New Dudley Logo Med.png" alt="Dudley Beauty & Cosmetics" className="h-10 w-auto opacity-90" />
            <p className="text-sm text-white/55">
              59 years of premium haircare rooted in Black beauty heritage.
            </p>
          </div>

          <p className="text-sm text-white/55">© 2026 Dudley Beauty</p>
        </div>
      </div>
    </footer>
  )
}
