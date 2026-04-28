// Shared sketchy wireframe primitives
const Box = ({ children, style, dashed, filled, ...props }) => (
  <div
    style={{
      border: `1.5px ${dashed ? 'dashed' : 'solid'} #1a1a1a`,
      background: filled ? '#1a1a1a' : 'transparent',
      color: filled ? '#fafaf7' : '#1a1a1a',
      padding: '8px 10px',
      borderRadius: 2,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

const Line = ({ w = '100%', thick = 1.5, style }) => (
  <div style={{ width: w, height: thick, background: '#1a1a1a', ...style }} />
);

// Image placeholder with diagonal stripes + label
const ImgPH = ({ label = 'image', style, ratio = '4 / 3' }) => (
  <div
    style={{
      aspectRatio: ratio,
      border: '1.5px solid #1a1a1a',
      backgroundImage:
        'repeating-linear-gradient(45deg, transparent 0 6px, rgba(26,26,26,0.12) 6px 7px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      fontSize: 10,
      color: '#1a1a1a',
      letterSpacing: '0.05em',
      ...style,
    }}
  >
    [{label}]
  </div>
);

// Fake text lines
const TextLines = ({ count = 3, widths, style }) => {
  const ws = widths || Array.from({ length: count }, (_, i) =>
    `${60 + ((i * 17) % 35)}%`
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {ws.map((w, i) => (
        <div
          key={i}
          style={{
            height: 6,
            width: w,
            background: '#1a1a1a',
            opacity: 0.55,
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
};

const Tag = ({ children, filled, style }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '3px 8px',
      border: '1.2px solid #1a1a1a',
      background: filled ? '#1a1a1a' : 'transparent',
      color: filled ? '#fafaf7' : '#1a1a1a',
      fontSize: 10,
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      borderRadius: 999,
      letterSpacing: '0.04em',
      ...style,
    }}
  >
    {children}
  </span>
);

// Hand-drawn arrow (sketchy)
const Arrow = ({ style }) => (
  <svg width="22" height="14" viewBox="0 0 22 14" style={style}>
    <path
      d="M1 7 Q 6 5, 11 7 T 20 7 M16 3 L 20 7 L 16 11"
      stroke="#1a1a1a"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Section header within an artboard
const Caption = ({ children }) => (
  <div
    style={{
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: '#1a1a1a',
      opacity: 0.6,
      textTransform: 'uppercase',
      marginBottom: 8,
    }}
  >
    {children}
  </div>
);

// Sketchy "handwritten" label
const Hand = ({ children, style }) => (
  <span
    style={{
      fontFamily: '"Caveat", "Bradley Hand", cursive',
      fontSize: 16,
      color: '#1a1a1a',
      ...style,
    }}
  >
    {children}
  </span>
);

// Frame wrapper for an artboard's inner content (page-like)
const Page = ({ children, dark, style }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: dark ? '#0d0d0d' : '#fafaf7',
      color: dark ? '#fafaf7' : '#1a1a1a',
      padding: 24,
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: '"Caveat", "Bradley Hand", system-ui, sans-serif',
      ...style,
    }}
  >
    {children}
  </div>
);

// Browser chrome bar (mini)
const BrowserBar = ({ url = 'simplify404.dev' }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      paddingBottom: 10,
      marginBottom: 12,
      borderBottom: '1.2px dashed #1a1a1a',
    }}
  >
    <div style={{ display: 'flex', gap: 4 }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', border: '1.2px solid #1a1a1a' }} />
      <span style={{ width: 8, height: 8, borderRadius: '50%', border: '1.2px solid #1a1a1a' }} />
      <span style={{ width: 8, height: 8, borderRadius: '50%', border: '1.2px solid #1a1a1a' }} />
    </div>
    <div
      style={{
        flex: 1,
        border: '1.2px solid #1a1a1a',
        borderRadius: 999,
        padding: '2px 10px',
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 10,
        opacity: 0.7,
      }}
    >
      {url}
    </div>
  </div>
);

window.WF = { Box, Line, ImgPH, TextLines, Tag, Arrow, Caption, Hand, Page, BrowserBar };
