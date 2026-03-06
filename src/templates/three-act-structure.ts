/**
 * 三幕结构模板
 * 经典的三幕故事结构：建置-对抗-解决
 */

import type { Template } from './types';

export const threeActStructureTemplate: Template = {
  id: 'three-act-structure',
  name: '三幕结构',
  description: '经典的三幕故事结构：建置-对抗-解决',
  category: 'story',
  icon: '📊',
  nodes: [
    {
      id: 'act1',
      type: 'creativeProcess',
      data: {
        label: '建置',
        title: '设定世界与冲突',
        sections: '• 介绍主人公\n• 展示日常世界\n• 激励事件\n• 第一幕转折',
      },
      position: { x: 100, y: 150 },
    },
    {
      id: 'act2a',
      type: 'creativeProcess',
      data: {
        label: '对抗上',
        title: '新世界与挑战',
        sections: '• 主人公进入新世界\n• 制定计划\n• 遭遇失败\n• 学习成长',
      },
      position: { x: 450, y: 150 },
    },
    {
      id: 'act2b',
      type: 'creativeProcess',
      data: {
        label: '对抗下',
        title: '危机加深',
        sections: '• 困难加剧\n• 内心挣扎\n• 接近目标\n• 再次失败',
      },
      position: { x: 800, y: 150 },
    },
    {
      id: 'act3',
      type: 'creativeOutput',
      data: {
        label: '解决',
        title: '最终对决与结局',
        sections: '• 最终挑战\n• 高潮对决\n• 问题解决\n• 新平衡',
      },
      position: { x: 1150, y: 150 },
    },
  ],
  edges: [
    { id: 'e1-2', source: 'act1', target: 'act2a', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e2-3', source: 'act2a', target: 'act2b', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e3-4', source: 'act2b', target: 'act3', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4ad97c' } },
  ],
};
