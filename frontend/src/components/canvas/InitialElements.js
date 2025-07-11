import dagre from 'dagre';

const nodeWidth = 150;
const nodeHeight = 60;

// Build nodes with no positions
export const createNodesFromCharacters = (allCharacters) => {
    return allCharacters.map((char) => ({
    id: char.id,
    type: 'default',
    data: { label: `${char.name}` },
    position: { x: 0, y: 0 }, // Will be set by dagre
  }));

};

// Build edges from relationships
export const createEdgesFromRelationships = (relationships) => {
  return relationships.map((rel) => ({
    id: rel.id,
    source: rel.source_id,
    target: rel.target_id,
    label: rel.relationship_type,
    type: 'smoothstep',
  }));
};

// Lay out with dagre (Top to Bottom)
export const layoutElements = (nodes, edges, direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  return nodes.map((node) => {
    const pos = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      },
    };
  });
};
