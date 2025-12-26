# React Compiler Rules with Oxlint

This folder demonstrates how to configure oxlint to run React Compiler rules from the `eslint-plugin-react-compiler` package.

## Setup

1. Install dependencies:
```bash
npm install
```

2. The configuration includes:
   - `oxlint` for linting
   - `eslint-plugin-react-compiler` for React Compiler rules

3. `.oxlintrc.json` is configured to enable the `react-compiler` plugin:
```json
{
    "$schema": "https://raw.githubusercontent.com/oxc-project/oxc/main/npm/oxlint/configuration_schema.json",
    "plugins": ["react-compiler"]
}
```

## Example Code

The `src/index.jsx` file contains a React component that violates React Compiler rules:

```jsx
// Example component that violates React Compiler rules
function MyComponent(props) {
  // This violates the rule: mutating props directly
  props.value = 42;
  
  return <div>{props.value}</div>;
}

export default MyComponent;
```

This code mutates props directly, which is a violation that the React Compiler would catch.

## Running Oxlint

```bash
npm run lint
```

## Output

```
> issue-react-compiler-rules@1.0.0 lint
> oxlint

Failed to parse oxlint configuration file.

  × Failed to parse config with error Error("Unknown plugin: 'react-compiler'.", line: 0, column: 0)
```

## Result

As of oxlint version 1.35.0, the `react-compiler` plugin is not yet supported. The available plugins are:
- `unicorn` (enabled by default)
- `oxc` (enabled by default)
- `typescript` (enabled by default)
- `import`
- `react`
- `jsdoc`
- `jest`
- `vitest`
- `jsx-a11y`
- `nextjs`
- `react-perf`
- `promise`
- `node`
- `vue`

To add React Compiler support, oxlint would need to implement the rules from `eslint-plugin-react-compiler`.
