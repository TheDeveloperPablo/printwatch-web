# Subir la web online — 0€ — ~20 minutos

## PASO 1 — Supabase (login real) ~5 min

1. Ve a https://supabase.com → "Start your project" (gratis)
2. Crea un proyecto (elige región Europe)
3. Ve a Settings → API
4. Copia "Project URL" y "anon public key"
5. Abre `princity-clone.html` y pégalos aquí:

```js
const SUPABASE_URL = 'https://XXXX.supabase.co';
const SUPABASE_KEY = 'eyJ...';
```

6. En Supabase → Authentication → Providers:
   - Email/Password: activado ✓
   - Google: activado + pega Client ID y Secret de Google Cloud (opcional)
   - GitHub: activado + pega Client ID y Secret de GitHub (opcional)

---

## PASO 2 — Netlify (hosting) ~5 min

1. Ve a https://netlify.com → "Sign up" (gratis con GitHub o email)
2. Una vez dentro: "Add new site" → "Deploy manually"
3. Arrastra TODA la carpeta del proyecto a la zona de drop
4. ¡Listo! Netlify te da una URL tipo: https://random-name-123.netlify.app

---

## PASO 3 — URL personalizada (opcional, gratis)

En Netlify → Site settings → General → Site name
Cambia el nombre aleatorio por uno tuyo:
→ https://printwatch.netlify.app

---

## Resultado final

| Qué | Dónde | Coste |
|-----|-------|-------|
| Hosting | Netlify | 0€ |
| HTTPS | Automático (Let's Encrypt) | 0€ |
| Cabeceras de seguridad | netlify.toml incluido | 0€ |
| Login real | Supabase | 0€ |
| Dominio | tunombre.netlify.app | 0€ |

## Checklist de seguridad (todo automático)

- [x] HTTPS forzado
- [x] X-Frame-Options: DENY (evita clickjacking)
- [x] X-Content-Type-Options: nosniff
- [x] Referrer-Policy seguro
- [x] Permissions-Policy (sin acceso a cámara/micro)
- [x] HSTS (fuerza HTTPS en navegadores)
- [x] Content-Security-Policy
- [x] Contraseñas hasheadas (bcrypt, lo hace Supabase)
- [x] Tokens JWT seguros (lo hace Supabase)
- [x] SQL injection imposible (Supabase usa queries parametrizadas)
