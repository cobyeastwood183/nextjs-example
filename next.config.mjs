import { sentryWebpackPlugin } from "@sentry/webpack-plugin";
import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.devtool = "source-map";
    config.plugins.push(
      sentryWebpackPlugin({
        org: "sentry-coby-us",
        project: "nextjs",
        authToken: process.env.SENTRY_AUTH_TOKEN,
        release: {
          name: "e92334e9c4c82c966c8477ed9aab845b1116ffd0",
          uploadLegacySourcemaps: {
            paths: ["."],
            ignore: ["./node_modules"],
          },
        },
      })
    );
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  widenClientFileUpload: true,
});