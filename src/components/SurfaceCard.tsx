import { View, type StyleProp, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';
import { colors, shadowMd } from '../theme';

type SurfaceCardProps = {
  radius: 20 | 24 | 28;
  padding: number;
  elevated?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export function SurfaceCard({ radius, padding, elevated, style, children }: SurfaceCardProps) {
  return (
    <View
      style={[
        {
          backgroundColor: colors.surface,
          borderRadius: radius,
          padding,
        },
        elevated && shadowMd,
        style,
      ]}
    >
      {children}
    </View>
  );
}
