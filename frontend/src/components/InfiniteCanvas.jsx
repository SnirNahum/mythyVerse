import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

function InfiniteCanvas() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow nodes={[]} edges={[]} fitView>
        <Background />
        <Controls position="top-right" />
      </ReactFlow>
    </div>
  );
}

export default InfiniteCanvas;
