import { Pressable, Text, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors, fonts } from '../theme';

export function BottomTabBar({ state, navigation, insets }: BottomTabBarProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: Math.max(insets.bottom, 12),
        paddingHorizontal: 6,
        backgroundColor: colors.bg,
        borderTopWidth: 2,
        borderTopColor: colors.neutral[300],
        borderStyle: 'dashed',
      }}
    >
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{ alignItems: 'center', gap: 4, paddingVertical: 4, paddingHorizontal: 10 }}
          >
            {focused ? (
              <View
                style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: colors.accent.base }}
              />
            ) : (
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  borderWidth: 2,
                  borderColor: colors.neutral[600],
                }}
              />
            )}
            <Text
              style={{
                fontFamily: focused ? fonts.bodyBold : fonts.bodySemiBold,
                fontSize: 10,
                color: focused ? colors.accent[700] : colors.neutral[600],
              }}
            >
              {route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
