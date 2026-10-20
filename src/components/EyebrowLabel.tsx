import { Text } from 'react-native';
import { colors, fonts, kickerLetterSpacingRatio } from '../theme';

type EyebrowLabelProps = {
  label: string;
  color?: string;
};

const FONT_SIZE = 10;

export function EyebrowLabel({ label, color = colors.neutral[700] }: EyebrowLabelProps) {
  return (
    <Text
      style={{
        fontFamily: fonts.bodyBold,
        fontSize: FONT_SIZE,
        letterSpacing: FONT_SIZE * kickerLetterSpacingRatio,
        textTransform: 'uppercase',
        color,
      }}
    >
      {label}
    </Text>
  );
}
