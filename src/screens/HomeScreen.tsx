import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Avatar } from '../components/Avatar';
import { PillButton } from '../components/PillButton';
import { SurfaceCard } from '../components/SurfaceCard';
import { EyebrowLabel } from '../components/EyebrowLabel';
import { StatusTag } from '../components/StatusTag';
import { WashedImage } from '../components/WashedImage';
import { useIsWide } from '../hooks/useIsWide';
import { colors, fonts, headingLetterSpacingRatio, screenPadding } from '../theme';
import { profile, projects } from '../data/content';
import type { RootTabParamList } from '../navigation/types';

const featuredProject = projects.find((p) => p.status === 'current') ?? projects[0];

function heading(size: number) {
  return {
    fontFamily: fonts.heading,
    fontSize: size,
    letterSpacing: size * headingLetterSpacingRatio,
    color: colors.text,
  } as const;
}

export function HomeScreen() {
  const isWide = useIsWide();
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  if (isWide) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 40,
            paddingHorizontal: screenPadding.desktop,
            paddingVertical: 24,
          }}
        >
          <View style={{ flex: 1, gap: 14 }}>
            <Avatar size={96} source={profile.avatarSource} />
            <Text style={heading(40)}>{profile.role}</Text>
            <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 14, color: colors.text, lineHeight: 14 * 1.55 }}>
              {profile.bio}
            </Text>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>
              <PillButton label="See projects" variant="solid" onPress={() => navigation.navigate('Projects')} />
              <PillButton label="Contact" variant="outline" onPress={() => navigation.navigate('Contact')} />
            </View>
          </View>
          <View style={{ flex: 1.2 }}>
            <SurfaceCard radius={28} padding={18}>
              <View style={{ flexDirection: 'row', gap: 18 }}>
                <WashedImage source={featuredProject.images[0]} width={150} height={300} radius={20} />
                <View style={{ flex: 1, gap: 6 }}>
                  <EyebrowLabel label="CURRENT PROJECT" />
                  <Text style={heading(22)}>{featuredProject.title}</Text>
                  <StatusTag label={featuredProject.statusLabel} />
                  <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 13, color: colors.neutral[700] }}>
                    {featuredProject.description}
                  </Text>
                </View>
              </View>
            </SurfaceCard>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1, padding: 14, paddingHorizontal: screenPadding.mobile, gap: 14 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Avatar size={56} source={profile.avatarSource} />
        <View>
          <Text style={heading(20)}>{profile.name}</Text>
          <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 12, color: colors.neutral[700] }}>
            {profile.role}
          </Text>
        </View>
      </View>
      <Text
        numberOfLines={3}
        style={{ fontFamily: fonts.bodyRegular, fontSize: 13, color: colors.text, lineHeight: 13 * 1.55 }}
      >
        {profile.bio}
      </Text>
      <EyebrowLabel label="CURRENT PROJECT" />
      <SurfaceCard radius={24} padding={14} style={{ gap: 10 }}>
        <WashedImage source={featuredProject.images[0]} width="100%" height={120} radius={16} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={heading(17)}>{featuredProject.title}</Text>
          <StatusTag label={featuredProject.statusLabel} />
        </View>
        <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 11, color: colors.neutral[700] }}>
          {featuredProject.shortDescription}
        </Text>
      </SurfaceCard>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 'auto' }}>
        <PillButton
          label="See projects"
          variant="solid"
          onPress={() => navigation.navigate('Projects')}
          style={{ flex: 1, height: 44, paddingVertical: 0 }}
        />
        <PillButton
          label="Contact"
          variant="outline"
          onPress={() => navigation.navigate('Contact')}
          style={{ flex: 1, height: 44, paddingVertical: 0 }}
        />
      </View>
    </View>
  );
}
