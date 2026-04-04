# Portfolio Website — Product Specification
**Owner:** Rahul Nahata
**URL:** nahatarahul.github.io
**Version:** 1.1 — All decisions confirmed, ready for implementation
**Status:** Approved ✓

---

## 1. Purpose & Goals

### 1.1 Primary Objectives
Replace a ~2013 outdated site with a modern, minimal, professional portfolio that accurately represents Rahul's current stature as a senior engineering leader at Amazon — suitable to share with senior leaders, collaborators, the professional network, and anyone exploring a consultation engagement.

### 1.2 The "3 Questions in 60 Seconds" Test
When someone lands on this site, they should be able to answer:
1. **Who is Rahul?** → A senior engineering leader with 13 years of experience, currently an SDM at Amazon
2. **What has he built?** → A career spanning FinTech compliance, fraud prevention, withholding tax, EDA tools, and production systems — at Samsung, Cadence, and Amazon
3. **What is he about?** → Technical depth + leadership breadth + active thinking on AI, work culture, and engineering

### 1.3 Tagline ✓
> **"Building systems that scale. Leading teams that grow."**

---

## 2. Design Direction

### 2.1 Aesthetic ✓
- **Style:** Minimal & clean. No clutter. Every element earns its place.
- **Color palette:**
  - Background: Off-white (`#FAFAFA`) or pure white
  - Text: Near-black (`#1A1A1A`)
  - Accent: Orange (`#FF9900` — Amazon Smile orange, or a slightly warmer variant)
  - Section backgrounds: Alternate between white and very light gray (`#F5F5F5`) for visual rhythm
- **Typography:** Inter (Google Fonts) — clean, modern, highly legible
- **Spacing:** Generous padding and whitespace throughout

### 2.2 Images & Graphics ✓

**Profile Photo:** The attached B&W professional portrait. This is the visual anchor of the entire site — striking and distinctive. It goes in the Hero section, large and prominent.

**On additional images/cover art:** For a minimal clean site, we do NOT use stock photography or decorative cover images — they would undermine the aesthetic. Instead:
- The profile photo does the visual heavy lifting in the Hero
- The Gantt timeline is itself a rich, interactive graphic element
- Skills and certifications use clean card/tag layouts with subtle visual structure
- Section breaks use CSS-based subtle patterns or gradients, not images
- The orange accent color provides the visual warmth that images would otherwise supply

This is a deliberate choice: the site should feel like a well-designed article or product page, not a decorated template.

### 2.3 Responsive Design
- Desktop-first (primary audience visits on desktop)
- Mobile-friendly — navigation collapses, timeline becomes vertical list on mobile
- No horizontal scroll on any device

### 2.4 Performance
- Vanilla HTML/CSS/JS only — GitHub Pages compatible, no build step
- Target: <2 second load on standard broadband

---

## 3. Site Architecture

Single `index.html`, scroll-based, 8 sections.

---

### Section 1 — Hero

**Layout:** Full-viewport opening section.
- Left side: Large B&W profile photo (prominent, not just a small circle)
- Right side: Name, title, tagline, CTA buttons, nav links

**Content:**
- **Name:** Rahul Nahata
- **Title:** Software Development Manager · Amazon
- **Tagline:** "Building systems that scale. Leading teams that grow."
- **Navigation:** About · Journey · Skills · Experience · Contact
- **Social links:** LinkedIn · Twitter/X · Email
- **CTA buttons:**
  - Primary: "Connect on LinkedIn"
  - Secondary: "Download Resume"

**Design note:** The photo treatment (B&W, high contrast, dramatic lighting) contrasted against a clean white/light background will create an immediate, strong first impression.

---

### Section 2 — About

**Purpose:** Human-first introduction — who Rahul is beyond the job title.

**Proposed content (NDA-compliant):**

> I'm an engineering leader with 13 years of experience building large-scale systems across FinTech, tax compliance, and revenue protection. Currently, I lead global teams at Amazon focused on preventing financial losses — building intelligent systems that distinguish genuine customer issues from fraud and abuse, at a scale that touches millions of transactions worldwide.
>
> Before moving into leadership, I was a hands-on software engineer — writing production code, designing systems, and shipping products across withholding tax automation, global compliance reporting, and EDA tooling. That technical grounding shapes how I lead today: I still think in systems.
>
> I'm particularly interested in the intersection of engineering, AI, and organizational design — and I write about these topics on LinkedIn. Outside of work, I'm an active participant in technical stock market analysis and enjoy thinking at the boundary of quantitative models and market behaviour.

**NDA compliance check:** Domain described (revenue protection, fraud, tax, compliance). No internal system names, undisclosed metrics, or architecture details. ✓

---

### Section 3 — Journey (Career Timeline / Gantt View)

**This is the signature, most distinctive section of the site.**

#### 3.1 Concept
A horizontal, year-by-year timeline from **2006 to 2026 (present)**, with multiple parallel color-coded tracks — inspired by Rahul's original resume timeline but modernized and interactive.

Reference: Rahul's old resume shows exactly this pattern at the top — multi-track horizontal bars spanning years, color-coded by category.

#### 3.2 Tracks & Colors

| Track | Color | Content |
|---|---|---|
| Education | `#4A90D9` (Blue) | Aklank Public School (2006–2008), IIT Jodhpur B.Tech (2009–2013) |
| Internships | `#E8A838` (Amber) | UTT France (May–Jul 2011), NI Bangalore (May–Jul 2012) |
| Work & Roles | `#2ECC71` (Green) | Samsung (2013–2017), Cadence (2017–2019), Amazon SDE2 (2019–2022), Amazon SDE3 (2022–2024), Amazon SDM FinTech (2024–2025), Amazon SDM NCRC (2025–present) |
| Domain / Charter | `#1ABC9C` (Teal) | Withholding Tax, Compliance Reporting, NCRC |
| Certifications | `#9B59B6` (Purple) | 5 certs plotted at their dates |
| Achievements | `#FF9900` (Orange) | IIT JEE AIR 2813, programming wins, key milestones — Rahul to add |
| Responsibilities | `#E74C3C` (Red) | MAD Club, Taksh 2011, IGNUS 2012, team lead milestones |

#### 3.3 Key Dates for Timeline Data

```
Education:
  - Aklank Public School: 2006-01 → 2008-12
  - IIT Jodhpur (B.Tech): 2009-05 → 2013-04

Internships:
  - UTT France (R&D): 2011-05 → 2011-07
  - NI Bangalore (Tech Marketing): 2012-05 → 2012-07

Work:
  - Samsung India Electronics (Lead Engineer): 2013-07 → 2017-11
  - Cadence Design Systems (SE2): 2017-11 → 2019-08
  - Amazon SDE 2 (Withholding Tax, FinTech): 2019-08 → 2022-12
  - Amazon SDE 3 (Compliance Reporting, FinTech): 2022-12 → 2024-07
  - Amazon SDM (FinTech — led global compliance teams): 2024-07 → 2025-08
  - Amazon SDM (NCRC — revenue protection): 2025-08 → present

Certifications:
  - Blockchain Basics (Coursera): 2019-02
  - Smart Contracts (Coursera): 2019-03
  - Generative AI for Leaders (Vanderbilt): 2025-08
  - Generative AI Automation Tools (Edureka): 2025-09
  - ChatGPT & Zapier Agentic AI (Vanderbilt): 2025-10

Responsibilities:
  - MAD Club Co-ordinator, IIT Jodhpur: 2010–2012
  - Taksh 2011 Marketing & Promo Head: 2011
  - IGNUS 2012 Promo Head: 2012
  [Rahul to add Amazon leadership milestones]

Achievements:
  - IIT JEE AIR 2813 (among 384,977): 2009
  - Udacity Search Engine (Highest Distinction): 2013
  [Rahul to add more — auto-renders from data]
```

#### 3.4 Interaction Design
- Hover on any bar → tooltip with title, org, dates, and one-line description
- Year markers along the bottom axis (2006, 2007, ... 2026)
- Tracks labeled on the left
- Mobile: collapses to a clean vertical timeline list (no horizontal scroll)

#### 3.5 Data Architecture
All timeline data stored in a `timeline-data.js` file as a JSON array — **Rahul can add achievements and milestones directly to this file and they auto-render on the site without touching layout code.**

```js
// timeline-data.js
const timelineData = [
  {
    track: "work",
    label: "SDM – NCRC",
    org: "Amazon",
    start: "2025-08",
    end: null,          // null = present
    description: "Leading global teams to reduce Amazon's net cost of refunds and concessions — preventing fraud and abuse while protecting genuine customers.",
    color: "#2ECC71"
  },
  // ... all entries
];
```

---

### Section 4 — Skills

**Purpose:** Show the full spectrum of capabilities across 13 years — technical depth and leadership breadth — without fake percentage bars.

#### 4.1 Technical Skills (SDE years)
Displayed as clean tag groups:

- **Languages:** Java · C/C++ · Python · R · Matlab · Shell Script
- **Systems & Infrastructure:** Linux · Distributed Systems · Large-scale Backend Services
- **Domains:** FinTech · Withholding Tax · Compliance Automation · Fraud & Abuse Prevention · Revenue Protection · EDA Tools (Cadence)
- **CS Fundamentals:** Algorithms & Data Structures · Theory of Computation · Computer Networks · Computer Architecture · Signal Processing
- **Tools:** NI LabView · SQL/Oracle · Git

#### 4.2 Leadership & Management (last ~5 years)
- Software Development Management
- People Management & Team Building
- Global Stakeholder Management (India, Europe)
- Technical Roadmap & Strategy
- Engineering Excellence & Bar Raising
- Cross-functional Collaboration (Finance, Legal, Compliance, Tax)
- Hiring, Mentoring & Organizational Design

#### 4.3 AI & Emerging Tech
- Generative AI for Business Leaders
- Agentic AI (ChatGPT + Zapier)
- AI Automation Tools & Workflows
- Blockchain & Smart Contracts (2019)

#### 4.4 Visual Treatment
Three clearly labeled category cards (Technical | Leadership | AI & Emerging), each with tags. Clean, scannable, no fake progress bars.

---

### Section 5 — Experience (Detailed)

Clean work history with NDA-compliant narrative descriptions. Human language, not job description language.

#### Amazon Development Centre (India) — 6 yrs 9 mos+

**SDM · NCRC (Net Cost of Refunds & Concessions)** | Aug 2025–Present
> Leading global engineering teams to reduce Amazon's financial exposure from customer refunds and concessions. The challenge is nuanced — genuine losses from logistics, wear and tear, and service failures must be handled with care, while systematic fraud and abuse must be stopped. We build data-driven systems and mechanisms that make these distinctions intelligently and at scale.

**SDM · FinTech (Global Compliance Reporting)** | Jul 2024–Aug 2025
> Led global engineering teams across India and Europe delivering FinTech systems. Owned engineering roadmap and team health across geographies.

**SDE 3 · FinTech: Global Compliance Reporting** | Dec 2022–Jul 2024
> Designed and built a modular, plug-and-play compliance reporting platform enabling automated regulatory filings across multiple countries — architected so new jurisdictions can be onboarded without rebuilding from scratch.

**SDE 2 · FinTech: Withholding Tax** | Aug 2019–Dec 2022
> Owned Amazon's global withholding tax product — automated tax deductions at source, disbursements to government tax authorities, and customer refund mechanisms across multiple geographies.

#### Cadence Design Systems — Software Engineer 2 | Nov 2017–Aug 2019
> Built tooling and automation for the Commercial R&D team — production testing, Android platform validation, and RF calibration workflows.

#### Samsung India Electronics — Lead Engineer | Jul 2013–Nov 2017
> Led production-line software engineering for Android devices at scale. Key initiatives included: a real-time log analysis tool with predictive issue detection; OS upgrade validation automation; and an SMP implementation that reduced binary download time in the factory process by 40%.

---

### Section 6 — Education

- **IIT Jodhpur (IIT Rajasthan)** — B.Tech, Computer Science & Engineering, 2009–2013
  - CGPA: 8.82/10
  - IIT JEE AIR 2813 (among 384,977 candidates)
  - Co-founded MAD (Media Arts & Design) club; Marketing Head, Taksh 2011; Promo Head, IGNUS 2012

- **Aklank Public School, Rajasthan** — Class XII, Science, 2008
  - 84.5% (CBSE)

---

### Section 7 — Certifications

Clean cards, newest first:

1. **ChatGPT & Zapier: Agentic AI for Everyone** — Vanderbilt University · Oct 2025
2. **Generative AI Automation Tools and Applications** — Edureka · Sep 2025
3. **Generative AI for Leaders** — Vanderbilt University · Aug 2025
4. **Smart Contracts** — Coursera · Mar 2019
5. **Blockchain Basics** — Coursera · Feb 2019

---

### Section 8 — Contact

**Purpose:** One clean, inviting section. Not a form wall.

**Layout:** Simple, centered. Name + tagline + links.

**Content:**
- LinkedIn: linkedin.com/in/rahulnahata05
- Email: rahulnahata@hotmail.co.in
- Twitter/X: twitter.com/n05rahul

**CTA copy (proposed):**
> Open to conversations about: engineering leadership, FinTech systems, AI strategy — or if you're interested in technical stock market analysis and quantitative thinking. Feel free to reach out.

**Resume download link:** /pdf/RESUME_RAHUL_NAHATA.pdf (to be updated)

---

## 4. Technical Decisions ✓

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Vanilla HTML/CSS/JS | GitHub Pages compatible, no build step |
| CSS | Custom CSS with CSS variables | Clean theming, zero overhead |
| Timeline implementation | SVG + JS (D3-lite or custom) | Flexible, interactive, no heavy dependency |
| Timeline data | `timeline-data.js` (JSON) | Rahul can add achievements without touching layout |
| Fonts | Google Fonts — Inter | Free, fast, professional |
| Icons | Font Awesome (already in project) | Consistent with existing setup |
| Animations | CSS transitions only | Subtle, performant |
| Images | Profile photo only (no stock/cover art) | Preserves minimal aesthetic |
| Profile photo | Attached B&W portrait | Strong visual anchor |
| Resume PDF | /pdf/ folder, static | Same location, updated file |
| Color accent | Orange `#FF9900` | Warmth + subtle Amazon resonance |

---

## 5. File Structure

```
nahatarahul.github.io/
├── index.html              ← entire site
├── assets/
│   ├── css/
│   │   └── main.css        ← new custom stylesheet
│   └── js/
│       ├── main.js         ← scroll, nav, interactions
│       └── timeline-data.js ← ALL timeline data (editable by Rahul)
├── images/
│   └── avatar.jpg          ← replaced with new B&W photo
├── pdf/
│   └── RESUME_RAHUL_NAHATA.pdf
└── SPEC.md                 ← this file
```

---

## 6. Decisions Confirmed ✓

| Item | Decision |
|---|---|
| Tagline | "Building systems that scale. Leading teams that grow." |
| Accent color | Orange (#FF9900) |
| Profile photo | New B&W professional portrait |
| Contact email | rahulnahata@hotmail.co.in |
| CTA optional | Open for consultation + technical stock market discussions |
| Instagram | Excluded — keep professional |
| Images / cover art | Profile photo only; no stock imagery |
| Achievements in timeline | To be added by Rahul directly to timeline-data.js (auto-renders) |
| NCRC SDM start | August 2025 (FinTech SDM: Jul 2024 – Aug 2025) |

---

## 7. Open Items (Minor — can resolve during implementation)

- [ ] Rahul to supply updated resume PDF (current one is old)
- [ ] Rahul to add achievement/milestone entries to timeline-data.js after site is live
- [ ] Specific achievement wording for Samsung (SMP 40% reduction — confirm OK to include publicly)
- [ ] Any other extracurricular items to surface (Cricket, Table Tennis, etc. — from old resume)

---

## 8. Out of Scope (v1)

- Blog / articles section
- Dark mode
- Contact form with email delivery (using mailto: links)
- Analytics / tracking
- Multi-language support

---

## 9. Success Criteria

The redesigned site is complete when:
1. All 8 sections are built with accurate, NDA-compliant content
2. Desktop and mobile both look excellent
3. Gantt timeline renders with hover interactions
4. New B&W photo is the profile image
5. All outdated content (Samsung Lead Engineer, age 25) is gone
6. `timeline-data.js` is fully documented so Rahul can add entries himself
7. Site loads under 2 seconds
8. Deployed and live at nahatarahul.github.io
