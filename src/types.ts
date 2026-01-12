import type { IconComponent, IconName } from '@judix/icon';

export interface ShowcaseIcon {
  name: IconName;
  displayName: string;
  group: string;
  keywords: string[];
  component: IconComponent;
}
