import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// Use the generated source from .source with toFumadocsSource()
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});