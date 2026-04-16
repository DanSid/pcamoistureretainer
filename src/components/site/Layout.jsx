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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080507]/[0.86] backdrop-blur-xl">
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
    <footer className="border-t border-white/10 bg-[#050305]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="section-label">Beauty-led redesign</p>
          <h3 className="mt-4 font-display text-5xl leading-none text-[#f2dddd]">
            A richer first impression for Dudley.
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/[0.6]">
            The new visual system brings the homepage and product landing pages into one premium
            direction: stronger typography, darker editorial contrast, animated particles, and more
            intentional product cards.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {products
            .filter((product) => product.slug === 'vitamin-power') // Filter for Vitamin Power only
            .map((product) => (
              <Link key={product.slug} to={product.route} className="dudley-card dudley-card-hover p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d59ca1]">{product.eyebrow}</p>
                <h3 className="mt-2 font-display text-3xl text-[#f4e8e8]">{product.name}</h3>
              </Link>
            ))}
        </div>
      </div>
      
      {/* Add contact information section */}
      <div className="mx-auto mt-12 max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/assets/New Dudley Logo Med.png" alt="Dudley Beauty & Cosmetics" className="h-10 w-auto" />
            <p className="text-sm text-white/60">59 years of premium haircare rooted in Black beauty heritage.</p>
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <p>Dudley Beauty Corp, LLC</p>
            <p>P.O. Box 168 · High Point, NC 27261</p>
            <p>888-573-8210</p>
            <a href="mailto:admin@dudleyq.com" className="text-yellow-400 hover:text-yellow-300 transition">admin@dudleyq.com</a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-12 pt-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm text-white/60">© 2026 Dudley Beauty</p>
        </div>
      </div>
    </footer>
  )
}
