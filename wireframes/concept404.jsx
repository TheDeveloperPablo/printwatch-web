// Wireframe 4: 404 Concept
// The whole portfolio masquerades as a "page not found"
const { Box, Line, ImgPH, TextLines, Tag, Arrow, Caption, Hand, Page, BrowserBar } = window.WF;

function Wireframe404({ accent = '#1a1a1a' }) {
  return (
    <Page>
      <BrowserBar url="simplify404.dev/me" />

      {/* Glitchy 404 */}
      <div style={{ textAlign: 'center', marginTop: 4, marginBottom: 14 }}>
        <div style={{
          fontFamily: 'ui-monospace, monospace',
          fontSize: 11,
          letterSpacing: '0.2em',
          opacity: 0.55,
          marginBottom: 8,
        }}>
          ERROR · STATUS 404
        </div>
        <div style={{
          fontFamily: 'Georgia, serif',
          fontWeight: 900,
          fontSize: 90,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          position: 'relative',
          display: 'inline-block',
        }}>
          <span>page</span>{' '}
          <span style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: -3, top: 0, color: accent, opacity: 0.6 }}>found.</span>
            <span style={{ position: 'absolute', left: 3, top: 0, opacity: 0.4 }}>found.</span>
            <span style={{ position: 'relative', textDecoration: 'line-through', textDecorationThickness: 4 }}>not found.</span>
          </span>
        </div>
        <Hand style={{
          display: 'block',
          marginTop: 6,
          fontSize: 16,
          transform: 'rotate(-1.5deg)',
        }}>
          ...just kidding. you found me.
        </Hand>
      </div>

      <Line style={{ marginBottom: 14, opacity: 0.4 }} />

      {/* Fake "did you mean" suggestions = real nav */}
      <div style={{ marginBottom: 16 }}>
        <div style={{
          fontFamily: 'monospace',
          fontSize: 10,
          opacity: 0.6,
          marginBottom: 8,
          letterSpacing: '0.05em',
        }}>
          DID YOU MEAN:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { p: '/about', d: 'a designer-developer based on planet earth' },
            { p: '/work', d: '6 selected projects from the last 2 years' },
            { p: '/cv.pdf', d: 'a single-page printable resume' },
            { p: '/contact', d: 'a working email address (yes, really)' },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 10,
              padding: '6px 10px',
              border: '1.2px dashed rgba(26,26,26,0.4)',
              borderRadius: 3,
              fontFamily: 'monospace',
              fontSize: 11,
            }}>
              <span style={{ color: accent, fontWeight: 700 }}>→</span>
              <span style={{ textDecoration: 'underline' }}>{s.p}</span>
              <span style={{ opacity: 0.6, fontSize: 10 }}>{s.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fake stack trace = skills/about */}
      <div style={{
        background: 'rgba(26,26,26,0.06)',
        border: '1.2px solid rgba(26,26,26,0.2)',
        padding: 10,
        fontFamily: 'monospace',
        fontSize: 9.5,
        lineHeight: 1.6,
      }}>
        <div style={{ opacity: 0.6, marginBottom: 4 }}>// stacktrace</div>
        <div>at <span style={{ fontWeight: 700 }}>simplify404</span>.designer (./identity.js:12)</div>
        <div>at simplify404.developer (./code.js:7)</div>
        <div>at simplify404.brand (./self.js:1)</div>
        <div style={{ opacity: 0.5 }}>  ↳ skills: [react, css, figma, type, motion]</div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 14,
        right: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        <Arrow />
        <Hand style={{ fontSize: 14, transform: 'rotate(-2deg)' }}>refresh = new joke</Hand>
      </div>
    </Page>
  );
}

window.Wireframe404 = Wireframe404;
