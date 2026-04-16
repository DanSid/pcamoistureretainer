Vercel fix included:
- Added vercel.json so BrowserRouter routes like /peppermint-combo rewrite to /index.html
- Removed public/assets from this package so you can add your own assets back later at public/assets
- Removed node_modules, dist, .git, __MACOSX, and .DS_Store files from the packaged zip

Before deploying:
1. Put your assets back into public/assets
2. Run npm install
3. Run npm run build (optional local test)
4. Deploy to Vercel

Why this fixes NOT_FOUND:
Vercel was trying to find a real file at /peppermint-combo.
This project uses React Router BrowserRouter, so the server must always return index.html and let React handle the route in the browser.
