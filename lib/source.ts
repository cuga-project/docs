import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { iconMap } from './layout.shared';
import { createElement } from 'react';

// Use the generated source from .source with toFumadocsSource()
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    if (icon in iconMap) {
      return createElement(iconMap[icon as keyof typeof iconMap]);
    }
  },
});