import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/requests.js");

const nextConfig = {
  reactStrictMode: true,
};;

const nextIntlConfig = withNextIntl(nextConfig);

console.log(process.env.SENTRY_AUTH_TOKEN);

export default withSentryConfig(nextIntlConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  sourcemaps: {
    disable: true,
  },

  silent: !process.env.CI,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: false,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});