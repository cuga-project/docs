import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ArchitectureStack, SupervisorFlow } from '@/components/architecture-stack';
import {
  CugaAsMcpFlow,
  LangflowFlow,
  MemoryFlow,
  PolicyFlow,
  SkillsFlow,
} from '@/components/docs-diagrams';
import { Mermaid } from '@/components/mdx/mermaid';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ArchitectureStack,
    SupervisorFlow,
    SkillsFlow,
    CugaAsMcpFlow,
    LangflowFlow,
    MemoryFlow,
    PolicyFlow,
    Mermaid,
    ...components,
  };
}
