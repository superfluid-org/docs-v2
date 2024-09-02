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
              We just transitioned to a new version of our technical documentation. Please use the search function to find the content you are looking for. If you are looking for the old documentation (v2), you can find it
            </Translate>
             <a href="https://v2.docs.superfluid.finance" target="_blank"> here</a>.
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
