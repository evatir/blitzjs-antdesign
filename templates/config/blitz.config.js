const { sessionMiddleware, simpleRolesIsAuthorized } = require("blitz");
const withAntdLess = require("next-plugin-antd-less");

module.exports = (_, { defaultConfig }) =>
  withAntdLess({
    middleware: [
      sessionMiddleware({
        isAuthorized: simpleRolesIsAuthorized,
      }),
    ],
    ...defaultConfig,
    lessVarsFilePath: "./app/core/styles/custom.less",
    webpack: (config, _) => {
      return config;
    },
  });
