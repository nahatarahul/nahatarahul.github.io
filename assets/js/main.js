/* ============================================================
   RAHUL NAHATA — PORTFOLIO
   main.js — Navigation, animations, Gantt timeline renderer
   ============================================================ */

(function () {
  'use strict';

  /* ── NAV: scroll shadow + active link ──────────────────────── */
  const navbar  = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  const sections = [];

  document.querySelectorAll('section[id]').forEach(s => sections.push(s));

  window.addEventListener('scroll', () => {
    // Scrolled class
    navbar.classList.toggle('scrolled', window.scrollY > 10);

    // Active nav link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.section === current);
    });
  }, { passive: true });

  /* ── HAMBURGER MENU ──────────────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const navLinksEl = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinksEl.classList.toggle('open');
    });
    // Close on link click
    navLinksEl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinksEl.classList.remove('open'));
    });
  }

  /* ── SCROLL FADE-IN ─────────────────────────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));

  /* ── GANTT TIMELINE RENDERER ─────────────────────────────────── */

  const TRACK_ORDER = ['education', 'internship', 'work', 'domain', 'certification', 'achievement', 'responsibility'];
  const TRACK_LABELS = {
    education:      'Education',
    internship:     'Internships',
    work:           'Work',
    domain:         'Domain',
    certification:  'Certs',
    achievement:    'Achievements',
    responsibility: 'Responsibilities'
  };
  const TRACK_COLORS = {
    education:      '#4A90D9',
    internship:     '#E8A838',
    work:           '#27AE60',
    domain:         '#16A085',
    certification:  '#8E44AD',
    achievement:    '#FF9900',
    responsibility: '#C0392B'
  };

  function parseDate(str) {
    if (!str) return null;
    const [y, m] = str.split('-').map(Number);
    return y + (m - 1) / 12;
  }

  function buildTimeline() {
    const chart = document.getElementById('gantt-chart');
    const axisEl = document.getElementById('gantt-axis');
    const mobileEl = document.getElementById('timeline-mobile');

    if (!chart || typeof timelineData === 'undefined') return;

    const START = TIMELINE_START; // 2006
    const END   = TIMELINE_END;   // 2026
    const SPAN  = END - START;
    const NOW   = new Date().getFullYear() + new Date().getMonth() / 12;

    // ── tooltip ──
    const tooltip = document.createElement('div');
    tooltip.className = 'tl-tooltip';
    tooltip.innerHTML = `<div class="tl-tooltip-title"></div>
                         <div class="tl-tooltip-sub"></div>
                         <div class="tl-tooltip-desc"></div>`;
    document.body.appendChild(tooltip);

    function showTooltip(e, item) {
      tooltip.querySelector('.tl-tooltip-title').textContent = item.label;
      tooltip.querySelector('.tl-tooltip-sub').textContent   = item.sublabel || item.org || '';
      tooltip.querySelector('.tl-tooltip-desc').textContent  = item.description || '';
      tooltip.classList.add('visible');
      moveTooltip(e);
    }
    function moveTooltip(e) {
      const tw = tooltip.offsetWidth || 280;
      const th = tooltip.offsetHeight || 80;
      let x = e.clientX + 16;
      let y = e.clientY - th / 2;
      if (x + tw > window.innerWidth - 10) x = e.clientX - tw - 16;
      if (y < 8) y = 8;
      if (y + th > window.innerHeight - 8) y = window.innerHeight - th - 8;
      tooltip.style.left = x + 'px';
      tooltip.style.top  = y + 'px';
    }
    function hideTooltip() { tooltip.classList.remove('visible'); }

    // ── year dividers layer (rendered once, behind all tracks) ──
    // We'll add dividers inside each track-row via absolute positioning

    // ── group data by track ──
    const grouped = {};
    TRACK_ORDER.forEach(t => grouped[t] = []);
    timelineData.forEach(item => {
      if (grouped[item.track] !== undefined) grouped[item.track].push(item);
    });

    // ── build tracks ──
    TRACK_ORDER.forEach(trackKey => {
      const items = grouped[trackKey];
      if (!items.length) return;

      const trackEl = document.createElement('div');
      trackEl.className = 'timeline-track';

      // Label
      const labelEl = document.createElement('div');
      labelEl.className = 'track-label';
      labelEl.textContent = TRACK_LABELS[trackKey];
      trackEl.appendChild(labelEl);

      // Row
      const rowEl = document.createElement('div');
      rowEl.className = 'track-row';

      // Year dividers inside the row
      for (let yr = START; yr <= END; yr++) {
        const pct = ((yr - START) / SPAN) * 100;
        const div = document.createElement('div');
        div.className = 'year-divider';
        div.style.left = pct + '%';
        rowEl.appendChild(div);
      }

      // Items
      items.forEach(item => {
        const s = parseDate(item.start);
        const e = item.end ? parseDate(item.end) : NOW;
        if (s === null || s > END || e < START) return;

        const clampedS = Math.max(s, START);
        const clampedE = Math.min(e, END);
        const left  = ((clampedS - START) / SPAN) * 100;
        const width = ((clampedE - clampedS) / SPAN) * 100;

        const color = item.color || TRACK_COLORS[item.track] || '#888';

        if (item.isPoint) {
          // Render as circle marker
          const marker = document.createElement('div');
          marker.className = 'timeline-marker';
          marker.style.left  = left + '%';
          marker.style.background = color;
          rowEl.appendChild(marker);
          marker.addEventListener('mouseenter', e => showTooltip(e, item));
          marker.addEventListener('mousemove',  e => moveTooltip(e));
          marker.addEventListener('mouseleave', hideTooltip);
        } else {
          // Render as bar
          const bar = document.createElement('div');
          bar.className = 'timeline-bar';
          bar.style.left  = left + '%';
          bar.style.width = Math.max(width, 0.4) + '%';
          bar.style.background = color;

          // Label inside bar if wide enough
          if (width > 3) {
            const lbl = document.createElement('span');
            lbl.className = 'timeline-bar-label';
            lbl.textContent = item.label;
            bar.appendChild(lbl);
          }
          rowEl.appendChild(bar);
          bar.addEventListener('mouseenter', e => showTooltip(e, item));
          bar.addEventListener('mousemove',  e => moveTooltip(e));
          bar.addEventListener('mouseleave', hideTooltip);
        }
      });

      trackEl.appendChild(rowEl);
      chart.appendChild(trackEl);
    });

    // ── year axis ──
    if (axisEl) {
      // spacer
      const spacer = document.createElement('div');
      spacer.className = 'axis-spacer';
      axisEl.appendChild(spacer);

      const yearsEl = document.createElement('div');
      yearsEl.className = 'axis-years';
      for (let yr = START; yr <= END; yr += 2) {
        const tick = document.createElement('div');
        tick.className = 'axis-year';
        tick.textContent = yr;
        tick.style.left = (((yr - START) / SPAN) * 100) + '%';
        yearsEl.appendChild(tick);
      }
      axisEl.appendChild(yearsEl);
    }

    // ── mobile timeline ──
    if (mobileEl) {
      // Show work items only for mobile, sorted by date
      const mobileItems = timelineData
        .filter(i => ['work', 'education', 'internship'].includes(i.track))
        .sort((a, b) => (parseDate(b.start) || 0) - (parseDate(a.start) || 0));

      mobileItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'tl-mobile-item';

        const dot = document.createElement('div');
        dot.className = 'tl-mobile-dot';
        dot.style.background = item.color || TRACK_COLORS[item.track] || '#888';
        div.appendChild(dot);

        const label = document.createElement('div');
        label.className = 'tl-mobile-label';
        label.textContent = item.label;
        div.appendChild(label);

        if (item.sublabel) {
          const sub = document.createElement('div');
          sub.className = 'tl-mobile-sub';
          sub.textContent = item.sublabel;
          div.appendChild(sub);
        }

        const dateStr = item.end === null
          ? item.start.slice(0, 4) + ' – Present'
          : item.start.slice(0, 4) + (item.end && item.end.slice(0, 4) !== item.start.slice(0, 4) ? ' – ' + item.end.slice(0, 4) : '');

        const date = document.createElement('div');
        date.className = 'tl-mobile-date';
        date.textContent = dateStr;
        div.appendChild(date);

        mobileEl.appendChild(div);
      });
    }
  }

  /* ── INIT ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    buildTimeline();
  });

})();
