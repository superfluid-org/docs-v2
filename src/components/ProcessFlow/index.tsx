import ReactFlow, { Edge, Node } from 'react-flow-renderer';

interface ProcessFlowStep {
  id: string;
  label: string;
  description?: string;
}

interface ProcessFlowProps {
  steps: ProcessFlowStep[];
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  const VERTICAL_SPACING = 200;
  const HORIZONTAL_SPACING = 300;

  const nodes: Node[] = steps.map((step, index) => {
    // Special positioning for the last two nodes (success/failure outcomes)
    if (index === steps.length - 2 || index === steps.length - 1) {
      const xOffset = index === steps.length - 2 ? -HORIZONTAL_SPACING : HORIZONTAL_SPACING;
      return {
        id: step.id,
        data: {
          label: (
            <div className="flex flex-col p-3">
              <div
                className="font-bold text-lg border-b border-gray-300 pb-2"
                style={{ marginBottom: '10px' }}
              >
                {step.label}
              </div>
              {step.description && (
                <div className="text-sm text-gray-700 pt-2">{step.description}</div>
              )}
            </div>
          )
        },
        position: { 
          x: xOffset,
          y: (steps.length - 2) * VERTICAL_SPACING
        },
        type: 'default'
      };
    }

    return {
      id: step.id,
      data: {
        label: (
          <div className="flex flex-col p-3">
            <div
              className="font-bold text-lg border-b border-gray-300 pb-2"
              style={{ marginBottom: '10px' }}
            >
              {step.label}
            </div>
            {step.description && (
              <div className="text-sm text-gray-700 pt-2">{step.description}</div>
            )}
          </div>
        )
      },
      position: { x: 0, y: index * VERTICAL_SPACING },
      type: 'default'
    };
  });

  const edges: Edge[] = steps.slice(0, -2).map((step, index) => ({
    id: `${step.id}-${steps[index + 1].id}`,
    source: step.id,
    target: steps[index + 1].id,
    type: 'smoothstep'
  }));

  // Add the two final edges from "Waiting Period" to the outcomes
  edges.push(
    {
      id: `waiting-success`,
      source: steps[steps.length - 3].id,
      target: steps[steps.length - 2].id,
      type: 'smoothstep'
    },
    {
      id: `waiting-failure`,
      source: steps[steps.length - 3].id,
      target: steps[steps.length - 1].id,
      type: 'smoothstep'
    }
  );

  return (
    <div style={{ height: (steps.length - 1) * VERTICAL_SPACING + 100 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      />
    </div>
  );
}
