import React from "react";
import { motion } from "framer-motion";
import { useColorMode } from "@docusaurus/theme-common";

export default function WrapAnimation({
  className = "",
}: {
  className?: string;
}) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const w = 480;
  const h = 190;
  const leftX = 100;
  const rightX = w - 100;
  const centerY = 86;

  const mutedColor = isDark ? "#8a8aa0" : "#6a6a80";
  const dimFill = isDark ? "#2a2a3e" : "#f0f0f5";
  const dimStroke = isDark ? "#555570" : "#b0b0c0";
  const superFill = isDark ? "#1a2a1a" : "#eaf7e0";
  const green = "#86ED1E";

  const tokenR = 28;
  const superR = 34;

  // Stacked token offsets (back → front)
  const stack = [
    { dx: -16, dy: -10 },
    { dx: -8, dy: -5 },
    { dx: 0, dy: 0 },
  ];

  const arrowStart = leftX + tokenR + 12;
  const arrowEnd = rightX - superR - 14;
  const arrowMid = (arrowStart + arrowEnd) / 2;
  const arrowPath = `M ${arrowStart} ${centerY} L ${arrowEnd} ${centerY}`;

  // Orbiting circles around the Super Token
  const orbitR = 48;
  const orbitPath = `M ${rightX} ${centerY - orbitR} A ${orbitR} ${orbitR} 0 0 1 ${rightX} ${centerY + orbitR} A ${orbitR} ${orbitR} 0 0 1 ${rightX} ${centerY - orbitR}`;

  // Emanating particles (small dots shooting outward)
  const emanateAngles = [0, 60, 120, 180, 240, 300];
  const emanateStart = superR + 4;
  const emanateEnd = superR + 30;

  return (
    <div
      className={className}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        style={{ width: "100%", height: "auto", maxWidth: w }}
      >
        <defs>
          <filter id="wrapGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ─── Stacked ERC20 Tokens (left) ─── */}
        {stack.map((s, i) => (
          <motion.g
            key={i}
            initial={{ x: -15, opacity: 0 }}
            animate={{
              x: 0,
              opacity: i === stack.length - 1 ? 1 : 0.3 + i * 0.15,
            }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <circle
              cx={leftX + s.dx}
              cy={centerY + s.dy}
              r={tokenR}
              fill={dimFill}
              stroke={dimStroke}
              strokeWidth="1.5"
            />
          </motion.g>
        ))}

        {/* Front token labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <text
            x={leftX}
            y={centerY - 2}
            textAnchor="middle"
            fill={mutedColor}
            fontSize="12"
            fontWeight="700"
          >
            USDC
          </text>
          <text
            x={leftX}
            y={centerY + 12}
            textAnchor="middle"
            fill={mutedColor}
            fontSize="7.5"
            opacity={0.6}
          >
            ERC20
          </text>
        </motion.g>

        <text
          x={leftX}
          y={centerY + tokenR + 24}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="9"
        >
          Any ERC20 Token
        </text>

        {/* ─── Transformation Arrow (center) ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          {/* Dashed guide line */}
          <line
            x1={arrowStart}
            y1={centerY}
            x2={arrowEnd}
            y2={centerY}
            stroke={green}
            strokeWidth="1.5"
            strokeOpacity={0.15}
            strokeDasharray="6 4"
          />

          {/* Arrowhead */}
          <polygon
            points={`${arrowEnd + 2},${centerY} ${arrowEnd - 6},${centerY - 5} ${arrowEnd - 6},${centerY + 5}`}
            fill={green}
            opacity={0.4}
          />

          {/* wrap() label */}
          <text
            x={arrowMid}
            y={centerY - 16}
            textAnchor="middle"
            fill={green}
            fontSize="11"
            fontFamily="monospace"
            opacity={0.7}
          >
            wrap()
          </text>

          {/* Traveling transformation pulses */}
          {[0, 1.5].map((delay) => (
            <circle key={delay} r="4" fill={green} filter="url(#wrapGlow)">
              <animateMotion
                dur="2.8s"
                begin={`${delay}s`}
                repeatCount="indefinite"
                path={arrowPath}
              />
              <animate
                attributeName="opacity"
                values="0;0.7;0.7;0"
                keyTimes="0;0.12;0.85;1"
                dur="2.8s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </motion.g>

        {/* ─── Super Token (right) ─── */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "backOut" }}
        >
          {/* Pulsing glow ring */}
          <circle
            cx={rightX}
            cy={centerY}
            r={superR}
            fill="none"
            stroke={green}
            strokeWidth="1"
          >
            <animate
              attributeName="r"
              values={`${superR};${superR + 12};${superR}`}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Main token circle */}
          <circle
            cx={rightX}
            cy={centerY}
            r={superR}
            fill={superFill}
            stroke={green}
            strokeWidth="2"
          />

          {/* Token name */}
          <text
            x={rightX}
            y={centerY - 3}
            textAnchor="middle"
            fill={green}
            fontSize="13"
            fontWeight="700"
          >
            USDCx
          </text>
          <text
            x={rightX}
            y={centerY + 11}
            textAnchor="middle"
            fill={green}
            fontSize="8"
            opacity={0.7}
          >
            Super Token
          </text>

        </motion.g>

        {/* ─── Orbiting & emanating power indicators ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Orbiting circles */}
          {[0, 1.4, 2.8].map((delay, i) => (
            <circle
              key={`orbit-${i}`}
              r={i === 1 ? "2" : "2.5"}
              fill={i === 1 ? "#0d8f7f" : green}
              filter="url(#wrapGlow)"
            >
              <animateMotion
                dur="4.2s"
                begin={`${delay}s`}
                repeatCount="indefinite"
                path={orbitPath}
              />
              <animate
                attributeName="opacity"
                values="0.7;0.35;0.7"
                dur="4.2s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* Emanating particles (tiny dots radiating outward) */}
          {emanateAngles.map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = rightX + Math.cos(rad) * emanateStart;
            const y1 = centerY + Math.sin(rad) * emanateStart;
            const x2 = rightX + Math.cos(rad) * emanateEnd;
            const y2 = centerY + Math.sin(rad) * emanateEnd;
            return (
              <circle key={`em-${i}`} r="1.5" fill={green}>
                <animateMotion
                  dur="2.5s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                  path={`M ${x1} ${y1} L ${x2} ${y2}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  keyTimes="0;0.3;1"
                  dur="2.5s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </motion.g>

        {/* Superpowers label */}
        <text
          x={rightX}
          y={centerY + superR + 24}
          textAnchor="middle"
          fill={green}
          fontSize="9"
          opacity={0.8}
        >
          Streams · Distributions
        </text>
      </svg>
    </div>
  );
}
