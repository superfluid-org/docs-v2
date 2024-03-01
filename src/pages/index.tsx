import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Logo from "@site/src/components/Logo";
import StepList from "@site/src/components/StepList";
import { useState, useEffect } from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/superfluidfinance.matomo.cloud/container_mTymCBec.js'; s.parentNode.insertBefore(g,s);
   }, []);

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
              <span style={{ fontSize: "20px" }}>
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
