# marcos-muelas-aspano-portfolio

Portfolio personal — HTML5 + Tailwind CSS CLI. Ligero (~13KB CSS), sin frameworks JS.

- `index.html` → español (principal)
- `en.html` → English version
- Modo claro/oscuro (con memoria `localStorage`)
- 6 secciones: cómo trabajo / formación e idiomas / experiencia / proyectos / tecnologías con iconos / contacto
- Contacto anti-spam para reclutadores: sin email en el repo, LinkedIn/GitHub + CV + formulario (Formspree con ID, email solo en su servidor)

## Uso

```powershell
npm install
npm run build   # genera dist/output.css minificado
npm run dev     # watch mientras editas HTML
```

Abrir `index.html` en el navegador (o servir con `npx serve .`).

## Personalizar (TODOs en el código)

1. Busca `TU_USUARIO` / `YOUR_USER` en `index.html` / `en.html` y pon tu LinkedIn y GitHub. El email no va en el repo por seguridad.
2. Crea un formulario gratis en https://formspree.io y pega tu ID en el `action` (`TU_FORM_ID` / `YOUR_FORM_ID`). Incluye honeypot `_gotcha` antispam.
3. Sube tu CV real a `assets/cv.pdf` (ahora hay un `.placeholder`).
2. Sube tu CV real a `assets/cv.pdf` (ahora hay un `.placeholder`).
3. Iconos en `assets/icons/` — logos oficiales locales (Simple Icons CC0 v16.34.0, Devicon v2.17.0 v. MIT, ZKOSS y Mockito oficiales, OpenAI v13). Solo `rest.svg` sigue monograma propio (REST no tiene logo).
4. Rebuild: `npm run build` y commit de `dist/output.css` (necesario para GitHub Pages sin CI).

## Deploy GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. La web es 100% estática.
