/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "xml-to-json",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const hono = new sst.aws.Function("xml-to-json", {
      url: true,
      handler: "src/index.handler",
    });

    return {
      api: hono.url,
    };
  },
});
