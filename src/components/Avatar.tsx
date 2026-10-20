import {
  Image,
  View,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { colors } from '../theme';

type AvatarProps = {
  size: number;
  source?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
};

export function Avatar({ size, source, style }: AvatarProps) {
  const circleStyle = { width: size, height: size, borderRadius: size / 2 };

  if (!source) {
    return (
      <View
        style={[
          circleStyle,
          {
            backgroundColor: colors.neutral[200],
            borderWidth: 2,
            borderColor: colors.neutral[400],
            borderStyle: 'dashed',
          },
          style,
        ]}
      />
    );
  }

  return (
    <Image
      source={source}
      style={[circleStyle, style] as StyleProp<ImageStyle>}
      resizeMode="cover"
      accessibilityIgnoresInvertColors
    />
  );
}
