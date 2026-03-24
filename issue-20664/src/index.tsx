
export function Link() {
  const router = useRouter();
  const onClick = useCallback((evt) => {
    const existingQuery = router.query;
    consume(existingQuery, evt);
  }, [router.query]);
  return onClick;
}