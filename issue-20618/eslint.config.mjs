export default [
  {
    files: ['**/*.js'],
    rules: {
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    },
  },
];
