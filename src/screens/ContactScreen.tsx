import * as Clipboard from 'expo-clipboard';
import { Linking, Pressable, Text, View } from 'react-native';
import { SurfaceCard } from '../components/SurfaceCard';
import { IconCircle } from '../components/IconCircle';
import { PillButton } from '../components/PillButton';
import { Toast } from '../components/Toast';
import { icons } from '../components/icons';
import { useIsWide } from '../hooks/useIsWide';
import { useToast } from '../hooks/useToast';
import { colors, fonts, headingLetterSpacingRatio, radius, screenPadding } from '../theme';
import { contactChannels, contactIntro, type ContactChannel } from '../data/content';

function heading(size: number) {
  return {
    fontFamily: fonts.heading,
    fontSize: size,
    letterSpacing: size * headingLetterSpacingRatio,
    color: colors.text,
  } as const;
}

function iconBackground(channel: ContactChannel) {
  if (channel.iconCircleBg === 'accent') return colors.accent.base;
  if (channel.iconCircleBg === 'accent2') return colors.accent2.base;
  return colors.text;
}

export function ContactScreen() {
  const isWide = useIsWide();
  const { message, show } = useToast();

  const handleEmailAction = async () => {
    const emailChannel = contactChannels.find((c) => c.id === 'email')!;
    if (isWide) {
      await Clipboard.setStringAsync(emailChannel.value);
      show('Copied');
    } else {
      Linking.openURL(`mailto:${emailChannel.value}`);
    }
  };

  const handleOpen = (channel: ContactChannel) => {
    Linking.openURL(channel.value);
  };

  if (isWide) {
    return (
      <View style={{ flex: 1, padding: 40, paddingHorizontal: screenPadding.desktop, gap: 18 }}>
        <Text style={heading(44)}>Get in touch</Text>
        <Text
          style={{ fontFamily: fonts.bodyRegular, fontSize: 14, color: colors.text, maxWidth: 420 }}
        >
          {contactIntro}
        </Text>
        <View style={{ flexDirection: 'row', gap: 14, maxWidth: 760 }}>
          {contactChannels.map((channel) => (
            <SurfaceCard key={channel.id} radius={28} padding={18} style={{ flex: 1, gap: 12 }}>
              <IconCircle size={44} background={iconBackground(channel)} icon={channel.icon} />
              <Text style={heading(18)}>{channel.label}</Text>
              <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 12, color: colors.neutral[700] }}>
                {channel.displayValue}
              </Text>
              {channel.id === 'email' ? (
                <PillButton
                  label="Copy"
                  variant="outline"
                  onPress={handleEmailAction}
                  style={{ alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 14 }}
                />
              ) : (
                <PillButton
                  label="Open ↗"
                  variant="outline"
                  onPress={() => handleOpen(channel)}
                  style={{ alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 14 }}
                />
              )}
            </SurfaceCard>
          ))}
        </View>
        <Toast message={message} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 14, paddingHorizontal: screenPadding.mobile, gap: 12 }}>
      <Text style={heading(28)}>Get in touch</Text>
      <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 13, color: colors.text }}>
        {contactIntro}
      </Text>
      {contactChannels.map((channel) => (
        <Pressable
          key={channel.id}
          onPress={() => (channel.id === 'email' ? handleEmailAction() : handleOpen(channel))}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            padding: 12,
            borderRadius: radius.pill,
            backgroundColor: colors.surface,
          }}
        >
          <IconCircle size={40} background={iconBackground(channel)} icon={channel.icon} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: fonts.bodyBold, fontSize: 12, color: colors.text }}>
              {channel.label}
            </Text>
            <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 10, color: colors.neutral[700] }}>
              {channel.displayValue}
            </Text>
          </View>
          <icons.chevronRight size={16} color={colors.neutral[600]} />
        </Pressable>
      ))}
      <Toast message={message} />
    </View>
  );
}
