# Build your own Analytics.js

This is a fork of Segment's (analytics.js)[https://github.com/segmentio/analytics.js] and [#PR 154](https://github.com/segmentio/analytics.js/pull/514) by rcline.

This repository houses a pre-built version of `analytics.js` containing every analytics integration supported by Segment.

## Quick Start

1. Clone the repo down `git clone https://github.com/okgrow/analytics.js.git`
1. `cd analytics.js`
1. `npm install && npm run build`
1. The build will output these two files: `analytics.js` and `analytics.min.js`

Too reduce the final bundle size, you should remove any integrations that you are not using. To do that:

1. Open up the `lib/integrations.js` file and remove all the integrations that you are not using.
1. `npm run build`
1. Your `analytics.js` and `analytics.min.js` will now only contain the integrations you are using.

You can now include the `analytics.min.js` file with your project to add analytics to your web app.

## Documentation

The core logic of `analytics.js` is broken out into individual repositories:

- To report an issue with `analytics.js` itself, head over to [analytics.js-core](https://github.com/segmentio/analytics.js-core), where the core `analytics.js` logic is maintained.
- To report an issue with an integration. head over to the [analytics.js-integrations](https://github.com/segment-integrations?query=analytics.js-integration) organization, where we keep each integration in its own repository.

## License

Released under the [MIT license](License.md).
