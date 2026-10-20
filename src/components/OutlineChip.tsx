import { Text, View } from 'react-native';
import { colors, fonts, radius } from '../theme';

type OutlineChipProps = {
  label: string;
  variant?: 'outline' | 'accent2Fill';
};

export function OutlineChip({ label, variant = 'outline' }: OutlineChipProps) {
  const isAccent2 = variant === 'accent2Fill';
  return (
    <View
      style={{
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: radius.pill,
        backgroundColor: isAccent2 ? colors.accent2[200] : 'transparent',
        borderWidth: isAccent2 ? 0 : 2,
        borderColor: colors.text,
      }}
    >
      <Text
        style={{
          fontFamily: fonts.bodySemiBold,
          fontSize: 11,
          color: isAccent2 ? colors.accent2[800] : colors.text,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
