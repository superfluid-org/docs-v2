import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We just transitioned to a new version of our technical documentation. If you cannot find the content you were looking for,
              please use the search function or check out our 
            </Translate>
             <a href="https://superfluid.gitbook.io" target="_blank"> legacy docs</a>.
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page">
              Thank you for understanding!
            </Translate>
          </p>
        </div>
      </div>
    </main>
  );
}
