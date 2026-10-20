import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { View } from 'react-native';
import { useIsWide } from '../hooks/useIsWide';
import { colors } from '../theme';
import { HomeScreen } from '../screens/HomeScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { BottomTabBar } from './BottomTabBar';
import { DesktopHeader } from './DesktopHeader';
import { applyInitialHash, useHashSync } from './useHashSync';
import type { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootShell() {
  const isWide = useIsWide();
  const navRef = useNavigationContainerRef<RootTabParamList>();
  useHashSync(navRef);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <NavigationContainer ref={navRef} onReady={() => applyInitialHash(navRef)}>
        {isWide && <DesktopHeader navRef={navRef} />}
        <Tab.Navigator
          tabBar={isWide ? () => null : (props) => <BottomTabBar {...props} />}
          screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: colors.bg } }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Projects" component={ProjectsScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
