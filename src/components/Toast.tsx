import { Platform, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, fonts, radius } from '../theme';

type ToastProps = {
  message: string | null;
};

// react-native-web supports `position: 'fixed'`, but the RN ViewStyle types
// don't include it, so the container style is cast through StyleProp.
const containerStyle = {
  position: Platform.OS === 'web' ? 'fixed' : 'absolute',
  bottom: 24,
  left: 0,
  right: 0,
  alignItems: 'center',
} as unknown as StyleProp<ViewStyle>;

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <View style={containerStyle}>
      <View
        style={{
          backgroundColor: colors.text,
          borderRadius: radius.pill,
          paddingVertical: 10,
          paddingHorizontal: 18,
        }}
      >
        <Text style={{ fontFamily: fonts.bodySemiBold, fontSize: 12, color: colors.bg }}>
          {message}
        </Text>
      </View>
    </View>
  );
}
