import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

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
    <div
      style={{
        backgroundColor: 'transparent',
        borderRadius: 'var(--ifm-card-border-radius)',
        border: '1px solid var(--ifm-color-emphasis-300)',
        padding: 'var(--ifm-card-vertical-spacing) var(--ifm-card-horizontal-spacing)',
        marginBottom: 'var(--ifm-spacing-vertical)',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-300)'}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <div>
          <h3 style={{marginBottom: '0.5rem'}}>{title}</h3>
          <p style={{color: 'var(--ifm-color-emphasis-700)', margin: 0}}>{description}</p>
        </div>
        <ArrowIcon />
      </div>
    </div>
  </Link>
);

const GuideCardList = ({ leftGuides, rightGuides, leftTitle, rightTitle }) => {
  return (
    <div style={{maxWidth: '1000px', margin: '0 auto'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', gap: '2rem'}}>
        <div style={{flex: 1}}>
          <h2 style={{marginBottom: '1rem'}}>{leftTitle}</h2>
          {leftGuides.map((guide, index) => (
            <GuideCard key={index} title={guide.title} description={guide.description} link={guide.link} />
          ))}
        </div>
        <div style={{flex: 1}}>
          <h2 style={{marginBottom: '1rem'}}>{rightTitle}</h2>
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
    { title: "What are Ditribution Pools?", description: "Understand the power of Money Streaming", link: "/docs/concepts/overview/distributions" },
    { title: "Deploy your Super Token (no-code)", description: "Deploy your Wrapped or Pure Super Token", link: "/docs/category/deploy-a-super-token" },
  ];

  const rightGuides = [
    { title: "Smart Contracts Quick Start", description: "Quickly integrate Superfluid in your contracts", link: "/docs/protocol/quickstart" },
    { title: "SDK Quick Start", description: "Quickly build your Superfluid SDK", link: "/docs/sdk/quickstart" },
    { title: "Integrate Streams in your contract", description: "Learn how to create, update and delete flows from your contracts", link: "/docs/protocol/money-streaming/guides/create-update-delete-flow" },
    { title: "Integrate Distribution Pools in your contracts", description: "Learn how to create and manage Pools from your contracts", link: "/docs/protocol/distributions/guides/pools" },
  ];

  return (
    <GuideCardList 
      leftTitle="Learn about Superfluid"
      rightTitle="Integrate with Superfluid"
      leftGuides={leftGuides}
      rightGuides={rightGuides}
    />
  );
}