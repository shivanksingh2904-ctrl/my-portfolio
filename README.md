# Shivank Singh — Premium Developer Portfolio

A responsive, static portfolio website with a Midnight Obsidian + Electric Mint + Royal Violet visual system. It uses HTML, CSS, and vanilla JavaScript; no build step or package installation is required.

## Quick start

1. Extract the ZIP.
2. Replace the profile placeholder with your real photo:
   - Save your real image as `assets/profile.png`.
   - The page will automatically use it. Until then, it displays `assets/profile-placeholder.svg`.
3. Open `data/site-config.json` and update your email, LinkedIn URL, college/institution, education dates, and GOG dates.
4. Open `index.html` in your browser, or run a local static server:

   ```bash
   # From this folder, with Python installed
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

## Personal details to complete before publishing

- `data/site-config.json`
  - `email`
  - `linkedin`
  - `education_institution`
  - `education_start_year`
  - `education_expected_graduation`
  - `gog_start_date`
  - `gog_end_date`
- `index.html`
  - The education card currently uses generic wording; replace it with the exact institution and degree details when confirmed.
  - GOG experience dates are visibly marked for confirmation. Add only responsibilities, projects, tools, and outcomes that you can verify.
- Add the actual profile photo at `assets/profile.png`. The source prompt mentioned a Windows path, but that file was not included with the prompt attachment, so this project uses an explicit placeholder instead of pretending to include the real photo.

## Deploy free

### GitHub Pages
1. Create a repository on GitHub and upload the contents of this folder (the files inside the folder, not the ZIP itself).
2. Open repository **Settings → Pages**.
3. Under build and deployment, choose **Deploy from a branch**.
4. Select your main branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and open the URL shown in the Pages settings.

### Netlify
1. Sign in to Netlify and choose **Add new site → Deploy manually**.
2. Drag the extracted project folder into the deployment drop zone, or connect the GitHub repository.
3. No build command is required. Publish directory is the project root.

## Project structure

```text
shivank-premium-portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── favicon.svg
│   └── profile-placeholder.svg
└── data/
    ├── site-config.json
    ├── projects.json
    └── experience.json
```

## Design and accessibility

- Responsive desktop, tablet, and mobile layouts.
- Keyboard-visible focus states.
- Mobile navigation with accessible expanded state.
- Reduced-motion preference support.
- Section reveal animations use `IntersectionObserver` with a no-animation fallback.
- External links use `rel="noopener noreferrer"`.
- No fabricated skill scores, GitHub statistics, internship metrics, or endorsements.

## Testing checklist

- [ ] Replace the placeholder with your real photo as `assets/profile.png`.
- [ ] Update email and LinkedIn URL in `data/site-config.json`.
- [ ] Verify institution and education dates.
- [ ] Confirm GOG internship dates, tasks, projects, and tools.
- [ ] Test all project repository and live-demo links.
- [ ] Check the mobile menu and all navigation anchors.
- [ ] Check contact links after adding real contact details.
- [ ] Test on mobile and desktop widths.
- [ ] Check browser console for errors.
- [ ] Deploy and verify the published URL.

The files were generated as a static implementation. A live browser-based cross-device test and deployment were not performed in this environment.
