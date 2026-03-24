This folder contains a repro to compare oxlint vs eslint's behaviour in react/rules-of-hooks given the following code:

```
function Link() {
    const router = useRouter();
    const onClick = useCallback((evt) => {
        const existingQuery = router.query;
        consume(existingQuery, evt);
    }, [router.query]);
    return onClick;
}
```

Eslint: no warnings & no errors

Oxlint: no warnings & no errors

