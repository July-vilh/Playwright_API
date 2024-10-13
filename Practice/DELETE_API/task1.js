/*
Make a DELETE request to the given URL https://reqres.in/api/users/2.
Print the status.
Ensure that the status is OK.
Ensure that the response code is 204.
Check if there is a Content-Type in the response; if so, print it; otherwise, print the message "No Content-Type because no content."
*/

const { test, expect } = require('@playwright/test');

test('DELETE request', async ({ request }) => {
    // Sending a DELETE request to the specified URL
    const response = await request.delete(`https://reqres.in/api/users/2`, {});

    // Printing the response status to the console
    console.log('Response status:', response.status());

    // Checking if the response is OK (status code 2xx)
    expect(response.ok()).toBeTruthy(); 

    // Ensuring the response status code is 204 (No Content)
    expect(response.status()).toBe(204);
    
    // Checking for the Content-Type header in the response
    const contentType = response.headers()['content-type'];

    // If Content-Type is present, print it; otherwise, print a message indicating its absence
    if (contentType) {
        console.log('Content-Type:', contentType);
    } else {
        console.log('No Content-Type because no content');
    }
});
