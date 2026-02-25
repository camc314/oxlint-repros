import { useEffect } from 'react';

export function MyComponent() {
  const items = [{ id: '1' }, { id: '2' }];

  // Case 1: Array literal — correctly warned ✅
  const arr = [1, 2, 3];

  // Case 2: .map() call — NOT warned ❌
  const mapped = items.map((item) => item.id);

  // Case 3: .filter() call — NOT warned ❌
  const filtered = items.filter((item) => item.id === '1');

  // Case 4: Object.keys() — NOT warned ❌
  const keys = Object.keys({ a: 1 });

  useEffect(() => {
    console.log(arr, mapped, filtered, keys);
  }, [arr, mapped, filtered, keys]);
  //   ^^^  ^^^^^^  ^^^^^^^^  ^^^^
  //   ✅    ❌      ❌        ❌
  //   Only `arr` gets the "changes every render" warning

  return null;
}