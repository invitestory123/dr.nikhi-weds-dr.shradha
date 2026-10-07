# Customer Editing Guide — rajwada-royale

This template is a Maratha haveli luxury wedding invitation featuring an interactive ring-to-open door gate intro, ambient shehnai music, couple timeline story, ceremony schedule with dress code, venue location map, photo moments gallery, and RSVP contact cards.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/rajwada-royale/editable/wedding-data.js)

### Couple & Families
Edit `couple` and `families` in `editable/wedding-data.js`:
- `groom` & `bride`: Names (e.g. `"Rizwan"`, `"Ayesha"`)
- `monogram`: Monogram string (e.g. `"R & A"`)
- `hashtag`: Wedding hashtag (e.g. `"#RizwanFoundHisAyesha"`)
- `families.groomSide` & `families.brideSide`: Parents names and formal invitation copy lines

### Main Ceremony & Countdown
Edit `mainEvent` in `editable/wedding-data.js`:
- `title`: Title for event and calendar export
- `startsAt`: ISO timestamp (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Directly drives the live countdown timer.
- `dateLabel`: Formatted date (e.g. `"Sunday, 19 December 2026"`)
- `timeLabel`: Time string (e.g. `"11:30 AM onwards"`)

### Love Story Timeline
Edit `story` array in `editable/wedding-data.js`:
- Milestones (`year`, `title`, `text`, `image`)

### Events & Ceremonies
Edit `events` array in `editable/wedding-data.js`:
- Event details (`name`, `startsAt`, `venue`, `address`, `dressCode`, `dressCodeColor`, `note`)

### Venue & Directions
Edit `venue` in `editable/wedding-data.js`:
- `name`: Palace / Hall name (e.g. `"Park Aventel"`)
- `address`: Detailed street address
- `lat` & `lng`: Map coordinate markers
- `directionsNote`: Parking & valet information

### Gallery & Photo Moments
Edit `gallery` array in `editable/wedding-data.js`:
- Array of photo objects (`src`, `alt`)

### Family Contacts
Edit `contacts` array in `editable/wedding-data.js`:
- Contact person names and phone numbers for guest assistance

### Media & Assets
Replace files directly in `editable/assets/` or update `media`:
- Door panel graphic: `editable/assets/door-panel.png`
- Couple illustration: `editable/assets/couple.png`
- Ambient music: `editable/assets/ambient-shehnai.mp3`
- Story & gallery images: `story-1.jpg`, `story-2.jpg`, `gallery-1.jpg`, etc.

### Social Preview (Open Graph)
`index.html` carries the share metadata for the production link
`https://dr-nikhil-weds-dr-shradha.inviteby.top/`:

- `og:title`, `og:description`, `og:url`, `og:image`, `og:logo` (+ matching `twitter:*` tags)
- `og:image` → `og-image.jpg` (1200×630), `og:logo` → `og-logo.png` (512×512)

The two artwork sources live next to them so the card can be regenerated after a
copy change — edit the text, then re-render:

```
og-card.html   → og-image.jpg / og-image.png   (1200 × 630)
og-seal.html   → og-logo.png                   (512 × 512)
```

```
python -m http.server 8099
chrome --headless=new --window-size=1200,630 --screenshot=og-image.jpg http://127.0.0.1:8099/og-card.html
chrome --headless=new --window-size=512,512  --screenshot=og-logo.png  http://127.0.0.1:8099/og-seal.html
```

If the production domain changes, update `og:url`, `og:image`, `og:logo`,
`twitter:url`, `twitter:image` and `rel="canonical"` together.

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
5. Presentation tweaks that the build would drop (type size, weight, tracking) go in the
   inline `<style>` block in `index.html`, not in the hashed CSS bundle.
