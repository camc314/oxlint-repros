This folder contains a repro to compare oxlint vs eslint's behaviour in react/rules-of-hooks given the following code:

```
const Foo = observer(function _Foo() {
  const isMobile = useScreenSize();
})

export { Foo }
```

Eslint:

```
  2:20  error  React Hook "useScreenSize" is called in function "_Foo" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"  react-hooks/rules-of-hooks
```

Oxlint

```
  × eslint-plugin-react-hooks(rules-of-hooks): React Hook "useScreenSize" is called in function "_Foo" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".
   ╭─[src/index.tsx:1:31]
 1 │ const Foo = observer(function _Foo() {
   ·                               ────
 2 │   const isMobile = useScreenSize();
   ╰────
```

Both eslint AND eslint-plugin-react-hooks reports the same error give this code
