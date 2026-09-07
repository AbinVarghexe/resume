# Resume — Abin Varghese (`resume.abinvarghese.app`)

A high-performance, minimalist editorial Resume & Credentials web application designed for **`resume.abinvarghese.app`**.

## ✨ Design & Architecture Highlights
- **Tactile Paper Texture**: Custom fractal noise overlay filter providing warm, stationery-like paper aesthetics (`#fbf9f4`).
- **Drafting / Notebook Grid**: Subtle dual-layer vector drafting lines replicating architectural graph notebooks.
- **Floating iOS-Style App Dock**: Elevated glassmorphic squircle icon dock with spring physics and hover tooltips linking directly to Code, Main Portfolio, Design Systems, GitHub, Behance, Cal.com, LinkedIn, Telegram, and Email.
- **Narrative Resume & Hackathon Chronicles**: Clean editorial typography highlighting hackathon achievements (NASA Space Apps, ACM Hackathon, Kochi Hackathon), tech stack, and background.
- **Dual PDF Actions**: Direct one-click downloads and preview modal for **Developer CV** and **Designer Portfolio**.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Locally
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the resume.

### 3. Production Build
```bash
pnpm build
```

## 🌐 Deploy to Vercel with Custom Subdomain

1. Push this repository to GitHub (e.g. `github.com/AbinVarghexe/resume`).
2. Import the project into [Vercel](https://vercel.com).
3. In **Project Settings** $\rightarrow$ **Domains**, add:
   ```
   resume.abinvarghese.app
   ```
4. In your DNS Provider (Cloudflare / Namecheap / Vercel DNS):
   - **Type**: `CNAME`
   - **Name**: `resume`
   - **Target**: `cname.vercel-dns.com`
