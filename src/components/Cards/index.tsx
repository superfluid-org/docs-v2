import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '1rem'}}>
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GuideCard = ({ title, description, link }) => (
  <Link
    to={link}
    style={{
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
    <div className={styles.guide_card}>
      <div className={styles.guide_card_content}>
        <div className={styles.guide_card_text}>
          <h3 className={styles.guide_card_title}>{title}</h3>
          <p className={styles.guide_card_description}>{description}</p>
        </div>
        <ArrowIcon />
      </div>
    </div>
  </Link>
);

const GuideCardList = ({ leftGuides, rightGuides, leftTitle, rightTitle }) => {
  return (
    <div className={styles.guide_cards_container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px' }}>
        <div style={{ flex: 1 }}>
          <h2 className={styles.guide_cards_title} style={{ color: 'white', fontSize: '1.5rem' }}>{leftTitle}</h2>
          {leftGuides.map((guide, index) => (
            <GuideCard key={index} title={guide.title} description={guide.description} link={guide.link} />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <h2 className={styles.guide_cards_title} style={{ color: 'white', fontSize: '1.5rem' }}>{rightTitle}</h2>
          {rightGuides.map((guide, index) => (
            <GuideCard key={index} title={guide.title} description={guide.description} link={guide.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function GuideCards() {
  const {siteConfig} = useDocusaurusContext();
  
  const leftGuides = [
    { title: "What is Superfluid?", description: "Learn about the core concepts of Superfluid", link: "/docs/concepts/superfluid" },
    { title: "What are Super Tokens?", description: "Understand the powerful Super Token standard", link: "/docs/concepts/overview/super-tokens" },
    { title: "What are Distribution Pools?", description: "Understand the power of Money Streaming", link: "/docs/concepts/overview/distributions" },
    { title: "Deploy your Super Token (no-code)", description: "Deploy your Wrapped or Pure Super Token", link: "/docs/category/deploy-a-super-token" },
  ];

  const rightGuides = [
    { title: "Smart Contracts Quick Start", description: "Quickly integrate Superfluid in your contracts", link: "/docs/protocol/quickstart" },
    { title: "SDK Quick Start", description: "Quickly build your Superfluid SDK", link: "/docs/sdk/quickstart" },
    { title: "Integrate Streams in your contract", description: "Learn how to create, update and delete flows from your contracts", link: "/docs/protocol/money-streaming/guides/create-update-delete-flow" },
    { title: "Integrate Distribution Pools in your contracts", description: "Learn how to create and manage Pools from your contracts", link: "/docs/protocol/distributions/guides/pools" },
  ];

  return (
    <div className={styles.guide_cards_wrapper}>
      <GuideCardList 
        leftTitle="Learn about Superfluid"
        rightTitle="Integrate with Superfluid"
        leftGuides={leftGuides}
        rightGuides={rightGuides}
      />
    </div>
  );
}