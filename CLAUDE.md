# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A portfolio app for Albert Niklasson (Android & iOS developer), built with **Expo (React Native) + react-native-web**, shipping as an iOS/Android app and as a static site on GitHub Pages (`koddaz.github.io/web`). Four screens — Home, Projects, About, Contact — each a single component that branches on `isWide = useWindowDimensions().width >= 768` rather than separate mobile/desktop screens.

- `docs/HANDOFF.md` — the original design handoff spec (screens, content, design tokens, responsive rules). Still the reference for *why* things look the way they do; cross-checked against the actual CSS source during implementation (see "Corrections" below) since its prose summarizes but doesn't always match the source exactly.
- `docs/wireframes/` — the low-fidelity design reference HTML (`Portfolio Wireframes.dc.html`) plus the generated viewer runtime it depends on (`support.js`, `_ds/organic-*/`). Not production code, not part of the app's dependency graph — never edit or import from these.

## Commands

```bash
npx expo start --web        # dev server (web)
npx expo start              # dev server (native, via Expo Go)
npx expo export -p web      # production web build -> dist/
npx tsc --noEmit            # typecheck
npx expo lint               # lint
```

**`npx tsc --noEmit` can crash with `RangeError: Maximum call stack size exceeded`** under Node's default stack size — this is a Node/TS stack-depth limit hit by this codebase's generics (react-navigation's param-list types, the lucide icon wrapper), not a real type error. If it crashes, rerun with a larger stack:
```bash
node --stack-size=8000 ./node_modules/typescript/bin/tsc --noEmit
```

## Architecture

- **Navigation** (`src/navigation/`): a single `@react-navigation/bottom-tabs` navigator is always mounted (`RootShell.tsx`); only the chrome around it swaps on `isWide` — `BottomTabBar.tsx` (mobile, no icons, filled/hollow circle markers) vs `DesktopHeader.tsx` (wide, pill nav links, no tab bar).
- **Web routing is hash-based** (`#/projects`, `#/about`, `#/contact`), confirmed by the wireframes' own browser-chrome mockups. `useHashSync.ts` owns this manually via `window.location.hash` + `hashchange` — there is no React Navigation `linking` prop and no `404.html`, since under a hash URL GitHub Pages' server only ever sees the path before `#`. **The initial-hash correction (landing on the right screen when a URL like `#/projects` is loaded fresh) must run from `NavigationContainer`'s `onReady` prop** (`applyInitialHash`, wired in `RootShell.tsx`), not from a `navRef.addListener('state', ...)` callback registered in a `useEffect` — the container dispatches its first `state` event synchronously while mounting, before any effect-registered listener can attach, so that first event is otherwise silently missed and every fresh load lands on Home regardless of the URL hash. Found by testing actual deep-link loads in a browser, not by typecheck/lint.
- **Theme** (`src/theme/`): colors (full 9-step ramps for neutral/accent/accent2), spacing, radius, shadow, typography, split into separate files and re-exported from `index.ts`. Card radius is **per-component** (20/24/28, passed as a prop to `SurfaceCard`), not a single global token. Accent-colored body text must use `colors.accent[700]` (`#8c491a`), never `colors.accent.base` — contrast requirement from the handoff doc. Press/active state is `accent[700]`; web-only hover is `accent[600]`.
- **Content** (`src/data/content.ts`): all copy/project/contact data lives here, not inlined in components, so Swedish localization can be added later without touching screen code.
- **Components** (`src/components/`): `SurfaceCard`, `PillButton`, `OutlineChip`, `StatusTag`, `Avatar`, `IconCircle`, `WashedImage`, `ScreenshotRow`, `Lightbox`, `Toast`, `EyebrowLabel`, and `icons.tsx`.
- **Icons**: `lucide-react-native` (v1.60+) **no longer ships GitHub/LinkedIn brand glyphs** (brand icons were dropped from lucide). `icons.tsx` supplies those two as small inline `react-native-svg` paths with the same `{size, color}` prop shape as the lucide icons, so callers don't need to special-case them.
- **Images**: real project screenshots live at `src/img/{emmisense,restfinder,nuerd}/` and the profile photo at `src/img/profile/`, all wired into `content.ts` via `require(...)`, typed as `ImageSourcePropType` (not a URI string) across `Project.images`/`profile.avatarSource`, `Avatar`, `WashedImage`, `ScreenshotRow`, and `Lightbox`. **Asset filenames must use lowercase extensions** — Metro's `isAssetFile` check does a case-sensitive match against its (lowercase) `assetExts` list, so an uppercase `.PNG` (Apple's screenshot-naming convention) fails to resolve as an asset and crashes the bundler ("Unable to resolve module"); the MyCrave screenshots were renamed from `IMG_0002.PNG` etc. to `.png` for this reason. `Avatar`/`WashedImage`/`ScreenshotRow` still render a dashed placeholder box whenever a `source` prop is falsy, so any future image can be dropped in the same way with no other code changes. The "washed" photo treatment (an unsupported-in-RN CSS filter in the original spec) is approximated with a light surface-color tint overlay.
- **Projects accordion**: plain RN `Animated` (height interpolated via `onLayout` measurement + `Animated.timing`), not `LayoutAnimation` (unsupported on react-native-web) and not Reanimated (unneeded for one accordion). Only one project expanded at a time (`expandedId` state in `ProjectsScreen`).
- **Web focus ring**: injected globally as a `<style>` tag (`src/theme/webFocusStyle.ts`, installed once from `App.tsx`) rather than per-component — `*:focus-visible { outline: 2px solid accent; outline-offset: 2px }`, matching the handoff doc's interaction spec.
- **Deploy**: `experiments.baseUrl: "/web"` in `app.json`; `.github/workflows/pages.yml` runs `npx expo export -p web` and publishes `dist/` to GitHub Pages on push to `master` (this repo's default branch — not `main`; double-check before copying this workflow elsewhere), or manually via `workflow_dispatch`.

## Verified against source, not just the handoff doc's prose

During implementation, the CSS design-system bundle (`docs/wireframes/_ds/organic-*/styles.css`) and the wireframe HTML were read directly rather than trusting `docs/HANDOFF.md`'s summaries, which caught a few corrections now baked into the code:
- Divider color is `rgba(32,30,29,0.16)` (16% of text color), not `rgba(46,43,37,0.16)` (that's actually the shadow-md color) — the handoff doc doesn't mention divider at all.
- The handoff doc's "pressed = accent-600" conflates hover and active; the CSS has hover = accent-600, active/press = accent-700.
- `AGENTS.md` (Expo's generated scaffold file) defaults to recommending **Expo Router** — this project deliberately does not use it; see the note in `AGENTS.md` itself before changing navigation.
