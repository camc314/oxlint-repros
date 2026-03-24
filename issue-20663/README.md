This folder contains a repro to compare oxlint vs eslint's behaviour in react/rules-of-hooks given the following code:

```
export class NavigationCallbacks {
  static useEditItem(params) {
    return useCallback(() => {
      //
    }, []);
  }
}
```

Eslint:

```
  5:12  error  React Hook "useCallback" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
```

Oxlint

```
  × eslint-plugin-react-hooks(rules-of-hooks): React Hook "useCallback" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function.
   ╭─[src/index.tsx:5:12]
 4 │       static useEditItem(params) {
 5 │ ╭─▶     return useCallback(() => {
 6 │ │         //
 7 │ ╰─▶     }, []);
 8 │       }
   ╰────
```

Both eslint AND eslint-plugin-react-hooks reports the same error give this code
