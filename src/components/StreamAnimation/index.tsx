import React from "react";
import { motion } from "framer-motion";
import { Blockie } from "@site/src/components/Blockie";
import { useColorMode } from "@docusaurus/theme-common";

interface StreamAnimationProps {
  className?: string;
  compact?: boolean;
}

export default function StreamAnimation({
  className = "",
  compact = false,
}: StreamAnimationProps) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const h = compact ? 340 : 480;
  const w = compact ? 440 : 580;

  const senderX = 70;
  const receiverX = w - 70;
  const centerY = h / 2;

  const textColor = isDark ? "#e0e0e0" : "#1a1a2a";
  const mutedColor = isDark ? "#8a8aa0" : "#6a6a80";

  const receivers = compact
    ? [
        {
          y: centerY - 70,
          label: "Bob",
          rate: "0.038/s",
          seed: "0xb0b0000000000000000000000000000000000001",
        },
        {
          y: centerY + 70,
          label: "Carol",
          rate: "0.012/s",
          seed: "0xca401000000000000000000000000000000000002",
        },
      ]
    : [
        {
          y: centerY - 110,
          label: "Bob",
          rate: "0.038/s",
          seed: "0xb0b0000000000000000000000000000000000001",
        },
        {
          y: centerY,
          label: "Carol",
          rate: "0.012/s",
          seed: "0xca401000000000000000000000000000000000002",
        },
        {
          y: centerY + 110,
          label: "Dave",
          rate: "0.005/s",
          seed: "0xdave000000000000000000000000000000000003",
        },
      ];

  return (
    <div
      className={className}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <svg
        viewBox={`10 0 ${w - 20} ${h}`}
        style={{ width: "100%", height: "auto", maxWidth: w }}
      >
        <defs>
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#86ED1E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0d8f7f" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stream lines */}
        {receivers.map((r, i) => {
          const path = `M ${senderX + 36} ${centerY} Q ${w / 2} ${centerY} ${receiverX - 36} ${r.y}`;
          return (
            <g key={i}>
              <path
                d={path}
                fill="none"
                stroke="#86ED1E"
                strokeWidth="1"
                strokeOpacity="0.15"
              />
              {[0, 1, 2, 3].map((p) => (
                <motion.circle
                  key={p}
                  r="3"
                  fill="url(#streamGrad)"
                  filter="url(#glow)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{
                    duration: 2.5,
                    delay: p * 0.6 + i * 0.3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ offsetPath: `path('${path}')` } as React.CSSProperties}
                />
              ))}
              <motion.path
                d={path}
                fill="none"
                stroke="url(#streamGrad)"
                strokeWidth="2"
                strokeDasharray="8 16"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -48 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                opacity={0.4}
              />
            </g>
          );
        })}

        {/* Sender node */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <Blockie
            seed="0xa11ce00000000000000000000000000000000000"
            x={senderX}
            y={centerY}
            r={32}
            clipId="sender-blockie"
          />
          <circle
            cx={senderX}
            cy={centerY}
            r={32}
            fill="none"
            stroke="#86ED1E"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="32;44;32"
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
          <text
            x={senderX}
            y={centerY + 46}
            textAnchor="middle"
            fill={textColor}
            fontSize="10"
            fontWeight="600"
          >
            Alice
          </text>
          <text
            x={senderX}
            y={centerY + 58}
            textAnchor="middle"
            fill="#86ED1E"
            fontSize="8"
          >
            Sender
          </text>
        </motion.g>

        {/* Receiver nodes */}
        {receivers.map((r, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + i * 0.15,
              ease: "backOut",
            }}
          >
            <Blockie
              seed={r.seed}
              x={receiverX}
              y={r.y}
              r={32}
              clipId={`receiver-blockie-${i}`}
            />
            <text
              x={receiverX}
              y={r.y + 46}
              textAnchor="middle"
              fill={textColor}
              fontSize="10"
              fontWeight="600"
            >
              {r.label}
            </text>
            <text
              x={receiverX}
              y={r.y + 58}
              textAnchor="middle"
              fill="#0d8f7f"
              fontSize="8"
            >
              {r.rate}
            </text>
          </motion.g>
        ))}

        {/* Section labels */}
        <text
          x={senderX}
          y={compact ? 28 : 36}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="10"
          letterSpacing="0.1em"
        >
          SENDER
        </text>
        <text
          x={receiverX}
          y={compact ? 28 : 36}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="10"
          letterSpacing="0.1em"
        >
          RECEIVERS
        </text>
      </svg>
    </div>
  );
}
