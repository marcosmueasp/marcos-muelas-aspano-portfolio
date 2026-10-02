# marcos-muelas-aspano-portfolio

Portfolio personal — HTML5 + Tailwind CSS CLI. Ligero (~13KB CSS), sin frameworks JS.

- `index.html` → español (principal)
- `en.html` → English version
- Retro monitor CRT + modo claro/oscuro (con memoria `localStorage`)
- 5 secciones: cómo trabajo / experiencia / proyectos / tecnologías con iconos / contacto
- Contacto pensado para reclutadores: `mailto:` + copiar email + LinkedIn/GitHub + CV + formulario opcional (FormSubmit)

## Uso

```powershell
npm install
npm run build   # genera dist/output.css minificado
npm run dev     # watch mientras editas HTML
```

Abrir `index.html` en el navegador (o servir con `npx serve .`).

## Personalizar (TODOs en el código)

1. Busca `TU_EMAIL`, `TU_USUARIO` en `index.html` / `en.html` y pon tu email, LinkedIn y GitHub.
2. Sube tu CV real a `assets/cv.pdf` (ahora hay un `.placeholder`).
3. Sustituye experiencia y proyectos de ejemplo por los tuyos.
4. Iconos en `assets/icons/*.svg` — son placeholders monograma, cámbialos por SVGs oficiales si quieres.
5. Rebuild: `npm run build` y commit de `dist/output.css` (necesario para GitHub Pages sin CI).

## Deploy GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. La web es 100% estática.
