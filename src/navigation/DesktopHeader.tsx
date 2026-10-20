import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { colors, fonts, radius } from '../theme';
import { ROUTE_ORDER, ROUTE_LABELS, type RootTabParamList, type RouteName } from './types';
import { profile } from '../data/content';

type DesktopHeaderProps = {
  navRef: NavigationContainerRefWithCurrent<RootTabParamList>;
};

export function DesktopHeader({ navRef }: DesktopHeaderProps) {
  const [activeRoute, setActiveRoute] = useState<RouteName | undefined>(undefined);

  useEffect(() => {
    const readActiveRoute = () =>
      setActiveRoute(navRef.current?.getCurrentRoute()?.name as RouteName | undefined);
    readActiveRoute();
    const unsubscribe = navRef.addListener('state', readActiveRoute);
    return unsubscribe;
  }, [navRef]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 48,
        borderBottomWidth: 2,
        borderBottomColor: colors.neutral[300],
      }}
    >
      <Text style={{ fontFamily: fonts.heading, fontSize: 20, color: colors.text }}>
        {profile.name}
      </Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {ROUTE_ORDER.map((route) => {
          const active = activeRoute === route;
          return (
            <Pressable
              key={route}
              onPress={() => navRef.navigate(route)}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: radius.pill,
                backgroundColor: active ? colors.accent.base : 'transparent',
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.bodySemiBold,
                  fontSize: 13,
                  color: active ? colors.white : colors.text,
                }}
              >
                {ROUTE_LABELS[route]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
