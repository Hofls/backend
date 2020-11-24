* Standard Node.js assertions
```
const assert = require('assert');
const userName = await page.innerText('.user-name');
assert.strictEqual(userName, 'Hofls');
```
* Jest assertions:
```
test('User name is correct', async () => {
    const userName = await page.innerText('.user-name');
    expect(userName).toEqual("Hofls")
});
```