import { create } from 'zustand';
import type { Node, Edge } from '@xyflow/react';
import type { TemplateNode, TemplateEdge } from '../templates';

// 定义 store 状态和 actions
interface FlowStore {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  loadTemplate: (templateNodes: TemplateNode[], templateEdges: TemplateEdge[]) => void;
  addNode: (type: string, position: { x: number; y: number }) => void;
  deleteNode: (nodeId: string) => void;
  updateNodeData: (nodeId: string, data: any) => void;
}

// 创建 zustand store
export const useFlowStore = create<FlowStore>((set, get) => ({
  nodes: [],
  edges: [],

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  loadTemplate: (templateNodes, templateEdges) => {
    const newNodes: Node[] = templateNodes.map((n) => ({
      id: n.id,
      type: n.type,
      data: n.data,
      position: n.position,
    }));
    const newEdges: Edge[] = templateEdges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle,
      animated: e.animated,
      style: e.style,
    }));
    set({ nodes: newNodes, edges: newEdges });
  },

  addNode: (type, position) => {
    const { nodes } = get();
    const id = `${nodes.length + 1}`;
    let nodeType = 'creativeProcess';
    let data: any = { label: 'Process' };

    if (type === 'input') {
      nodeType = 'creativeInput';
      data = { label: 'Text Input', text: '' };
    } else if (type === 'output') {
      nodeType = 'creativeOutput';
      data = { label: 'Output' };
    } else if (type === 'prompt') {
      data = { label: 'Prompt', text: '' };
    } else if (type === 'article') {
      data = { label: 'Article Structure', title: '', sections: '' };
    } else if (type === 'script') {
      data = { label: 'Script Scene', location: '', action: '' };
    } else if (type === 'music') {
      data = { label: 'Music Rhythm', bpm: 120, timeSignature: '4/4' };
    }

    const newNode: Node = { id, type: nodeType, data, position };
    set({ nodes: [...nodes, newNode] });
  },

  deleteNode: (nodeId) => {
    const { nodes, edges } = get();
    set({
      nodes: nodes.filter((n) => n.id !== nodeId),
      edges: edges.filter((e) => e.source !== nodeId && e.target !== nodeId),
    });
  },

  updateNodeData: (nodeId, data) => {
    const { nodes } = get();
    set({
      nodes: nodes.map((n) =>
        n.id === nodeId ? { ...n, data: { ...n.data, ...data } } : n
      ),
    });
  },
}));
