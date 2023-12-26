import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Logo from "@site/src/components/Logo";
import styled from "@emotion/styled";
import WavyBackground from "../components/WavyBackground";
import StepList from "@site/src/components/StepList";

import {
  ArrowUpRight as LinkIcon,
  BookOpen,
  HelpCircle,
  Info,
  MousePointer,
  AtSign,
} from "react-feather";
import { Step } from "@mui/material";

export const actions = [
  {
    title: "What is Superfluid?",
    icon: HelpCircle,
    to: "/docs/concepts/superfluid",
    text: `Learn about the core concepts of the Superfluid Protocol.`,
  },
  {
    title: "Use Cases",
    icon: Info,
    to: "/docs/use-cases/vesting",
    text: `Learn about our use cases and how to implement them for your users.`,
  },
  {
    title: "Protocol",
    icon: MousePointer,
    to: "/docs/Protocol/quickstart",
    text: `Learn about the core concepts of the Superfluid Protocol, and how to integrate it into your dApp.`,
  },
  {
    title: "SDK",
    icon: AtSign,
    to: "/docs/sdk/overview",
    text: `Learn about how to use the Superfluid SDK in your JavaScript/TypeScript project.`,
  },
  {
    title: "Technical Reference",
    icon: BookOpen,
    to: "/technical-reference",
    text: `A comprehensive reference for the Superfluid Protocol contracts.`,
  },
];

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`;

const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const LinkIconWrapper = styled.div`
  opacity: 0.25;
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div>
        <Layout
          title={`${siteConfig.title}`}
          description="What is Superfluid and How can I build on it? <head />"
        >
          <div>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Logo />
              <br />
              <span style={{ fontSize: "20px"}}>
                Technical Documentation for the Superfluid Protocol
              </span>
              <br />
              <StepList />
              <br />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
