# Handoff: Albert Niklasson Portfolio (React Native + Web)

## Overview
A portfolio app for Albert Niklasson (Android & iOS developer). One codebase runs as an iOS/Android app and as a website on GitHub Pages (`koddaz.github.io/web`). It has four screens: **Home, Projects, About, Contact**. It replaces the current Vite/React site in `koddaz/web`, and all content comes from that repo (`src/components/Hero.tsx`, `Current.tsx`, `Previous.tsx`, `App.tsx`).

## About the Design Files
`Portfolio Wireframes.dc.html` is a **design reference made in HTML**, not production code. Rebuild it in **Expo (React Native) + react-native-web**, using React Navigation for routing. Open the file in a browser and pan around. The selected options are listed below; ignore the others.

**Selected options**
- Mobile (<768px): Home **1a**, Projects **1f**, About **1g**, Contact **1j**
- Desktop (≥768px): **2a**, a top-nav layout. Desktop screens: Home **2a**, Projects **3a**, About **3b**, Contact **3c**

## Fidelity
**Low-fidelity wireframes, but with final tokens.** Take structure, hierarchy and flow from the wireframes, and colors, type and radii from the **Organic** design system (tokens below). Grey dashed boxes are image placeholders; use the real screenshots from the repo there. Grey bars are body copy; use the copy below.

## Recommended stack
- `expo` (SDK 53+), `react-native-web`, `react-dom`
- `@react-navigation/native`, `@react-navigation/bottom-tabs` (mobile), and a custom header for web/wide screens
- `expo-font` with `@expo-google-fonts/caprasimo` and `@expo-google-fonts/figtree`
- `lucide-react-native` icons, stroke width 2.75
- Web export: `npx expo export -p web`, then publish `dist/` to GitHub Pages. Set `experiments.baseUrl: "/web"` in `app.json`. Use **hash routing** or a copy of `404.html`, because GitHub Pages has no SPA fallback. Keep the existing `.github/workflows/pages.yml` but point it at `dist/`.

## Responsive rule
`const isWide = useWindowDimensions().width >= 768`
- `!isWide`: a bottom tab bar with 4 tabs (Home, Projects, About, Contact). The active tab is a filled accent circle with its label in accent-700.
- `isWide`: no tab bar. A header row has the name on the left (Caprasimo 20) and four pill links on the right. The active link is accent-filled with white text; the others are text-color with a transparent background. Content uses 48px horizontal padding. Cap content width around 1100px and left-align it, not centered.
- Use the same screen components in both modes; only flex direction, column counts and paddings change.

## Screens

### Home (mobile 1a, desktop 2a)
- **Mobile:** a row with a 56px circular avatar and name (Caprasimo 20) over "Android & iOS developer" (Figtree 12, neutral-700). Then a 3-line bio, the kicker "CURRENT PROJECT" (Figtree 700, 10px, letter-spacing .08em, neutral-700), and a project card: surface fill, radius 24, padding 14, a 120px screenshot, title "emmiSense" (Caprasimo 17), an "IN PROGRESS" tag (accent-2-200 fill, accent-2-800 text, pill) and the meta line "Diabetes diary · React Native · 2024–2025". Two pill buttons are pinned to the bottom, each 44px tall: "See projects" (accent fill) goes to Projects, and "Contact" (2px text-color outline) goes to Contact.
- **Desktop:** a two-column grid (1fr / 1.2fr, 40px gap). The left column has a 96px avatar, the headline "Android & iOS developer" (Caprasimo 40), the bio and both buttons. The right column is the project card (radius 28, padding 18), split into a 150×300 phone screenshot and the text.

### Projects (mobile 1f, desktop 3a)
- A vertical timeline. The grid has a 22px marker column and the content column. The current project's marker is a filled accent dot (16px); finished projects get a hollow dot with a 3px text-color ring.
- Items: **emmiSense** (2024–2025 · NOW, expanded by default), **MyCrave** (2024), **Nuerd** (2024).
- Collapsed row: radius 20–24, 2px neutral-300 border, year, title (Caprasimo 15/18) and a "+" toggle. Desktop rows also show the platform and stack inline.
- Expanded row: surface fill, screenshots in a row (3 on mobile; 4 on desktop with a "+N" tile), highlights as bullets, and tech tags. On desktop the expanded row splits into two columns: screenshots (1.4fr) and text (1fr).
- MyCrave expanded also gets a "View on App Store" pill button linking to `https://apps.apple.com/se/app/mycrave/id6741516126`.
- Tapping a screenshot opens a full-screen viewer (a Modal with a horizontal pager).
- Only one row is open at a time. Animate the expand with `LayoutAnimation` or Reanimated, about 200ms ease-out.

### About (mobile 1g, desktop 3b)
- **Mobile:** one ScrollView. In order: the title "About me" (Caprasimo 28), the bio, the kicker "EXPERIENCE" with a card, the kicker "EDUCATION" with a card, then the kicker "SKILLS" with wrapped outline chips (2px text-color border, pill, Figtree 600 10–11px).
- **Desktop:** the same order. Experience and Education sit side by side in a two-column grid (max width 760). All 10 skills show as chips.

### Contact (mobile 1j, desktop 3c)
- Title "Get in touch", then the line "Open to mobile dev roles. Reach me any of these ways."
- **Mobile:** three pill rows on surface fill, each with a 40px colored circle icon, a label, the value and a chevron. Email uses an accent circle, GitHub a text-color circle, LinkedIn an accent-2 circle.
- **Desktop:** three cards in a row (radius 28, padding 18), each with a 44px icon, title (Caprasimo 18), the value and a small outline pill: "Copy" for email, "Open ↗" for the others.
- Actions: `Linking.openURL` (`mailto:`, https). Copy uses `expo-clipboard` and then shows a short "Copied" toast.

## Content (from the repo; site is Swedish, translated)
- **Name:** Albert Niklasson. **Role:** Android & iOS developer.
- **Bio:** "I'm a passionate developer who loves creating innovative solutions. With a focus on modern technologies I build user-friendly, scalable applications. My passion for coding started early and grew into a career where I combine creativity with technical problem-solving."
- **Experience:** Internship, Mobile app development · 2024–2025. "Developed emmiSense, a cross-platform mobile app for iOS and Android. Worked with Swift, SwiftUI, Kotlin and Jetpack Compose."
- **Education:** Android and iOS developer · Malmö Yrkeshögskola · 2025. "Specialisation in mobile app development for Android and iOS."
- **Skills:** Swift, SwiftUI, Kotlin, Jetpack Compose, React Native, TypeScript, Python, PostgreSQL, Figma, Git
- **emmiSense** (2024–2025, In progress). Description: "React Native diabetes management app to log meals, blood glucose, insulin and activity." Features: Diary, Statistics, Camera, Authentication. Stack: React Native, TypeScript, Supabase, PostgreSQL. Highlights: Supabase/PostgreSQL based · Deep linking for email verification · Custom hooks for database, camera, calendar and statistics · Automatic session handling with token refresh · Consistent spacing & color system.
- **MyCrave** (2024, Completed). Description: "iOS app for finding restaurants near you with an integrated map and location services. Published on the App Store. Group project: contributed to design, mainly implemented Google Maps and Location." Stack: Swift, SwiftUI, Maps API, Location API. Highlights: Published on App Store · Google Maps integration · Location-based services · iOS native.
- **Nuerd** (2024, Completed). Description: "A math game focused on learning the multiplication tables, built for Android with Jetpack Compose." Stack: Kotlin, Jetpack Compose, Firebase. Highlights: Android native · Educational focus · Interactive learning · Multiplication tables.
- **Contact:** albert.niklasson@gmail.com · https://github.com/koddaz · https://www.linkedin.com/in/albert-niklasson-6b4a37207

Store the content in one `src/data/content.ts` so it's easy to edit later, and to add Swedish later if wanted.

## State
- `expandedProjectId` (Projects), set to `'emmisense'` by default
- `viewer: { projectId, index } | null` for the screenshot modal
- `toast` for "Copied"
- There's no data fetching; everything is static.

## Design Tokens (Organic)
Colors:
- bg `#f5ead8`, surface `#ebddc5`, text `#201e1d`
- accent `#c67139` (pressed `#b2622d`, text-on-light `#8c491a`)
- accent-2 `#7a8a5e`, accent-2-200 `#e1eecc`, accent-2-800 `#3d472b`
- neutral-200 `#eee7db`, neutral-300 `#dcd3c4`, neutral-400 `#c0b6a5`, neutral-600 `#82796a`, neutral-700 `#645c50`

Text in the accent color at body size must use `#8c491a` to meet contrast.

Type: Caprasimo 400 for headings only (sizes 15/17/18/20/22/26/28/36/40/44). Figtree 400/600/700 for body (sizes 10–14; kickers are 700, 10px, uppercase, letter-spacing .08em).

Spacing: 4.4, 8.8, 13.2, 17.6, 26.4, 35.2. Screen padding is 18 on mobile and 48 on desktop.

Radius: 8 / 16 / 28. Cards use 20–28, buttons, tags and inputs use 999 (pill), avatars are circles.

Shadow: md `0 3px 10px rgba(46,43,37,.16)`, used only on elevated cards. The style relies on surface fills, not shadows.

Interaction: press makes the accent darken to `#b2622d`. On web hover, use a light tint from the 100–200 ramp step. Web focus is a 2px accent outline with a 2px offset.

## Assets
- Screenshots are in the repo: `src/img/emmisense/*.jpg` (10), `src/img/restfinder/IMG_000[2-5].PNG` (MyCrave, 4), `src/img/nuerd/*.jpg` (5). Photos follow the Organic "washed" style: rounded corners, slightly desaturated. Use a subtle approach on device screenshots (e.g. 0.92 opacity on a surface backing) so they stay legible.
- A profile photo is still needed; the avatar is a placeholder.
- Icons: Lucide (mail, github, linkedin, chevron-right, plus, external-link, copy).

## Files
- `Portfolio Wireframes.dc.html`: all wireframe turns. The selected options are listed above.
