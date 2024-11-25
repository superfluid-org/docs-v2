import React from 'react';
import styles from './StepItem.module.css';
import {
  ArrowUpRight,
  BookOpen,
  HelpCircle,
  Info,
  MousePointer,
  AtSign,
} from "react-feather";

export const actions = [
  {
    title: "What is Superfluid?",
    icon: HelpCircle,
    to: "/docs/concepts/superfluid",
    text: `Learn about the core concepts of the Superfluid Protocol.`,
  },
  {
    title: "Get Started",
    icon: ArrowUpRight,
    to: "/docs/protocol/quickstart",
    text: `Start building very quickly with Superfluid.`,
  },
  {
    title: "Contracts",
    icon: MousePointer,
    to: "/docs/protocol/quickstart",
    text: `Learn about the core concepts of the Superfluid Protocol, and how to build your smart contracts.`,
  },
  {
    title: "SDK",
    icon: AtSign,
    to: "/docs/sdk/overview",
    text: `Learn about how to interact with Superfluid to build your client-side SDK.`,
  },
  {
    title: "Technical Reference",
    icon: BookOpen,
    to: "/docs/technical-reference/CFAv1Forwarder",
    text: `A comprehensive reference for the most relevant Superfluid contracts.`,
  },
];

const StepList = () => {
  return (
    <div className={styles.stepList}>
      {actions.map((action, index) => (
        <a href={action.to} key={index} className={styles.stepItem}>
          <div className={styles.stepContent}>
            <div className={styles.stepNumber}>
              {String(index + 1).padStart(3, '0')}
            </div>
            <div className={styles.stepTitle}>
              <h3>{action.title}</h3>
            </div>
            <div className={styles.stepText}>
              <p>{action.text}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default StepList;
