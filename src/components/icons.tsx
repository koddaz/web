import { Mail, ChevronRight, Plus, ExternalLink, Copy, X } from 'lucide-react-native';
import Svg, { Path } from 'react-native-svg';
import type { ComponentType } from 'react';

export type IconProps = {
  size?: number;
  color?: string;
};

const STROKE_WIDTH = 2.75;

function withStroke<P extends { size?: number; color?: string; strokeWidth?: number }>(
  Icon: ComponentType<P>
) {
  return function StrokedIcon(props: P) {
    return <Icon strokeWidth={STROKE_WIDTH} {...props} />;
  };
}

// lucide-react-native dropped brand/logo glyphs, so GitHub and LinkedIn are
// supplied as small filled SVGs with the same {size, color} prop shape.
function GithubIcon({ size = 24, color = '#000' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill={color}
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2Z"
      />
    </Svg>
  );
}

function LinkedinIcon({ size = 24, color = '#000' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill={color}
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.368-1.85 3.598 0 4.268 2.368 4.268 5.452v6.289ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.114 20.452H3.56V9h3.554v11.452Z"
      />
    </Svg>
  );
}

export const icons = {
  mail: withStroke(Mail),
  chevronRight: withStroke(ChevronRight),
  plus: withStroke(Plus),
  externalLink: withStroke(ExternalLink),
  copy: withStroke(Copy),
  close: withStroke(X),
  github: GithubIcon,
  linkedin: LinkedinIcon,
} as const;

export type IconName = keyof typeof icons;
