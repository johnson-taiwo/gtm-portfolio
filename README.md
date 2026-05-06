# Johnson Taiwo — GTM Portfolio

Personal portfolio for Johnson Taiwo, GTM Engineer.
Royal GTM design system. Static site. No build step.

## Live preview locally

```bash
cd gtm-portfolio
python -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.

## Replace before deploy

Six places need real content swapped in for the v1 placeholders:

1. **Project thumbnails** — `assets/project-{sdr-crm,yc-outbound,cro-agency}-thumb.svg`. Drop in real `.jpg` files (or keep the SVG names — update the `<img src>` in `index.html` either way).
2. **Case study screenshots** — `assets/screenshots/{slug}-{1,2,3}.svg`. Same swap pattern.
3. **About portrait** — `assets/about_portrait.jpg` currently reuses your headshot. Drop a different photo in if you have one.
4. **Loom video URLs** — each case study has a `<iframe src="">` inside `.cs-video-frame`. Paste your Loom or YouTube embed URL into the `src` attribute.
5. **GitHub link in footer** — currently points to `github.com/johnson-taiwo`. Update to your actual handle if different.
6. **Open Graph image** — pages use `assets/headshot.jpg` and the SVG thumbnails by default. For LinkedIn previews, swap to a 1200×630 social card if you have one.

## Deploy to GitHub Pages

```bash
cd gtm-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/johnson-taiwo/gtm-portfolio.git
git push -u origin main
```

Then in the GitHub repo: **Settings → Pages → Source: `main` / root**.
Site goes live at `https://johnson-taiwo.github.io/gtm-portfolio` within ~30 seconds.

## Adding a new project

Per the standing rules in the parent `CLAUDE.md`:

1. Create `case-study-[slug].html` — copy any existing case study and edit.
2. Add a new `.project-card` to `#work` in `index.html`.
3. Drop a thumbnail at `assets/project-[slug]-thumb.jpg` (or `.svg`).
4. Drop 3 screenshots at `assets/screenshots/[slug]-{1,2,3}.jpg`.
5. Update the `Next Case Study →` chain so it loops back to the first.
6. Test at 390px width before committing.

## File map

```
index.html                     ← main page
style.css                      ← global Royal GTM styles
case-study.css                 ← shared case study article styles
script.js                      ← scroll reveal + mobile menu
case-study-sdr-crm.html
case-study-yc-outbound.html
case-study-cro-agency-gtm.html
assets/
  headshot.jpg
  about_portrait.jpg
  project-*-thumb.svg          ← v1 placeholders
  screenshots/
    {slug}-{1,2,3}.svg         ← v1 placeholders
```

## Standing rules (don't break)

- 24px gutters always — text never touches screen edges.
- Mobile menu overlay: `display: none` globally, only shows via JS `.active` class.
- All font sizes use `clamp()`. No fixed px on headings.
- LinkedIn URL on: nav, hero CTA, about CTA, every case study CTA, footer.
- Sales background angle preserved in hero intro and about.
- Test mobile at 390px before every commit.
