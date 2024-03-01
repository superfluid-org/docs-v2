// src/components/MatomoTracking.js

import { useEffect } from 'react';

const MatomoTracking = () => {
  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/superfluidfinance.matomo.cloud/container_mTymCBec.js'; s.parentNode.insertBefore(g,s);
   }, []);

  return null; // This component does not render anything
};

export default MatomoTracking;
