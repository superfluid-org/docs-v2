import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import StepList from "@site/src/components/StepList";
import Cards from "@site/src/components/Cards";
import { useState, useEffect } from "react";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/superfluidfinance.matomo.cloud/container_mTymCBec.js'; s.parentNode.insertBefore(g,s);
   }, []);

  return (

    <div className={styles.landingPageWrapper}>
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
              position: "relative",
              zIndex: 1,
            }}
          >
            <span style={{ 
              fontFamily: "GT Walsheim Pro",
              fontSize: "36px",
              fontWeight: 500,
              lineHeight: "43.2px",
              letterSpacing: "-0.01em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "rgba(134, 238, 30, 1)"
            }}>
              Technical Documentation
            </span>
            <span style={{ 
              fontFamily: "GT Walsheim Pro",
              fontSize: "50px",
              fontWeight: 500,
              lineHeight: "100px",
              letterSpacing: "-0.01em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "rgba(255, 255, 255, 1)"
            }}>
              The Most Advanced Money Streaming Protocol
            </span>
            <br />
            <StepList />
            <br />
            <br />
            <Cards />
            <br />
          </div>
        </div>
      </Layout>
    </div>
  );
}
