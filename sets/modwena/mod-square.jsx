// Modwena Open Day — feed squares (1080×1080)

/* 1 — Event ticket: the open day as a physical, dated ticket */
function ModSq1() {
  return <div style={modBase(1080, 1080, MOD.cream)}>
    <ModBleed color={MOD.cream} />
    <div style={{ position: 'absolute', left: 60, top: 56, width: 960, height: 940, background: MOD.white, borderRadius: 20, zIndex: 1, overflow: 'hidden', boxShadow: '0 6px 20px rgba(0,0,0,0.07)' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 960, height: 230, background: MOD.teal }}>
        <ModLogo h={134} light style={{ position: 'absolute', left: 52, top: 48 }} />
        <ModDateBlock w={176} h={150} style={{ position: 'absolute', right: 52, top: 40 }} />
      </div>
      <ModPhoto src="p-mirror.jpg" pos="58% 26%" style={{ position: 'absolute', left: 0, top: 230, width: 960, height: 200 }} />
      <ModEyebrow text="Specialist-led orthodontics · Burton upon Trent" style={{ position: 'absolute', left: 56, top: 458 }} />
      <div style={{ position: 'absolute', left: 56, top: 490, fontSize: 54, fontWeight: 800, letterSpacing: -1.2, color: MOD.ink900, whiteSpace: 'nowrap' }}>{OFF.event}</div>
      <div style={{ position: 'absolute', left: 52, top: 552, fontSize: 152, fontWeight: 800, letterSpacing: -5, lineHeight: 1, color: MOD.teal, whiteSpace: 'nowrap' }}>{OFF.discount} off</div>
      <div style={{ position: 'absolute', left: 56, top: 712, fontSize: 27, fontWeight: 600, color: MOD.ink600, whiteSpace: 'nowrap' }}>{OFF.treatLong}</div>
      <ModPerf top={766} />
      <ModIncList size={24} gap={12} style={{ position: 'absolute', left: 56, top: 794 }} />
      <ModPill label={OFF.cta} size={30} h={94} style={{ position: 'absolute', right: 52, top: 796 }} />
      <div style={{ position: 'absolute', right: 52, top: 906, fontSize: 24, fontWeight: 700, color: MOD.teal800, whiteSpace: 'nowrap' }}>package worth {OFF.pkg}</div>
    </div>
    <div style={{ position: 'absolute', left: 0, top: 1016, width: 1080, textAlign: 'center', fontSize: 25, fontWeight: 600, color: MOD.ink500, zIndex: 1 }}>{OFF.scarcity} · {OFF.date}, {OFF.time.toLowerCase()}</div>
  </div>;
}

/* 2 — Diagonal split: teal wedge, patient over the seam, £-figure dominant */
function ModSq2() {
  return <div style={modBase(1080, 1080, MOD.cream)}>
    <ModBleed color={MOD.cream} />
    <ModPhoto src="p-mirror.jpg" pos="70% 28%" style={{ position: 'absolute', right: 0, bottom: 0, width: 570, height: 830, zIndex: 1, borderTopLeftRadius: 16 }} />
    <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: MOD.teal, clipPath: 'polygon(0 0, 70% 0, 56% 100%, 0 100%)' }}></div>
    <div style={{ position: 'absolute', right: 72, top: 72, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
      <ModPill label={'Limited to 20 appointments'} bg={MOD.ink} size={24} h={64} />
      <ModPill label={'Package worth ' + OFF.pkg} bg={MOD.white} fg={MOD.teal800} size={24} h={64} />
    </div>
    <div style={{ position: 'absolute', left: 76, top: 66, zIndex: 3 }}>
      <ModLogo h={140} light />
      <ModEyebrow text={OFF.event} color={MOD.teal200} size={26} style={{ marginTop: 34 }} />
      <div style={{ width: 72, height: 4, background: MOD.white, marginTop: 22 }}></div>
      <div style={{ fontSize: 220, fontWeight: 800, letterSpacing: -10, lineHeight: 0.86, color: MOD.white, marginTop: 18 }}>{OFF.discount}</div>
      <div style={{ fontSize: 36, fontWeight: 700, color: MOD.white, marginTop: 10, whiteSpace: 'nowrap' }}>off {OFF.treat}</div>
      <ModPill label={OFF.date + ' · ' + OFF.time.toLowerCase()} bg={MOD.ink} size={24} h={68} style={{ marginTop: 34 }} />
      <ModPill label={OFF.cta} bg={MOD.white} fg={MOD.teal800} size={31} h={98} style={{ marginTop: 22 }} />
    </div>
  </div>;
}

/* 3 — Photo grid: dark teal panel + tiles, one tile carries the logistics */
function ModSq3() {
  const tile = { overflow: 'hidden' };
  return <div style={modBase(1080, 1080, MOD.teal900)}>
    <ModBleed color={MOD.teal900} />
    <div style={{ position: 'absolute', left: 560, top: 0, width: 520, height: 1080, zIndex: 1, display: 'grid', gridTemplateRows: '424px 348px 308px', gridTemplateColumns: '258px 258px', gap: 4 }}>
      <ModPhoto src="p-richard-consult.jpg" pos="46% 32%" style={{ ...tile, gridColumn: '1 / span 2' }} />
      <ModPhoto src="p-teen.jpg" pos="62% 30%" style={tile} />
      <ModPhoto src="p-team.jpg" pos="50% 26%" style={tile} />
      <div style={{ gridColumn: '1 / span 2', background: MOD.ink, color: MOD.white, padding: '34px 34px 0 34px' }}>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3.4, textTransform: 'uppercase', color: MOD.teal300 }}>Save the date</div>
        <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1, marginTop: 12, whiteSpace: 'nowrap' }}>Sat 5th September</div>
        <div style={{ fontSize: 26, fontWeight: 500, marginTop: 14, color: '#D6D6D6' }}>{OFF.time} · {OFF.place}</div>
      </div>
    </div>
    <div style={{ position: 'absolute', left: 56, top: 56, width: 470, zIndex: 2 }}>
      <ModLogo h={124} light />
      <ModEyebrow text={OFF.event} color={MOD.teal300} size={25} style={{ marginTop: 30 }} />
      <div style={{ fontSize: 170, fontWeight: 800, letterSpacing: -6, lineHeight: 0.9, color: MOD.white, marginTop: 18 }}>{OFF.discount}</div>
      <div style={{ fontSize: 34, fontWeight: 700, color: MOD.white, marginTop: 6, whiteSpace: 'nowrap' }}>off your treatment</div>
      <div style={{ height: 1, background: 'rgba(255,255,255,0.28)', margin: '34px 0 28px' }}></div>
      <ModIncList size={25} gap={17} color={MOD.white} valueColor={MOD.teal300} tick={MOD.teal300} />
      <div style={{ fontSize: 26, fontWeight: 800, color: MOD.teal300, marginTop: 26, whiteSpace: 'nowrap' }}>package worth {OFF.pkg}</div>
      <ModPill label={OFF.cta} bg={MOD.white} fg={MOD.teal800} size={31} h={98} style={{ marginTop: 30 }} />
      <div style={{ fontSize: 24, fontWeight: 600, color: MOD.teal200, marginTop: 24 }}>{OFF.scarcity} available</div>
    </div>
  </div>;
}

/* 4 — Cream panel split: what's included, numbered, with full-bleed portrait */
function ModSq4() {
  return <div style={modBase(1080, 1080, MOD.cream50)}>
    <ModBleed color={MOD.cream50} />
    <ModPhoto src="p-teen.jpg" pos="70% 30%" style={{ position: 'absolute', right: 0, top: 0, width: 470, height: 1080, zIndex: 1 }} />
    <div style={{ position: 'absolute', left: 64, top: 60, width: 500, zIndex: 2 }}>
      <ModLogo h={118} />
      <div style={{ fontSize: 34, fontWeight: 700, color: MOD.ink900, marginTop: 30, whiteSpace: 'nowrap' }}>{OFF.event}</div>
      <div style={{ fontSize: 108, fontWeight: 800, letterSpacing: -4, lineHeight: 1, color: MOD.teal, marginTop: 8, whiteSpace: 'nowrap' }}>{OFF.discount} off</div>
      <div style={{ fontSize: 24, fontWeight: 600, color: MOD.ink600, marginTop: 12, whiteSpace: 'nowrap' }}>{OFF.date} · {OFF.time.toLowerCase()}</div>
      <div style={{ height: 1, background: MOD.line, margin: '30px 0 26px' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {OFF.inc.map(([t, v], i) => (
          <div key={t} style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
            <div style={{ fontFamily: MOD.serif, fontSize: 46, fontWeight: 600, color: MOD.teal, lineHeight: 1, width: 58, flexShrink: 0 }}>{'0' + (i + 1)}</div>
            <div>
              <div style={{ fontSize: 29, fontWeight: 700, color: MOD.ink900, whiteSpace: 'nowrap' }}>{t}</div>
              <div style={{ fontSize: 23, fontWeight: 500, color: MOD.ink500, marginTop: 2 }}>{v}, included on the day</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 30, background: MOD.teal100, borderRadius: 10, padding: '22px 26px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: MOD.teal, flexShrink: 0 }}></div>
        <div style={{ fontSize: 27, fontWeight: 800, color: MOD.teal900, whiteSpace: 'nowrap' }}>package worth {OFF.pkg}</div>
      </div>
      <ModPill label={OFF.cta} size={31} h={98} style={{ marginTop: 28 }} />
      <div style={{ fontSize: 24, fontWeight: 600, color: MOD.ink500, marginTop: 24 }}>{OFF.scarcity} available</div>
    </div>
  </div>;
}

/* 5 — Duotone editorial: full-bleed teal-tinted photo, bottom lockup */
function ModSq5() {
  return <div style={modBase(1080, 1080, MOD.teal900)}>
    <ModBleed color={MOD.teal900} />
    <ModDuotone src="p-richard-consult.jpg" pos="44% 34%" scrimFrom={0.34} topScrim={0.8} />
    <ModLogo h={128} light style={{ position: 'absolute', left: 72, top: 66, zIndex: 3 }} />
    <div style={{ position: 'absolute', right: 72, top: 74, zIndex: 3, border: '3px solid rgba(255,255,255,0.8)', borderRadius: 999, padding: '18px 30px', fontSize: 25, fontWeight: 700, color: MOD.white, whiteSpace: 'nowrap' }}>{OFF.date}</div>
    <div style={{ position: 'absolute', left: 72, bottom: 72, width: 940, zIndex: 3 }}>
      <ModEyebrow text={OFF.event} color={MOD.teal200} size={28} />
      <div style={{ fontSize: 200, fontWeight: 800, letterSpacing: -8, lineHeight: 0.9, color: MOD.white, marginTop: 16, whiteSpace: 'nowrap' }}>{OFF.discount} off</div>
      <div style={{ fontSize: 32, fontWeight: 600, color: MOD.teal200, marginTop: 14, whiteSpace: 'nowrap' }}>{OFF.treat} · package worth {OFF.pkg}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 34 }}>
        <ModPill label={OFF.cta} bg={MOD.white} fg={MOD.teal800} size={31} h={98} />
        <div style={{ fontSize: 26, fontWeight: 700, color: MOD.white, whiteSpace: 'nowrap' }}>{OFF.scarcity} · {OFF.time.toLowerCase()}</div>
      </div>
    </div>
  </div>;
}

Object.assign(window, { ModSq1, ModSq2, ModSq3, ModSq4, ModSq5 });
