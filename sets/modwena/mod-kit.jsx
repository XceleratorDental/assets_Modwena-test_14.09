// Modwena Orthodontics — Open Day ad kit (tokens, offer data, shared parts)
const MOD = {
  teal: '#009999', teal700: '#008786', teal800: '#006D6B', teal900: '#00514F',
  teal300: '#A6DEDE', teal200: '#D4ECEC', teal100: '#EAF6F6',
  cream: '#F4F1EC', cream50: '#FAF8F4', line: '#E4E2DE',
  ink: '#333333', ink900: '#1A1A1A', ink600: '#4A4A4A', ink500: '#6B6B6B',
  white: '#FFFFFF',
  sans: "'Geist', sans-serif",
  sansAlt: "'Montserrat', sans-serif",
  serif: "'Cormorant Garamond', serif",
  A: 'sets/modwena/assets/'
};

// Exact detail from the client's open-day planning sheet. Do not invent figures.
const OFF = {
  event: 'Orthodontic Open Day',
  date: 'Saturday 5th September',
  day: 'SAT', dnum: '5', mon: 'SEP',
  time: 'From 9:00am',
  place: 'Burton upon Trent',
  discount: '£500',
  treat: 'orthodontic treatment',
  treatLong: 'your orthodontic treatment',
  inc: [
    ['Specialist consultation', 'worth £99'],
    ['Retainers included', 'worth £500'],
    ['At-home whitening', 'worth £395']
  ],
  pkg: '£1,494',
  scarcity: 'Only 20 appointments',
  cta: 'Book your free slot'
};

const modBase = (w, h, bg) => ({
  position: 'relative', width: w, height: h, overflow: 'hidden',
  background: bg, fontFamily: MOD.sans, color: MOD.ink900,
  textRendering: 'geometricPrecision'
});

function ModBleed({ color }) {
  return <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: color }}></div>;
}

function ModLogo({ h = 120, w, light = false, style }) {
  const s = w ? { width: w, height: 'auto' } : { height: h, width: 'auto' };
  return <img src={MOD.A + (light ? 'logo-light.png' : 'logo-dark.png')} alt="Modwena Orthodontics" style={{ ...s, display: 'block', ...style }} />;
}

function ModPhoto({ src, pos = '50% 50%', style, filter }) {
  return <div style={{ overflow: 'hidden', ...style }}>
    <img src={MOD.A + src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block', filter }} />
  </div>;
}

function ModPill({ label, bg = '#009999', fg = '#FFFFFF', size = 30, h = 96, style }) {
  return <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: h, padding: '0 ' + Math.round(h * 0.42) + 'px', borderRadius: 999, background: bg, color: fg, fontSize: size, fontWeight: 700, letterSpacing: 0.2, whiteSpace: 'nowrap', ...style }}>{label}</div>;
}

function ModTick({ size = 26, color = '#009999' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>;
}

function ModIncList({ color = '#1A1A1A', valueColor = '#6B6B6B', tick = '#009999', size = 26, gap = 16, style }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
    {OFF.inc.map(([t, v]) => (
      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14, whiteSpace: 'nowrap' }}>
        <ModTick size={Math.round(size * 1.05)} color={tick} />
        <span style={{ fontSize: size, fontWeight: 700, color }}>{t}</span>
        <span style={{ fontSize: size - 2, fontWeight: 500, color: valueColor }}>{v}</span>
      </div>
    ))}
  </div>;
}

function ModEyebrow({ text, color = '#6B6B6B', size = 24, style }) {
  return <div style={{ fontSize: size, fontWeight: 700, letterSpacing: size * 0.16, textTransform: 'uppercase', color, whiteSpace: 'nowrap', ...style }}>{text}</div>;
}

// Torn-ticket perforation: dashed rule + two page-coloured notches
function ModPerf({ top, notch = '#F4F1EC', w = 960 }) {
  return <div style={{ position: 'absolute', left: 0, top, width: w, height: 0 }}>
    <div style={{ position: 'absolute', left: 40, right: 40, top: 0, height: 2, backgroundImage: 'repeating-linear-gradient(90deg,' + MOD.line + ' 0 14px, rgba(0,0,0,0) 14px 28px)' }}></div>
    <div style={{ position: 'absolute', left: -26, top: -26, width: 52, height: 52, borderRadius: '50%', background: notch }}></div>
    <div style={{ position: 'absolute', right: -26, top: -26, width: 52, height: 52, borderRadius: '50%', background: notch }}></div>
  </div>;
}

function ModDateBlock({ w = 190, h = 160, border = '#FFFFFF', color = '#FFFFFF', style }) {
  return <div style={{ width: w, height: h, border: '3px solid ' + border, borderRadius: 12, color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1, ...style }}>
    <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 4 }}>{OFF.day}</div>
    <div style={{ fontSize: Math.round(h * 0.55), fontWeight: 800, margin: '4px 0' }}>{OFF.dnum}</div>
    <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 4 }}>{OFF.mon}</div>
  </div>;
}

// Duotone: greyscale photo + teal colour blend + seating scrim
function ModDuotone({ src, pos = '50% 40%', scrimFrom = 0.42, topScrim = 0.62 }) {
  return <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
    <img src={MOD.A + src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, filter: 'grayscale(1) contrast(1.06) brightness(1.02)' }} />
    <div style={{ position: 'absolute', inset: 0, background: MOD.teal, mixBlendMode: 'color' }}></div>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,45,44,' + topScrim + ') 0%, rgba(0,45,44,0.14) ' + Math.round(scrimFrom * 100) + '%, rgba(0,45,44,0.88) 100%)' }}></div>
  </div>;
}

Object.assign(window, { MOD, OFF, modBase, ModBleed, ModLogo, ModPhoto, ModPill, ModTick, ModIncList, ModEyebrow, ModPerf, ModDateBlock, ModDuotone });
