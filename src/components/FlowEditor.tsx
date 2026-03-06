import { useCallback } from 'react';
import { ReactFlow, MiniMap, Controls, Background, addEdge, BackgroundVariant, Panel, Handle, Position, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import { useFlowStore } from '../store/flowStore';
import type { Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// 创作节点组件
const CreativeNode = ({ id, data, type }: { id: string; data: any; type?: string }) => {
  const updateNodeData = useFlowStore((s) => s.updateNodeData);

  const handleChange = (field: string, value: string) => {
    updateNodeData(id, { [field]: value });
  };

  return (
    <div style={{ minWidth: 140, maxWidth: 180, padding: '8px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
      {(type === 'default' || type === 'output' || type === 'input') && (
        <Handle type="target" position={Position.Left} id="input" style={{ background: '#4a90d9', width: 8, height: 8 }} />
      )}
      <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#333', fontSize: '12px', whiteSpace: 'nowrap' }}>{data.label}</div>
      {data.text !== undefined && (
        <textarea
          value={data.text}
          onChange={(e) => handleChange('text', e.target.value)}
          placeholder="Enter text..."
          style={{ width: '100%', height: '40px', resize: 'none', padding: '4px', fontSize: '11px' }}
        />
      )}
      {data.title !== undefined && (
        <input
          type="text"
          value={data.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Title"
          style={{ width: '100%', marginBottom: '4px', padding: '4px', fontSize: '11px' }}
        />
      )}
      {data.sections !== undefined && (
        <textarea
          value={data.sections}
          onChange={(e) => handleChange('sections', e.target.value)}
          placeholder="Sections"
          style={{ width: '100%', height: '50px', resize: 'none', padding: '4px', fontSize: '10px' }}
        />
      )}
      {(type === 'default' || type === 'input' || type === undefined) && (
        <Handle type="source" position={Position.Right} id="output" style={{ background: '#4ad97c', width: 8, height: 8 }} />
      )}
    </div>
  );
};

const nodeTypes = {
  creativeInput: (props: any) => <CreativeNode {...props} type="input" />,
  creativeProcess: (props: any) => <CreativeNode {...props} type="default" />,
  creativeOutput: (props: any) => <CreativeNode {...props} type="output" />,
};

function FlowEditor() {
  const nodes = useFlowStore((s) => s.nodes);
  const edges = useFlowStore((s) => s.edges);
  const setNodes = useFlowStore((s) => s.setNodes);
  const setEdges = useFlowStore((s) => s.setEdges);
  const addNode = useFlowStore((s) => s.addNode);

  const onNodesChange = useCallback(
    (changes: any) => {
      setNodes(applyNodeChanges(changes, nodes));
    },
    [nodes, setNodes],
  );

  const onEdgesChange = useCallback(
    (changes: any) => {
      setEdges(applyEdgeChanges(changes, edges));
    },
    [edges, setEdges],
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges(addEdge({ ...params, animated: true, style: { stroke: '#4a90d9' } }, edges)),
    [edges, setEdges],
  );

  const handleAddNode = (type: string) => {
    addNode(type, { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 });
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <div style={{ flex: 1, height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={{ background: '#1e1e1e' }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#444" />
          <Controls style={{ background: '#333', borderRadius: '8px' }} />
          <MiniMap nodeColor="#4a90d9" maskColor="rgba(0, 0, 0, 0.3)" style={{ background: '#252525', borderRadius: '8px' }} />
          <Panel position="top-left" style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => handleAddNode('input')} style={btnStyle}>+ Input</button>
            <button onClick={() => handleAddNode('process')} style={btnStyle}>+ Process</button>
            <button onClick={() => handleAddNode('output')} style={btnStyle}>+ Output</button>
          </Panel>
        </ReactFlow>
      </div>

      {/* 侧边栏 */}
      <div style={{ width: 280, background: '#252525', borderLeft: '1px solid #333', padding: '16px', overflow: 'auto' }}>
        <h3 style={{ color: '#fff', marginBottom: '16px' }}>创作节点</h3>
        <div style={nodeCardStyle} onClick={() => handleAddNode('input')}>
          <div style={{ fontWeight: 'bold', color: '#4a90d9' }}>Text Input</div>
          <div style={{ fontSize: '12px', color: '#888' }}>文本输入节点</div>
        </div>
        <div style={nodeCardStyle} onClick={() => handleAddNode('prompt')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Prompt</div>
          <div style={{ fontSize: '12px', color: '#888' }}>提示词节点</div>
        </div>
        <div style={nodeCardStyle} onClick={() => handleAddNode('article')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Article Structure</div>
          <div style={{ fontSize: '12px', color: '#888' }}>文章结构</div>
        </div>
        <div style={nodeCardStyle} onClick={() => handleAddNode('script')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Script Scene</div>
          <div style={{ fontSize: '12px', color: '#888' }}>脚本场景</div>
        </div>
        <div style={nodeCardStyle} onClick={() => handleAddNode('music')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Music Rhythm</div>
          <div style={{ fontSize: '12px', color: '#888' }}>音乐节奏</div>
        </div>
        <div style={nodeCardStyle} onClick={() => handleAddNode('output')}>
          <div style={{ fontWeight: 'bold', color: '#4ad97c' }}>Output</div>
          <div style={{ fontSize: '12px', color: '#888' }}>输出节点</div>
        </div>
        <div style={{ marginTop: '24px', padding: '12px', background: '#1e1e1e', borderRadius: '8px' }}>
          <h4 style={{ color: '#fff', marginBottom: '8px' }}>使用说明</h4>
          <ul style={{ color: '#888', fontSize: '12px', paddingLeft: '16px', lineHeight: '1.8' }}>
            <li>点击侧边栏添加节点</li>
            <li>拖拽连接点连线</li>
            <li>点击节点删除</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = { padding: '8px 16px', background: '#4a90d9', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' };
const nodeCardStyle: React.CSSProperties = { padding: '12px', background: '#1e1e1e', borderRadius: '8px', marginBottom: '8px', cursor: 'pointer', border: '1px solid #333', transition: 'border-color 0.2s' };

export { useFlowStore };
export default FlowEditor;
