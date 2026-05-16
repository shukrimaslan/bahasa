# 🇲🇾 BMvocab — Learn Bahasa Malaysia

**Free, fun Bahasa Malaysia vocabulary app for primary and secondary school students in Malaysia.**

> Flashcards · Quizzes · Speed rounds · Match & pair · Fill-the-sentence · Spaced repetition  
> Works offline · Google sign-in · English / BM UI · 496 words

**[▶ Launch the app](https://shukrimaslan.github.io/bahasa/)**

---

## What is BMvocab?

BMvocab is a mobile-first progressive web app (PWA) that helps English-speaking students in Malaysia build Bahasa Malaysia vocabulary through game-based learning. It is free, requires no installation, and works offline once loaded.

It was built specifically for:
- **Primary school students (Year 1–6)** — everyday words, UPSR exam vocabulary, peribahasa
- **Secondary school students (Form 1–5)** — advanced nouns, verbs, adjectives, essay phrases, science, history, economics, culture

---

## Features

### 🎮 Six game modes

| Mode | Description |
|---|---|
| 🃏 **Flashcards** | Flip cards between BM and English. Rate each word (Got it / Still learning). Automatic 5-question recap quiz every 10 cards. |
| ❓ **Quiz** | 4-choice multiple choice. Normal mode shows emoji hints; **Hard mode** removes all hints — text only. |
| ⏱️ **Speed round** | 60-second timer. Score multiplier for consecutive correct answers (up to ×5). |
| 🔗 **Match & pair** | Tap a BM word, then tap its English pair. Tracked by time and mistakes. |
| ✏️ **Fill the sentence** | A real BM sentence with one word blanked out. Choose the missing word from 4 options. Uses actual example sentences from the word bank. |
| 📅 **SRS review** | Daily queue of words due for spaced repetition review. Surfaces weak words first. |

### 🧠 Spaced repetition (SRS)
Every word is scheduled using a simplified SM-2 algorithm. Correct answers push the next review further out (1 → 3 → 7 → 14 → 30 → 90 days). Wrong answers reset the interval. The home screen shows a "Due today" queue when words are waiting.

### 🏅 Badges & achievements
15 unlockable badges including:
- 🌱 First word learned
- 🔥🔥 7-day streak
- 💯 100 words seen
- 🥇 50 words mastered
- 🎯 Quiz ace (100% score)
- 👑 30-day streak

### 🔊 Pronunciation
Every flashcard answer has a 🔊 **Hear it** button that speaks the BM word using the Web Speech API (`ms-MY` voice). Toggle on/off in Settings.

### 📸 Shareable progress card
Generate and download a PNG progress card showing your XP, streak, words mastered, and earned badges. Great for sharing with parents or classmates.

### 🌐 Bilingual UI
The entire interface toggles between English and Bahasa Malaysia — every label, button, game prompt, and score message.

### ☁️ Google sign-in & cloud sync
Sign in with Google to sync progress, streak, and settings across all devices via Firebase Firestore. Guest mode available for instant access — progress saves to the device only.

### 📲 Installable PWA
Works offline once loaded. On Android Chrome and iOS Safari, tap "Add to Home Screen" to install as a native-feeling app.

---

## Word bank

| Category | Count | Level |
|---|---|---|
| Animals, Food, Family, Colours, School, Home, Nature, Actions, Adjectives, Time & Numbers, Body, Places, Questions, Clothing, Connectors, General | 200 words | Primary |
| Nouns, Verbs, Adjectives, Phrases, Science, History, Economics, Technology, Health, Culture, Values, Leadership, Environment, Literature, Mathematics, Civics | 200 words | Secondary |
| Peribahasa (Malay proverbs) | 30 proverbs | Secondary |
| UPSR exam vocabulary | 30 words | Primary |
| **Total** | **496 words** | |

Each word includes:
- BM word / phrase
- English meaning
- Category and difficulty (1–3)
- Emoji illustration
- Base word / root word (where applicable) — e.g. *membangun* → base: *bangun* (rise/build)
- Example sentence in BM and English

---

## Adding words

All vocabulary lives in **`bm-words.js`** — a standalone JavaScript file separate from the app. The app HTML never needs to change to add content.

To add new words, append objects to the `WORDS` array in `bm-words.js`:

```js
{
  id:         "pri-201",          // unique — use pri- or sec- prefix
  bm:         "kupu-kupu",        // BM word or phrase
  en:         "butterfly",        // English meaning
  category:   "haiwan",          // must match a category id in CATEGORIES
  level:      "primary",          // "primary" | "secondary"
  difficulty: 1,                  // 1 easy · 2 medium · 3 hard
  emoji:      "🦋",
  baseWord:   "kupu",             // optional root word
  baseWordEn: "flutter",          // optional root word meaning
  exBM:       "Kupu-kupu terbang di taman.",
  exEN:       "Butterflies fly in the garden.",
}
```

To add a new **category**, append to `CATEGORIES.primary` or `CATEGORIES.secondary`:

```js
CATEGORIES.primary.push(
  { id: "sukan", label: "Sports", labelBM: "Sukan", icon: "⚽" }
);
```

The new category chip appears in the UI automatically — no HTML changes needed.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Plain HTML + CSS + vanilla JavaScript (no framework, no build step) |
| Fonts | Google Fonts — Nunito, Baloo 2 |
| Auth | Firebase Authentication (Google sign-in) |
| Database | Firebase Firestore (progress, streak, settings) |
| Offline | Service Worker + Cache API (PWA) |
| Speech | Web Speech API (`ms-MY` voice) |
| Progress card | HTML Canvas API |
| Hosting | GitHub Pages |

No npm. No bundler. No framework. Two files you edit: `bm-vocab-app.html` and `bm-words.js`.

---

## File structure

```
bahasa/
├── bm-vocab-app.html   ← full app (HTML + CSS + JS in one file)
├── bm-words.js         ← all 496 words + categories (edit this to add content)
├── sw.js               ← service worker (offline caching)
├── manifest.json       ← PWA manifest
├── icon-512.png        ← app icon (512×512, for manifest)
├── icon-192.png        ← app icon (192×192, for manifest)
└── icon.svg            ← source icon (vector)
```

---

## Phases & roadmap

### ✅ Phase 1 — Core app
Flashcards, 4-choice quiz, hard mode, 200 primary + 200 secondary words, EN/BM UI toggle, level switch, base words on flashcard backs, category browser, progress tracker.

### ✅ Phase 2 — Firebase & sync
Google sign-in, Firestore progress sync, real daily streak (timestamp-based), guest mode, debounced cloud saves, localStorage fallback.

### ✅ Phase 3 — Game modes & retention
Speed round, match & pair, fill-the-sentence, spaced repetition (SM-2), pronunciation audio, badges (15), shareable progress card, PWA + offline, peribahasa (30), UPSR vocab (30).

### 🔜 Phase 4 — Scale & extend
- [ ] Class leaderboard (opt-in, weekly XP ranking)
- [ ] Teacher dashboard (class roster, assign word lists, progress reports)
- [ ] Push notification daily reminders
- [ ] BM chat buddy (Claude API — student types English, replies in BM)
- [ ] PT3 / SPM exam word sets
- [ ] AI-generated memory hooks for hard words

---

## Firebase setup

The app uses Firebase for auth and Firestore. If you fork this repo and want your own backend:

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication → Google** sign-in provider
3. Create a **Firestore** database (start in test mode)
4. Replace the `firebaseConfig` object in `bm-vocab-app.html` with your own
5. Set Firestore security rules:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }
    match /progress/{uid} {
      allow read, write: if request.auth.uid == uid;
    }
  }
}
```

6. Add your GitHub Pages domain to Firebase Auth → **Authorized domains**

---

## Local development

No build step needed. Just open the file:

```bash
git clone https://github.com/shukrimaslan/bahasa.git
cd bahasa
# open bm-vocab-app.html in your browser
# OR serve locally to test Firebase auth:
npx serve .
# then open http://localhost:3000/bm-vocab-app.html
```

> Firebase Google sign-in requires a proper domain (not `file://`). Use `npx serve` or VS Code Live Server for local testing.

---

## Contributing

Contributions welcome, especially:
- **New words** — add to `bm-words.js` following the schema above
- **Peribahasa** — more proverbs with English equivalents and usage examples
- **Bug reports** — open an issue with browser/device info
- **Translations** — the i18n object in the HTML supports adding new languages

---

## Licence

MIT — free to use, fork, and adapt for educational purposes.

---

## Author

Built by **[Shukri Maslan](https://github.com/shukrimaslan)** as an open-source learning tool for Malaysian students.

If this helped your students, give it a ⭐ on GitHub!

---

*BMvocab is not affiliated with the Malaysian Ministry of Education or any official examination body. Word selections are based on common primary and secondary school curricula.*
