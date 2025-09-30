import { foo } from 'bar';
// `bar` is unused, but reported

const { foo } = bar;
// `foo` is unused, but not reported

// `unusedFunction` is unused, but reported
// it's safe to remove
function unusedFunction(a, b) {
    // a,b are both unused, but not reported
}

const x = (() => {
    throw new Error('oops');
})();
// `x` is unused, and reported

try {
} catch (e) {}
// `e` is unused, but reported
