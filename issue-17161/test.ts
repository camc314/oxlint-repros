// Reproduction attempt for oxc issue #17161
// https://github.com/oxc-project/oxc/issues/17161
//
// The reported issue shows @stylistic/space-before-function-paren
// incorrectly flagging a space between "=" and "(" as a function
// parenthesis when it's actually an assignment to a parenthesized expression.
//
// Error shown in the issue:
// × @stylistic(space-before-function-paren): Unexpected space before function parentheses.
//     ╭─[src/electron/fingerprint/Compute.ts:87:26]
//  86 │         if(availableParallelism > 1) {
//  87 │             availableParallelism = (processParallelism ?
//     ·                                   ─
//  88 │                                             2*availableParallelism :
//
// The underline points to the "=" sign, suggesting the rule is
// incorrectly treating "= (" as a function call pattern.

let availableParallelism = 1;
const processParallelism = true;

// Exact pattern from the issue - assignment with multiline ternary in parens
if(availableParallelism > 1) {
	availableParallelism = (processParallelism ?
									2*availableParallelism :
									availableParallelism)-1;
}

console.log(availableParallelism);
