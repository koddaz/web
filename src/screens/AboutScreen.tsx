import { ScrollView, Text, View } from 'react-native';
import { SurfaceCard } from '../components/SurfaceCard';
import { EyebrowLabel } from '../components/EyebrowLabel';
import { OutlineChip } from '../components/OutlineChip';
import { useIsWide } from '../hooks/useIsWide';
import { colors, fonts, headingLetterSpacingRatio, screenPadding } from '../theme';
import { education, experience, profile, skills } from '../data/content';

function heading(size: number) {
  return {
    fontFamily: fonts.heading,
    fontSize: size,
    letterSpacing: size * headingLetterSpacingRatio,
    color: colors.text,
  } as const;
}

function InfoCard({
  title,
  meta,
  description,
  radius,
  padding,
}: {
  title: string;
  meta: string;
  description: string;
  radius: 20 | 24;
  padding: number;
}) {
  return (
    <SurfaceCard radius={radius} padding={padding} style={{ gap: 3 }}>
      <Text style={{ fontFamily: fonts.bodyBold, fontSize: 14, color: colors.text }}>{title}</Text>
      <Text style={{ fontFamily: fonts.bodySemiBold, fontSize: 11, color: colors.neutral[700] }}>
        {meta}
      </Text>
      <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 12, color: colors.text, marginTop: 4 }}>
        {description}
      </Text>
    </SurfaceCard>
  );
}

export function AboutScreen() {
  const isWide = useIsWide();

  const experienceCard = (
    <InfoCard
      title={experience.title}
      meta={experience.meta}
      description={experience.description}
      radius={isWide ? 24 : 20}
      padding={isWide ? 16 : 12}
    />
  );

  const educationCard = (
    <InfoCard
      title={education.title}
      meta={education.meta}
      description={education.description}
      radius={isWide ? 24 : 20}
      padding={isWide ? 16 : 12}
    />
  );

  return (
    <ScrollView
      contentContainerStyle={{
        padding: isWide ? 12 : 14,
        paddingHorizontal: isWide ? screenPadding.desktop : screenPadding.mobile,
        gap: 18,
      }}
    >
      <Text style={heading(isWide ? 36 : 28)}>About me</Text>
      <Text
        style={{
          fontFamily: fonts.bodyRegular,
          fontSize: 13,
          color: colors.text,
          lineHeight: 13 * 1.55,
          maxWidth: isWide ? 560 : undefined,
        }}
      >
        {profile.bio}
      </Text>

      {isWide ? (
        <View style={{ flexDirection: 'row', gap: 14, maxWidth: 760 }}>
          <View style={{ flex: 1, gap: 6 }}>
            <EyebrowLabel label="EXPERIENCE" />
            {experienceCard}
          </View>
          <View style={{ flex: 1, gap: 6 }}>
            <EyebrowLabel label="EDUCATION" />
            {educationCard}
          </View>
        </View>
      ) : (
        <>
          <View style={{ gap: 6 }}>
            <EyebrowLabel label="EXPERIENCE" />
            {experienceCard}
          </View>
          <View style={{ gap: 6 }}>
            <EyebrowLabel label="EDUCATION" />
            {educationCard}
          </View>
        </>
      )}

      <View style={{ gap: 6 }}>
        <EyebrowLabel label="SKILLS" />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: isWide ? 8 : 6,
            maxWidth: isWide ? 760 : undefined,
          }}
        >
          {skills.map((skill) => (
            <OutlineChip key={skill} label={skill} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
