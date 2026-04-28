// Wireframe 1: Editorial / Brutalist
// Big typography, asymmetric layout, "404" as graphic element
const { Box, Line, ImgPH, TextLines, Tag, Arrow, Caption, Hand, Page, BrowserBar } = window.WF;

function WireframeEditorial({ accent = '#1a1a1a' }) {
  return (
    <Page>
      <BrowserBar url="simplify404.dev" />

      {/* Top nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 14, fontWeight: 700 }}>
          SIMPLIFY<span style={{ color: accent }}>404</span>
        </div>
        <div style={{ display: 'flex', gap: 14, fontFamily: 'ui-monospace, monospace', fontSize: 10 }}>
          <span>WORK</span><span>ABOUT</span><span>CONTACT</span><span style={{ textDecoration: 'underline' }}>↓ CV</span>
        </div>
      </div>

      {/* Massive 404 hero */}
      <div style={{ position: 'relative', marginBottom: 24 }}>
        <div
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 900,
            fontSize: 180,
            lineHeight: 0.85,
            letterSpacing: '-0.06em',
            color: accent,
          }}
        >
          404
        </div>
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 12,
            maxWidth: 200,
            fontFamily: 'Georgia, serif',
            fontSize: 22,
            lineHeight: 1.15,
            fontStyle: 'italic',
          }}
        >
          designer<br/>—developer<br/>not found.
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
        <Hand style={{ transform: 'rotate(-3deg)' }}>simplifying since 2020</Hand>
        <Arrow style={{ transform: 'rotate(45deg)' }} />
      </div>

      <Line />

      {/* Selected work — editorial grid */}
      <div style={{ marginTop: 16 }}>
        <Caption>— Selected Work / 01–06</Caption>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.4fr', gap: 12 }}>
          <ImgPH label="project hero" ratio="5 / 4" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ImgPH label="case 02" ratio="1 / 1" />
            <ImgPH label="case 03" ratio="1 / 1" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>
                Untitled<br/>Studio
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, marginTop: 6, opacity: 0.6 }}>
                BRAND × WEB / 2025
              </div>
              <TextLines count={4} style={{ marginTop: 10 }} />
            </div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              <Tag>identity</Tag>
              <Tag>web</Tag>
              <Tag filled>view →</Tag>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

window.WireframeEditorial = WireframeEditorial;
