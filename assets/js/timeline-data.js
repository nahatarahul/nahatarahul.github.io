/**
 * TIMELINE DATA — nahatarahul.github.io
 *
 * To add a new entry, copy the format below and add to the array.
 * Dates use "YYYY-MM" format. Use end: null for "present".
 * isPoint: true for single-moment achievements (rendered as a diamond marker).
 *
 * Tracks: "education" | "internship" | "work" | "domain" | "certification" | "achievement" | "responsibility"
 */

const TIMELINE_START = 2006;
const TIMELINE_END   = 2026;

const timelineData = [

  // ─── EDUCATION ────────────────────────────────────────────────────────────
  {
    track: "education",
    label: "Aklank Public School",
    sublabel: "XII Science (CBSE) · 84.5%",
    start: "2006-04",
    end: "2008-04",
    description: "Class XII, Science stream. 84.5% (CBSE)."
  },
  {
    track: "education",
    label: "IIT Jodhpur",
    sublabel: "B.Tech, Computer Science · 8.82/10",
    start: "2009-05",
    end: "2013-04",
    description: "Bachelor of Technology in Computer Science & Engineering. CGPA 8.82/10. IIT JEE AIR 2813 among 384,977 candidates."
  },

  // ─── INTERNSHIPS ──────────────────────────────────────────────────────────
  {
    track: "internship",
    label: "UTT France",
    sublabel: "R&D Intern · CAPSEC Programme",
    start: "2011-05",
    end: "2011-07",
    description: "Research internship at University of Technology, Troyes under Prof. Hichem Snoussi. Worked on Wireless Sensor Networks monitoring and geo-localization."
  },
  {
    track: "internship",
    label: "National Instruments",
    sublabel: "Technical Marketing Intern · Bengaluru",
    start: "2012-05",
    end: "2012-07",
    description: "Designed a VI to convert images to chromaticity coordinates. Presented on Wireless Sensor Networks at the 3rd Annual DAQ Conference, Pune."
  },

  // ─── WORK ─────────────────────────────────────────────────────────────────
  {
    track: "work",
    label: "Samsung India Electronics",
    sublabel: "Lead Engineer · Noida",
    start: "2013-07",
    end: "2017-11",
    description: "Led production-line software engineering for Android devices. Built real-time log analysis tooling, OS upgrade validation automation, and SMP-based binary download optimisation achieving significant improvement in factory throughput."
  },
  {
    track: "work",
    label: "Cadence Design Systems",
    sublabel: "Software Engineer 2 · Noida",
    start: "2017-11",
    end: "2019-08",
    description: "Engineer on the Commercial R&D team building tools and automation for production testing, Android platform validation, and RF calibration workflows."
  },
  {
    track: "work",
    label: "Amazon · SDE 2",
    sublabel: "FinTech: Withholding Tax · Gurugram",
    start: "2019-08",
    end: "2022-12",
    description: "Owned Amazon's global withholding tax product — automated tax deductions at source, disbursements to government tax authorities, and customer refund mechanisms across multiple geographies."
  },
  {
    track: "work",
    label: "Amazon · SDE 3",
    sublabel: "FinTech: Compliance Reporting · India",
    start: "2022-12",
    end: "2024-07",
    description: "Designed and built a modular, plug-and-play compliance reporting platform enabling automated regulatory filings across multiple countries, with new jurisdictions onboarded without rebuilding from scratch."
  },
  {
    track: "work",
    label: "Amazon · SDM",
    sublabel: "FinTech: Global Compliance · India",
    start: "2024-07",
    end: "2025-08",
    description: "Led global engineering teams across India and Europe delivering FinTech compliance systems. Defined engineering roadmap and drove team health across geographies."
  },
  {
    track: "work",
    label: "Amazon · SDM",
    sublabel: "NCRC: Revenue Protection · India",
    start: "2025-08",
    end: null,
    description: "Leading global teams to reduce Amazon's net cost of refunds and concessions — building intelligent systems that distinguish genuine customer issues from fraud and abuse at massive scale."
  },

  // ─── DOMAIN / CHARTER ─────────────────────────────────────────────────────
  {
    track: "domain",
    label: "Withholding Tax",
    sublabel: "FinTech · Amazon",
    start: "2019-08",
    end: "2022-12",
    description: "Global withholding tax domain — deductions, government payments, customer refunds."
  },
  {
    track: "domain",
    label: "Global Compliance Reporting",
    sublabel: "FinTech · Amazon",
    start: "2022-12",
    end: "2025-08",
    description: "Modular, plug-and-play compliance reporting platform for automated worldwide regulatory filings."
  },
  {
    track: "domain",
    label: "NCRC — Revenue Protection",
    sublabel: "Amazon",
    start: "2025-08",
    end: null,
    description: "Net Cost of Refunds & Concessions — preventing financial losses through fraud detection and intelligent concession systems."
  },

  // ─── CERTIFICATIONS (shown in the Education row, purple markers) ──────────
  {
    track: "education",
    label: "Blockchain Basics",
    sublabel: "Coursera · Certification",
    start: "2019-02",
    end: "2019-02",
    isPoint: true,
    color: "#8E44AD",
    description: "Blockchain Basics — Coursera (Feb 2019)"
  },
  {
    track: "education",
    label: "Smart Contracts",
    sublabel: "Coursera · Certification",
    start: "2019-03",
    end: "2019-03",
    isPoint: true,
    color: "#8E44AD",
    description: "Smart Contracts — Coursera (Mar 2019)"
  },
  {
    track: "education",
    label: "Generative AI for Leaders",
    sublabel: "Vanderbilt University · Certification",
    start: "2025-08",
    end: "2025-08",
    isPoint: true,
    color: "#8E44AD",
    description: "Generative AI for Leaders — Vanderbilt University (Aug 2025)"
  },
  {
    track: "education",
    label: "GenAI Automation Tools",
    sublabel: "Edureka · Certification",
    start: "2025-09",
    end: "2025-09",
    isPoint: true,
    color: "#8E44AD",
    description: "Generative AI Automation Tools and Applications — Edureka (Sep 2025)"
  },
  {
    track: "education",
    label: "ChatGPT & Zapier: Agentic AI",
    sublabel: "Vanderbilt University · Certification",
    start: "2025-10",
    end: "2025-10",
    isPoint: true,
    color: "#8E44AD",
    description: "ChatGPT & Zapier: Agentic AI for Everyone — Vanderbilt University (Oct 2025)"
  },

  // ─── RESPONSIBILITIES ──────────────────────────────────────────────────────
  {
    track: "responsibility",
    label: "MAD Club",
    sublabel: "Media Arts & Design · IIT Jodhpur",
    start: "2010-05",
    end: "2013-04",
    description: "Asst. Co-ordinator (2010), Joint Executive (2011), Joint Secretary (2012). Co-built the club culture around media, arts, and design at IIT Jodhpur."
  },
  {
    track: "responsibility",
    label: "Taksh 2011",
    sublabel: "Inter-College Cultural Festival",
    start: "2011-01",
    end: "2011-06",
    description: "Marketing & Promotional Head for Taksh 2011, the inter-college social and cultural festival at IIT Jodhpur."
  },
  {
    track: "responsibility",
    label: "IGNUS 2012",
    sublabel: "First Sports & Techno-Cult Festival",
    start: "2012-01",
    end: "2012-06",
    description: "Promotional Head of IGNUS 2012 — the first sports and techno-cultural festival of IIT Rajasthan."
  },

  // ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────
  // Add entries below. isPoint: true renders as a marker instead of a bar.
  // Example: { track: "achievement", label: "...", date: "YYYY-MM", isPoint: true, description: "..." }
  {
    track: "achievement",
    label: "IIT JEE AIR 2813",
    sublabel: "Among 384,977 candidates",
    start: "2009-04",
    end: "2009-04",
    isPoint: true,
    description: "All India Rank 2813 in IIT JEE 2009 among 384,977 candidates nationwide."
  },
  {
    track: "achievement",
    label: "Search Engine · Highest Distinction",
    sublabel: "Udacity",
    start: "2013-06",
    end: "2013-06",
    isPoint: true,
    description: "Successfully completed Building a Search Engine with Highest Distinction — Udacity."
  },
  {
    track: "achievement",
    label: "Programming Competition Winner",
    sublabel: "IIT Jodhpur",
    start: "2011-09",
    end: "2011-09",
    isPoint: true,
    description: "Winner of the Intra-College Programming Competition at IIT Jodhpur."
  },

  // ─── IIT PROJECT ACHIEVEMENTS ─────────────────────────────────────────────
  {
    track: "achievement",
    label: "HDR Photography & Tone Mapping",
    sublabel: "IIT Jodhpur · Computational Photography",
    start: "2011-10",
    end: "2011-10",
    isPoint: true,
    description: "Implemented HDR photography and tone mapping algorithms on an NVIDIA TEGRA Tablet using Fcam, as part of a Computational Photography course project."
  },
  {
    track: "achievement",
    label: "ASHA Tablet — Health Care Device",
    sublabel: "IIT Jodhpur",
    start: "2012-03",
    end: "2012-03",
    isPoint: true,
    description: "Worked on measurement of various Health Care Vitals using Sensors, as part of IIT Jodhpur's Health Care Device project."
  },
  {
    track: "achievement",
    label: "Blind Signal Demodulation",
    sublabel: "B.Tech Project · IIT Jodhpur",
    start: "2013-02",
    end: "2013-02",
    isPoint: true,
    description: "Designed a standalone system using NI equipment for Blind Signal Demodulation — capable of detecting most modulation schemes and demodulating unknown signals. B.Tech final project."
  },

  // ─── SAMSUNG PROJECT ACHIEVEMENTS ─────────────────────────────────────────
  {
    track: "achievement",
    label: "3-Lead ECG via Mobile",
    sublabel: "Samsung India Electronics",
    start: "2014-06",
    end: "2014-06",
    isPoint: true,
    description: "Designed and developed a mechanism to calculate 3-lead ECG through mobile devices — bridging hardware sensors and mobile software."
  },
  {
    track: "achievement",
    label: "SMP Binary Download Optimisation",
    sublabel: "Samsung India Electronics",
    start: "2014-10",
    end: "2014-10",
    isPoint: true,
    description: "Implemented Symmetric Multi-Processing (SMP) to speed up binary downloads during the factory process, achieving a significant improvement in production line throughput."
  }

  // ─── ADD MORE ACHIEVEMENTS BELOW THIS LINE ────────────────────────────────
  // Copy the format above. Save the file — the timeline auto-updates.
];
