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

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
