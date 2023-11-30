import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Logo from "@site/src/components/Logo";
import styled from "@emotion/styled";

import {
  ArrowUpRight as LinkIcon,
  BookOpen,
  HelpCircle,
  Info,
  MessageCircle,
} from "react-feather";

export const actions = [
  {
    title: "What is Superfluid?",
    icon: Info,
    to: "/docs/concepts/overview",
    text: `Learn about the core concepts of the Superfluid Protocol.`,
  },
  {
    title: "Products",
    icon: HelpCircle,
    to: "/docs/products/intro",
    text: `Learn how to integrate with Uniswap by building a dApp through guided examples.`,
  },
  {
    title: "For Developers",
    icon: BookOpen,
    to: "/docs/developers/overview",
    text: `Learn about the core concepts of the Superfluid Protocol, and how to integrate it into your dApp.`,
  },
  {
    title: "Technical Reference",
    icon: BookOpen,
    to: "/technical-reference",
    text: `Learn about the core concepts of the Superfluid Protocol, and how to integrate it into your dApp.`,
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
    <div className="customBackground">
      <Layout
        title={`${siteConfig.title}`}
        description="What is Superfluid and How can I build on it? <head />"
      >
        <div>
          <br />
          <br />
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
          </div>
          <Row>
            {actions.map((action) => (
              <Link style={{ textDecoration: "none" }} to={action.to}>
                <ShadowCard key={action.title}>
                  <TopSection>
                    <IconWrapper>
                      <action.icon style={{ width: "24px" }} />
                    </IconWrapper>
                    <LinkIconWrapper>
                      <LinkIcon />
                    </LinkIconWrapper>
                  </TopSection>
                  <h3
                    style={{
                      marginBottom: ".75rem",
                      fontWeight: 500,
                      color: "white",
                    }}
                  >
                    {action.title}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0.5rem",
                      fontWeight: 300,
                      color: "white",
                    }}
                  >
                    {action.text}
                  </p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </div>
      </Layout>
    </div>
  );
}
