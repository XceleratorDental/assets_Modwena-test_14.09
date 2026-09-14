// Modwena Open Day — feed squares (1080×1080)
// Offer-first: the figure IS the layout (Montserrat 900), two flat fields (cream / deep teal),
// arch-cropped photography butting the type, hairline rules and a costed extras strip.

const LUX = {
  sans: MOD.sans, disp: MOD.serif,
  ink: '#141414', body: '#57534E',
  cream: '#F4F1EC', paper: '#FBF9F5',
  teal: '#009999', deep: '#00514F', pale: '#D4ECEC',
  hair: 'rgba(20,20,20,0.18)', hairLight: 'rgba(244,241,236,0.3)'
};
const EXTRAS = OFF.pkg + ' of extras included';

function LuxCaps({ t, size = 14, ls = 3.2, color = '#141414', style }) {
  return <div style={{ fontFamily: LUX.sans, fontSize: size, fontWeight: 700, letterSpacing: ls, textTransform: 'uppercase', color, whiteSpace: 'nowrap', ...style }}>{t}</div>;
}

function LuxRule({ w = '100%', color = LUX.hair, style }) {
  return <div style={{ width: w, height: 1, background: color, ...style }}></div>;
}

// Tight, punchy pill - Modwena's site button shape
function LuxCTA({ label, bg = '#009999', fg = '#FFFFFF', h = 72, size = 16, style }) {
  return <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: h, padding: '0 38px', borderRadius: 999, background: bg, color: fg, fontFamily: LUX.sans, fontSize: size, fontWeight: 800, letterSpacing: 2.2, textTransform: 'uppercase', whiteSpace: 'nowrap', ...style }}>{label}</div>;
}

// The figure. Heavy, tight, unapologetic.
function LuxBig({ t, size = 300, color = '#00514F', style }) {
  return <div style={{ fontFamily: LUX.sans, fontSize: size, fontWeight: 900, letterSpacing: -size * 0.045, lineHeight: 0.86, color, whiteSpace: 'nowrap', ...style }}>{t}</div>;
}

// Highlighter line - the offer qualifier on a flat block
function LuxMark({ t, bg = '#009999', fg = '#FFFFFF', size = 30, rot = -1.2, style }) {
  return <div style={{ display: 'inline-block', background: bg, padding: '10px 20px 12px', transform: 'rotate(' + rot + 'deg)', ...style }}>
    <span style={{ fontFamily: LUX.sans, fontSize: size, fontWeight: 700, letterSpacing: 0.4, color: fg, whiteSpace: 'nowrap' }}>{t}</span>
  </div>;
}

const LuxIt = ({ children }) => <span style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontWeight: 500 }}>{children}</span>;

// The free extras, priced, with the total saving - hairline framed
const INC_CELLS = [['Consultation', '£99'], ['Retainers', '£500'], ['Whitening', '£395']];
const SAVE_CHIPS = [['Consultation £99', 'FREE'], ['Retainers £500', 'FREE'], ['Whitening £395', 'FREE'], ['Package worth', OFF.pkg]];
function LuxIncBrief({ dark = false, align = 'left', style }) {
  const label = dark ? 'rgba(244,241,236,0.80)' : LUX.body;
  const accent = dark ? LUX.cream : LUX.deep;
  return <div style={{ textAlign: align, ...style }}>
    <div style={{ fontFamily: LUX.sans, fontSize: 22, fontWeight: 600, letterSpacing: 0.2, color: label, whiteSpace: 'nowrap' }}>Free consultation, retainers and whitening</div>
    <div style={{ fontFamily: LUX.sans, fontSize: 22, fontWeight: 800, letterSpacing: 0.2, color: accent, marginTop: 7, whiteSpace: 'nowrap' }}>package worth {OFF.pkg}</div>
  </div>;
}

function LuxIncStrip({ dark = false, size = 24, w, style }) {
  const hair = dark ? LUX.hairLight : LUX.hair;
  const label = dark ? 'rgba(244,241,236,0.72)' : LUX.body;
  const accent = dark ? '#8FD6D6' : LUX.deep;
  const tint = dark ? 'rgba(143,214,214,0.14)' : 'rgba(0,81,79,0.07)';
  return <div style={{ display: w ? 'block' : 'inline-block', width: w, ...style }}>
    <LuxCaps t="Book on the day and get" size={15} ls={2.6} color={label} style={{ marginBottom: 13 }} />
    <div style={{ display: w ? 'flex' : 'inline-flex', border: '1px solid ' + hair, borderRadius: 10, overflow: 'hidden' }}>
      {INC_CELLS.map(([l, v], i) => (
        <div key={l} style={{ flex: w ? '1 1 0' : 'none', padding: '15px 20px 17px', borderLeft: i ? '1px solid ' + hair : 'none' }}>
          <LuxCaps t={l} size={14} ls={2.2} color={label} />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, marginTop: 6 }}>
            <span style={{ fontFamily: LUX.sans, fontSize: size - 4, fontWeight: 700, color: label, textDecoration: 'line-through', whiteSpace: 'nowrap' }}>{v}</span>
            <span style={{ fontFamily: LUX.sans, fontSize: size, fontWeight: 900, letterSpacing: 0.4, color: accent, whiteSpace: 'nowrap' }}>FREE</span>
          </div>
        </div>
      ))}
      <div style={{ flex: w ? '1 1 0' : 'none', padding: '15px 22px 17px', borderLeft: '1px solid ' + hair, background: tint }}>
        <LuxCaps t="Package worth" size={14} ls={2.2} color={accent} />
        <div style={{ fontFamily: LUX.sans, fontSize: size + 4, fontWeight: 900, letterSpacing: -0.6, color: dark ? LUX.cream : LUX.ink, marginTop: 6, whiteSpace: 'nowrap' }}>{OFF.pkg}</div>
      </div>
    </div>
  </div>;
}

// One-line version for tighter layouts
function LuxIncLine({ dark = false, w = 900, size = 14, style }) {
  return <div style={style}>
    <LuxRule w={w} color={dark ? LUX.hairLight : LUX.hair} />
    <LuxCaps t={'Free consultation £99 · free retainers £500 · free whitening £395 = package worth ' + OFF.pkg} size={size} ls={1.8} color={dark ? LUX.cream : LUX.ink} style={{ marginTop: 16 }} />
  </div>;
}

// Arch-cropped photograph, with a hairline frame offset behind it
function LuxArchPhoto({ src, w = 470, h = 720, pos = '60% 24%', flat = false, frame, zoom = 1, style }) {
  const radius = flat ? '8px' : w + 'px ' + w + 'px 10px 10px / ' + (h * 0.62) + 'px ' + (h * 0.62) + 'px 10px 10px';
  return <div style={{ position: 'absolute', width: w, height: h, ...style }}>
    {frame ? <div style={{ position: 'absolute', left: 18, top: -18, width: w, height: h, border: '1px solid ' + frame, borderRadius: radius }}></div> : null}
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: radius }}>
      <img src={MOD.A + src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block', transform: zoom !== 1 ? 'scale(' + zoom + ')' : undefined, transformOrigin: pos }} />
    </div>
  </div>;
}

function LuxTab({ t, bg = '#009999', fg = '#FFFFFF', rot = 0, size = 14, style }) {
  return <div style={{ transform: 'rotate(' + rot + 'deg)', background: bg, padding: '14px 22px', borderRadius: 999, ...style }}>
    <LuxCaps t={t} size={size} ls={3} color={fg} />
  </div>;
}

function LuxChip({ label, value, bg = '#FBF9F5', fg = '#141414', accent = '#00514F', style }) {
  return <div style={{ background: bg, borderRadius: 12, padding: '16px 22px 18px', ...style }}>
    <LuxCaps t={label} size={12} ls={2.4} color={accent} />
    <div style={{ fontFamily: LUX.sans, fontSize: 38, fontWeight: 900, letterSpacing: -1, color: fg, marginTop: 6, whiteSpace: 'nowrap' }}>{value}</div>
  </div>;
}

function LuxLogoChip({ h = 78, w, style }) {
  return <div style={{ display: 'inline-flex', ...style }}><ModLogo w={w || h * 2.6} light /></div>;
}

/* Editorial September calendar - the open day marked */
function LuxCalendar({ cell = 62, dark = false, style }) {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const muted = dark ? 'rgba(244,241,236,0.42)' : 'rgba(20,20,20,0.34)';
  const head = dark ? 'rgba(244,241,236,0.6)' : 'rgba(20,20,20,0.45)';
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, ' + cell + 'px)', rowGap: 6, ...style }}>
    {days.map((d, i) => <div key={i} style={{ height: cell * 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: LUX.sans, fontSize: cell * 0.26, fontWeight: 700, letterSpacing: 1.6, color: head }}>{d}</div>)}
    <div></div>
    {Array.from({ length: 30 }, (_, i) => i + 1).map(n => {
      const on = n === 5;
      return <div key={n} style={{ height: cell, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: cell * 0.86, height: cell * 0.86, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: on ? LUX.teal : 'transparent', fontFamily: LUX.sans, fontSize: on ? cell * 0.42 : cell * 0.34, fontWeight: on ? 800 : 500, color: on ? '#FFFFFF' : muted }}>{n}</div>
      </div>;
    })}
  </div>;
}

/* 1 - The open day, as a pass */
function ModSq1() {
  const notch = (side) => <div style={{ position: 'absolute', [side]: -22, top: 326, width: 44, height: 44, borderRadius: '50%', background: LUX.cream, zIndex: 7 }}></div>;
  return <div style={modBase(1080, 1080, LUX.cream)}>
    <ModBleed color={LUX.cream} />
    <ModLogo h={80} style={{ position: 'absolute', left: 60, top: 52, zIndex: 6 }} />
    <LuxTab t={'Limited spaces'} style={{ position: 'absolute', right: 52, top: 58, zIndex: 6 }} />
    <ModPhoto src="p-braces-chat.jpg" pos="76% 26%" style={{ position: 'absolute', right: 56, top: 186, width: 342, height: 706, borderRadius: 20, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 56, top: 186, width: 610, height: 706, background: LUX.deep, borderRadius: 24, zIndex: 5 }}>
      {notch('left')}{notch('right')}
      <div style={{ position: 'absolute', left: 0, top: 348, width: 610, height: 1, backgroundImage: 'repeating-linear-gradient(90deg, rgba(244,241,236,0.45) 0 12px, rgba(244,241,236,0) 12px 24px)' }}></div>
      <div style={{ position: 'absolute', left: 52, top: 56 }}>
        <LuxCaps t="Open day" size={14} ls={3.6} color="rgba(244,241,236,0.7)" />
        <LuxBig t={OFF.discount} size={132} color={LUX.cream} style={{ marginTop: 22 }} />
        <LuxBig t="OFF" size={132} color={LUX.cream} style={{ marginTop: 2 }} />
      </div>
      <div style={{ position: 'absolute', left: 52, top: 396 }}>
        <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 34, fontWeight: 500, color: 'rgba(244,241,236,0.92)', whiteSpace: 'nowrap' }}>orthodontic treatment</div>
        <LuxCaps t="Consultation, retainers &amp; whitening free" size={15} ls={1.8} color={LUX.cream} style={{ marginTop: 28 }} />
        <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 25, fontWeight: 500, color: 'rgba(244,241,236,0.62)', marginTop: 8 }}>a package worth {OFF.pkg}</div>
      </div>
      <div style={{ position: 'absolute', left: 52, bottom: 52 }}>
        <div style={{ fontFamily: LUX.sans, fontSize: 50, fontWeight: 900, letterSpacing: -1.4, lineHeight: 1, color: LUX.cream, marginTop: 10, whiteSpace: 'nowrap' }}>SATURDAY 5<span style={{ fontSize: '0.52em', verticalAlign: 'super', letterSpacing: 0 }}>TH</span> SEPT</div>
        <LuxCaps t="from 9am" size={13} ls={2.2} color="rgba(244,241,236,0.72)" style={{ marginTop: 12 }} />
      </div>
    </div>
    <LuxCTA label={OFF.cta} h={80} size={17} style={{ position: 'absolute', left: 56, top: 936, zIndex: 6 }} />
  </div>;
}

/* 2 — The same beat, inverted on deep teal */
function ModSq2() {
  return <div style={modBase(1080, 1080, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <LuxArchPhoto src="p-mirror-smile.jpg" w={444} h={558} pos="62% 33%" zoom={1.53} frame={LUX.hairLight} style={{ left: 44, top: 176, zIndex: 5 }} />
    <LuxLogoChip w={340} style={{ position: 'absolute', left: 56, top: 54, zIndex: 6 }} />
    <LuxRule w={968} color={LUX.hairLight} style={{ position: 'absolute', left: 56, top: 154, zIndex: 6 }} />
    <div style={{ position: 'absolute', right: 56, top: 232, zIndex: 3, textAlign: 'right' }}>
      <LuxBig t={OFF.discount} size={178} color={LUX.cream} />
      <LuxBig t="OFF" size={178} color={LUX.cream} style={{ marginTop: 6 }} />
      <LuxMark t="orthodontic treatment" size={30} rot={1.2} style={{ marginTop: 22 }} />
    </div>
    <div style={{ position: 'absolute', right: 52, top: 764, zIndex: 6, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <LuxIncStrip dark w={976} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(244,241,236,0.85)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M8 3v4M16 3v4M3 10h18"></path></svg>
          <LuxCaps t={'Saturday 5th Sept · from 9am'} size={17} ls={2.4} color="rgba(244,241,236,0.85)" />
        </div>
      </div>
    </div>
  </div>;
}

/* 3 — Two fields, the figure split across the seam */
function ModSq3() {
  return <div style={modBase(1080, 1080, LUX.cream)}>
    <ModBleed color={LUX.cream} />
    <div style={{ position: 'absolute', left: 0, top: 512, width: 1080, height: 568, background: LUX.teal, zIndex: 1 }}></div>
    <LuxArchPhoto src="p-hayley.jpg" w={392} h={600} pos="62% 20%" zoom={1.45} flat frame={LUX.hairLight} style={{ right: 48, top: 172, zIndex: 5 }} />
    <ModLogo h={84} style={{ position: 'absolute', left: 62, top: 54, zIndex: 6 }} />
    <LuxRule w={968} style={{ position: 'absolute', left: 56, top: 152, zIndex: 6 }} />
    <LuxMark t="Open day offer" bg={LUX.deep} size={30} rot={-1.8} style={{ position: 'absolute', left: 56, top: 246, zIndex: 6 }} />
    <LuxBig t={OFF.discount} size={188} color={LUX.teal} style={{ position: 'absolute', left: 56, top: 348, zIndex: 4 }} />
    <LuxBig t="OFF" size={188} color={LUX.cream} style={{ position: 'absolute', left: 56, top: 495, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 60, top: 716, zIndex: 6 }}>
      <div style={{ fontFamily: MOD.sansAlt, fontSize: 28, fontWeight: 700, color: LUX.cream, whiteSpace: 'nowrap' }}>orthodontic treatment</div>
      <LuxRule w={620} color={LUX.hairLight} style={{ marginTop: 30 }} />
      <div style={{ fontFamily: LUX.sans, fontSize: 34, fontWeight: 800, letterSpacing: -0.6, color: LUX.cream, marginTop: 26, whiteSpace: 'nowrap' }}>Free specialist consultation, whitening &amp; retainers</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 32 }}>
        <LuxCTA label={OFF.cta} bg={LUX.deep} fg="#FFFFFF" />
        <LuxCaps t={'Saturday 5th Sept · from 9am · one day only'} size={13} ls={2.6} color="rgba(244,241,236,0.85)" />
      </div>
    </div>
  </div>;
}

/* 4 — Caps stack, extras as chips */
function ModSq4() {
  return <div style={modBase(1080, 1080, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <LuxLogoChip w={340} style={{ position: 'absolute', left: 56, top: 54, zIndex: 4 }} />
    <LuxRule w={968} color={LUX.hairLight} style={{ position: 'absolute', left: 56, top: 154, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 58, top: 226, zIndex: 4 }}>
      <div style={{ fontFamily: LUX.sans, fontSize: 88, fontWeight: 900, letterSpacing: -3, lineHeight: 1.02, color: LUX.cream, whiteSpace: 'nowrap' }}>20 SPACES.</div>
      <div style={{ fontFamily: LUX.sans, fontSize: 88, fontWeight: 900, letterSpacing: -3, lineHeight: 1.02, color: LUX.cream, whiteSpace: 'nowrap' }}>SAT 5TH SEPT.</div>
      <LuxBig t={OFF.discount + ' OFF'} size={126} color={LUX.teal} style={{ marginTop: 16 }} />
      <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 40, fontWeight: 500, color: LUX.cream, marginTop: 10, whiteSpace: 'nowrap' }}>orthodontic treatment</div>
    </div>
    <LuxCTA label={OFF.cta} bg={LUX.teal} style={{ position: 'absolute', right: 44, bottom: 44, zIndex: 5 }} />
    <ModPhoto src="p-team.jpg" pos="50% 15%" style={{ position: 'absolute', left: 0, bottom: 0, width: 1080, height: 396, zIndex: 2 }} />
  </div>;
}

/* 5 — Photograph up top, figure across the base */
function ModSq5() {
  return <div style={modBase(1080, 1080, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <ModPhoto src="p-richard-consult.jpg" pos="46% 30%" style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 1080, zIndex: 1 }} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 300, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,42,41,0.75) 0%, rgba(0,42,41,0) 100%)' }}></div>
    <div style={{ position: 'absolute', left: 0, bottom: 0, width: 1080, height: 620, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,42,41,0) 0%, rgba(0,42,41,0.28) 30%, rgba(0,42,41,0.28) 100%)' }}></div>
    <ModLogo w={360} light style={{ position: 'absolute', left: 62, top: 54, zIndex: 5 }} />
    <LuxTab t={'Saturday 5th Sept · from 9am'} bg={LUX.paper} fg={LUX.deep} style={{ position: 'absolute', right: 52, top: 60, zIndex: 5 }} />
    <div style={{ position: 'absolute', left: 56, bottom: 56, width: 968, zIndex: 4, background: 'rgba(0,52,50,0.52)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 22, padding: '52px 56px 56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <LuxBig t={OFF.pkg} size={132} color={LUX.cream} />
        <div>
          <LuxCaps t="Savings" size={30} ls={2} color={LUX.cream} />
          <LuxCaps t="Package" size={30} ls={2} color={LUX.cream} style={{ marginTop: 6 }} />
        </div>
      </div>
      <LuxCaps t={'orthodontic treatment'} size={17} ls={2.4} color={LUX.cream} style={{ marginTop: 18 }} />
      <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 46, fontWeight: 500, lineHeight: 1.2, color: 'rgba(244,241,236,0.88)', marginTop: 14 }}>including {OFF.discount} off, free whitening and more</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 34 }}>
        <LuxCTA label={OFF.cta} bg={LUX.teal} fg="#FFFFFF" />
      </div>
    </div>
  </div>;
}

Object.assign(window, { LuxIncBrief, LUX, EXTRAS, INC_CELLS, SAVE_CHIPS, LuxCaps, LuxRule, LuxCTA, LuxBig, LuxMark, LuxIt, LuxIncStrip, LuxIncLine, LuxArchPhoto, LuxTab, LuxChip, LuxLogoChip, LuxCalendar, ModSq1, ModSq2, ModSq3, ModSq4, ModSq5 });
