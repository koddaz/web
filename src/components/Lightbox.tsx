import { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  View,
  useWindowDimensions,
  type ImageSourcePropType,
  type ListRenderItem,
} from 'react-native';
import { icons } from './icons';
import { colors } from '../theme';

type LightboxProps = {
  visible: boolean;
  images: ImageSourcePropType[];
  initialIndex: number;
  onClose: () => void;
};

// `images` may be empty while real screenshots haven't been sourced yet —
// the lightbox still opens and shows a single placeholder slide in that case.
export function Lightbox({ visible, images, initialIndex, onClose }: LightboxProps) {
  const { width, height } = useWindowDimensions();
  const slides: (ImageSourcePropType | null)[] = images.length > 0 ? images : [null];
  const [index, setIndex] = useState(Math.min(initialIndex, slides.length - 1));

  if (!visible) return null;

  const renderItem: ListRenderItem<ImageSourcePropType | null> = ({ item }) => (
    <View style={{ width, height, alignItems: 'center', justifyContent: 'center' }}>
      {item ? (
        <Image
          source={item}
          style={{ width: width * 0.9, height: height * 0.7 }}
          resizeMode="contain"
        />
      ) : (
        <View
          style={{
            width: width * 0.8,
            height: height * 0.6,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: 'rgba(255,255,255,0.4)',
            borderStyle: 'dashed',
          }}
        />
      )}
    </View>
  );

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.85)' }} onPress={onClose}>
        <FlatList
          data={slides}
          keyExtractor={(_, i) => i.toString()}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          initialScrollIndex={Math.min(initialIndex, slides.length - 1)}
          showsHorizontalScrollIndicator={false}
          getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
          onMomentumScrollEnd={(e) => {
            const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
            setIndex(newIndex);
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 32,
            left: 0,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          {slides.map((_, i) => (
            <View
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: i === index ? colors.white : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </View>
        <Pressable
          onPress={onClose}
          style={{
            position: 'absolute',
            top: 32,
            right: 24,
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: 'rgba(255,255,255,0.15)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <icons.close size={20} color={colors.white} />
        </Pressable>
      </Pressable>
    </Modal>
  );
}
