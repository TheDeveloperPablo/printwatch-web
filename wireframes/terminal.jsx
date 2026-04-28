// Wireframe 2: Terminal / Developer
// Dark mode, monospaced, console aesthetic
const { Box, Line, ImgPH, TextLines, Tag, Arrow, Caption, Hand, Page, BrowserBar } = window.WF;

function WireframeTerminal({ accent = '#1a1a1a' }) {
  return (
    <Page dark>
      {/* Terminal header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 10,
        marginBottom: 14,
        borderBottom: '1.2px dashed #fafaf7',
      }}>
        <div style={{ display: 'flex', gap: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fafaf7' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fafaf7', opacity: 0.5 }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fafaf7', opacity: 0.3 }} />
        </div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, opacity: 0.7, marginLeft: 4 }}>
          ~/simplify404 — zsh
        </div>
        <div style={{ marginLeft: 'auto', fontFamily: 'monospace', fontSize: 10, opacity: 0.5 }}>
          [01:23:45]
        </div>
      </div>

      <div style={{ fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 11, lineHeight: 1.6 }}>
        <div style={{ opacity: 0.5 }}>$ whoami</div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ color: accent === '#1a1a1a' ? '#fafaf7' : accent }}>simplify404</span>
          <span style={{ opacity: 0.6 }}>:~ designer + developer</span>
        </div>

        <div style={{ opacity: 0.5 }}>$ cat about.md</div>
        <div style={{ marginBottom: 10, opacity: 0.85 }}>
          <TextLines count={3} widths={['90%', '78%', '55%']} style={{ marginTop: 4 }} />
        </div>

        <div style={{ opacity: 0.5 }}>$ ls projects/</div>
        <div style={{
          marginBottom: 12,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4px 24px',
        }}>
          {['01_untitled-studio/', '04_archive-app/', '02_brand-system/', '05_404-zine/', '03_form-engine/', '06_micro-os/'].map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ opacity: 0.4 }}>—</span>
              <span style={{ textDecoration: 'underline', textDecorationStyle: 'dotted' }}>{f}</span>
            </div>
          ))}
        </div>

        <div style={{ opacity: 0.5 }}>$ ./skills --list</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
          {['react', 'figma', 'css', 'motion', 'systems', 'type', 'svg', 'node'].map(s => (
            <span key={s} style={{
              border: '1.2px solid #fafaf7',
              padding: '2px 7px',
              borderRadius: 2,
              fontSize: 10,
            }}>{s}</span>
          ))}
        </div>

        <div style={{ opacity: 0.5 }}>$ contact --send</div>
        <div style={{ display: 'flex', gap: 12, fontSize: 10, marginBottom: 12 }}>
          <span style={{ textDecoration: 'underline' }}>hello@simplify404.dev</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span style={{ textDecoration: 'underline' }}>@simplify404</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span style={{ textDecoration: 'underline' }}>github</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ opacity: 0.5 }}>$</span>
          <span style={{
            display: 'inline-block',
            width: 7,
            height: 13,
            background: accent === '#1a1a1a' ? '#fafaf7' : accent,
            animation: 'wf-blink 1s steps(2) infinite',
          }} />
        </div>
      </div>

      <Hand style={{
        position: 'absolute',
        bottom: 16,
        right: 20,
        color: '#fafaf7',
        transform: 'rotate(-4deg)',
        opacity: 0.7,
      }}>
        type 'help' for menu →
      </Hand>

      <style>{`@keyframes wf-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }`}</style>
    </Page>
  );
}

window.WireframeTerminal = WireframeTerminal;
