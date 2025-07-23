import { useEffect, useCallback } from "react";
import {
  Background,
  ReactFlow,
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  createEdgesFromRelationships,
  createNodesFromCharacters,
} from "./canvas/InitialElements";
import Loader from "./Loader";
import { useMythyRootsStore } from "../store/store";
import { getLayoutedElements } from "./canvas/layoutElements";

export function InfiniteCanvas() {
  const characters = useMythyRootsStore(
    (state) => state.currentUniverseCharacters
  );
  const relationships = useMythyRootsStore(
    (state) => state.CurrentRelationships
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { fitView } = useReactFlow();

  useEffect(() => {
    if (!characters || characters.length === 0) return;

    const initialNodes = createNodesFromCharacters(characters);
    const initialEdges = createEdgesFromRelationships(relationships);
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      initialNodes,
      initialEdges
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);

    fitView();
  }, [characters, relationships, setNodes, setEdges, fitView]);
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
