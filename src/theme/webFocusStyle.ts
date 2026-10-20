import { Platform } from 'react-native';
import { colors } from './colors';

const STYLE_ID = 'focus-visible-style';

// Design spec: web focus is a 2px accent outline with a 2px offset. Applied
// globally via an injected stylesheet rather than per-component, since every
// Pressable/link in the app should get the same treatment.
export function installWebFocusStyle() {
  if (Platform.OS !== 'web') return;
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    *:focus-visible {
      outline: 2px solid ${colors.accent.base};
      outline-offset: 2px;
    }
    *:focus:not(:focus-visible) {
      outline: none;
    }
  `;
  document.head.appendChild(style);
}
