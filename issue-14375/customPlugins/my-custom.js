import { definePlugin, defineRule } from 'oxlint';

export default definePlugin({
  meta: { name: 'my-custom-plugin' },
  rules: {
    'no-switch': defineRule({
      create: context => ({
        SwitchStatement: node =>
          context.report({node: node, message: 'Do not use switch 🙏'}),
      }),
    }),
  },
});
