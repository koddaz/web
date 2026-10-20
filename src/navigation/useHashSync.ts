import { useEffect } from 'react';
import { Platform } from 'react-native';
import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { ROUTE_ORDER, type RootTabParamList, type RouteName } from './types';

// GitHub Pages has no SPA fallback, but the selected wireframes already
// render the browser address bar as `#/projects`, `#/about`, etc. Under a
// hash URL the server only ever sees the path before `#`, so index.html is
// the only page ever requested and no 404.html trick is needed. This hook
// owns that sync manually since React Navigation's web `linking` option
// writes clean (non-hash) paths by default.
const ROUTE_TO_HASH: Record<RouteName, string> = {
  Home: '',
  Projects: 'projects',
  About: 'about',
  Contact: 'contact',
};

const HASH_TO_ROUTE: Record<string, RouteName> = {
  '': 'Home',
  projects: 'Projects',
  about: 'About',
  contact: 'Contact',
};

function routeFromHash(): RouteName {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return HASH_TO_ROUTE[hash] ?? 'Home';
}

// NavigationContainer dispatches its first 'state' event synchronously while
// mounting, before any listener registered from a useEffect can attach — so
// that first event can't be used to correct the route from the initial URL
// hash. `onReady` (passed to NavigationContainer) fires once, right after
// that first dispatch, which is the first safe point to call `navigate`.
export function applyInitialHash(navRef: NavigationContainerRefWithCurrent<RootTabParamList>) {
  if (Platform.OS !== 'web') return;
  const target = routeFromHash();
  const current = navRef.current?.getCurrentRoute()?.name as RouteName | undefined;
  if (current && current !== target) {
    navRef.navigate(target);
  }
}

export function useHashSync(navRef: NavigationContainerRefWithCurrent<RootTabParamList>) {
  useEffect(() => {
    if (Platform.OS !== 'web') return;

    const unsubscribeState = navRef.addListener('state', () => {
      const name = navRef.current?.getCurrentRoute()?.name as RouteName | undefined;
      if (!name || !ROUTE_ORDER.includes(name)) return;

      const target = `#/${ROUTE_TO_HASH[name]}`.replace(/\/$/, '') || '#/';
      if (window.location.hash !== target) {
        window.history.pushState(null, '', target);
      }
    });

    const onHashChange = () => {
      const route = routeFromHash();
      if (navRef.current?.getCurrentRoute()?.name !== route) {
        navRef.navigate(route);
      }
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      unsubscribeState();
    };
  }, [navRef]);
}
