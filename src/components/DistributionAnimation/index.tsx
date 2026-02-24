import React from "react";
import { motion } from "framer-motion";
import { Blockie } from "@site/src/components/Blockie";
import { useColorMode } from "@docusaurus/theme-common";

interface DistributionAnimationProps {
  mode: "instant" | "streaming";
  className?: string;
}

export default function DistributionAnimation({
  mode,
  className = "",
}: DistributionAnimationProps) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const w = 580;
  const h = 420;
  const senderX = 70;
  const poolX = w / 2;
  const receiverX = w - 70;
  const centerY = h / 2;

  const textColor = isDark ? "#e0e0e0" : "#1a1a2a";
  const mutedColor = isDark ? "#8a8aa0" : "#6a6a80";
  const poolFill = isDark ? "#1e2a1e" : "#eaf7e0";
  const poolStroke = "#86ED1E";

  const receivers = [
    {
      y: centerY - 100,
      label: "Member A",
      units: "50 units",
      seed: "0xaaa0000000000000000000000000000000000001",
    },
    {
      y: centerY,
      label: "Member B",
      units: "30 units",
      seed: "0xbbb0000000000000000000000000000000000002",
    },
    {
      y: centerY + 100,
      label: "Member C",
      units: "20 units",
      seed: "0xccc0000000000000000000000000000000000003",
    },
  ];

  const unitShares = [50, 30, 20];
  const totalUnits = 100;

  // Paths: sender → pool
  const senderToPoolPath = `M ${senderX + 36} ${centerY} L ${poolX - 40} ${centerY}`;

  // Paths: pool → each receiver
  const poolToReceiverPaths = receivers.map(
    (r) =>
      `M ${poolX + 40} ${centerY} Q ${(poolX + receiverX) / 2} ${centerY} ${receiverX - 36} ${r.y}`
  );

  const isInstant = mode === "instant";

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
          <linearGradient id={`distGrad-${mode}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#86ED1E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0d8f7f" stopOpacity="0.8" />
          </linearGradient>
          <filter id={`distGlow-${mode}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sender → Pool line */}
        <path
          d={senderToPoolPath}
          fill="none"
          stroke="#86ED1E"
          strokeWidth="1"
          strokeOpacity="0.15"
        />
        {isInstant ? (
          /* Instant: one big ball travels to pool, then splits into smaller balls */
          <circle
            r="6"
            fill={`url(#distGrad-${mode})`}
            filter={`url(#distGlow-${mode})`}
          >
            <animateMotion
              dur="5s"
              begin="0s"
              repeatCount="indefinite"
              path={senderToPoolPath}
              keyPoints="0;1;1"
              keyTimes="0;0.3;1"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0;0"
              keyTimes="0;0.04;0.25;0.3;1"
              dur="5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        ) : (
          /* Streaming: continuous flow */
          <>
            <motion.path
              d={senderToPoolPath}
              fill="none"
              stroke={`url(#distGrad-${mode})`}
              strokeWidth="2"
              strokeDasharray="8 16"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -48 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              opacity={0.4}
            />
            {[0, 1, 2].map((p) => (
              <circle
                key={`s2p-c-${p}`}
                r="3"
                fill={`url(#distGrad-${mode})`}
                filter={`url(#distGlow-${mode})`}
              >
                <animateMotion
                  dur="2s"
                  begin={`${p * 0.65}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                  path={senderToPoolPath}
                />
              </circle>
            ))}
          </>
        )}

        {/* Pool → Receiver lines */}
        {poolToReceiverPaths.map((path, i) => (
          <g key={`p2r-${i}`}>
            <path
              d={path}
              fill="none"
              stroke="#86ED1E"
              strokeWidth="1"
              strokeOpacity="0.15"
            />
            {isInstant ? (
              /* Instant: big ball splits — proportional smaller balls go to each member simultaneously */
              Array.from(
                { length: Math.max(1, Math.round((unitShares[i] / totalUnits) * 6)) },
                (_, p) => {
                  const ballR = 2 + (unitShares[i] / totalUnits) * 2.5;
                  const beginTime = 1.5 + p * 0.04;
                  return (
                    <circle
                      key={p}
                      r={ballR}
                      fill={`url(#distGrad-${mode})`}
                      filter={`url(#distGlow-${mode})`}
                    >
                      <animateMotion
                        dur="5s"
                        begin={`${beginTime}s`}
                        repeatCount="indefinite"
                        path={path}
                        keyPoints="0;1;1"
                        keyTimes="0;0.24;1"
                        calcMode="linear"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0;0"
                        keyTimes="0;0.03;0.18;0.24;1"
                        dur="5s"
                        begin={`${beginTime}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                }
              )
            ) : (
              /* Streaming: continuous proportional flow */
              <>
                <motion.path
                  d={path}
                  fill="none"
                  stroke={`url(#distGrad-${mode})`}
                  strokeWidth="2"
                  strokeDasharray="8 16"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -48 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  opacity={0.25 + (unitShares[i] / totalUnits) * 0.35}
                />
                {Array.from(
                  { length: Math.max(1, Math.round((unitShares[i] / totalUnits) * 4)) },
                  (_, p) => (
                    <circle
                      key={p}
                      r={2 + (unitShares[i] / totalUnits) * 2}
                      fill={`url(#distGrad-${mode})`}
                      filter={`url(#distGlow-${mode})`}
                    >
                      <animateMotion
                        dur="2.5s"
                        begin={`${p * 0.7 + i * 0.25}s`}
                        repeatCount="indefinite"
                        calcMode="linear"
                        path={path}
                      />
                    </circle>
                  )
                )}
              </>
            )}
          </g>
        ))}

        {/* Pool impact ring — flashes when big ball arrives (instant only) */}
        {isInstant && (
          <circle
            cx={poolX}
            cy={centerY}
            r="5"
            fill="none"
            stroke="#86ED1E"
            strokeWidth="2"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="5;32;32"
              keyTimes="0;0.06;1"
              dur="5s"
              begin="1.35s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0;0"
              keyTimes="0;0.06;1"
              dur="5s"
              begin="1.35s"
              repeatCount="indefinite"
            />
          </circle>
        )}

        {/* Sender node */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <Blockie
            seed="0xd15700000000000000000000000000000000000"
            x={senderX}
            y={centerY}
            r={32}
            clipId={`dist-sender-${mode}`}
          />
          {isInstant && (
            <circle
              cx={senderX}
              cy={centerY}
              r={32}
              fill="none"
              stroke="#86ED1E"
              strokeWidth="1.5"
              opacity="0.4"
            >
              <animate
                attributeName="r"
                values="32;46;32"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          )}
          {!isInstant && (
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
          )}
          <text
            x={senderX}
            y={centerY + 46}
            textAnchor="middle"
            fill={textColor}
            fontSize="10"
            fontWeight="600"
          >
            Distributor
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

        {/* Pool node */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "backOut" }}
        >
          <rect
            x={poolX - 36}
            y={centerY - 36}
            width={72}
            height={72}
            rx={14}
            fill={poolFill}
            stroke={poolStroke}
            strokeWidth="1.5"
          />
          <text
            x={poolX}
            y={centerY + 4}
            textAnchor="middle"
            fill={poolStroke}
            fontSize="20"
            fontWeight="700"
          >
            P
          </text>
          <text
            x={poolX}
            y={centerY + 52}
            textAnchor="middle"
            fill={textColor}
            fontSize="10"
            fontWeight="600"
          >
            Pool
          </text>
          <text
            x={poolX}
            y={centerY + 64}
            textAnchor="middle"
            fill={mutedColor}
            fontSize="8"
          >
            100 total units
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
              delay: 0.3 + i * 0.12,
              ease: "backOut",
            }}
          >
            <Blockie
              seed={r.seed}
              x={receiverX}
              y={r.y}
              r={28}
              clipId={`dist-recv-${mode}-${i}`}
            />
            <text
              x={receiverX}
              y={r.y + 42}
              textAnchor="middle"
              fill={textColor}
              fontSize="10"
              fontWeight="600"
            >
              {r.label}
            </text>
            <text
              x={receiverX}
              y={r.y + 54}
              textAnchor="middle"
              fill="#0d8f7f"
              fontSize="8"
            >
              {r.units}
            </text>
          </motion.g>
        ))}

        {/* Section labels */}
        <text
          x={senderX}
          y={28}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="10"
          letterSpacing="0.1em"
        >
          SENDER
        </text>
        <text
          x={poolX}
          y={28}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="10"
          letterSpacing="0.1em"
        >
          POOL
        </text>
        <text
          x={receiverX}
          y={28}
          textAnchor="middle"
          fill={mutedColor}
          fontSize="10"
          letterSpacing="0.1em"
        >
          MEMBERS
        </text>
      </svg>
    </div>
  );
}
