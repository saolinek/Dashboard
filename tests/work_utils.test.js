const fs = require('fs');
const path = require('path');

/**
 * Extracts the minToTime function from apps/work.html in a way that is less sensitive to indentation.
 */
function getMinToTime() {
    const htmlPath = path.join(__dirname, '../apps/work.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    // Look for the start of the function and then find the matching closing brace.
    const searchStr = 'function minToTime(m) {';
    const startIdx = html.indexOf(searchStr);
    if (startIdx === -1) {
        throw new Error('Could not find minToTime function start in apps/work.html');
    }

    let braceCount = 1;
    let endIdx = -1;
    for (let i = startIdx + searchStr.length; i < html.length; i++) {
        if (html[i] === '{') braceCount++;
        else if (html[i] === '}') braceCount--;

        if (braceCount === 0) {
            endIdx = i;
            break;
        }
    }

    if (endIdx === -1) {
        throw new Error('Could not find matching closing brace for minToTime function');
    }

    const fnStr = html.substring(startIdx, endIdx + 1);
    // Use Function constructor or eval to create the function object
    return eval(`(${fnStr})`);
}

const minToTime = getMinToTime();

const tests = [
    { input: 0, expected: '00:00' },
    { input: 1, expected: '00:01' },
    { input: 59, expected: '00:59' },
    { input: 60, expected: '01:00' },
    { input: 90, expected: '01:30' },
    { input: 600, expected: '10:00' },
    { input: 1439, expected: '23:59' },
    { input: 1440, expected: '24:00' },
    { input: 1500, expected: '25:00' },
    // Negative cases
    { input: -1, expected: '-00:01' },
    { input: -60, expected: '-01:00' },
    { input: -90, expected: '-01:30' },
];

let failed = false;

console.log('Running tests for minToTime...');

tests.forEach(({ input, expected }) => {
    const actual = minToTime(input);
    if (actual === expected) {
        console.log(`✅ PASS: minToTime(${input}) === '${expected}'`);
    } else {
        console.error(`❌ FAIL: minToTime(${input}) Expected '${expected}', got '${actual}'`);
        failed = true;
    }
});

if (failed) {
    process.exit(1);
} else {
    console.log('\nAll tests passed!');
}
