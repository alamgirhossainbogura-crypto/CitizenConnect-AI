# 🇧🇩 CitizenConnect AI

An AI-powered public service assistant that simplifies complex Bangladesh government welfare application forms, checks service eligibility in plain Bengali, provides a 1-click emergency safety desk, and implements a sustainable ad-supported monetization model.

🏆 Built for Global AI Hackathons.

---

## 🌟 Key Features

* **🤖 Smart AI Service Assistant:** Plain Bengali guidance powered by Google Gemini API to help citizens understand eligibility and documentation for social safety net programs (e.g., Old Age Allowance, TCB Family Cards, Agriculture Subsidies).
* **🆘 Emergency Safety Desk:** Quick 1-click direct dialing to essential national emergency helplines (**999**, **333**, **109**) with built-in digital safety guidelines.
* **💰 Google AdSense Monetization:** Integrated advertisement slot placeholders (`AdBanner`) ensuring the platform remains **100% free** for all citizens while remaining financially self-sustainable.
* **📱 Responsive & Accessible UI:** Designed using Next.js 15 and Tailwind CSS for seamless experience across mobile phones and modern browsers.

---

## 📁 Repository Architecture

text
citizen-connect-ai/
├── app/
│   ├── api/eligibility/     # Backend Route for Gemini API Processing
│   ├── dashboard/           # Option 1: Smart AI Assistant Interface
│   ├── safety/              # Option 2: Emergency Safety & Helpline Interface
│   └── page.tsx             # Main Landing Page with Dual Option Navigation
├── components/
│   ├── AdBanner.tsx         # AdSense Slot Component (Monetization Layer)
│   └── SafetyDesk.tsx       # Helpline Component with Direct Call Triggers
├── data/
│   └── helplines.json       # Emergency Helplines Data Structure
├── database/
│   └── services.json        # Government Schemes & Eligibility Rules Database
├── lib/
│   ├── gemini.ts            # Google Gemini 2.5 Flash SDK Setup
│   └── types.ts             # TypeScript Interfaces & Definitions
├── locales/
│   └── bn.json              # Bengali Localization Strings
├── AGENTS.md                # AI Agent Directives & Guardrails
├── GEMINI.md                # Developer Guidelines & Gemini AI System Prompting
├── proxy.ts                 # Next.js Middleware for Security & Route Guarding
├── eslint.config.mjs        # ESLint Flat Configuration
├── next.config.ts           # Next.js Production Configuration
├── postcss.config.mjs       # Tailwind CSS PostCSS Pipeline
├── tsconfig.json            # TypeScript Strict Compiler Settings
├── .gitignore               # Git Excluded Files Rules
├── package.json             # Project Dependencies & Scripts
└── README.md                # Project Documentation

---

# 🛠️ Tech Stack
​Framework: Next.js 15 (App Router) + React 19
​Styling: Tailwind CSS
​AI Model: Google Gemini 2.5 Flash (@google/genai)
​Deployment Platform: Vercel

# ​🚀 Getting Started
​Prerequisites
​Node.js 20+
​A Google Gemini API Key
​Installation
1. **Clone the repository:**
git clone [https://github.com/your-username/citizen-connect-ai.git](https://github.com/your-username/citizen-connect-ai.git)
cd citizen-connect-ai
2. **Install dependencies:**
 npm install
3. **Set up Environment Variables:
Create a .env.local file in the root directory:**
GEMINI_API_KEY=your_google_gemini_api_key
4. **Run local development server:**
npm run dev

Open http://localhost:3000 to view the application in your browser.

# 💰 Monetization & Business Sustainability
​Ad-Supported Revenue Model: Bottom banner slot reserved for Google AdSense integration ensures operational costs are covered without charging end users.
​Initial Seed Fund: Bootstrapped development supported by early micro-investment/grants for research and public service adaptation.
# ​🛡️ Privacy & Safety Note
​CitizenConnect AI never asks for, stores, or processes sensitive credentials such as NID numbers, bank passwords, or PINs. All form guidance is purely informational to ensure citizens retain full control.
​Made with ❤️ for Bangladesh 🇧🇩
