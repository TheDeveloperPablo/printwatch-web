// Wireframe 3: Minimalist Classic CV
// Clean, lots of whitespace, lineal scroll
const { Box, Line, ImgPH, TextLines, Tag, Arrow, Caption, Hand, Page, BrowserBar } = window.WF;

function WireframeMinimal({ accent = '#1a1a1a' }) {
  return (
    <Page>
      <BrowserBar url="simplify404.dev" />

      {/* Sticky header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
        <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '-0.01em' }}>
          simplify404<span style={{ color: accent }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: 16, fontFamily: 'system-ui, sans-serif', fontSize: 10, opacity: 0.7 }}>
          <span>work</span><span>about</span><span>cv</span><span>contact</span>
        </div>
      </div>

      {/* Hero — minimal statement */}
      <div style={{ marginBottom: 30, maxWidth: '78%' }}>
        <div style={{
          fontFamily: 'system-ui, sans-serif',
          fontSize: 11,
          opacity: 0.5,
          marginBottom: 8,
          letterSpacing: '0.06em',
        }}>
          ◯  AVAILABLE FOR WORK
        </div>
        <div style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 30,
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}>
          Designer & developer building <span style={{ color: accent, textDecoration: 'underline', textDecorationThickness: 1 }}>simple
          interfaces</span> for complicated problems.
        </div>
      </div>

      <Line style={{ opacity: 0.3, marginBottom: 18 }} />

      {/* Two-column: Selected work + Now */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 28 }}>
        <div>
          <Caption>Selected work — 2024 / 25</Caption>
          {[
            { y: '2025', n: 'Untitled Studio', t: 'website + identity' },
            { y: '2025', n: 'Form Engine', t: 'design system' },
            { y: '2024', n: 'Archive', t: 'iOS app' },
            { y: '2024', n: 'Micro OS', t: 'concept' },
          ].map((r, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '40px 1fr auto 14px',
              padding: '10px 0',
              borderBottom: '1px solid rgba(26,26,26,0.15)',
              fontFamily: 'system-ui, sans-serif',
              fontSize: 12,
              alignItems: 'center',
            }}>
              <span style={{ opacity: 0.5, fontFamily: 'monospace', fontSize: 10 }}>{r.y}</span>
              <span>{r.n}</span>
              <span style={{ opacity: 0.55, fontSize: 10 }}>{r.t}</span>
              <span style={{ opacity: 0.4 }}>↗</span>
            </div>
          ))}
        </div>

        <div>
          <Caption>Now</Caption>
          <TextLines count={3} widths={['100%', '92%', '70%']} style={{ marginBottom: 16 }} />

          <Caption>Tools</Caption>
          <div style={{
            fontFamily: 'monospace',
            fontSize: 10,
            lineHeight: 1.7,
            opacity: 0.75,
          }}>
            Figma · React · CSS<br/>
            Framer · Rive · After<br/>
            Effects
          </div>

          <div style={{ marginTop: 18 }}>
            <Caption>Contact</Caption>
            <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11 }}>
              hello@simplify404.dev
            </div>
          </div>
        </div>
      </div>

      <Hand style={{
        position: 'absolute',
        bottom: 14,
        left: 24,
        opacity: 0.5,
        fontSize: 14,
        transform: 'rotate(-2deg)',
      }}>
        scroll for more ↓
      </Hand>
    </Page>
  );
}

window.WireframeMinimal = WireframeMinimal;
