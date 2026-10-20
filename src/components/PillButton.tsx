import { Pressable, Text, type StyleProp, type ViewStyle } from 'react-native';
import { useState } from 'react';
import { colors, fonts, radius } from '../theme';

type PillButtonVariant = 'solid' | 'outline';

type PillButtonProps = {
  label: string;
  variant: PillButtonVariant;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function PillButton({ label, variant, onPress, disabled, style }: PillButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const solidBg = pressed ? colors.accent[700] : hovered ? colors.accent[600] : colors.accent.base;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        {
          borderRadius: radius.pill,
          paddingVertical: 12,
          paddingHorizontal: 22,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled ? 0.45 : 1,
          backgroundColor: variant === 'solid' ? solidBg : 'transparent',
          borderWidth: variant === 'outline' ? 2 : 0,
          borderColor: colors.text,
        },
        style,
      ]}
    >
      <Text
        style={{
          fontFamily: fonts.bodySemiBold,
          fontSize: 14,
          color: variant === 'solid' ? colors.white : colors.text,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
