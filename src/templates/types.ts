/**
 * 模板类型定义
 */

export interface TemplateNode {
  id: string;
  type: string;
  data: {
    label: string;
    text?: string;
    title?: string;
    sections?: string;
    location?: string;
    action?: string;
    description?: string;
    [key: string]: any;
  };
  position: { x: number; y: number };
}

export interface TemplateEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string;
  targetHandle?: string;
  animated?: boolean;
  style?: { stroke: string };
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: 'story' | 'article' | 'script' | 'music' | 'custom';
  icon: string;
  nodes: TemplateNode[];
  edges: TemplateEdge[];
}
