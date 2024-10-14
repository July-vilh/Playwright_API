/*
https://jsonplaceholder.typicode.com/posts
1. Create an array of test data for updating users.
 - Required fields: userId, id, title, body
2. Execute POST requests for each element of the array.
 - Check the response status and ensure it equals 201.
 - Verify that the title in the response matches the sent title.
 - Measure and output the response time for each request.
 - Ensure the server response time is less than 2 seconds.
*/

const { test, expect } = require('@playwright/test');

/* 
1. Create an array of test data for updating users.
 - Required fields: userId, id, title, body 
*/ 
const testData = [
    { userId: 1, id: 1, title: "Title 1", body: "Body 1" },
    { userId: 2, id: 2, title: "Title 2", body: "Body 2" },
    { userId: 3, id: 3, title: "Title 3", body: "Body 3" },
    { userId: 4, id: 4, title: "Title 4", body: "Body 4" }
];

// 2. Execute POST requests for each element of the array.
test('POST requests for each element', async ({ request }) => {
    for (let i = 0; i < testData.length; i++)  {
        const data = testData[i]; // Get the current test data item.

        // Start time of the request to measure response time.
        const startTime = Date.now();

        // Sending a POST request to the specified URL with the current test data.
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: {
                userId: data.userId, // User ID from the test data.
                title: data.title, // Title from the test data.
                body: data.body, // Body from the test data.
                id: data.id // ID from the test data (not typically sent in POST requests, but included here as per the requirement).
            },
        });
        console.log(data); // Log the current test data for debugging.

        // End time of the request to calculate response time.
        const endTime = Date.now();
        const responseTime = endTime - startTime; // Calculate the time taken for the request.
        console.log(`Response time for userId ${data.userId} = ${responseTime} ms`); // Log the response time.

        // Check that the response status is OK and equals 201 (Created).
        expect(response.ok()).toBeTruthy(); 
        expect(response.status()).toBe(201); 

        // Parse the response body as JSON to access the response data.
        const responseBody = await response.json();

        // Verify that the title in the response matches the title sent in the request.
        expect(responseBody.title).toBe(data.title); 

        // Ensure the server response time is less than 2 seconds (2000 milliseconds).
        expect(responseTime).toBeLessThan(2000); 
    }
});
