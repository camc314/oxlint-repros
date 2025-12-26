# React Compiler Rules with Oxlint

This folder demonstrates how to configure oxlint to run React Compiler rules using the `eslint-plugin-react-hooks` package with plugin aliasing.

## Setup

1. Install dependencies:
```bash
npm install
```

2. The configuration includes:
   - `oxlint` for linting
   - `eslint-plugin-react-hooks` which includes React Compiler rules

3. `.oxlintrc.json` is configured to use external JS plugins with aliasing:
```json
{
    "$schema": "https://raw.githubusercontent.com/oxc-project/oxc/main/npm/oxlint/configuration_schema.json",
    "jsPlugins": [
        {
            "name": "react-compiler",
            "specifier": "eslint-plugin-react-hooks"
        }
    ],
    "rules": {
        "react-compiler/immutability": "error"
    }
}
```

The key points are:
- Use `jsPlugins` (not `plugins`) for external JavaScript ESLint plugins
- Use plugin aliasing with `name` and `specifier` to give the plugin a custom name
- The React Compiler rules are included in `eslint-plugin-react-hooks` (version 7.0+)
- Enable specific rules using the format `<alias>/<rule-name>`

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

This code mutates props directly, which violates the `immutability` rule from React Compiler.

## Running Oxlint

```bash
npm run lint
```

## Output

```
> issue-react-compiler-rules@1.0.0 lint
> oxlint

WARNING: JS plugins are experimental and not subject to semver.
Breaking changes are possible while JS plugins support is under development.

  × react-compiler(immutability): Error: This value cannot be modified
  │ 
  │ Modifying component props or hook arguments is not allowed. Consider using a local variable instead.
  │ 
  │   2 | function MyComponent(props) {
  │   3 |   // This violates the rule: mutating props directly
  │ > 4 |   props.value = 42;
  │     |   ^^^^^ value cannot be modified
  │   5 |
  │   6 |   return <div>{props.value}</div>;
  │   7 | }
   ╭─[src/index.jsx:4:3]
 3 │   // This violates the rule: mutating props directly
 4 │   props.value = 42;
   ·   ─────
 5 │   
   ╰────

Found 0 warnings and 1 error.
Finished in 440ms on 1 file using 4 threads.
```

## Result

Successfully configured oxlint to run React Compiler rules! The React Compiler rules are available in `eslint-plugin-react-hooks` version 7.0+, and can be used with oxlint through the external JS plugins feature with plugin aliasing.

Note: JS plugins are experimental in oxlint and not subject to semver.

