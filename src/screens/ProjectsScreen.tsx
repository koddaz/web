import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Animated, Easing, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { SurfaceCard } from '../components/SurfaceCard';
import { OutlineChip } from '../components/OutlineChip';
import { PillButton } from '../components/PillButton';
import { ScreenshotRow } from '../components/ScreenshotRow';
import { Lightbox } from '../components/Lightbox';
import { icons } from '../components/icons';
import { useIsWide } from '../hooks/useIsWide';
import { colors, fonts, headingLetterSpacingRatio, screenPadding } from '../theme';
import { projects, type Project } from '../data/content';

const ACCORDION_DURATION_MS = 200;

function heading(size: number) {
  return {
    fontFamily: fonts.heading,
    fontSize: size,
    letterSpacing: size * headingLetterSpacingRatio,
    color: colors.text,
  } as const;
}

function AccordionBody({ expanded, children }: { expanded: boolean; children: ReactNode }) {
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const [heightAnim] = useState(() => new Animated.Value(0));
  const hasSnapped = useRef(false);

  useEffect(() => {
    if (measuredHeight == null) return;
    if (!hasSnapped.current) {
      heightAnim.setValue(expanded ? measuredHeight : 0);
      hasSnapped.current = true;
      return;
    }
    Animated.timing(heightAnim, {
      toValue: expanded ? measuredHeight : 0,
      duration: ACCORDION_DURATION_MS,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, measuredHeight]);

  return (
    <Animated.View style={{ height: heightAnim, overflow: 'hidden' }}>
      <View onLayout={(e) => setMeasuredHeight(e.nativeEvent.layout.height)}>{children}</View>
    </Animated.View>
  );
}

function TimelineMarker({ current }: { current: boolean }) {
  return current ? (
    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: colors.accent.base }} />
  ) : (
    <View
      style={{
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: colors.text,
        backgroundColor: 'transparent',
      }}
    />
  );
}

function CollapsedRow({ project, isWide, onToggle }: { project: Project; isWide: boolean; onToggle: () => void }) {
  return (
    <Pressable
      onPress={onToggle}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: colors.neutral[300],
        borderRadius: 20,
        padding: 12,
        gap: 12,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10, flex: 1 }}>
        <Text style={{ fontFamily: fonts.bodyBold, fontSize: 10, color: colors.neutral[700] }}>
          {project.years}
        </Text>
        <Text style={heading(isWide ? 18 : 15)}>{project.title}</Text>
        {isWide && (
          <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 12, color: colors.neutral[700] }}>
            {project.platform} · {project.stack.join(', ')}
          </Text>
        )}
      </View>
      <icons.plus size={18} color={colors.text} />
    </Pressable>
  );
}

type ExpandedRowProps = {
  project: Project;
  isWide: boolean;
  onOpenViewer: (index: number) => void;
};

function ExpandedRow({ project, isWide, onOpenViewer }: ExpandedRowProps) {
  const highlights = (
    <View style={{ gap: 4 }}>
      {project.highlights.map((h) => (
        <Text key={h} style={{ fontFamily: fonts.bodyRegular, fontSize: 12, color: colors.text }}>
          • {h}
        </Text>
      ))}
    </View>
  );

  const stackChips = (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
      {project.stack.map((s) => (
        <OutlineChip key={s} label={s} variant="accent2Fill" />
      ))}
    </View>
  );

  const appStoreButton = project.appStoreUrl ? (
    <PillButton
      label="View on App Store"
      variant="outline"
      onPress={() => Linking.openURL(project.appStoreUrl!)}
      style={{ alignSelf: 'flex-start' }}
    />
  ) : null;

  if (isWide) {
    return (
      <SurfaceCard radius={28} padding={18}>
        <View style={{ flexDirection: 'row', gap: 24 }}>
          <View style={{ flex: 1.4, gap: 10 }}>
            <Text style={{ fontFamily: fonts.bodyBold, fontSize: 10, color: colors.neutral[700] }}>
              {project.years} · {project.statusLabel}
            </Text>
            <Text style={heading(26)}>{project.title}</Text>
            <ScreenshotRow images={project.images} maxVisible={4} onPress={onOpenViewer} tileHeight={170} />
          </View>
          <View style={{ flex: 1, gap: 10 }}>
            <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 13, color: colors.text }}>
              {project.description}
            </Text>
            {highlights}
            {stackChips}
            {appStoreButton}
          </View>
        </View>
      </SurfaceCard>
    );
  }

  return (
    <SurfaceCard radius={20} padding={12} style={{ gap: 8 }}>
      <Text style={{ fontFamily: fonts.bodyBold, fontSize: 10, color: colors.neutral[700] }}>
        {project.years} · {project.statusLabel}
      </Text>
      <Text style={heading(17)}>{project.title}</Text>
      <ScreenshotRow images={project.images} maxVisible={3} onPress={onOpenViewer} tileHeight={84} />
      <Text style={{ fontFamily: fonts.bodyRegular, fontSize: 12, color: colors.text }}>
        {project.description}
      </Text>
      {highlights}
      {appStoreButton}
    </SurfaceCard>
  );
}

export function ProjectsScreen() {
  const isWide = useIsWide();
  const [expandedId, setExpandedId] = useState<string | null>('emmisense');
  const [viewer, setViewer] = useState<{ projectId: string; index: number } | null>(null);

  const viewerProject = viewer ? projects.find((p) => p.id === viewer.projectId) : undefined;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          padding: isWide ? 12 : 14,
          paddingHorizontal: isWide ? screenPadding.desktop : screenPadding.mobile,
          gap: isWide ? 14 : 14,
        }}
      >
        <Text style={heading(isWide ? 36 : 28)}>Projects</Text>
        {projects.map((project) => {
          const expanded = expandedId === project.id;
          return (
            <View key={project.id} style={{ flexDirection: 'row', gap: isWide ? 14 : 10 }}>
              <View style={{ width: 22, alignItems: 'center', paddingTop: 16 }}>
                <TimelineMarker current={project.status === 'current'} />
              </View>
              <View style={{ flex: 1, gap: 10 }}>
                <CollapsedRow
                  project={project}
                  isWide={isWide}
                  onToggle={() => setExpandedId((prev) => (prev === project.id ? null : project.id))}
                />
                <AccordionBody expanded={expanded}>
                  <ExpandedRow
                    project={project}
                    isWide={isWide}
                    onOpenViewer={(index) => setViewer({ projectId: project.id, index })}
                  />
                </AccordionBody>
              </View>
            </View>
          );
        })}
      </View>
      <Lightbox
        visible={!!viewer}
        images={viewerProject?.images ?? []}
        initialIndex={viewer?.index ?? 0}
        onClose={() => setViewer(null)}
      />
    </ScrollView>
  );
}
