# Trivantage Capital — Technology Stack & Handoff Document

**Prepared for:** Client IT Manager
**Project:** trivantagecapital.com website
**Document version:** 1.0
**Last updated:** 16 June 2026

---

## 1. Executive Summary

The Trivantage Capital website is a **server-rendered web application** built on **Next.js (React)**. It is *not* a static HTML site and *not* a WordPress site — it requires a running **Node.js server** to operate, because it includes live backend functionality (email-based OTP verification, form submissions, newsletter signup, and a content feed).

Content for the "Insights" / blog section is pulled at runtime from a **headless WordPress.com** source via API; the site itself contains no database. Transactional email is handled by **Resend**, newsletter subscriptions by **Brevo**, and regulatory complaints data is read from **Google Sheets**.

> **Hosting note:** Because the app needs a Node.js runtime, it cannot be deployed on standard GoDaddy shared/cPanel or WordPress hosting. It is designed for a Node-capable host (Vercel recommended, or a VPS/dedicated server). See Section 9.

---

## 2. Core Stack at a Glance

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) | 16.1.6 | React-based, server + client rendering |
| UI library | React | 19.2.3 | |
| Language | JavaScript (JSX) | ES2017+ | TypeScript tooling configured; codebase is `.js`/`.jsx` |
| Styling | Tailwind CSS | v4 | via `@tailwindcss/postcss` + PostCSS |
| Fonts | `next/font/google` | — | Manrope, Libre Baskerville (+ Material Symbols Outlined icons) |
| Runtime | Node.js | 20 LTS+ recommended | Required to run the app |
| Package manager | npm | — | `package-lock.json` present |

---

## 3. Third-Party Services & Integrations

These are external accounts the client **owns and must maintain** (API keys, billing, renewals):

| Service | Purpose | What it powers | Credential / config |
|---|---|---|---|
| **Resend** (resend.com) | Transactional email | OTP codes, job applications, callback requests, complaint submissions | `RESEND_API_KEY`, `RESEND_FROM`. **Domain `trivantagecapital.com` must stay verified in Resend (SPF/DKIM DNS records).** |
| **Brevo** (brevo.com) | Newsletter / contacts | Newsletter subscriptions (adds verified emails to a contact list) | `BREVO_API_KEY`, `BREVO_LIST_ID` |
| **WordPress.com REST API** | Headless content source | "Insights" blog posts and Careers job listings | Public API — pulls from `vantagepoint37.wordpress.com` / `trivantagecapital.wordpress.com`. No key required. |
| **Google Sheets** (via `opensheet.elk.sh`) | Regulatory complaints data | Grievance/complaints monthly & trend tables (SEBI disclosure) | `NEXT_PUBLIC_COMPLAINTS_*` URLs pointing at a published Google Sheet |

> **Maintenance implication:** The blog/insights and job listings are edited in **WordPress.com**, not in this codebase. The monthly complaints numbers are edited in a **Google Sheet**. Non-technical staff can update content in those two places without a code deploy.

---

## 4. Application Architecture

### 4.1 Rendering model
- **App Router** (Next.js `app/` directory).
- Mix of **server components** (pages, data fetching) and **client components** (forms, interactive UI, marked `"use client"`).
- Images served via Next.js `next/image` optimization; remote images allowed from WordPress.com and Gravatar (configured in `next.config.mjs`).

### 4.2 Backend API routes (server-side)
Located in `app/api/`. These run on the server and hold secret keys:

| Route | Method | Function |
|---|---|---|
| `/api/send-otp` | POST | Generates a 6-digit OTP, emails it via Resend, returns a signed token |
| `/api/verify-otp` | POST | Validates the OTP, issues a short-lived "verified" token |
| `/api/subscribe` | POST | Adds a verified email to the Brevo newsletter list |
| `/api/apply` | POST | Careers application (name, phone, email, role, PDF résumé ≤5MB) → emails Careers inbox |
| `/api/callback` | POST | "Request a callback" form → emails Invest/Info inbox |
| `/api/complaint` | POST | SEBI grievance form (incl. PAN/Client ID validation) → emails Complaints inbox |
| `/api/insights-feed` | GET | Generates an RSS/XML feed from WordPress posts (cached 1 hour) |

### 4.3 OTP / email verification (no database)
Email verification is **stateless** — there is **no database**. It uses HMAC-SHA256 signed tokens (`lib/otp-token.js`, Node `crypto`):
- The OTP is hashed (never stored in plaintext in the token).
- OTP token valid **10 minutes**; the resulting "verified" token valid **30 minutes**.
- Signed with the `OTP_SECRET` environment variable.

All form submissions (apply, callback w/ email, complaint, subscribe) require a valid verified token, preventing spam/spoofed submissions.

### 4.4 US residency gating (client-side)
Per regulatory requirement, a **disclaimer modal** captures the visitor's residency. US residents are routed to restricted content via `USRedirectGuard` / `USInfoBanner`. State is held in browser `sessionStorage` (`hooks/useResidency.js`, `lib/resetResidency.js`) — no server tracking.

---

## 5. Directory Structure

```
trivantagecapital/
├── app/                      # Pages (routes) + API routes
│   ├── api/                  # 7 server-side backend endpoints (see 4.2)
│   ├── about/                # Team, advisors, dynamic [slug] bio pages
│   ├── careers/              # Job listings (from WordPress) + application form
│   ├── contact/  invest/  our-offering/  regulatory/
│   ├── grievance/            # Complaints form + complaints-data tables
│   ├── login/                # OTP login flow
│   ├── privacy-policy/  terms-of-service/
│   ├── layout.js             # Root layout (Navbar, Footer, modals, fonts)
│   ├── page.js               # Homepage
│   └── globals.css           # Global + Tailwind styles
├── components/               # ~25 reusable UI components & forms
├── lib/                      # Helpers: resend, otp-token, team/advisor config, blog utils
├── hooks/                    # React hooks (useResidency)
├── public/                   # Static assets: images, team photos, legal PDFs (11 PDFs)
├── next.config.mjs           # Next.js config (image domains)
├── postcss.config.mjs        # Tailwind/PostCSS
├── package.json              # Dependencies & scripts
└── .env                      # Secrets & config (NOT committed — see Section 7)
```

---

## 6. Dependencies

**Production** (`dependencies`):
- `next` 16.1.6 — framework
- `react` 19.2.3, `react-dom` 19.2.3 — UI runtime
- `resend` ^4.0.0 — transactional email SDK
- `react-google-recaptcha` ^3.1.0 — *installed but currently not referenced in code; candidate for removal or future use*

**Development** (`devDependencies`):
- `tailwindcss` ^4, `@tailwindcss/postcss` ^4 — styling
- `eslint` ^9, `eslint-config-next` 16.1.6 — linting
- `@types/node`, `@types/react` — type definitions for editor tooling

---

## 7. Environment Variables (Configuration)

All secrets live in a `.env` file (git-ignored — **not** in source control). They must be re-created on any hosting platform. **Do not expose the non-`NEXT_PUBLIC_` values publicly.**

| Variable | Sensitive? | Purpose |
|---|---|---|
| `RESEND_API_KEY` | 🔴 Secret | Resend email API auth |
| `RESEND_FROM` | Config | "From" sender, e.g. `Trivantage Capital <noreply@trivantagecapital.com>` |
| `OTP_SECRET` | 🔴 Secret | HMAC signing key for OTP/verification tokens |
| `BREVO_API_KEY` | 🔴 Secret | Brevo newsletter API auth |
| `BREVO_LIST_ID` | Config | Target Brevo contact list |
| `EMAIL_RECIPIENT_CAREERS` | Config | Inbox for job applications |
| `EMAIL_RECIPIENT_INVEST` | Config | Inbox for callback requests |
| `EMAIL_RECIPIENT_COMPLAINTS` | Config | Inbox for grievances |
| `WP_BASE_URL`, `WP_API_URL`, `WP_RECENT_POSTS_URL`, `WP_CAREERS_URL` | Config | WordPress.com content endpoints |
| `NEXT_PUBLIC_COMPLAINTS_DATA_URL` | Public | Google Sheet — monthly complaints data |
| `NEXT_PUBLIC_COMPLAINTS_TREND_URL` | Public | Google Sheet — monthly trend |
| `NEXT_PUBLIC_COMPLAINTS_TREND_YEARLY_URL` | Public | Google Sheet — yearly trend |

> ⚠️ **Security action on handoff:** Any key that has been shared via email/chat/screenshot during development should be **rotated** in the respective dashboard (Resend, Brevo) and a **new random `OTP_SECRET`** generated, before going live.

---

## 8. Build & Run

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local development server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Run the production server (after build) |
| `npm run lint` | ESLint checks |

**Minimum to run in production:** Node.js 20+, `.env` populated, then `npm install && npm run build && npm run start`.

---

## 9. Hosting Requirements & Options

This app **requires a Node.js server runtime**. It cannot run on PHP-only shared hosting.

| Option | Suitability | Notes |
|---|---|---|
| **Vercel** | ✅ Recommended | Built by the Next.js team; zero-config, auto SSL, env-var management, free/low-cost tier. Point the GoDaddy **domain's DNS** at Vercel. |
| **VPS / Dedicated server** (incl. GoDaddy VPS) | ✅ Works | Self-managed: install Node, run with a process manager (e.g. PM2), reverse-proxy via nginx, SSL via certbot. Higher maintenance. |
| **Netlify / Cloudflare Pages / Render / AWS Amplify** | ✅ Works | Comparable Node-capable platforms. |
| **GoDaddy shared / cPanel hosting** | ❌ Not supported | PHP-focused; no reliable Next.js runtime. |
| **GoDaddy WordPress hosting** | ❌ Not supported | PHP/WordPress only. |

**Recommended setup:** Keep the **domain registered at GoDaddy**, host the application on **Vercel**, and point GoDaddy DNS to Vercel. The client retains full domain ownership at GoDaddy while the app runs on a platform designed for it.

**DNS records the app's email depends on:** Resend's SPF/DKIM records for `trivantagecapital.com` must remain in the domain's DNS for outgoing email (OTP, form notifications) to deliver.

---

## 10. Operational Notes for IT

- **No database to back up.** State is either external (WordPress, Brevo, Google Sheets) or stateless (signed tokens). Backups = the **source code repository** + the **external service accounts**.
- **Content updates** (blog/insights, jobs) happen in **WordPress.com**; complaints figures in **Google Sheets** — no deploy needed.
- **Code changes** require a rebuild/redeploy (automatic on Vercel when connected to the Git repo).
- **Caching:** the insights feed is cached for 1 hour; WordPress content fetches may be cached by Next.js.
- **Monitoring:** watch the Resend and Brevo dashboards for email/API quota and delivery health.
- **Renewals to track:** domain (GoDaddy), hosting plan, Resend plan, Brevo plan.

---

## 11. Key Contacts & Accounts to Transfer

On handoff, ensure the client's IT has admin access to:

- [ ] Source code repository (GitHub/GitLab)
- [ ] Hosting platform account (Vercel / VPS)
- [ ] Domain & DNS (GoDaddy)
- [ ] Resend account (+ verified sending domain)
- [ ] Brevo account (+ contact list)
- [ ] WordPress.com account(s) used for content
- [ ] Google Sheet(s) for complaints data
- [ ] The production `.env` values (transferred securely, then rotated)
```
