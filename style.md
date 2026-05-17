# 🔺 Bermuda Triangle — Design Specification

> **Дитячий освітній React-додаток**
> Стиль: Ocean Mystery · Single-page · Scroll-snap navigation

---

## 🎨 Design Tokens

### Color Palette

```css
:root {
  /* Primary backgrounds */
  --bg-deep:       #0a1628;  /* night ocean — main background */
  --bg-mid:        #1a4d7a;  /* mid blue — section dividers */
  --bg-darker:     #050d1a;  /* deepest — vignette / footer */

  /* Accents */
  --accent-teal:   #14b8a6;  /* sea water — primary accent */
  --accent-teal-2: #5eead4;  /* lighter teal — highlights */
  --accent-coral:  #f97316;  /* alerts, important */
  --accent-coral-2:#fb923c;  /* coral hover */
  --accent-gold:   #f59e0b;  /* stars, dates, fun facts */
  --accent-gold-2: #fbbf24;  /* lighter gold */

  /* Text */
  --text-primary:  #ffffff;
  --text-muted:    #e2e8f0;
  --text-dim:      #94a3b8;

  /* Surfaces */
  --glass-bg:      rgba(255, 255, 255, 0.08);
  --glass-border:  rgba(255, 255, 255, 0.18);
  --card-bg:       rgba(20, 41, 70, 0.85);
}
```

### Tailwind config extension

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      ocean: {
        deep: '#0a1628',
        mid: '#1a4d7a',
        darker: '#050d1a',
      },
      teal: { brand: '#14b8a6', light: '#5eead4' },
      coral: { brand: '#f97316', light: '#fb923c' },
      gold: { brand: '#f59e0b', light: '#fbbf24' },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Comfortaa', 'Nunito', 'sans-serif'],
    },
    backdropBlur: { xs: '2px' },
    animation: {
      'float': 'float 6s ease-in-out infinite',
      'twinkle': 'twinkle 3s ease-in-out infinite',
      'rotate-slow': 'rotate 20s linear infinite',
      'fade-up': 'fadeUp 0.8s ease-out forwards',
      'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
    },
  }
}
```

### Typography Scale

| Element       | Size (desktop)        | Size (mobile)    | Font        | Weight |
| ------------- | --------------------- | ---------------- | ----------- | ------ |
| Hero h1       | `clamp(3rem, 8vw, 6rem)` | 2.5rem         | Comfortaa   | 700    |
| Section h2    | `clamp(2rem, 5vw, 3.5rem)` | 1.8rem        | Comfortaa   | 700    |
| Card h3       | 1.5rem                | 1.25rem          | Comfortaa   | 600    |
| Body          | 1.125rem              | 1rem             | Inter       | 400    |
| Lead          | 1.25rem               | 1.125rem         | Inter       | 500    |
| Badge         | 0.875rem              | 0.75rem          | Inter       | 600    |
| Caption       | 0.875rem              | 0.75rem          | Inter       | 400    |

Line-height: `1.6` for body, `1.2` for headings.

---

## 🏗️ Global Structure

```jsx
<main className="bg-ocean-deep text-white font-sans
                 snap-y snap-mandatory h-screen overflow-y-scroll">
  <Hero />          {/* snap-start, h-screen */}
  <WhatIsIt />
  <Location />
  <NameOrigin />
  <Disappeared />
  <Theories />
  <Reality />
  <Footer />
  <NavDots />       {/* fixed overlay */}
</main>
```

**Scroll-snap setup:**
```css
.snap-section {
  scroll-snap-align: start;
  min-height: 100vh;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

---

## 1️⃣ Hero Section

**Background:**
```css
background: radial-gradient(ellipse at center,
            #1a4d7a 0%, #0a1628 60%, #050d1a 100%);
```

**Layout:**
```jsx
<section className="snap-section relative overflow-hidden
                    flex flex-col items-center justify-center text-center">
  <StarsBackground />          {/* absolute inset-0 */}
  <FloatingTriangle />         {/* SVG, animate-rotate-slow */}
  <h1>Бермудський трикутник</h1>
  <p className="lead">...</p>
  <ScrollIndicator />          {/* bottom-8, animate-bounce-soft */}
</section>
```

**Components:**

- **StarsBackground**: 50 SVG `<circle>` randomly placed, `fill="#f59e0b"`, animated opacity via `animate-twinkle` with random delays (0–3s)
- **FloatingTriangle**:
  - SVG triangle 200×200px
  - Stroke: `#14b8a6`, width 3, `stroke-dasharray="8 4"`
  - Glow: `filter: drop-shadow(0 0 30px #14b8a6)`
  - Animation: `rotate 360deg` over 20s, `float` Y-axis ±15px over 6s
- **h1**:
  ```css
  font-family: Comfortaa;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #5eead4 50%, #f59e0b 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 40px rgba(20, 184, 166, 0.3);
  ```
- **Lead paragraph**: `text-slate-200 text-xl md:text-2xl max-w-2xl`
- **ScrollIndicator**: ↓ icon, `text-teal-brand`, infinite bounce

**Animations:**
- Triangle: `animate-rotate-slow animate-float` (combined)
- h1: `animate-fade-up` with 0.3s delay
- Lead: `animate-fade-up` with 0.6s delay

---

## 2️⃣ "Що це таке?" Section

**Background:** solid `bg-ocean-deep` with subtle radial overlay
```css
background:
  radial-gradient(circle at 20% 50%, rgba(20,184,166,0.08), transparent 50%),
  #0a1628;
```

**Layout:**
```jsx
<section className="snap-section">
  <h2 className="section-title">🌊 Що це таке?</h2>
  <article className="card-explain max-w-3xl mx-auto">
    <p>...</p>
    <p>...</p>
    <FunFactBox />
  </article>
</section>
```

**Card style (`.card-explain`):**
```css
background: rgba(20, 41, 70, 0.85);
backdrop-filter: blur(12px);
border: 1px solid rgba(94, 234, 212, 0.2);
border-radius: 24px;
padding: 2.5rem;
box-shadow:
  0 20px 60px rgba(0, 0, 0, 0.4),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
color: #e2e8f0;
font-size: 1.125rem;
line-height: 1.7;
```

**Fun-fact block:**
```jsx
<div className="fun-fact">
  <span className="fun-fact__icon">💡</span>
  <strong>Цікавий факт:</strong> Площа трикутника — близько 1 440 000 км²!
</div>
```
```css
.fun-fact {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg,
              rgba(245, 158, 11, 0.15),
              rgba(249, 115, 22, 0.1));
  border-left: 4px solid #f59e0b;
  border-radius: 12px;
  color: #fef3c7;
}
```

**Animation:** `animate-fade-up` on enter (IntersectionObserver)

---

## 3️⃣ "Де він знаходиться?" Section

**Background:** `bg-ocean-mid` with wave pattern overlay (optional SVG)

**Layout:**
```jsx
<section className="snap-section">
  <h2 className="section-title">🗺️ Де він знаходиться?</h2>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
    <MapContainer className="lg:col-span-2 h-96 lg:h-[500px]" />
    <div className="flex flex-col gap-3">
      <LocationCard emoji="🌴" name="Маямі" sub="Флорида, США" />
      <LocationCard emoji="🏝️" name="Бермуди" sub="Британська територія" />
      <LocationCard emoji="🏖️" name="Сан-Хуан" sub="Пуерто-Ріко" />
    </div>
  </div>
</section>
```

**Map container:**
```css
border-radius: 20px;
overflow: hidden;
border: 3px solid #14b8a6;
box-shadow: 0 0 40px rgba(20, 184, 166, 0.4);
```

**Leaflet customization:**
- Tile layer: use dark theme tiles (CartoDB Dark Matter) for consistency
  `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png`
- Triangle polygon: `color: '#f97316'`, `weight: 4`, `fillColor: '#f59e0b'`, `fillOpacity: 0.2`, `dashArray: '10, 8'`
- Markers: custom `divIcon` with emoji + glow

**LocationCard:**
```jsx
<div className="location-card">
  <span className="text-4xl">{emoji}</span>
  <div>
    <h3 className="font-display font-semibold text-teal-light">{name}</h3>
    <p className="text-sm text-slate-400">{sub}</p>
  </div>
</div>
```
```css
.location-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(20, 184, 166, 0.1);
  border: 1px solid rgba(20, 184, 166, 0.3);
  border-radius: 16px;
  transition: all 0.3s;
}
.location-card:hover {
  background: rgba(20, 184, 166, 0.2);
  border-color: #14b8a6;
  transform: translateX(8px);
}
```

---

## 4️⃣ "Чому така назва?" Section

**Background:**
```css
background: linear-gradient(135deg, #0a1628 0%, #1a4d7a 100%);
```

**Layout — split design:**
```jsx
<section className="snap-section">
  <h2 className="section-title">📚 Чому така назва?</h2>
  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
    <BigYearDisplay year="1964" />
    <NameStoryCard />
  </div>
</section>
```

**BigYearDisplay:**
```jsx
<div className="year-display">
  <span className="year-label">У році</span>
  <div className="year-number">1964</div>
  <span className="year-caption">з'явилась назва</span>
</div>
```
```css
.year-number {
  font-family: Comfortaa;
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 700;
  background: linear-gradient(180deg, #fbbf24 0%, #f97316 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 60px rgba(245, 158, 11, 0.4);
  line-height: 1;
}
.year-label, .year-caption {
  display: block;
  color: #94a3b8;
  font-size: 1.125rem;
  text-align: center;
}
```

**NameStoryCard:** similar to `.card-explain` but with coral accent
```css
border-left: 4px solid #f97316;
```

Content tells about Vincent Gaddis + previous names ("Море Диявола", "Зачароване море").

**Animation:** year digits count-up from 0 to 1964 on enter (use a small counter hook, ~1.5s duration)

---

## 5️⃣ "Хто там зник?" Section — Flip Cards

**Background:** `bg-ocean-darker` with subtle particle effect

**Layout:**
```jsx
<section className="snap-section">
  <h2 className="section-title">👻 Хто там зник?</h2>
  <p className="lead-center">Понад 70 кораблів і літаків...</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                  gap-6 max-w-6xl mx-auto">
    {vessels.map(v => <FlipCard key={v.id} {...v} />)}
  </div>
</section>
```

**FlipCard component:**
```jsx
const FlipCard = ({ emoji, name, date, story }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="flip-card"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card__inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-card__face flip-card__front">
          <span className="text-7xl mb-4">{emoji}</span>
          <h3 className="text-coral-brand font-display text-2xl">{name}</h3>
          <span className="badge-gold mt-3">📅 {date}</span>
          <p className="hint">Натисни щоб дізнатись →</p>
        </div>
        <div className="flip-card__face flip-card__back">
          <p>{story}</p>
          <span className="hint mt-4">Натисни ще раз ←</span>
        </div>
      </div>
    </div>
  );
};
```

**Styles:**
```css
.flip-card {
  perspective: 1200px;
  aspect-ratio: 3/4;
  cursor: pointer;
}
.flip-card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}
.flip-card__inner.is-flipped {
  transform: rotateY(180deg);
}
.flip-card__face {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  backface-visibility: hidden;
  text-align: center;
}
.flip-card__front {
  background: linear-gradient(145deg, #1a4d7a 0%, #0f3057 100%);
  border: 2px solid rgba(20, 184, 166, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
.flip-card__back {
  background: linear-gradient(145deg, #050d1a 0%, #0a1628 100%);
  border: 2px solid #f97316;
  transform: rotateY(180deg);
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.6;
}
.badge-gold {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #0a1628;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.875rem;
}
.hint {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #94a3b8;
  font-style: italic;
}
.flip-card:hover .flip-card__front {
  box-shadow: 0 15px 40px rgba(20, 184, 166, 0.3);
  border-color: #14b8a6;
}
```

**Data (6 vessels):**
```js
const vessels = [
  { emoji: '✈️', name: 'Рейс 19', date: '5 грудня 1945', story: 'П\'ять військових літаків полетіли на тренування і… зникли! Літак-рятувальник теж пропав.' },
  { emoji: '⛵', name: 'Марія Целеста', date: '1872 рік', story: 'Корабель знайшли цілим — але без жодної людини на борту! Куди поділась команда?' },
  { emoji: '🚢', name: 'Циклоп', date: '1918 рік', story: 'Величезний корабель зник з 309 людьми. Навіть не встиг подати сигнал SOS!' },
  { emoji: '⛵', name: 'Розалі', date: '1840 рік', story: 'Французьке судно знайшли пустим — без команди, але без жодного пошкодження.' },
  { emoji: '🛢️', name: 'Marine Sulphur Queen', date: '1963 рік', story: 'Танкер з 39 моряками зник. Знайшли лише кілька рятувальних жилетів.' },
  { emoji: '✈️', name: 'Літак C-119', date: '1965 рік', story: 'Військовий літак з 9 людьми пропав у ясну погоду. Дехто жартував — інопланетяни 👽' },
];
```

**Animation:** cards fade-up sequentially with `stagger 100ms` delay using IntersectionObserver

---

## 6️⃣ "А чому це відбувається?" Section — Glass Theories

**Background:** atmospheric gradient with floating bubbles
```css
background:
  radial-gradient(circle at 80% 20%, rgba(249,115,22,0.15), transparent 40%),
  radial-gradient(circle at 20% 80%, rgba(20,184,166,0.15), transparent 40%),
  #0a1628;
```

**Layout:**
```jsx
<section className="snap-section">
  <h2 className="section-title">🤔 А чому це відбувається?</h2>
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
    {theories.map(t => <TheoryCard key={t.id} {...t} />)}
  </div>
</section>
```

**TheoryCard:**
```jsx
<article className="theory-card" style={{ '--glow': theory.color }}>
  <span className="text-5xl">{icon}</span>
  <h3>{title}</h3>
  <p>{desc}</p>
</article>
```

**Styles:**
```css
.theory-card {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  padding: 1.75rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: default;
}
.theory-card h3 {
  font-family: Comfortaa;
  color: #5eead4;
  font-size: 1.25rem;
  margin: 0.75rem 0;
  font-weight: 600;
}
.theory-card p {
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.5;
}
.theory-card:hover {
  transform: scale(1.05) translateY(-4px);
  background: rgba(255, 255, 255, 0.12);
  border-color: var(--glow);
  box-shadow:
    0 0 40px color-mix(in srgb, var(--glow) 50%, transparent),
    0 20px 50px rgba(0, 0, 0, 0.5);
}
.theory-card:hover h3 {
  color: var(--glow);
}
```

**Theories data:**
```js
const theories = [
  { icon: '🌪️', title: 'Сильні шторми', desc: 'Урагани і хвилі-вбивці.', color: '#14b8a6' },
  { icon: '🌊', title: 'Гольфстрім', desc: 'Течія швидко відносить уламки.', color: '#5eead4' },
  { icon: '🧲', title: 'Магнітні аномалії', desc: 'Компас показує неправильний напрямок!', color: '#f59e0b' },
  { icon: '👽', title: 'Інопланетяни', desc: 'Корабель прибульців на дні океану?', color: '#a78bfa' },
  { icon: '🏛️', title: 'Атлантида', desc: 'Стародавнє підводне місто.', color: '#f97316' },
  { icon: '💨', title: 'Газ метан', desc: 'Виходить з дна — і кораблі тонуть!', color: '#fbbf24' },
];
```

---

## 7️⃣ "А насправді?" Section — Science Reveal

**Background:** dark with light reveal effect at center
```css
background: radial-gradient(ellipse at center,
            #1a4d7a 0%, #0a1628 50%, #050d1a 100%);
```

**Layout:**
```jsx
<section className="snap-section">
  <h2 className="section-title">🔬 А насправді?</h2>
  <article className="card-explain reality-card max-w-3xl mx-auto">
    <p>Вчені з'ясували: трикутник <strong>не такий небезпечний</strong>!</p>
    <p>У 2013 році його <strong>навіть не включили</strong> в топ-10 небезпечних морських шляхів.</p>
    <FactGrid />          {/* 3 small stats: weather %, currents %, human errors % */}
    <FunFactBox icon="✨">
      Може саме ти колись розгадаєш цю загадку?
    </FunFactBox>
  </article>
</section>
```

**FactGrid (mini stats):**
```jsx
<div className="grid grid-cols-3 gap-4 my-6">
  <div className="stat">
    <div className="stat__num">⛈️</div>
    <div className="stat__label">Погода</div>
  </div>
  <div className="stat">
    <div className="stat__num">🌊</div>
    <div className="stat__label">Течії</div>
  </div>
  <div className="stat">
    <div className="stat__num">🤷</div>
    <div className="stat__label">Помилки людей</div>
  </div>
</div>
```
```css
.stat {
  text-align: center;
  padding: 1rem;
  background: rgba(20, 184, 166, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(20, 184, 166, 0.25);
}
.stat__num { font-size: 2.5rem; }
.stat__label { color: #5eead4; font-size: 0.875rem; margin-top: 0.25rem; }
```

---

## 8️⃣ Footer

**Background:** `bg-ocean-darker`

```jsx
<footer className="snap-section min-h-[50vh] flex flex-col
                   items-center justify-center text-center">
  <div className="text-4xl mb-4 space-x-2">🔺 🌊 ⛵ ✈️ 🏝️</div>
  <p className="text-slate-300">Сайт створено з любов'ю до пригод і таємниць</p>
  <p className="text-slate-500 text-sm mt-2">© 2026 · Артем досліджує світ</p>
  <BackToTopButton />
</footer>
```

---

## 🧭 Floating Navigation (Dots)

**Position:** `fixed right-6 top-1/2 -translate-y-1/2 z-50`

**Layout:**
```jsx
<nav className="nav-dots">
  {sections.map((s, i) => (
    <button
      key={s.id}
      onClick={() => scrollToSection(s.id)}
      className={`nav-dot ${activeIndex === i ? 'is-active' : ''}`}
      aria-label={s.title}
    >
      <span className="nav-dot__tooltip">{s.title}</span>
    </button>
  ))}
</nav>
```

**Styles:**
```css
.nav-dots {
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 50;
}
.nav-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}
.nav-dot:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: scale(1.3);
}
.nav-dot.is-active {
  width: 12px;
  height: 12px;
  background: #f97316;
  box-shadow: 0 0 12px rgba(249, 115, 22, 0.6);
}
.nav-dot__tooltip {
  position: absolute;
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
  background: rgba(10, 22, 40, 0.95);
  color: #fff;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  border: 1px solid rgba(94, 234, 212, 0.3);
}
.nav-dot:hover .nav-dot__tooltip {
  opacity: 1;
}
@media (max-width: 640px) {
  .nav-dots { display: none; }   /* hide on mobile */
}
```

**Active section detection:** IntersectionObserver with threshold `0.5`, updating `activeIndex` state.

---

## 🎬 Animation Keyframes

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-15px); }
}
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 1; }
}
@keyframes rotate {
  to { transform: rotate(360deg); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes bounceSoft {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(10px); }
}
```

**Entry animations** triggered on scroll using IntersectionObserver — add `.is-visible` class, which applies `animate-fade-up`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout changes |
|------------|----------------|
| **<640px (mobile)** | All grids → single column. Nav-dots hidden. Map → 300px height. Section padding 3rem 1rem. Year display 5rem. |
| **640–1024px (tablet)** | Vessels 2 cols, theories 2 cols. Map full-width above cards. |
| **>1024px (desktop)** | Full design — 3 col grids, side-by-side layouts, large year display. |

```css
/* example responsive section */
.section-title {
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 2rem;
  font-family: Comfortaa;
  font-weight: 700;
  background: linear-gradient(135deg, #5eead4, #f59e0b);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 🛠️ Tech Stack Recommendations

| Concern              | Choice                                      |
|----------------------|---------------------------------------------|
| Framework            | React 18 + Vite                             |
| Styling              | Tailwind CSS + CSS modules for animations   |
| Map                  | `react-leaflet` (Leaflet wrapper)           |
| Animations on scroll | `framer-motion` OR custom IntersectionObserver hook |
| Icons                | Native emoji (no icon library needed)       |
| Fonts                | Google Fonts: Inter, Comfortaa              |

**Optional enhancements:**
- `react-intersection-observer` for clean scroll triggers
- `react-spring` if smoother number counter is needed
- `@react-spring/parallax` for parallax stars in Hero

---

## ♿ Accessibility Checklist

- [ ] `prefers-reduced-motion`: disable rotation/float, keep fade-ups only
- [ ] Flip cards: keyboard accessible (`role="button"`, `tabIndex={0}`, Enter/Space toggles)
- [ ] All emoji icons have `aria-label` or `aria-hidden="true"` (decorative)
- [ ] Color contrast: white on `#0a1628` = 17:1 ✅, slate-400 on `#0a1628` = 6.4:1 ✅
- [ ] Map: `aria-label="Карта Бермудського трикутника"`
- [ ] Nav dots: `aria-current="true"` on active

---

## 📦 Folder Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── WhatIsIt.jsx
│   │   ├── Location.jsx
│   │   ├── NameOrigin.jsx
│   │   ├── Disappeared.jsx
│   │   ├── Theories.jsx
│   │   ├── Reality.jsx
│   │   └── Footer.jsx
│   ├── ui/
│   │   ├── FlipCard.jsx
│   │   ├── TheoryCard.jsx
│   │   ├── LocationCard.jsx
│   │   ├── FunFactBox.jsx
│   │   ├── NavDots.jsx
│   │   └── StarsBackground.jsx
│   └── App.jsx
├── data/
│   ├── vessels.js
│   ├── theories.js
│   └── sections.js
├── hooks/
│   ├── useActiveSection.js
│   └── useInView.js
├── styles/
│   ├── globals.css
│   └── animations.css
└── main.jsx
```

---

## ✅ Quick Build Checklist

1. Setup Vite + React + Tailwind ➜ extend config with custom colors
2. Add Google Fonts (Inter, Comfortaa) in `index.html`
3. Implement scroll-snap container + 8 sections skeleton
4. Build atoms first: `FunFactBox`, `Badge`, `Card` shell
5. Build `FlipCard` + `TheoryCard` (most complex)
6. Wire up Leaflet map with dark tiles
7. Add `NavDots` + `useActiveSection` hook
8. Polish animations (entry, hover, ambient)
9. Test mobile breakpoints
10. Accessibility audit

---

*🔺 Made with ocean mystery vibes for Artem*