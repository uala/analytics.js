/* eslint quote-props: 0 */
'use strict';

/*
 Add or remove all integrations you want to be bundled into your analytics.js & analytics.min.js file here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure that any integrations you have added are also installed and saved as a devDependencies in the package.json
 */
module.exports = {
  // 'amplitude': require('@segment/analytics.js-integration-amplitude'),
  // 'chartbeat': require('@segment/analytics.js-integration-chartbeat'),
  // 'comscore': require('@segment/analytics.js-integration-comscore'),
  // 'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  // 'hubspot': require('@segment/analytics.js-integration-hubspot'),
  // 'intercom': require('@segment/analytics.js-integration-intercom'),
  // 'keen-io': require('@segment/analytics.js-integration-keen-io'),
  // 'kissmetrics': require('@segment/analytics.js-integration-kissmetrics'),
  // 'mixpanel': require('@segment/analytics.js-integration-mixpanel'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),
  // 'quantcast': require('@segment/analytics.js-integration-quantcast')
};
