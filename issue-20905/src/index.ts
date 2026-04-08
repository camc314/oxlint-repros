new Promise((resolve) => resolve(true))
  .catch(() => console.log('catch'))
  .finally(() => console.log('finally'));
