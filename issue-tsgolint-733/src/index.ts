(async () => {
    const ha = 'ha/';
    return `
    ${await Deno.readTextFile(ha + 'foo/bar.js')}
  `;
})();
