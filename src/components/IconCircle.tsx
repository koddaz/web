import { View } from 'react-native';
import { icons, type IconName } from './icons';
import { colors } from '../theme';

type IconCircleProps = {
  size: number;
  background: string;
  icon: IconName;
  iconColor?: string;
};

export function IconCircle({ size, background, icon, iconColor = colors.white }: IconCircleProps) {
  const Icon = icons[icon];
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon size={size * 0.5} color={iconColor} />
    </View>
  );
}
