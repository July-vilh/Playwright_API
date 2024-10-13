/* Send a GET request to the specified URL (https://dummyapi.online/api/social-profiles/1).
Response checks:
Ensure that the request is successful and returns a status of 200.
Check that the Content-Type header is equal to 'application/json'.
Verify that the Server header matches one of the values in the array ["Netlify", "Cloudflare", "AWS", "Apache"].
Ensure that the response size (in bytes) is less than 600.
Body content checks:
Ensure that the response contains the property languages and count the number of elements in this array.
Check for the presence of the customFields field in the response body and ensure that the first field is named 'FavoriteBook' and its value contains the text '1984'. */

const { test, expect } = require('@playwright/test');

test('GET request', async ({ request }) => {
    // 1. Send a GET request to the specified URL
    const response = await request.get('https://dummyapi.online/api/social-profiles/1');
    const responseBody = await response.json();

    // 2.1. Check if the request was successful and returns status 200
    expect(response.ok()).toBeTruthy(); // Check that the response returned OK
    expect(response.status()).toBe(200); // Ensure the status code is 200

    // 2.2. Check that the Content-Type header is 'application/json'
    expect(response.headers()['content-type']).toContain('application/json');

    // 2.3. Check that the Server header matches one of the values in the array
    const serverHeader = response.headers()['server'];
    const allowedServers = ["Netlify", "Cloudflare", "AWS", "Apache"];
    expect(allowedServers).toContain(serverHeader);

    // 2.4. Ensure the size of the response (in bytes) is less than 600
    const contentLength = parseInt(response.headers()['content-length'], 10);
    expect(contentLength).toBeLessThan(600); // Correcting the logic here

    // 2.5. Ensure the response has the 'languages' property and count its elements
    expect(responseBody).toHaveProperty('languages');
    const languagesLength = responseBody.languages.length;
    console.log("Number of elements in the languages array: ", languagesLength);

    // 2.6. Check the presence of the 'customFields' property and validate its contents
    expect(responseBody).toHaveProperty('customFields');
    const customFields = responseBody.customFields;
    expect(customFields[0].fieldName).toBe('FavoriteBook');
    expect(customFields[0].fieldValue).toContain('1984');
});
