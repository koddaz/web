import { Platform } from 'react-native';

// Used only on elevated cards — most surfaces rely on flat `colors.surface`
// fills rather than shadows.
export const shadowMd = Platform.select({
  web: { boxShadow: '0 3px 10px rgba(46,43,37,0.16)' },
  default: {
    shadowColor: '#2e2b25',
    shadowOpacity: 0.16,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
}) as Record<string, unknown>;
