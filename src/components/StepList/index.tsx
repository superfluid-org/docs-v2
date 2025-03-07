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

import { 
  Gavel
} from '@phosphor-icons/react';

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
    to: "/docs/sdk/quickstart",
    text: `Learn about how to interact with Superfluid to build your client-side SDK.`,
  },
  {
    title: "Governance",
    icon: Gavel,
    to: "/docs/governance",
    text: `Learn about the Superfluid DAO governance and tokenomics.`,
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
        <a href={action.to} key={index} className={styles.stepItem} style={{ textDecoration: 'none' }}>
          <div className={styles.stepContent}>
            <div className={styles.stepIcon}>
              <action.icon size={20} />
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
