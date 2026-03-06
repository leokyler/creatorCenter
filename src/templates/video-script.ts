/**
 * 视频脚本模板
 * 短视频脚本创作模板
 */

import type { Template } from './types';

export const videoScriptTemplate: Template = {
  id: 'video-script',
  name: '视频脚本',
  description: '短视频脚本创作模板',
  category: 'script',
  icon: '🎬',
  nodes: [
    {
      id: 'hook',
      type: 'creativeInput',
      data: {
        label: '黄金3秒',
        text: '开场吸引观众注意力...',
      },
      position: { x: 100, y: 150 },
    },
    {
      id: 'setup',
      type: 'creativeProcess',
      data: {
        label: '背景设定',
        text: '介绍主题和场景...',
      },
      position: { x: 350, y: 150 },
    },
    {
      id: 'content',
      type: 'creativeProcess',
      data: {
        label: '核心内容',
        title: '主体信息',
        sections: '• 要点1\n• 要点2\n• 要点3',
      },
      position: { x: 600, y: 150 },
    },
    {
      id: 'cta',
      type: 'creativeProcess',
      data: {
        label: '行动号召',
        text: '引导观众互动...',
      },
      position: { x: 850, y: 150 },
    },
    {
      id: 'outro',
      type: 'creativeOutput',
      data: {
        label: '结尾',
        text: '感谢观看，呼吁关注...',
      },
      position: { x: 1100, y: 150 },
    },
  ],
  edges: [
    { id: 'e1-2', source: 'hook', target: 'setup', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e2-3', source: 'setup', target: 'content', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e3-4', source: 'content', target: 'cta', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e4-5', source: 'cta', target: 'outro', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4ad97c' } },
  ],
};
