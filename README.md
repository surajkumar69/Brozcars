# Brozcars – Premium Self-Drive Car Rentals

A modern, responsive, luxury automotive static website built for **Brozcars**, a premier self-drive car rental business based in **Khanapara, Guwahati, Assam**.

---

## 🚗 Business Details
- **Business Name:** Brozcars
- **Business Category:** Self Drive Car Rentals
- **Tagline:** *"Drive the Dream."*
- **Contact Number:** [+91 7086100215](tel:917086100215)
- **WhatsApp:** [+91 7086100215](https://wa.me/917086100215)
- **Email:** [Brozcarassam@gmail.com](mailto:Brozcarassam@gmail.com)
- **Hub Location:** Khanapara, Guwahati, Assam 781022

---

## 🚘 Strict 9-Vehicle Fleet (All AI-Generated Photography)
The website strictly features only the 9 approved vehicle models with verified technical specifications:

1. **Tata Altroz** – 5-Star Global NCAP Safety Rating | 5 Seater | Manual | Petrol / Diesel
2. **Maruti Baleno** – 22+ km/l Fuel Efficiency | 5 Seater | Manual / Automatic | Petrol
3. **Hyundai i20 Sunroof** – Electric Sunroof & Bose Audio | 5 Seater | Manual / Automatic | Petrol
4. **Mahindra Thar 4×4** – Shift-on-Fly 4x4 & 226mm Clearance | 4 Seater | Manual / Automatic | Diesel
5. **Toyota Innova Crysta** – 7-Seater Captain Chair Touring Comfort | 7 Seater | Manual / Automatic | Diesel
6. **Maruti Swift** – Agile & Economical 24+ kmpl | 5 Seater | Manual | Petrol
7. **Honda City** – Executive Luxury Sedan with Sunroof | 5 Seater | Manual / Automatic | Petrol
8. **Hyundai Venue** – Compact SUV with High Ground Clearance | 5 Seater | Manual / Automatic | Petrol / Diesel
9. **Mahindra Scorpio** – Muscular 7-Seater for Hilly Terrains | 7 Seater | Manual | Diesel

---

## 🌟 Key Architecture & Features

### 1. 100% Pure Static Website (`output: 'export'`)
- Zero server backend or database needed.
- Blazing-fast page loads and instant CDN delivery.
- Pre-rendered static HTML files for the homepage and all 9 car detail pages in `out/`.
- Deploys seamlessly to **Vercel, Netlify, Cloudflare Pages, GitHub Pages, or S3**.

### 2. Official Brand Identity
- **Official Crest Logo:** Incorporated into the Navbar, Hero section, Footer, and Favicon.
- **Color Palette:** Deep Black (`#09090b`), White (`#f4f4f5`), and Vibrant Yellow / Gold (`#facc15`).

### 3. Complete Sections
- **Hero:** "YOUR JOURNEY. YOUR RULES." with AI-generated Mahindra Thar 4x4 background and quick trip search.
- **About:** Introduces Brozcars Khanapara as the gateway to Guwahati & Meghalaya road trips.
- **Our Fleet:** Category filtering (*Hatchback, Sedan, SUV & 4x4, 7-Seater MPV*), verified specs, View Details links, and Book Now triggers.
- **Why Choose Us:** 5 verified service highlights.
- **How It Works:** 4-step guided booking workflow.
- **Location:** Khanapara address, directions, transit proximity, and embedded dark Google Map.
- **Contact:** Direct phone, email, WhatsApp, and inquiry form.
- **Floating WhatsApp:** Sticky bottom-right button with pulse animation and pre-filled chat launcher.

### 4. Interactive Booking with WhatsApp Integration
- Interactive booking modal and embedded booking forms.
- Dynamic daily and total price estimation.
- Submissions trigger a confetti celebration, generate an itemized WhatsApp booking summary, and redirect directly to **+91 7086100215**.

---

## 🛠️ Technology Stack
- **Framework:** Next.js (App Router, Pure Static HTML Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Dark Luxury Automotive Aesthetic)
- **Icons:** Lucide React
- **Animations:** Canvas-Confetti, Tailwind transitions

---

## 🚀 Building & Deploying

### Development
```bash
npm run dev
```

### Static Production Export
```bash
npm run build
```
This generates the standalone static site in the `out/` directory.

### Deploy to Vercel
1. Push to GitHub / GitLab.
2. Import project in Vercel.
3. Vercel automatically detects Next.js and deploys your static site globally.
