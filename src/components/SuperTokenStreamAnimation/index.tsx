import React from "react";
import { motion } from "framer-motion";
import { useColorMode } from "@docusaurus/theme-common";

export default function SuperTokenStreamAnimation({
  className = "",
}: {
  className?: string;
}) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const w = 440;
  const h = 240;
  const tokenX = 90;
  const receiverX = w - 70;
  const centerY = h / 2;

  const textColor = isDark ? "#e0e0e0" : "#1a1a2a";
  const mutedColor = isDark ? "#8a8aa0" : "#6a6a80";
  const superFill = isDark ? "#1a2a1a" : "#eaf7e0";
  const receiverFill = isDark ? "#1e2a2e" : "#e8f0f0";

  const receivers = [
    { y: centerY - 55, label: "Receiver A" },
    { y: centerY + 55, label: "Receiver B" },
  ];

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
          <linearGradient
            id="stStreamGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#86ED1E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0d8f7f" stopOpacity="0.8" />
          </linearGradient>
          <filter id="stGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stream lines and particles */}
        {receivers.map((r, i) => {
          const path = `M ${tokenX + 36} ${centerY} Q ${w / 2} ${centerY} ${receiverX - 24} ${r.y}`;
          return (
            <g key={i}>
              {/* Background path */}
              <path
                d={path}
                fill="none"
                stroke="#86ED1E"
                strokeWidth="1"
                strokeOpacity="0.12"
              />
              {/* Animated dashed line */}
              <motion.path
                d={path}
                fill="none"
                stroke="url(#stStreamGrad)"
                strokeWidth="2"
                strokeDasharray="8 16"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -48 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                opacity={0.35}
              />
              {/* Flowing particles */}
              {[0, 1, 2].map((p) => (
                <circle
                  key={p}
                  r="3"
                  fill="url(#stStreamGrad)"
                  filter="url(#stGlow)"
                >
                  <animateMotion
                    dur="2.5s"
                    begin={`${p * 0.7 + i * 0.3}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    path={path}
                  />
                </circle>
              ))}
            </g>
          );
        })}

        {/* Super Token */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          {/* Pulsing glow ring */}
          <circle
            cx={tokenX}
            cy={centerY}
            r={32}
            fill="none"
            stroke="#86ED1E"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="32;42;32"
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
          <circle
            cx={tokenX}
            cy={centerY}
            r={32}
            fill={superFill}
            stroke="#86ED1E"
            strokeWidth="1.5"
          />
          <text
            x={tokenX}
            y={centerY + 5}
            textAnchor="middle"
            fill="#86ED1E"
            fontSize="11"
            fontWeight="700"
          >
            Super
          </text>
          <text
            x={tokenX}
            y={centerY + 48}
            textAnchor="middle"
            fill={textColor}
            fontSize="9"
            fontWeight="500"
          >
            Pure Super Token
          </text>
        </motion.g>

        {/* Receivers */}
        {receivers.map((r, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.15 + i * 0.1,
              ease: "backOut",
            }}
          >
            <circle
              cx={receiverX}
              cy={r.y}
              r={22}
              fill={receiverFill}
              stroke="#0d8f7f"
              strokeWidth="1"
            />
            <text
              x={receiverX}
              y={r.y + 4}
              textAnchor="middle"
              fill="#0d8f7f"
              fontSize="9"
              fontWeight="600"
            >
              {String.fromCharCode(65 + i)}
            </text>
            <text
              x={receiverX}
              y={r.y + 36}
              textAnchor="middle"
              fill={mutedColor}
              fontSize="8"
            >
              {r.label}
            </text>
          </motion.g>
        ))}

        {/* Section labels */}
        <text
          x={tokenX}
          y={22}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="9"
          letterSpacing="0.08em"
        >
          SUPER TOKEN
        </text>
        <text
          x={receiverX}
          y={22}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="9"
          letterSpacing="0.08em"
        >
          RECEIVERS
        </text>
      </svg>
    </div>
  );
}
