/**
 * 英雄之旅模板
 * 基于约瑟夫·坎贝尔的经典英雄冒险结构
 */

import type { Template } from './types';

export const heroJourneyTemplate: Template = {
  id: 'hero-journey',
  name: '英雄之旅',
  description: '基于约瑟夫·坎贝尔的经典英雄冒险结构',
  category: 'story',
  icon: '⚔️',
  nodes: [
    {
      id: 'ordinary',
      type: 'creativeProcess',
      data: {
        label: '普通世界',
        title: '日常世界',
        sections: '• 英雄的日常生活\n• 展示平凡生活\n• 预示改变的可能',
      },
      position: { x: 0, y: 0 },
    },
    {
      id: 'call',
      type: 'creativeInput',
      data: {
        label: '冒险召唤',
        title: '冒险的邀请',
        text: '一个挑战或使命出现...',
      },
      position: { x: 250, y: 50 },
    },
    {
      id: 'refuse',
      type: 'creativeProcess',
      data: {
        label: '拒绝召唤',
        title: '内心的抗拒',
        sections: '• 英雄的恐惧\n• 拒绝或犹豫\n• 留在舒适区',
      },
      position: { x: 450, y: 50 },
    },
    {
      id: 'mentor',
      type: 'creativeProcess',
      data: {
        label: '遇见导师',
        title: '智慧的指引',
        sections: '• 导师出现\n• 获得帮助或物品\n• 获得勇气',
      },
      position: { x: 650, y: 50 },
    },
    {
      id: 'threshold',
      type: 'creativeProcess',
      data: {
        label: '跨越阈值',
        title: '进入非常世界',
        sections: '• 跨越边界\n• 进入新世界\n• 不可逆转的改变',
      },
      position: { x: 0, y: 200 },
    },
    {
      id: 'tests',
      type: 'creativeProcess',
      data: {
        label: '考验',
        title: '新世界的挑战',
        sections: '• 新的挑战\n• 结识盟友\n• 面对敌人',
      },
      position: { x: 250, y: 220 },
    },
    {
      id: 'innermost',
      type: 'creativeProcess',
      data: {
        label: '最深洞穴',
        title: '核心挑战',
        sections: '• 最大的考验\n• 核心冲突\n• 内在恐惧',
      },
      position: { x: 450, y: 220 },
    },
    {
      id: 'ordeal',
      type: 'creativeProcess',
      data: {
        label: '严峻考验',
        title: '生死时刻',
        sections: '• 最大的危机\n• 死亡与重生\n• 牺牲与获得',
      },
      position: { x: 650, y: 220 },
    },
    {
      id: 'reward',
      type: 'creativeProcess',
      data: {
        label: '获得奖赏',
        title: '胜利的收获',
        sections: '• 获得奖品\n• 智慧或宝藏\n• 问题的解决',
      },
      position: { x: 850, y: 220 },
    },
    {
      id: 'road-back',
      type: 'creativeProcess',
      data: {
        label: '归来之路',
        title: '返回普通世界',
        sections: '• 踏上归途\n• 新的追逐\n• 决心完成',
      },
      position: { x: 1300, y: 130 },
    },
    {
      id: 'resurrection',
      type: 'creativeProcess',
      data: {
        label: '复活',
        title: '终极考验',
        sections: '• 最后的挑战\n• 脱胎换骨\n• 价值观实现',
      },
      position: { x: 1250, y: 120 },
    },
    {
      id: 'return',
      type: 'creativeOutput',
      data: {
        label: '满载而归',
        title: '带着奖赏回归',
        sections: '• 回归日常\n• 改变的世界\n• 新的平衡',
      },
      position: { x: 1450, y: 120 },
    },
  ],
  edges: [
    { id: 'e1-2', source: 'ordinary', target: 'call', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e2-3', source: 'call', target: 'refuse', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e3-4', source: 'refuse', target: 'mentor', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4a90d9' } },
    { id: 'e4-5', source: 'mentor', target: 'threshold', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e5-6', source: 'threshold', target: 'tests', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e6-7', source: 'tests', target: 'innermost', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e7-8', source: 'innermost', target: 'ordeal', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d94a4a' } },
    { id: 'e8-9', source: 'ordeal', target: 'reward', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e9-10', source: 'reward', target: 'road-back', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#d98c4a' } },
    { id: 'e10-11', source: 'road-back', target: 'resurrection', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#ff6b6b' } },
    { id: 'e11-12', source: 'resurrection', target: 'return', sourceHandle: 'output', targetHandle: 'input', animated: true, style: { stroke: '#4ad97c' } },
  ],
};
