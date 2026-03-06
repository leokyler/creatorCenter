/**
 * 麦基故事结构模板
 * 基于罗伯特麦基《故事》的经典五幕结构
 */

import type { Template } from './types';

export const storyMcKeeTemplate: Template = {
  id: 'story-mckee',
  name: '故事创作 - 麦基结构',
  description: '基于罗伯特·麦基《故事》的经典五幕结构，包含建置、对抗、高潮等核心要素',
  category: 'story',
  icon: '📖',
  nodes: [
    // 第一幕：建置
    {
      id: 'setup',
      type: 'creativeProcess',
      data: {
        label: '建置',
        title: '世界观与主人公',
        sections: '• 主人公的现实生活\n• 日常世界的规则\n• 价值观与社会背景',
        description: '建立主人公的日常生活世界，展示其生活平衡状态',
      },
      position: { x: 0, y: 0 },
    },
    {
      id: 'inciting',
      type: 'creativeInput',
      data: {
        label: '激励事件',
        text: '一个打破主人公生活平衡的突发事件...',
        description: '打破主人公生活平衡的事件，触发故事的核心问题',
      },
      position: { x: 250, y: 50 },
    },
    // 第二幕：对抗
    {
      id: 'debate',
      type: 'creativeProcess',
      data: {
        label: '反应',
        title: '内心的挣扎',
        sections: '• 主人公对事件的反应\n• 内心冲突与疑虑\n• 价值观的动摇',
        description: '主人公面对变化的心理过程',
      },
      position: { x: 450, y: 50 },
    },
    {
      id: 'act1-turn',
      type: 'creativeProcess',
      data: {
        label: '第一幕转折',
        title: '决定行动',
        sections: '• 主人公做出承诺\n• 明确目标\n• 踏入第二幕',
        description: '主人公决定采取行动，进入对抗阶段',
      },
      position: { x: 650, y: 50 },
    },
    // 第三幕：对抗（精彩场面）
    {
      id: 'fun-and-games',
      type: 'creativeProcess',
      data: {
        label: '精彩场面',
        title: '承诺升级',
        sections: '• 追求目标的尝试\n• 各种挑战与障碍\n• 主人公的能力展现',
        description: '故事的核心冒险，主人公能力的展示',
      },
      position: { x: 0, y: 200 },
    },
    {
      id: 'midpoint',
      type: 'creativeProcess',
      data: {
        label: '中点',
        title: '伪成功/伪失败',
        sections: '• 表面上的胜利或失败\n• 视角的转换\n•  stakes 提升',
        description: '故事的分水岭，将假象撕碎',
      },
      position: { x: 250, y: 220 },
    },
    {
      id: 'bad-guys-close-in',
      type: 'creativeProcess',
      data: {
        label: '危机',
        title: '全面溃败',
        sections: '• 外在敌人增强\n• 内在自我怀疑\n• 盟友的背叛或离去',
        description: '主人公面临最大挑战，一切看似无望',
      },
      position: { x: 450, y: 220 },
    },
    // 第四幕：解决
    {
      id: 'all-is-lost',
      type: 'creativeProcess',
      data: {
        label: '低谷',
        title: '至暗时刻',
        sections: '• 重大损失\n• 主人公的觉醒\n• 烛光时刻',
        description: '最低点，通常伴随着角色的死亡或牺牲',
      },
      position: { x: 650, y: 220 },
    },
    // 第五幕：高潮
    {
      id: 'climax',
      type: 'creativeProcess',
      data: {
        label: '高潮',
        title: '最终抉择',
        sections: '• 主人公的最终决定\n• 核心冲突的解决\n• 价值观的实现',
        description: '故事的高潮，主人公必须做出终极选择',
      },
      position: { x: 850, y: 120 },
    },
    // 结局
    {
      id: 'resolution',
      type: 'creativeOutput',
      data: {
        label: '结局',
        title: '新平衡',
        sections: '• 问题的最终解决\n• 人物的变化\n• 新世界的建立',
        description: '建立新的生活平衡，展示故事的意义',
      },
      position: { x: 1050, y: 120 },
    },
  ],
  edges: [
    { id: 'e1-2', source: 'setup', target: 'inciting', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e2-3', source: 'inciting', target: 'debate', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e3-4', source: 'debate', target: 'act1-turn', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e4-5', source: 'act1-turn', target: 'fun-and-games', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e5-6', source: 'fun-and-games', target: 'midpoint', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e6-7', source: 'midpoint', target: 'bad-guys-close-in', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e7-8', source: 'bad-guys-close-in', target: 'all-is-lost', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d94a4a' } },
    { id: 'e8-9', source: 'all-is-lost', target: 'climax', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#ff6b6b' } },
    { id: 'e9-10', source: 'climax', target: 'resolution', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4ad97c' } },
  ],
};
