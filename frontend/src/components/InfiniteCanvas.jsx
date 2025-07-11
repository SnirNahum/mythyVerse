import { useEffect, useCallback, useState } from "react";
import {
  Background,
  ReactFlow,
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  createEdgesFromRelationships,
  createNodesFromCharacters,
} from "./canvas/InitialElements";
import Loader from "./Loader";
import { useMythyRootsStore } from "../store/store";
import { getLayoutedElements } from "./canvas/layoutElements";

const relationships = [
  { id: "rel1", source_id: "cronus", target_id: "zeus", type: "parent" },
  { id: "rel2", source_id: "rhea", target_id: "zeus", type: "parent" },
  { id: "rel3", source_id: "zeus", target_id: "apollo", type: "parent" },
  { id: "rel4", source_id: "zeus", target_id: "artemis", type: "parent" },
  { id: "rel5", source_id: "zeus", target_id: "heracles", type: "parent" },
  { id: "rel6", source_id: "zeus", target_id: "persephone", type: "parent" },
  { id: "rel7", source_id: "demeter", target_id: "persephone", type: "parent" },
  { id: "rel8", source_id: "hades", target_id: "persephone", type: "spouse" },
  { id: "rel9", source_id: "zeus", target_id: "hera", type: "spouse" },
];

export function InfiniteCanvas() {
  const characters = useMythyRootsStore(
    (state) => state.currentUniverseCharacters
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!characters || characters.length === 0) return;

    const initialNodes = createNodesFromCharacters(characters || []);
    const initialEdges = createEdgesFromRelationships(relationships || []);
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      initialNodes,
      initialEdges
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [characters, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, type: ConnectionLineType.SmoothStep }, eds)
      ),
    [setEdges]
  );

  if (!characters || characters.length === 0) {
    return <Loader />;
  }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
    >
      <Background />
    </ReactFlow>
  );
}
