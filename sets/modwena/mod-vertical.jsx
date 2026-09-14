// Modwena Open Day — Instagram Story / Reel (1080×1920)
// Safe band: all text, logo and CTA live between y=270 and y=1150. Photos run full-bleed.

/* 1 — Event ticket */
function ModV1() {
  return <div style={modBase(1080, 1920, MOD.cream)}>
    <ModBleed color={MOD.cream} />
    <ModPhoto src="p-mirror.jpg" pos="58% 30%" style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 640, zIndex: 1 }} />
    <ModPhoto src="p-team.jpg" pos="50% 24%" style={{ position: 'absolute', left: 0, bottom: 0, width: 1080, height: 640, zIndex: 1 }} />
    <div style={{ position: 'absolute', left: 80, top: 290, width: 920, height: 860, background: MOD.white, borderRadius: 20, zIndex: 2, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.14)' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 920, height: 230, background: MOD.teal }}>
        <ModLogo h={138} light style={{ position: 'absolute', left: 48, top: 46 }} />
        <ModDateBlock w={172} h={146} style={{ position: 'absolute', right: 48, top: 42 }} />
      </div>
      <ModEyebrow text={'Burton upon Trent · ' + OFF.time.toLowerCase()} style={{ position: 'absolute', left: 52, top: 268 }} />
      <div style={{ position: 'absolute', left: 52, top: 300, fontSize: 56, fontWeight: 800, letterSpacing: -1.2, color: MOD.ink900, whiteSpace: 'nowrap' }}>{OFF.event}</div>
      <div style={{ position: 'absolute', left: 48, top: 366, fontSize: 158, fontWeight: 800, letterSpacing: -5, lineHeight: 1, color: MOD.teal, whiteSpace: 'nowrap' }}>{OFF.discount} off</div>
      <div style={{ position: 'absolute', left: 52, top: 538, fontSize: 27, fontWeight: 600, color: MOD.ink600, whiteSpace: 'nowrap' }}>{OFF.treatLong}</div>
      <ModPerf top={600} w={920} notch={MOD.white} />
      <ModIncList size={25} gap={15} style={{ position: 'absolute', left: 52, top: 638 }} />
      <ModPill label={OFF.cta} size={31} h={100} style={{ position: 'absolute', right: 52, top: 640 }} />
      <div style={{ position: 'absolute', left: 0, top: 792, width: 920, textAlign: 'center', fontSize: 25, fontWeight: 700, color: MOD.teal800, whiteSpace: 'nowrap' }}>package worth {OFF.pkg} · {OFF.scarcity}</div>
    </div>
  </div>;
}

/* 2 — Diagonal split */
function ModV2() {
  return <div style={modBase(1080, 1920, MOD.cream)}>
    <ModBleed color={MOD.cream} />
    <ModPhoto src="p-mirror.jpg" pos="56% 26%" style={{ position: 'absolute', left: 0, bottom: 0, width: 1080, height: 1080, zIndex: 1 }} />
    <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: MOD.teal, clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 68%)' }}></div>
    <div style={{ position: 'absolute', left: 80, top: 276, width: 920, zIndex: 3 }}>
      <ModLogo h={132} light />
      <ModEyebrow text={OFF.event} color={MOD.teal200} size={27} style={{ marginTop: 36 }} />
      <div style={{ width: 76, height: 4, background: MOD.white, marginTop: 22 }}></div>
      <div style={{ fontSize: 270, fontWeight: 800, letterSpacing: -13, lineHeight: 0.86, color: MOD.white, marginTop: 18 }}>{OFF.discount}</div>
      <div style={{ fontSize: 44, fontWeight: 700, color: MOD.white, marginTop: 12, whiteSpace: 'nowrap' }}>off {OFF.treat}</div>
      <div style={{ display: 'flex', gap: 18, marginTop: 34 }}>
        <ModPill label={OFF.date} bg={MOD.ink} size={25} h={72} />
        <ModPill label={OFF.time} bg={MOD.ink} size={25} h={72} />
      </div>
      <ModPill label={OFF.cta} bg={MOD.white} fg={MOD.teal800} size={32} h={102} style={{ marginTop: 24 }} />
      <div style={{ fontSize: 26, fontWeight: 700, color: MOD.white, marginTop: 22, whiteSpace: 'nowrap' }}>package worth {OFF.pkg} · {OFF.scarcity}</div>
    </div>
  </div>;
}

/* 3 — Photo grid */
function ModV3() {
  return <div style={modBase(1080, 1920, MOD.teal900)}>
    <ModBleed color={MOD.teal900} />
    <ModPhoto src="p-richard-consult.jpg" pos="46% 30%" style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 360, zIndex: 1 }} />
    <ModPhoto src="p-reception.jpg" pos="50% 40%" style={{ position: 'absolute', left: 0, bottom: 0, width: 1080, height: 560, zIndex: 1, opacity: 0.9 }} />
    <div style={{ position: 'absolute', left: 0, bottom: 0, width: 1080, height: 560, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,81,79,1) 0%, rgba(0,81,79,0.55) 45%, rgba(0,81,79,0.85) 100%)' }}></div>
    <div style={{ position: 'absolute', left: 80, top: 386, width: 920, zIndex: 3 }}>
      <ModLogo h={118} light />
      <ModEyebrow text={OFF.event} color={MOD.teal300} size={27} style={{ marginTop: 30 }} />
      <div style={{ fontSize: 200, fontWeight: 800, letterSpacing: -8, lineHeight: 0.9, color: MOD.white, marginTop: 16, whiteSpace: 'nowrap' }}>{OFF.discount} off</div>
      <div style={{ fontSize: 32, fontWeight: 700, color: MOD.white, marginTop: 10, whiteSpace: 'nowrap' }}>{OFF.treat}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 34 }}>
        <div style={{ background: MOD.ink, color: MOD.white, borderRadius: 12, padding: '18px 26px' }}>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: MOD.teal300 }}>Save the date</div>
          <div style={{ fontSize: 32, fontWeight: 800, marginTop: 6, whiteSpace: 'nowrap' }}>Sat 5th September</div>
        </div>
        <div style={{ background: MOD.ink, color: MOD.white, borderRadius: 12, padding: '18px 26px' }}>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: MOD.teal300 }}>Where &amp; when</div>
          <div style={{ fontSize: 32, fontWeight: 800, marginTop: 6, whiteSpace: 'nowrap' }}>{OFF.place}, 9am</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 26, fontSize: 24, fontWeight: 600, color: MOD.teal200, whiteSpace: 'nowrap' }}>
        <ModTick size={26} color={MOD.teal300} />Consultation £99 · Retainers £500 · Whitening £395, included
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginTop: 24 }}>
        <ModPill label={OFF.cta} bg={MOD.white} fg={MOD.teal800} size={32} h={102} />
        <div style={{ fontSize: 26, fontWeight: 700, color: MOD.white, lineHeight: 1.4 }}>package worth {OFF.pkg}<br />{OFF.scarcity}</div>
      </div>
    </div>
  </div>;
}

/* 4 — Cream panel, numbered inclusions */
function ModV4() {
  return <div style={modBase(1080, 1920, MOD.cream50)}>
    <ModBleed color={MOD.cream50} />
    <ModPhoto src="p-teen.jpg" pos="58% 26%" style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 1920, zIndex: 1 }} />
    <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,45,44,0.30) 0%, rgba(0,45,44,0.10) 30%, rgba(0,45,44,0.45) 100%)' }}></div>
    <div style={{ position: 'absolute', left: 80, top: 270, width: 920, height: 880, background: MOD.cream50, borderRadius: 16, zIndex: 3, padding: 56, boxSizing: 'border-box' }}>
      <ModLogo h={96} />
      <div style={{ fontSize: 27, fontWeight: 700, color: MOD.ink900, marginTop: 22, whiteSpace: 'nowrap' }}>{OFF.event} · {OFF.date}</div>
      <div style={{ fontSize: 122, fontWeight: 800, letterSpacing: -4.5, lineHeight: 1, color: MOD.teal, marginTop: 8, whiteSpace: 'nowrap' }}>{OFF.discount} off</div>
      <div style={{ fontSize: 25, fontWeight: 600, color: MOD.ink600, marginTop: 12, whiteSpace: 'nowrap' }}>{OFF.treat} · {OFF.time.toLowerCase()}</div>
      <div style={{ height: 1, background: MOD.line, margin: '26px 0 24px' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {OFF.inc.map(([t, v], i) => (
          <div key={t} style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
            <div style={{ fontFamily: MOD.serif, fontSize: 44, fontWeight: 600, color: MOD.teal, lineHeight: 1, width: 56, flexShrink: 0 }}>{'0' + (i + 1)}</div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 700, color: MOD.ink900, whiteSpace: 'nowrap' }}>{t}</div>
              <div style={{ fontSize: 22, fontWeight: 500, color: MOD.ink500, marginTop: 2, whiteSpace: 'nowrap' }}>{v}, included on the day</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 18, background: MOD.teal100, borderRadius: 10, padding: '20px 26px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: MOD.teal, flexShrink: 0 }}></div>
        <div style={{ fontSize: 26, fontWeight: 800, color: MOD.teal900, whiteSpace: 'nowrap' }}>package worth {OFF.pkg} · {OFF.scarcity}</div>
      </div>
      <ModPill label={OFF.cta} size={32} h={98} style={{ marginTop: 16 }} />
    </div>
  </div>;
}

/* 5 — Duotone editorial */
function ModV5() {
  return <div style={modBase(1080, 1920, MOD.teal900)}>
    <ModBleed color={MOD.teal900} />
    <ModDuotone src="p-richard-consult.jpg" pos="44% 32%" scrimFrom={0.3} topScrim={0.5} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 560, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,45,44,0.9) 0%, rgba(0,45,44,0.62) 55%, rgba(0,45,44,0) 100%)' }}></div>
    <div style={{ position: 'absolute', left: 0, top: 420, width: 1080, height: 860, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,45,44,0) 0%, rgba(0,45,44,0.62) 18%, rgba(0,45,44,0.62) 84%, rgba(0,45,44,0.2) 100%)' }}></div>
    <div style={{ position: 'absolute', left: 80, top: 290, width: 920, zIndex: 3 }}>
      <ModLogo h={132} light />
      <div style={{ marginTop: 34, display: 'inline-block', border: '3px solid rgba(255,255,255,0.8)', borderRadius: 999, padding: '18px 32px', fontSize: 26, fontWeight: 700, color: MOD.white, whiteSpace: 'nowrap' }}>{OFF.date} · {OFF.time.toLowerCase()}</div>
    </div>
    <div style={{ position: 'absolute', left: 80, top: 496, width: 920, zIndex: 3 }}>
      <ModEyebrow text={OFF.event} color={MOD.teal200} size={29} />
      <div style={{ fontSize: 210, fontWeight: 800, letterSpacing: -9, lineHeight: 0.9, color: MOD.white, marginTop: 16, whiteSpace: 'nowrap' }}>{OFF.discount} off</div>
      <div style={{ fontSize: 32, fontWeight: 600, color: MOD.teal200, marginTop: 14, whiteSpace: 'nowrap' }}>{OFF.treat}</div>
      <div style={{ height: 1, background: 'rgba(255,255,255,0.3)', margin: '28px 0 24px' }}></div>
      <ModIncList size={27} gap={16} color={MOD.white} valueColor={MOD.teal200} tick={MOD.white} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginTop: 30 }}>
        <ModPill label={OFF.cta} bg={MOD.white} fg={MOD.teal800} size={32} h={102} />
        <div style={{ fontSize: 26, fontWeight: 700, color: MOD.white, lineHeight: 1.4 }}>package worth {OFF.pkg}<br />{OFF.scarcity}</div>
      </div>
    </div>
  </div>;
}

Object.assign(window, { ModV1, ModV2, ModV3, ModV4, ModV5 });
