/* ============================================================
   Bonus Radar Ghana — data + interactions
   ============================================================ */

// Original styled placeholders — NOT real operator trademarks.
const BONUSES = [
  {
    id: "betway", name: "Betway Ghana", initials: "BW",
    logoBg: "linear-gradient(135deg,#0b3d2e,#1fd98a)", logoColor: "#04140d",
    offer: "100% up to GHS 1,000", offerSub: "First deposit match",
    type: "Welcome Match", typeClass: "emerald",
    code: "BWGH100", deposit: true, wagering: "8×", kyc: "req",
    maxCashout: "GHS 5,000", expiry: "30 days", score: 8.6,
    tags: ["mobile-money", "new-players", "fast-withdrawal"],
    bestFor: "Sports + casino crossover", payments: "MTN MoMo, Vodafone Cash, Visa",
    pay: ["MTN MoMo", "Vodafone Cash", "Visa"], momo: true, fast: true,
    avail: "Available now"
  },
  {
    id: "sportybet", name: "SportyBet Ghana", initials: "SB",
    logoBg: "linear-gradient(135deg,#1a2a40,#4d9dff)", logoColor: "#04101f",
    offer: "GHS 20 No-Deposit Free Bet", offerSub: "On verified sign-up",
    type: "No Deposit", typeClass: "blue",
    code: null, deposit: false, wagering: "3×", kyc: "maybe",
    maxCashout: "GHS 200", expiry: "7 days", score: 9.1,
    tags: ["no-deposit", "mobile-money", "new-players", "low-wagering"],
    bestFor: "No-deposit testing", payments: "MTN MoMo, AirtelTigo Money",
    pay: ["MTN MoMo", "AirtelTigo Money"], momo: true, fast: false,
    avail: "Available now"
  },
  {
    id: "msport", name: "MSport Ghana", initials: "MS",
    logoBg: "linear-gradient(135deg,#3a2e0a,#efc15c)", logoColor: "#1a1402",
    offer: "50 Free Spins", offerSub: "On selected slots",
    type: "Free Spins", typeClass: "gold",
    code: "MS50FS", deposit: true, wagering: "35×", kyc: "req",
    maxCashout: "GHS 800", expiry: "14 days", score: 7.2,
    tags: ["free-spins", "mobile-money", "existing-players"],
    bestFor: "Slots players", payments: "MTN MoMo, Vodafone Cash, Bank",
    pay: ["MTN MoMo", "Vodafone Cash", "Bank transfer"], momo: true, fast: false,
    avail: "Available now"
  },
  {
    id: "jackpotcity", name: "JackpotCity Ghana", initials: "JC",
    logoBg: "linear-gradient(135deg,#2a1a40,#9d6dff)", logoColor: "#0f0820",
    offer: "100% up to GHS 5,000", offerSub: "Across first deposits",
    type: "Welcome Match", typeClass: "emerald",
    code: "JPCITY", deposit: true, wagering: "50×", kyc: "req",
    maxCashout: "No cap stated", expiry: "30 days", score: 6.4,
    tags: ["new-players", "crypto"],
    bestFor: "High-roller casino play", payments: "Visa, Crypto, Skrill",
    pay: ["Visa", "Crypto", "Skrill"], momo: false, fast: false,
    avail: "Available now"
  },
  {
    id: "betwinner", name: "Betwinner Ghana", initials: "BN",
    logoBg: "linear-gradient(135deg,#0b2a3d,#1fd9c8)", logoColor: "#04140d",
    offer: "130% up to GHS 1,300", offerSub: "First deposit boost",
    type: "Welcome Match", typeClass: "emerald",
    code: "BWIN130", deposit: true, wagering: "5×", kyc: "maybe",
    maxCashout: "GHS 6,500", expiry: "30 days", score: 8.9,
    tags: ["mobile-money", "new-players", "low-wagering", "crypto", "fast-withdrawal"],
    bestFor: "Best overall value", payments: "MTN MoMo, AirtelTigo Money, Crypto",
    pay: ["MTN MoMo", "AirtelTigo Money", "Crypto"], momo: true, fast: true,
    avail: "Available now"
  }
];

const FILTERS = [
  { id: "no-deposit", label: "No Deposit" },
  { id: "free-spins", label: "Free Spins" },
  { id: "low-wagering", label: "Low Wagering" },
  { id: "mobile-money", label: "Mobile Money" },
  { id: "new-players", label: "New Players" },
  { id: "existing-players", label: "Existing Players" },
  { id: "crypto", label: "Crypto Accepted" },
  { id: "fast-withdrawal", label: "Fast Withdrawal" }
];

// Category awards — each points to the operator that wins it.
const BEST_FOR = [
  { award: "Best No-Deposit Bonus", id: "sportybet", stat: "GHS 20 free bet · no deposit" },
  { award: "Best Free Spins", id: "msport", stat: "50 spins · selected slots" },
  { award: "Best Low Wagering", id: "betwinner", stat: "5× playthrough" },
  { award: "Best Mobile Money Casino", id: "betway", stat: "MTN MoMo · Vodafone Cash" },
  { award: "Best Fast Withdrawal", id: "betway", stat: "Same-day payouts" }
];

const CRITERIA = [
  { n: "01", t: "Wagering Requirements", d: "Lower playthrough means real, withdrawable value. We weight this heavily.", w: 92 },
  { n: "02", t: "Deposit Requirement", d: "No-deposit and low-deposit offers score higher for accessibility.", w: 78 },
  { n: "03", t: "Max Cashout", d: "Caps that limit winnings reduce the practical value of an offer.", w: 70 },
  { n: "04", t: "KYC Clarity", d: "Clear, upfront verification rules beat vague terms that delay payouts.", w: 65 },
  { n: "05", t: "Expiry Date", d: "Realistic time windows to clear the bonus before it disappears.", w: 58 },
  { n: "06", t: "Country Availability", d: "Confirmed availability and payment support for players in Ghana.", w: 84 },
  { n: "07", t: "Real Bonus Value", d: "The net of all terms combined — what you can actually take home.", w: 96 }
];

const BLOG = [
  { cat: "Guide", title: "Best Casino Bonuses in Ghana", excerpt: "Our current top-rated welcome offers, ranked by real withdrawable value.", read: "8 min", date: "May 2026" },
  { cat: "No Deposit", title: "Best No-Deposit Bonuses in Ghana", excerpt: "Claim free bets and spins without funding your account first.", read: "6 min", date: "May 2026" },
  { cat: "Free Spins", title: "Best Free Spins Offers", excerpt: "Where to find spins with fair wagering and slots that actually pay.", read: "5 min", date: "Apr 2026" },
  { cat: "Explained", title: "How Wagering Requirements Work", excerpt: "What 35× really means — and how to calculate it before you claim.", read: "7 min", date: "Apr 2026" },
  { cat: "How-to", title: "How to Use Casino Promo Codes", excerpt: "Step-by-step: where to enter codes and avoid the common mistakes.", read: "4 min", date: "Mar 2026" }
];

const KYC_LABEL = { req: "Required", maybe: "May be required", unclear: "Not clear" };
const KYC_CLASS = { req: "kyc-req", maybe: "kyc-maybe", unclear: "kyc-unclear" };

/* ---------- icons ---------- */
const IC = {
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.1 8.6 22 9.5 17 14.4 18.2 21.5 12 18 5.8 21.5 7 14.4 2 9.5 8.9 8.6"/></svg>'
};

function scoreColor(s) {
  if (s >= 8) return "var(--tier-hi)";
  if (s >= 6.5) return "var(--tier-mid)";
  return "var(--tier-lo)";
}

/* ---------- gauge renderers ---------- */
function ringGauge(score) {
  const r = 24, c = 2 * Math.PI * r;
  const pct = score / 10;
  const col = scoreColor(score);
  return `
    <div class="gauge" title="Bonus Value Score ${score}/10">
      <svg width="58" height="58" viewBox="0 0 58 58">
        <circle cx="29" cy="29" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="5"/>
        <circle cx="29" cy="29" r="${r}" fill="none" stroke="${col}" stroke-width="5"
          stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct)}"/>
      </svg>
      <div class="gv"><b style="color:${col}">${score}</b><small>/ 10</small></div>
    </div>`;
}
function barGauge(score) {
  const col = scoreColor(score);
  return `
    <div class="gauge-bar" title="Bonus Value Score ${score}/10">
      <div class="bv" style="color:${col}">${score}<span>/10</span></div>
      <div class="track"><div class="fill" style="width:${score * 10}%;background:${col}"></div></div>
      <small>VALUE SCORE</small>
    </div>`;
}

let SCORE_STYLE = "ring";

/* ---------- payment signals ---------- */
const PAY_DOT = {
  "MTN MoMo": "#efc15c",
  "AirtelTigo Money": "#4d9dff",
  "Vodafone Cash": "#c87d7d",
  "Visa": "#8aa0b8",
  "Crypto": "#1fd98a",
  "Skrill": "#9d6dff",
  "Bank transfer": "#8aa0b8"
};
function payChips(b) {
  const chips = (b.pay || []).map(p =>
    `<span class="pay-chip"><span class="pay-dot" style="background:${PAY_DOT[p] || "#8aa0b8"}"></span>${p}</span>`
  ).join("");
  const signals =
    (b.momo ? `<span class="signal-chip momo">Mobile Money supported</span>` : "") +
    (b.fast ? `<span class="signal-chip fast">Fast withdrawal</span>` : "");
  return `
    <div class="pay-row">
      <div class="pay-label">Pay in &amp; out</div>
      <div class="pay-chips">${chips}</div>
      ${signals ? `<div class="signal-row">${signals}</div>` : ""}
    </div>`;
}

/* ---------- bonus card ---------- */
function bonusCard(b, isBest) {
  const gauge = SCORE_STYLE === "ring" ? ringGauge(b.score) : barGauge(b.score);
  const promo = b.code
    ? `<div class="promo">
         <div><div class="pl">Promo code</div><div class="pc">${b.code}</div></div>
         <button class="copy-btn" data-code="${b.code}">${IC.copy}<span>COPY</span></button>
       </div>`
    : `<div class="promo none">
         <div><div class="pl">Promo code</div><div class="pc">No code needed — auto-applied</div></div>
       </div>`;
  return `
  <article class="bonus-card${isBest ? " is-best" : ""}" data-tags="${b.tags.join(" ")}" data-score="${b.score}">
    ${isBest ? '<div class="best-flag">Best value</div>' : ""}
    <div class="card-top">
      <div class="logo-box" style="background:${b.logoBg};color:${b.logoColor}">${b.initials}</div>
      <div class="card-id">
        <div class="nm">${b.name}</div>
        <div class="meta">
          <span class="tag ${b.typeClass}">${b.type}</span>
          <span class="tag">🇬🇭 Ghana</span>
        </div>
      </div>
      ${gauge}
    </div>

    <div class="bonus-offer">${b.offer}</div>
    <div class="bonus-offer-sub">${b.offerSub}</div>

    <div class="data-grid">
      <div class="data-cell">
        <div class="k">Wagering</div>
        <div class="v"><span class="cmp-wag">${b.wagering}</span></div>
      </div>
      <div class="data-cell">
        <div class="k">Deposit req.</div>
        <div class="v ${b.deposit ? "v-no" : "v-yes"}">${b.deposit ? "Yes" : "No"}</div>
      </div>
      <div class="data-cell">
        <div class="k">KYC</div>
        <div class="v ${KYC_CLASS[b.kyc]}"><span class="kyc-dot"></span>${KYC_LABEL[b.kyc]}</div>
      </div>
      <div class="data-cell">
        <div class="k">Max cashout</div>
        <div class="v">${b.maxCashout}</div>
      </div>
    </div>

    ${payChips(b)}

    ${promo}

    <div class="card-actions">
      <a class="btn btn-primary" href="#">Claim Bonus <span class="cta-arrow">→</span></a>
      <a class="read-review" href="#reviews">Read Review</a>
    </div>
    <p class="claim-note">18+ · Terms apply · Check operator rules</p>
  </article>`;
}

/* ---------- comparison table row ---------- */
function tableRow(b) {
  return `
  <tr data-tags="${b.tags.join(" ")}">
    <td>
      <div class="cmp-casino">
        <div class="logo-box" style="background:${b.logoBg};color:${b.logoColor}">${b.initials}</div>
        <span class="nm">${b.name}</span>
      </div>
    </td>
    <td class="cmp-offer">${b.offer}</td>
    <td><span class="tag ${b.typeClass}">${b.type}</span></td>
    <td class="cmp-code">${b.code || "—"}</td>
    <td class="cmp-wag">${b.wagering}</td>
    <td class="${b.deposit ? "v-no" : "v-yes"}" style="font-weight:600">${b.deposit ? "Yes" : "No"}</td>
    <td><span class="${KYC_CLASS[b.kyc]}" style="display:inline-flex;align-items:center;gap:6px"><span class="kyc-dot"></span>${KYC_LABEL[b.kyc]}</span></td>
    <td><span class="cmp-score" style="color:${scoreColor(b.score)}">${b.score}</span></td>
    <td><a class="btn btn-primary btn-sm" href="#">Claim</a></td>
  </tr>`;
}

/* ---------- review card ---------- */
function reviewCard(b) {
  const full = Math.round(b.score / 2);
  let stars = "";
  for (let i = 0; i < 5; i++) stars += `<span class="${i < full ? "" : "off"}">${IC.star}</span>`;
  return `
  <article class="review-card">
    <div class="review-top">
      <div class="logo-box" style="background:${b.logoBg};color:${b.logoColor}">${b.initials}</div>
      <div>
        <div class="nm" style="font-family:var(--font-display);font-weight:600;font-size:16px">${b.name}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:5px">
          <span class="stars">${stars}</span>
          <span class="review-rating" style="color:${scoreColor(b.score)}">${b.score}</span>
        </div>
      </div>
    </div>
    <div class="review-rows">
      <div class="review-row"><span class="rk">Best for</span><span class="rv">${b.bestFor}</span></div>
      <div class="review-row"><span class="rk">Payments</span><span class="rv">${b.payments}</span></div>
      <div class="review-row"><span class="rk">Bonus</span><span class="rv">${b.avail}</span></div>
    </div>
    <a class="btn btn-ghost" href="#">Read Full Review</a>
  </article>`;
}

/* ---------- blog card ---------- */
function blogCard(p) {
  return `
  <article class="blog-card">
    <div class="blog-thumb">
      <span class="blog-cat">${p.cat}</span>
      <span class="ph">[ article image ]</span>
    </div>
    <div class="blog-body">
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
      <div class="blog-meta">
        <span>${p.date}</span><span>·</span><span>${p.read} read</span>
        <a class="read-more" href="#">Read →</a>
      </div>
    </div>
  </article>`;
}

/* ---------- render ---------- */
let activeFilters = new Set();
const bestId = BONUSES.reduce((a, b) => (b.score > a.score ? b : a)).id;

function renderBonuses() {
  const grid = document.getElementById("bonusGrid");
  let list = BONUSES.slice().sort((a, b) => b.score - a.score);
  if (activeFilters.size) {
    list = list.filter(b => [...activeFilters].every(f => b.tags.includes(f)));
  }
  if (!list.length) {
    grid.innerHTML = `<div class="no-results">No bonuses match all selected filters. Try removing one.</div>`;
    return;
  }
  grid.innerHTML = list.map(b => bonusCard(b, b.id === bestId)).join("");
  bindCopy();
}

function renderTable() {
  const tb = document.getElementById("tableBody");
  const list = BONUSES.slice().sort((a, b) => b.score - a.score);
  tb.innerHTML = list.map(tableRow).join("");
}

function renderFilters() {
  const bar = document.getElementById("filterScroll");
  bar.innerHTML =
    FILTERS.map(f => `<button class="chip" data-filter="${f.id}" aria-pressed="false"><span class="cdot"></span>${f.label}</button>`).join("") +
    `<button class="chip chip-clear" id="clearFilters">Clear all</button>`;
  bar.querySelectorAll(".chip[data-filter]").forEach(chip => {
    chip.addEventListener("click", () => {
      const f = chip.dataset.filter;
      if (activeFilters.has(f)) { activeFilters.delete(f); chip.setAttribute("aria-pressed", "false"); }
      else { activeFilters.add(f); chip.setAttribute("aria-pressed", "true"); }
      renderBonuses();
    });
  });
  document.getElementById("clearFilters").addEventListener("click", () => {
    activeFilters.clear();
    bar.querySelectorAll(".chip[data-filter]").forEach(c => c.setAttribute("aria-pressed", "false"));
    renderBonuses();
  });
}

function renderReviews() {
  document.getElementById("reviewGrid").innerHTML =
    BONUSES.slice().sort((a, b) => b.score - a.score).map(reviewCard).join("");
}
function renderCriteria() {
  document.getElementById("criteriaGrid").innerHTML = CRITERIA.map(c => `
    <div class="criteria-card">
      <div class="num">${c.n}</div>
      <h3>${c.t}</h3>
      <p>${c.d}</p>
      <div class="weight"><i style="width:${c.w}%"></i></div>
    </div>`).join("");
}
function renderBlog() {
  document.getElementById("blogGrid").innerHTML = BLOG.map(blogCard).join("");
}
function renderBestFor() {
  const el = document.getElementById("bestForGrid");
  if (!el) return;
  el.innerHTML = BEST_FOR.map(x => {
    const b = BONUSES.find(z => z.id === x.id);
    return `
    <a class="award-card" href="#bonuses">
      <div class="award-label">${x.award}</div>
      <div class="award-casino">
        <div class="logo-box" style="background:${b.logoBg};color:${b.logoColor}">${b.initials}</div>
        <div class="award-meta">
          <span class="nm">${b.name}</span>
          <span class="st">${x.stat}</span>
        </div>
        <span class="award-score" style="color:${scoreColor(b.score)}">${b.score}</span>
      </div>
    </a>`;
  }).join("");
}
function renderHeroPanel() {
  const picks = [
    { label: "Best No Deposit", id: "sportybet" },
    { label: "Best Welcome Bonus", id: "betway" },
    { label: "Best Low Wagering", id: "betwinner" },
    { label: "Best Mobile Money", id: "msport" }
  ];
  document.getElementById("heroList").innerHTML = picks.map(p => {
    const b = BONUSES.find(z => z.id === p.id);
    return `
    <div class="mini-row">
      <div class="mini-logo" style="background:${b.logoBg};color:${b.logoColor}">${b.initials}</div>
      <div class="mini-info">
        <div class="mini-label">${p.label}</div>
        <div class="nm">${b.name}</div>
        <div class="of">${b.offer}</div>
      </div>
      <div class="mini-score" style="color:${scoreColor(b.score)};background:${scoreColor(b.score)}1f">${b.score}</div>
    </div>`;
  }).join("");
}

/* ---------- copy code + toast ---------- */
function bindCopy() {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.code;
      navigator.clipboard?.writeText(code).catch(() => {});
      btn.innerHTML = IC.check + "<span>COPIED</span>";
      setTimeout(() => { btn.innerHTML = IC.copy + "<span>COPY</span>"; }, 1600);
      showToast(`Code “${code}” copied`);
    });
  });
}
let toastTimer;
function showToast(msg) {
  let t = document.getElementById("toast");
  t.innerHTML = IC.check + `<span>${msg}</span>`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
}

/* ---------- tweaks hook (called by tweaks island) ---------- */
window.applyScoreStyle = function (style) {
  SCORE_STYLE = style;
  renderBonuses();
};

/* ---------- mobile menu ---------- */
function initMenu() {
  const tgl = document.getElementById("menuToggle");
  const nav = document.getElementById("mobileNav");
  tgl?.addEventListener("click", () => nav.classList.toggle("open"));
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderBestFor();
  renderBonuses();
  renderTable();
  renderCriteria();
  renderReviews();
  renderBlog();
  renderHeroPanel();
  initMenu();
});
