import {
  Image,
  View,
  type DimensionValue,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { colors } from '../theme';

type WashedImageProps = {
  source?: ImageSourcePropType;
  width: DimensionValue;
  height: DimensionValue;
  radius: number;
  style?: StyleProp<ViewStyle>;
};

// The CSS reference used `filter: saturate(.6) contrast(.85) brightness(1.1)
// opacity(.94)`, which has no RN equivalent. Approximated here with a light
// surface-color tint over the photo.
const TINT_OPACITY = 0.08;

export function WashedImage({ source, width, height, radius, style }: WashedImageProps) {
  const containerStyle: StyleProp<ViewStyle> = [
    { width, height, borderRadius: radius, overflow: 'hidden' },
    style,
  ];

  if (!source) {
    return (
      <View
        style={[
          containerStyle,
          {
            backgroundColor: colors.neutral[200],
            borderWidth: 2,
            borderColor: colors.neutral[400],
            borderStyle: 'dashed',
          },
        ]}
      />
    );
  }

  return (
    <View style={containerStyle}>
      <Image source={source} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: colors.surface,
          opacity: TINT_OPACITY,
        }}
      />
    </View>
  );
}
