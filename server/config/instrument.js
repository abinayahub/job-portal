// Import with `import * as Sentry from "@sentry/node"` if you are using ESM

import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://24c8f238b670bdb4116874e3684b2fc8@o4509791306645504.ingest.us.sentry.io/4509791311757312",
  
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});