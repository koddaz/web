import { Pressable, Text, View, type ImageSourcePropType } from 'react-native';
import { WashedImage } from './WashedImage';
import { colors, fonts, radius as radiusTokens } from '../theme';

type ScreenshotRowProps = {
  images: ImageSourcePropType[];
  maxVisible: number;
  onPress: (index: number) => void;
  tileHeight: number;
  gap?: number;
};

export function ScreenshotRow({ images, maxVisible, onPress, tileHeight, gap = 6 }: ScreenshotRowProps) {
  const hasImages = images.length > 0;
  const visibleCount = hasImages ? Math.min(images.length, maxVisible) : maxVisible;
  const overflowCount = hasImages ? images.length - visibleCount : 0;

  return (
    <View style={{ flexDirection: 'row', gap }}>
      {Array.from({ length: visibleCount }).map((_, index) => (
        <Pressable key={index} onPress={() => onPress(index)} style={{ flex: 1 }}>
          <WashedImage
            source={hasImages ? images[index] : undefined}
            width="100%"
            height={tileHeight}
            radius={radiusTokens.md}
          />
        </Pressable>
      ))}
      {overflowCount > 0 && (
        <Pressable
          onPress={() => onPress(visibleCount)}
          style={{
            flex: 1,
            height: tileHeight,
            borderRadius: radiusTokens.md,
            backgroundColor: colors.neutral[200],
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontFamily: fonts.bodyBold, fontSize: 13, color: colors.neutral[700] }}>
            +{overflowCount}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
