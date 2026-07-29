# Portfolio

Personal portfolio site for Jay Hilwig.

## Structure

- `index.html` - main site markup and content
- `styles.css` - site styles if split from inline styles
- `public/images/` - logos, SVGs, and other image assets

## Local Preview

This is a static site, so it can be opened directly in a browser by loading `index.html`.

For a more reliable local preview, serve the folder with a simple static server.

### Python

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This site is intended to be self-hosted on IONOS.

Upload the contents of this folder to your web root on IONOS, preserving the folder structure:

- `index.html`
- `styles.css`
- `public/images/`

If your hosting setup uses a `public_html` directory, place the files there.

## Notes

- The portfolio currently uses static HTML and assets only.
- Case study placeholder graphics can be replaced with final SVG exports in `public/images/`.
- Custom fonts referenced by `index.html` should also be present on the host if used.
