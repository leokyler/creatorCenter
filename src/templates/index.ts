/**
 * 模板导出入口
 */

// 类型导出
export type { Template, TemplateNode, TemplateEdge } from './types';

// 模板导出
export { storyMcKeeTemplate } from './story-mckee';
export { threeActStructureTemplate } from './three-act-structure';
export { heroJourneyTemplate } from './hero-journey';
export { articleTemplate } from './article';
export { videoScriptTemplate } from './video-script';

// 模板列表
import type { Template } from './types';
import { storyMcKeeTemplate } from './story-mckee';
import { threeActStructureTemplate } from './three-act-structure';
import { heroJourneyTemplate } from './hero-journey';
import { articleTemplate } from './article';
import { videoScriptTemplate } from './video-script';

export const templates: Template[] = [
  storyMcKeeTemplate,
  threeActStructureTemplate,
  heroJourneyTemplate,
  articleTemplate,
  videoScriptTemplate,
];

// 按类别获取模板
export const getTemplatesByCategory = (category: Template['category']): Template[] => {
  return templates.filter((t) => t.category === category);
};

// 根据ID获取模板
export const getTemplateById = (id: string): Template | undefined => {
  return templates.find((t) => t.id === id);
};
