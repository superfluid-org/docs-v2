import React from "react";

/**
 * SVG-based Ethereum-style blockie avatar.
 * Deterministic color grid from address hash, mirrored for symmetry.
 * No canvas — fully SSR-safe.
 */

interface BlockieProps {
  seed: string;
  x: number;
  y: number;
  r: number;
  clipId: string;
}

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function seedColors(seed: string): [string, string, string] {
  const h = hashCode(seed.toLowerCase());
  const hue1 = h % 360;
  const hue2 = (h * 13) % 360;
  const hue3 = (h * 29) % 360;
  return [
    `hsl(${hue1}, 65%, 55%)`,
    `hsl(${hue2}, 55%, 45%)`,
    `hsl(${hue3}, 50%, 65%)`,
  ];
}

function buildGrid(seed: string): number[] {
  const h = hashCode(seed.toLowerCase());
  const grid: number[] = [];
  for (let i = 0; i < 25; i++) {
    grid.push(((h >> (i % 30)) ^ (h >> ((i * 7) % 30))) & 3);
  }
  return grid;
}

export function Blockie({ seed, x, y, r, clipId }: BlockieProps) {
  const colors = seedColors(seed);
  const grid = buildGrid(seed);
  const size = 5;
  const cellSize = (r * 2) / size;
  const half = Math.ceil(size / 2);

  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <circle cx={x} cy={y} r={r} />
        </clipPath>
      </defs>
      <circle cx={x} cy={y} r={r} fill={colors[0]} />
      <g clipPath={`url(#${clipId})`}>
        {Array.from({ length: size }, (_, row) =>
          Array.from({ length: half }, (_, col) => {
            const idx = row * size + col;
            const colorIdx = grid[idx] % 3;
            if (colorIdx === 0) return null; // background color — skip
            const fill = colors[colorIdx];
            const rx = x - r + col * cellSize;
            const ry = y - r + row * cellSize;
            const mirrorCol = size - 1 - col;
            return (
              <React.Fragment key={`${row}-${col}`}>
                <rect
                  x={rx}
                  y={ry}
                  width={cellSize}
                  height={cellSize}
                  fill={fill}
                />
                {col !== mirrorCol && (
                  <rect
                    x={x - r + mirrorCol * cellSize}
                    y={ry}
                    width={cellSize}
                    height={cellSize}
                    fill={fill}
                  />
                )}
              </React.Fragment>
            );
          })
        )}
      </g>
    </g>
  );
}

export default Blockie;
