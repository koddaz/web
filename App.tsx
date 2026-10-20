import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Caprasimo_400Regular } from '@expo-google-fonts/caprasimo';
import {
  Figtree_400Regular,
  Figtree_600SemiBold,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { RootShell } from './src/navigation/RootShell';
import { colors } from './src/theme';
import { installWebFocusStyle } from './src/theme/webFocusStyle';

export default function App() {
  const [fontsLoaded] = useFonts({
    Caprasimo_400Regular,
    Figtree_400Regular,
    Figtree_600SemiBold,
    Figtree_700Bold,
  });

  useEffect(() => {
    installWebFocusStyle();
  }, []);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.bg }} />;
  }

  return (
    <SafeAreaProvider>
      <RootShell />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
