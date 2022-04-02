const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/present-create-react-app'
  ],
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
}