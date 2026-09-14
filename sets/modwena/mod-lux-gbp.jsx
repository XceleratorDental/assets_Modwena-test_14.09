// Modwena Open Day — Google Business Profile landscape (1200×900)
// Landscape re-cuts of the five signed-off feed layouts. Same type, colour and
// component vocabulary as mod-lux-square.jsx; geometry re-flowed for 4:3.

/* 1 — The open day, as a pass */
function ModG1() {
  const notch = (side) => <div style={{ position: 'absolute', [side]: -22, top: 312, width: 44, height: 44, borderRadius: '50%', background: LUX.cream, zIndex: 7 }}></div>;
  return <div style={modBase(1200, 900, LUX.cream)}>
    <ModBleed color={LUX.cream} />
    <ModLogo h={72} style={{ position: 'absolute', left: 52, top: 40, zIndex: 6 }} />
    <LuxTab t={'Limited spaces'} style={{ position: 'absolute', right: 44, top: 44, zIndex: 6 }} />
    <ModPhoto src="p-braces-chat.jpg" pos="76% 26%" style={{ position: 'absolute', right: 44, top: 130, width: 364, height: 630, borderRadius: 20, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 48, top: 130, width: 700, height: 630, background: LUX.deep, borderRadius: 24, zIndex: 5 }}>
      {notch('left')}{notch('right')}
      <div style={{ position: 'absolute', left: 0, top: 312, width: 700, height: 1, backgroundImage: 'repeating-linear-gradient(90deg, rgba(244,241,236,0.45) 0 12px, rgba(244,241,236,0) 12px 24px)' }}></div>
      <div style={{ position: 'absolute', left: 48, top: 46 }}>
        <LuxCaps t="Open day" size={14} ls={3.6} color="rgba(244,241,236,0.7)" />
        <LuxBig t={OFF.discount} size={112} color={LUX.cream} style={{ marginTop: 18 }} />
        <LuxBig t="OFF" size={112} color={LUX.cream} style={{ marginTop: 2 }} />
      </div>
      <div style={{ position: 'absolute', left: 48, top: 348 }}>
        <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 30, fontWeight: 500, color: 'rgba(244,241,236,0.92)', whiteSpace: 'nowrap' }}>orthodontic treatment</div>
        <LuxCaps t="Consultation, retainers &amp; whitening free" size={14} ls={1.8} color={LUX.cream} style={{ marginTop: 24 }} />
        <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 22, fontWeight: 500, color: 'rgba(244,241,236,0.62)', marginTop: 8 }}>a package worth {OFF.pkg}</div>
      </div>
      <div style={{ position: 'absolute', left: 48, bottom: 44 }}>
        <div style={{ fontFamily: LUX.sans, fontSize: 44, fontWeight: 900, letterSpacing: -1.2, lineHeight: 1, color: LUX.cream, whiteSpace: 'nowrap' }}>SATURDAY 5<span style={{ fontSize: '0.52em', verticalAlign: 'super', letterSpacing: 0 }}>TH</span> SEPT</div>
        <LuxCaps t="from 9am" size={13} ls={2.2} color="rgba(244,241,236,0.72)" style={{ marginTop: 12 }} />
      </div>
    </div>
    <LuxCTA label={OFF.cta} h={72} size={16} style={{ position: 'absolute', left: 48, top: 788, zIndex: 6 }} />
  </div>;
}

/* 2 — The same beat, inverted on deep teal */
function ModG2() {
  return <div style={modBase(1200, 900, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <LuxLogoChip w={300} style={{ position: 'absolute', left: 52, top: 42, zIndex: 6 }} />
    <div style={{ position: 'absolute', right: 48, top: 64, zIndex: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(244,241,236,0.85)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M8 3v4M16 3v4M3 10h18"></path></svg>
      <LuxCaps t={'Saturday 5th Sept · from 9am'} size={16} ls={2.4} color="rgba(244,241,236,0.85)" />
    </div>
    <LuxRule w={1104} color={LUX.hairLight} style={{ position: 'absolute', left: 48, top: 132, zIndex: 6 }} />
    <LuxArchPhoto src="p-mirror-smile.jpg" w={400} h={500} pos="62% 33%" zoom={1.53} frame={LUX.hairLight} style={{ left: 44, top: 168, zIndex: 5 }} />
    <div style={{ position: 'absolute', right: 44, top: 168, width: 670, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <LuxBig t={OFF.discount} size={168} color={LUX.cream} />
      <LuxBig t="OFF" size={168} color={LUX.cream} style={{ marginTop: 4 }} />
      <LuxMark t="orthodontic treatment" size={28} rot={1.2} style={{ marginTop: 20 }} />
    </div>
    <LuxIncStrip dark w={1112} style={{ position: 'absolute', left: 44, top: 716, zIndex: 6 }} />
  </div>;
}

/* 3 — Two fields, the figure split across the seam */
function ModG3() {
  return <div style={modBase(1200, 900, LUX.cream)}>
    <ModBleed color={LUX.cream} />
    <div style={{ position: 'absolute', left: 0, top: 430, width: 1200, height: 470, background: LUX.teal, zIndex: 1 }}></div>
    <LuxArchPhoto src="p-hayley.jpg" w={356} h={500} pos="62% 20%" zoom={1.45} flat frame={LUX.hairLight} style={{ right: 48, top: 120, zIndex: 5 }} />
    <ModLogo h={76} style={{ position: 'absolute', left: 54, top: 40, zIndex: 6 }} />
    <LuxRule w={1096} style={{ position: 'absolute', left: 52, top: 138, zIndex: 6 }} />
    <LuxMark t="Open day offer" bg={LUX.deep} size={28} rot={-1.8} style={{ position: 'absolute', left: 52, top: 190, zIndex: 6 }} />
    <LuxBig t={OFF.discount} size={168} color={LUX.teal} style={{ position: 'absolute', left: 52, top: 276, zIndex: 4 }} />
    <LuxBig t="OFF" size={168} color={LUX.cream} style={{ position: 'absolute', left: 52, top: 406, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 56, top: 640, zIndex: 6 }}>
      <div style={{ fontFamily: MOD.sansAlt, fontSize: 26, fontWeight: 700, color: LUX.cream, whiteSpace: 'nowrap' }}>orthodontic treatment</div>
      <LuxRule w={600} color={LUX.hairLight} style={{ marginTop: 22 }} />
      <div style={{ fontFamily: LUX.sans, fontSize: 32, fontWeight: 800, letterSpacing: -0.6, color: LUX.cream, marginTop: 22, whiteSpace: 'nowrap' }}>Free specialist consultation, whitening &amp; retainers</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 26 }}>
        <LuxCTA label={OFF.cta} bg={LUX.deep} fg="#FFFFFF" h={68} />
        <LuxCaps t={'Saturday 5th Sept · from 9am · one day only'} size={13} ls={2.4} color="rgba(244,241,236,0.85)" />
      </div>
    </div>
  </div>;
}

/* 4 — Caps stack, photograph as the right field */
function ModG4() {
  return <div style={modBase(1200, 900, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <ModPhoto src="p-team.jpg" pos="52% 16%" style={{ position: 'absolute', right: 0, top: 0, width: 452, height: 900, zIndex: 2 }} />
    <div style={{ position: 'absolute', right: 452, top: 0, width: 120, height: 900, zIndex: 3, background: 'linear-gradient(90deg, rgba(0,81,79,0) 0%, rgba(0,81,79,0.55) 100%)' }}></div>
    <LuxLogoChip w={300} style={{ position: 'absolute', left: 52, top: 42, zIndex: 4 }} />
    <LuxRule w={644} color={LUX.hairLight} style={{ position: 'absolute', left: 52, top: 132, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 52, top: 132, width: 660, height: 724, zIndex: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontFamily: LUX.sans, fontSize: 74, fontWeight: 900, letterSpacing: -2.6, lineHeight: 1.02, color: LUX.cream, whiteSpace: 'nowrap' }}>20 SPACES.</div>
      <div style={{ fontFamily: LUX.sans, fontSize: 74, fontWeight: 900, letterSpacing: -2.6, lineHeight: 1.02, color: LUX.cream, whiteSpace: 'nowrap' }}>SAT 5TH SEPT.</div>
      <LuxBig t={OFF.discount + ' OFF'} size={108} color={LUX.teal} style={{ marginTop: 18 }} />
      <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 36, fontWeight: 500, color: LUX.cream, marginTop: 10, whiteSpace: 'nowrap' }}>orthodontic treatment</div>
      <LuxCTA label={OFF.cta} bg={LUX.teal} h={70} style={{ marginTop: 44, alignSelf: 'flex-start' }} />
    </div>
  </div>;
}

/* 5 — Full-bleed photograph, savings package on glass */
function ModG5() {
  return <div style={modBase(1200, 900, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <ModPhoto src="p-richard-consult.jpg" pos="64% 26%" style={{ position: 'absolute', left: 0, top: 0, width: 1200, height: 900, zIndex: 1 }} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 1200, height: 260, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,42,41,0.72) 0%, rgba(0,42,41,0) 100%)' }}></div>
    <div style={{ position: 'absolute', left: 0, top: 0, width: 800, height: 900, zIndex: 2, background: 'linear-gradient(90deg, rgba(0,42,41,0.55) 0%, rgba(0,42,41,0.12) 62%, rgba(0,42,41,0) 100%)' }}></div>
    <ModLogo w={310} light style={{ position: 'absolute', left: 54, top: 44, zIndex: 5 }} />
    <LuxTab t={'Saturday 5th Sept · from 9am'} bg={LUX.paper} fg={LUX.deep} style={{ position: 'absolute', right: 44, top: 52, zIndex: 5 }} />
    <div style={{ position: 'absolute', left: 52, bottom: 48, width: 672, zIndex: 4, background: 'rgba(0,52,50,0.52)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 22, padding: '40px 44px 44px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <LuxBig t={OFF.pkg} size={104} color={LUX.cream} />
        <div>
          <LuxCaps t="Savings" size={26} ls={2} color={LUX.cream} />
          <LuxCaps t="Package" size={26} ls={2} color={LUX.cream} style={{ marginTop: 6 }} />
        </div>
      </div>
      <LuxCaps t={'orthodontic treatment'} size={16} ls={2.4} color={LUX.cream} style={{ marginTop: 16 }} />
      <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 38, fontWeight: 500, lineHeight: 1.2, color: 'rgba(244,241,236,0.88)', marginTop: 12 }}>including {OFF.discount} off, free whitening and more</div>
      <LuxCTA label={OFF.cta} bg={LUX.teal} fg="#FFFFFF" h={70} style={{ marginTop: 28 }} />
    </div>
  </div>;
}

Object.assign(window, { ModG1, ModG2, ModG3, ModG4, ModG5 });
