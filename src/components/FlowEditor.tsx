import { useCallback, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
  Edge,
  BackgroundVariant,
  Panel,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// 创作节点组件
const CreativeNode = ({ data, type }: { data: any; type?: string }) => {
  const [text, setText] = useState(data.text || '');
  const [title, setTitle] = useState(data.title || '');
  const [sections, setSections] = useState(data.sections || '');

  return (
    <div style={{ minWidth: 160 }}>
      {/* 输入连接点 */}
      {(type === 'default' || type === 'output') && (
        <Handle
          type="target"
          position={Position.Left}
          style={{ background: '#4a90d9', width: 8, height: 8 }}
        />
      )}

      <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>{data.label}</div>
      {data.text !== undefined && (
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            style={{ width: '100%', height: '60px', resize: 'none', padding: '4px' }}
          />
        </div>
      )}
      {data.title !== undefined && (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            style={{ width: '100%', marginBottom: '4px', padding: '4px' }}
          />
        </div>
      )}
      {data.sections !== undefined && (
        <div>
          <textarea
            value={sections}
            onChange={(e) => setSections(e.target.value)}
            placeholder="Sections (one per line)"
            style={{ width: '100%', height: '80px', resize: 'none', padding: '4px' }}
          />
        </div>
      )}

      {/* 输出连接点 */}
      {(type === 'default' || type === 'input' || type === undefined) && (
        <Handle
          type="source"
          position={Position.Right}
          style={{ background: '#4ad97c', width: 8, height: 8 }}
        />
      )}
    </div>
  );
};

// 初始节点
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'creativeInput',
    data: { label: 'Text Input', text: 'Enter your story idea...' },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'creativeProcess',
    data: { label: 'Article Structure', title: 'My Creative Story', sections: 'Hook\nCharacter\nConflict\nResolution' },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: 'creativeOutput',
    data: { label: 'Output' },
    position: { x: 700, y: 100 },
  },
];

// 初始边
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#4a90d9' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#4ad97c' } },
];

// 节点类型映射
const nodeTypes: Record<string, any> = {
  creativeInput: (props: any) => <CreativeNode {...props} type="input" />,
  creativeProcess: (props: any) => <CreativeNode {...props} type="default" />,
  creativeOutput: (props: any) => <CreativeNode {...props} type="output" />,
};

function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#4a90d9' } }, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  const addNode = (nodeType: string) => {
    const id = `${nodes.length + 1}`;
    let type = 'creativeProcess';
    let label = 'Process';
    let data: any = { label };

    if (nodeType === 'input') {
      type = 'creativeInput';
      label = 'Text Input';
      data = { label, text: '' };
    } else if (nodeType === 'output') {
      type = 'creativeOutput';
      label = 'Output';
    } else if (nodeType === 'prompt') {
      data = { label: 'Prompt', text: '' };
    } else if (nodeType === 'article') {
      data = { label: 'Article Structure', title: '', sections: '' };
    } else if (nodeType === 'script') {
      data = { label: 'Script Scene', location: '', action: '' };
    } else if (nodeType === 'music') {
      data = { label: 'Music Rhythm', bpm: 120, timeSignature: '4/4' };
    }

    const newNode: Node = {
      id,
      type,
      data,
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteSelectedNode = () => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((n) => n.id !== selectedNode.id));
      setEdges((eds) => eds.filter((e) => e.source !== selectedNode.id && e.target !== selectedNode.id));
      setSelectedNode(null);
    }
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
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          style={{ background: '#1e1e1e' }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#444" />
          <Controls style={{ background: '#333', borderRadius: '8px' }} />
          <MiniMap
            nodeColor="#4a90d9"
            maskColor="rgba(0, 0, 0, 0.3)"
            style={{ background: '#252525', borderRadius: '8px' }}
          />
          <Panel position="top-left" style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => addNode('input')} style={btnStyle}>+ Input</button>
            <button onClick={() => addNode('process')} style={btnStyle}>+ Process</button>
            <button onClick={() => addNode('output')} style={btnStyle}>+ Output</button>
          </Panel>
          <Panel position="top-right">
            {selectedNode && (
              <button onClick={deleteSelectedNode} style={{ ...btnStyle, background: '#ff6b6b' }}>
                Delete Selected
              </button>
            )}
          </Panel>
        </ReactFlow>
      </div>

      {/* 侧边栏 */}
      <div style={{ width: 280, background: '#252525', borderLeft: '1px solid #333', padding: '16px', overflow: 'auto' }}>
        <h3 style={{ color: '#fff', marginBottom: '16px' }}>创作节点</h3>

        <div style={nodeCardStyle} onClick={() => addNode('input')}>
          <div style={{ fontWeight: 'bold', color: '#4a90d9' }}>Text Input</div>
          <div style={{ fontSize: '12px', color: '#888' }}>文本输入节点</div>
        </div>

        <div style={nodeCardStyle} onClick={() => addNode('prompt')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Prompt</div>
          <div style={{ fontSize: '12px', color: '#888' }}>提示词节点</div>
        </div>

        <div style={nodeCardStyle} onClick={() => addNode('article')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Article Structure</div>
          <div style={{ fontSize: '12px', color: '#888' }}>文章结构</div>
        </div>

        <div style={nodeCardStyle} onClick={() => addNode('script')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Script Scene</div>
          <div style={{ fontSize: '12px', color: '#888' }}>脚本场景</div>
        </div>

        <div style={nodeCardStyle} onClick={() => addNode('music')}>
          <div style={{ fontWeight: 'bold', color: '#d98c4a' }}>Music Rhythm</div>
          <div style={{ fontSize: '12px', color: '#888' }}>音乐节奏</div>
        </div>

        <div style={nodeCardStyle} onClick={() => addNode('output')}>
          <div style={{ fontWeight: 'bold', color: '#4ad97c' }}>Output</div>
          <div style={{ fontSize: '12px', color: '#888' }}>输出节点</div>
        </div>

        <div style={{ marginTop: '24px', padding: '12px', background: '#1e1e1e', borderRadius: '8px' }}>
          <h4 style={{ color: '#fff', marginBottom: '8px' }}>使用说明</h4>
          <ul style={{ color: '#888', fontSize: '12px', paddingLeft: '16px', lineHeight: '1.8' }}>
            <li>点击侧边栏添加节点</li>
            <li>拖拽连接点连线</li>
            <li>点击节点编辑内容</li>
            <li>选中节点后可删除</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: '8px 16px',
  background: '#4a90d9',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '13px',
};

const nodeCardStyle: React.CSSProperties = {
  padding: '12px',
  background: '#1e1e1e',
  borderRadius: '8px',
  marginBottom: '8px',
  cursor: 'pointer',
  border: '1px solid #333',
  transition: 'border-color 0.2s',
};

export default FlowEditor;
