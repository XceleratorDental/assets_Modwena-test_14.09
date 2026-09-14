// Modwena Open Day — Story / Reel (1080×1920)
// Everything readable sits between y=270 and y=1150; photography runs full-bleed behind.

/* 1 - The open day, as a pass */
function ModV1() {
  return <div style={modBase(1080, 1920, LUX.cream)}>
    <ModBleed color={LUX.cream} />
    <ModPhoto src="p-two-orthos.jpg" pos="70% 34%" style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 1920, zIndex: 1 }} />
    <ModLogo h={197} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 44, zIndex: 6 }} />
    <div style={{ position: 'absolute', left: 90, top: 718, width: 900, height: 628, background: LUX.deep, borderRadius: '24px 24px 0 0', zIndex: 5 }}>
      <div style={{ position: 'absolute', left: 0, top: 268, width: 900, height: 2, backgroundImage: 'repeating-linear-gradient(90deg, rgba(244,241,236,0.85) 0 14px, rgba(244,241,236,0) 14px 26px)' }}></div>
      <div style={{ position: 'absolute', left: 52, top: 56 }}>
        <LuxCaps t="Orthodontic open day" size={14} ls={3.6} color="rgba(244,241,236,0.7)" />
        <LuxBig t={OFF.discount + ' OFF'} size={132} color={LUX.cream} style={{ marginTop: 22 }} />
      </div>
      <div style={{ position: 'absolute', left: 52, top: 312 }}>
        <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 34, fontWeight: 500, color: 'rgba(244,241,236,0.92)', whiteSpace: 'nowrap' }}>orthodontic treatment</div>
        <LuxCaps t="Consultation, retainers &amp; whitening free" size={15} ls={1.8} color={LUX.cream} style={{ marginTop: 28 }} />
        <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 25, fontWeight: 500, color: 'rgba(244,241,236,0.62)', marginTop: 8 }}>a package worth {OFF.pkg}</div>
      </div>
      <div style={{ position: 'absolute', left: 52, bottom: 52 }}>
        <div style={{ fontFamily: LUX.sans, fontSize: 50, fontWeight: 900, letterSpacing: -1.4, lineHeight: 1, color: LUX.cream, marginTop: 10, whiteSpace: 'nowrap' }}>SATURDAY 5<span style={{ fontSize: '0.52em', verticalAlign: 'super', letterSpacing: 0 }}>TH</span> SEPT</div>
        <LuxCaps t="from 9am" size={13} ls={2.2} color="rgba(244,241,236,0.72)" style={{ marginTop: 12 }} />
      </div>
    </div>
    <div style={{ position: 'absolute', left: 90, top: 1346, width: 900, height: 128, background: LUX.paper, borderRadius: '0 0 24px 24px', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 900, height: 2, backgroundImage: 'repeating-linear-gradient(90deg, ' + LUX.deep + ' 0 12px, rgba(0,0,0,0) 12px 24px)', opacity: 0.35 }}></div>
      <LuxCaps t={OFF.cta} size={22} ls={3} color={LUX.deep} />
    </div>
  </div>;
}

/* 2 — Inverted on deep teal */
function ModV2() {
  return <div style={modBase(1080, 1920, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <ModPhoto src="p-team-outside.jpg" pos="52% 46%" style={{ position: 'absolute', left: 44, bottom: 44, width: 992, height: 516, borderRadius: 20, zIndex: 3 }} />
    <div style={{ position: 'absolute', left: 44, top: 424, width: 384, height: 462, borderRadius: 20, overflow: 'hidden', border: `1px solid ${LUX.hairLight}`, zIndex: 5 }}><img src={MOD.A + 'p-mirror-smile.jpg'} alt="" style={{ width: '154%', height: '154%', marginLeft: '-34%', marginTop: '-25%', objectFit: 'cover', objectPosition: '62% 33%', display: 'block' }} /></div>
    <LuxLogoChip w={520} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 60, zIndex: 6 }} />
    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 262, zIndex: 6, display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(244,241,236,0.85)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M8 3v4M16 3v4M3 10h18"></path></svg>
      <LuxCaps t={'Open day · Saturday 5th Sept · from 9am'} size={18} ls={2.4} color="rgba(244,241,236,0.85)" />
    </div>
    <LuxRule w={968} color={LUX.hairLight} style={{ position: 'absolute', left: 56, top: 388, zIndex: 6 }} />
    <div style={{ position: 'absolute', right: 56, top: 470, zIndex: 3, textAlign: 'right' }}>
      <LuxBig t={OFF.discount} size={222} color={LUX.cream} />
      <LuxBig t="OFF" size={222} color={LUX.cream} style={{ marginTop: 6 }} />
      <LuxMark t="orthodontic treatment" size={30} rot={1.2} style={{ marginTop: 26 }} />
    </div>
    <div style={{ position: 'absolute', right: 60, top: 1010, zIndex: 6, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <LuxRule w={620} color={LUX.hairLight} />
      <div style={{ fontFamily: LUX.sans, fontSize: 34, fontWeight: 800, letterSpacing: -0.6, color: LUX.cream, marginTop: 26, whiteSpace: 'nowrap', textAlign: 'right' }}>Free specialist consultation, whitening &amp; retainers</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 32 }}>
        <LuxCaps t={'Saturday 5th Sept · one day only'} size={16} ls={2.6} color="rgba(244,241,236,0.85)" />
        <LuxCTA label={OFF.cta} bg={LUX.teal} fg="#FFFFFF" />
      </div>
    </div>
  </div>;
}

/* 3 — Figure split across the seam */
function ModV3() {
  return <div style={modBase(1080, 1920, LUX.cream)}>
    <ModBleed color={LUX.cream} />
    <ModPhoto src="p-reception.jpg" pos="50% 37%" style={{ position: 'absolute', left: 44, bottom: 44, width: 992, height: 516, borderRadius: 20, zIndex: 3 }} />
    <div style={{ position: 'absolute', left: 0, top: 726, width: 1080, height: 1194, background: LUX.teal, zIndex: 2 }}></div>
    <LuxArchPhoto src="p-hayley.jpg" w={368} h={504} pos="62% 20%" zoom={1.45} flat frame={LUX.hairLight} style={{ right: 48, top: 404, zIndex: 5 }} />
    <ModLogo h={173} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 44, zIndex: 6 }} />
    <LuxRule w={968} style={{ position: 'absolute', left: 56, top: 388, zIndex: 6 }} />
    <LuxMark t="Open day offer" bg={LUX.deep} size={32} rot={-1.8} style={{ position: 'absolute', left: 56, top: 440, zIndex: 6 }} />
    <LuxBig t={OFF.discount} size={222} color={LUX.teal} style={{ position: 'absolute', left: 56, top: 537, zIndex: 4 }} />
    <LuxBig t="OFF" size={222} color={LUX.cream} style={{ position: 'absolute', left: 56, top: 710, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 60, top: 934, zIndex: 6 }}>
      <div style={{ fontFamily: LUX.sans, fontSize: 28, fontWeight: 700, color: LUX.cream, whiteSpace: 'nowrap' }}>orthodontic treatment</div>
      <LuxRule w={620} color={LUX.hairLight} style={{ marginTop: 30 }} />
      <div style={{ fontFamily: LUX.sans, fontSize: 34, fontWeight: 800, letterSpacing: -0.6, color: LUX.cream, marginTop: 26, whiteSpace: 'nowrap' }}>Free specialist consultation, whitening &amp; retainers</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 32 }}>
        <LuxCTA label={OFF.cta} bg={LUX.deep} fg="#FFFFFF" />
        <LuxCaps t={'Saturday 5th Sept · one day only'} size={16} ls={2.6} color="rgba(244,241,236,0.85)" />
      </div>
    </div>
  </div>;
}

/* 4 — Caps stack with chips */
function ModV4() {
  return <div style={modBase(1080, 1920, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <ModPhoto src="p-team.jpg" pos="50% 15%" style={{ position: 'absolute', left: 44, bottom: 44, width: 992, height: 900, borderRadius: 20, zIndex: 1 }} />
    <LuxLogoChip w={520} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 60, zIndex: 4 }} />
    <LuxRule w={968} color={LUX.hairLight} style={{ position: 'absolute', left: 56, top: 366, zIndex: 4 }} />
    <div style={{ position: 'absolute', left: 58, top: 412, zIndex: 4 }}>
      <div style={{ fontFamily: LUX.sans, fontSize: 88, fontWeight: 900, letterSpacing: -3, lineHeight: 1.02, color: LUX.cream, whiteSpace: 'nowrap' }}>20 SPACES.</div>
      <div style={{ fontFamily: LUX.sans, fontSize: 88, fontWeight: 900, letterSpacing: -3, lineHeight: 1.02, color: LUX.cream, whiteSpace: 'nowrap' }}>SAT 5TH SEPT.</div>
      <LuxBig t={OFF.discount + ' OFF'} size={126} color={LUX.teal} style={{ marginTop: 16 }} />
      <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 40, fontWeight: 500, color: LUX.cream, marginTop: 10, whiteSpace: 'nowrap' }}>orthodontic treatment</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 38 }}>
        <LuxCTA label={OFF.cta} bg={LUX.teal} />
      </div>
    </div>
  </div>;
}

/* 5 — Photograph up top, figure across the base */
function ModV5() {
  return <div style={modBase(1080, 1920, LUX.deep)}>
    <ModBleed color={LUX.deep} />
    <ModPhoto src="p-braces-chat.jpg" pos="78% 26%" style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 1920, zIndex: 1 }} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 1080, height: 420, zIndex: 3, background: 'linear-gradient(180deg, rgba(0,42,41,0.62) 0%, rgba(0,42,41,0) 100%)' }}></div>
    <div style={{ position: 'absolute', left: 0, top: 820, width: 1080, height: 1100, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,42,41,0) 0%, rgba(0,42,41,0.28) 30%, rgba(0,42,41,0.28) 100%)' }}></div>
    <ModLogo w={520} light style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 60, zIndex: 5 }} />
    <LuxTab t={'Saturday 5th Sept · from 9am'} bg={LUX.pale} fg={LUX.deep} size={26} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 210, zIndex: 5 }} />
    <div style={{ position: 'absolute', left: 56, top: 954, width: 968, zIndex: 4, background: 'rgba(0,52,50,0.52)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 22, padding: '52px 56px 56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
        <LuxBig t={OFF.pkg} size={132} color={LUX.cream} />
        <div>
          <LuxCaps t="Savings" size={34} ls={2} color={LUX.cream} />
          <LuxCaps t="Package" size={34} ls={2} color={LUX.cream} style={{ marginTop: 8 }} />
        </div>
      </div>
      <LuxCaps t={'orthodontic treatment'} size={30} ls={1.6} color={LUX.cream} style={{ marginTop: 22 }} />
      <div style={{ fontFamily: MOD.serif, fontStyle: 'italic', fontSize: 50, fontWeight: 500, lineHeight: 1.2, color: 'rgba(244,241,236,0.86)', marginTop: 16 }}>including {OFF.discount} off, free whitening and more</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 34 }}>
        <LuxCTA label={OFF.cta} bg={LUX.teal} fg="#FFFFFF" />
      </div>
    </div>
  </div>;
}

Object.assign(window, { ModV1, ModV2, ModV3, ModV4, ModV5 });
