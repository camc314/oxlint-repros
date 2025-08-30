const oxc = require('oxc-parser');
const fs = require('fs');
const path = require('path');

// Test with the actual problematic file
const testFile = 'test-complex.ts';
const sourceCode = fs.readFileSync(testFile, 'utf8');

// Test 1: Simple numeric separators (WORKS)
const simpleCode = `
const numbers = {
  small: 1_000,
  medium: 10_000,
  large: 100_000,
  decimal: 1_000.5
};
export { numbers };
`;

try {
    const result = oxc.parseSync(simpleCode, 'simple.ts');
    console.log('✅ Simple file:', result.program.body.length, 'nodes');
} catch (error) {
    console.log('❌ Simple file failed:', error.message);
}

// Test 2: Actual problematic file (FAILS)
try {
    const result = oxc.parseSync(sourceCode, testFile);
    console.log('✅ Actual file:', result.program.body.length, 'nodes');
    if (result.errors && result.errors.length > 0) {
        console.log('❌ Errors:', result.errors.length);
        console.log('   Error 1:', result.errors[0].message);
    }
} catch (error) {
    console.log('❌ Actual file failed:', error.message);
}
