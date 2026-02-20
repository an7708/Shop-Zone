# ShopZone

ShopZone is a modern, responsive e-commerce web application built with React and Vite.  
It features a clean hero section with a video background, an AI-inspired ad generation workflow, a product catalog from DummyJSON API, and a minimal contact form.

## Features

- Full-viewport hero with looping video background and call-to-action buttons
- AI-style ad generation interface: prompt input → static image preview → motion preview placeholder
- Product listing fetched from DummyJSON (https://dummyjson.com/products)
- Responsive product cards with hover effects
- Navbar with pill-shaped, icon-enhanced search bar
- Contact page with floating labels, gradient background, and subtle animations
- Mobile-friendly layout with smooth transitions

## Tech Stack

- Frontend: React 18, Vite
- Routing: React Router v6
- Styling: Plain CSS (index.css + component-specific styles)
- Icons: lucide-react
- API: DummyJSON (https://dummyjson.com)
- Assets: Local images and videos in `/shopzone/src/assets.`

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/an7708/Shop-Zone.git
   cd Shop-Zone/shopzone
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start development server

   ```bash
   npm run dev
   ```

   Open http://localhost:5173 in your browser.

## Available Scripts

- `npm run dev`     — start development server
- `npm run build`   — build for production (outputs to `dist/`)
- `npm run preview` — preview production build locally

## Project Structure

```
Shop-Zone/
├── shopzone/                      # Actual project root (code lives here)
│   ├── public/
│   ├── src/
│   │   ├── assets/                # images, videos (bgvedio.mp4, img.png, etc.)
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Video.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── .gitignore
└── README.md
```

**Note:** All source code is inside the `shopzone/` folder. When deploying (e.g., to Vercel), set the **Root Directory** to `shopzone`.

## Deployment (Vercel)

1. Go to https://vercel.com/dashboard
2. Sign in with GitHub
3. Add New → Project
4. Import Repository → select `an7708/Shop-Zone`
5. Configure:
   - Framework Preset: Vite (auto-detected)
   - Root Directory: `shopzone.`
   - Build Command / Output Directory: leave empty
6. Click Deploy

## License


See the LICENSE file for details (add one if needed).
```

### How to update your README.md

1. Open `README.md` in VS Code (it's in your project root: `C:\Users\acer\Documents\ProDesk Intern\ShopZone\README.md`)
2. Replace everything with the content above
3. Save the file
4. Commit and push:

```powershell
git add README.md
git commit -m "Update README with full project documentation."
git push origin main
```


