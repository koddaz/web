import { Text, View } from 'react-native';
import { colors, fonts, radius } from '../theme';

type StatusTagProps = {
  label: string;
  tone?: 'accent2';
};

export function StatusTag({ label }: StatusTagProps) {
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: radius.pill,
        backgroundColor: colors.accent2[200],
      }}
    >
      <Text style={{ fontFamily: fonts.bodyBold, fontSize: 9, color: colors.accent2[800] }}>
        {label}
      </Text>
    </View>
  );
}
