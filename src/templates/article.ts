/**
 * 文章创作模板
 * 结构化的文章写作流程模板
 */

import type { Template } from './types';

export const articleTemplate: Template = {
  id: 'article-writing',
  name: '文章创作',
  description: '结构化的文章写作流程模板',
  category: 'article',
  icon: '📝',
  nodes: [
    {
      id: 'topic',
      type: 'creativeInput',
      data: {
        label: '主题确定',
        text: '确定文章主题和核心观点...',
      },
      position: { x: 100, y: 150 },
    },
    {
      id: 'outline',
      type: 'creativeProcess',
      data: {
        label: '大纲设计',
        title: '文章结构',
        sections: '• 引言\n• 观点1\n• 观点2\n• 观点3\n• 结论',
      },
      position: { x: 350, y: 150 },
    },
    {
      id: 'intro',
      type: 'creativeProcess',
      data: {
        label: '引言撰写',
        text: '吸引读者的开头...',
      },
      position: { x: 600, y: 150 },
    },
    {
      id: 'body',
      type: 'creativeProcess',
      data: {
        label: '正文撰写',
        title: '主体内容',
        sections: '• 论点展开\n• 证据支持\n• 逻辑连接',
      },
      position: { x: 850, y: 150 },
    },
    {
      id: 'conclusion',
      type: 'creativeProcess',
      data: {
        label: '结论撰写',
        text: '总结要点，呼吁行动...',
      },
      position: { x: 1100, y: 150 },
    },
    {
      id: 'output',
      type: 'creativeOutput',
      data: {
        label: '输出',
      },
      position: { x: 1350, y: 150 },
    },
  ],
  edges: [
    { id: 'e1-2', source: 'topic', target: 'outline', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e2-3', source: 'outline', target: 'intro', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e3-4', source: 'intro', target: 'body', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e4-5', source: 'body', target: 'conclusion', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e5-6', source: 'conclusion', target: 'output', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4ad97c' } },
  ],
};
