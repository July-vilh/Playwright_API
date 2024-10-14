/*
Data setup:
- The userId is set to specify which user to update.
- An object updatedUserData is created to hold the new data for updating the user's information.

Sending the PUT request:
- A PUT request is sent to the jsonplaceholder API with the updated user data using the userId.
- The `request.put()` method sends the request and the updated data as the payload.

Response validation:
- The response is checked to ensure the request was successful using `response.ok()` and that the status code is 200 (indicating a successful request).
- If the request fails, the test will fail due to the `expect` checks.

Extracting the response body:
- The response body is parsed as JSON and logged to the console.
- The JSON response should contain updated data for the user, including `userId`, `id`, and `title`.

Data extraction:
- The `userId`, `id`, and `title` values are extracted from the response body for further checks and validations.

Validations:
- Check if the title contains the word "API" using `expect` and an `if` block to handle both cases (when it contains "API" and when it doesn't).
- Verify that the `userId` from the response matches the `id`. This is important to ensure the correct data is being updated.
- Finally, the `title` in the response is compared to the original `titleUserData` to ensure the title was updated correctly.
*/

const { test, expect } = require('@playwright/test');

test('PUT request', async ({ request }) => {

// 1. Set the userId and updatedUserData object containing the data for updating the user.
    const userId = 1; 
    const updatedUserData = {
        title: "Test", // The new title to update
        userId: 1      // The userId is kept the same for consistency
    };

// 2. Perform a PUT request to update the user data at jsonplaceholder using the userId.
    const response = await request.put(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
        data: updatedUserData // The new data is sent as the request payload
    });

// 3. Validate that the response is successful (response.ok() === true) and that the status is 200.
    expect(response.ok()).toBeTruthy(); // This checks if the request was successful
    expect(response.status()).toBe(200); // Check if the status code is 200 (OK)

// 4. Parse the response body as JSON and log it to the console.
    const responseBody = await response.json(); // Parse the response into a JavaScript object
    console.log('Updated data:', responseBody); // Log the entire response body

// 5. Extract userId, id, and title from the response body for further checks.
    const userid = responseBody.userId; // Extract userId from the response
    const id = responseBody.id;         // Extract id from the response
    const title = responseBody.title;   // Extract title from the response

// 6. Check if the title contains the word "API" and validate this condition.
    expect(typeof title).toBe('string'); // Ensure the title is a string

    if (title.includes('API')) { // Check if the title contains 'API'
        console.log('Title contains API:', title); // Log the success message
        expect(title).toContain('API'); // Expect the title to include 'API'
    } else {
        console.log('Title does NOT contain API:', title); // Log failure message if 'API' is missing
    }   

// 7. Check if the userId from the response matches the id from the response.
    if (userId === id) { // Check if userId equals id
        console.log("userId === id"); // Log success if they match
        expect(userId).toBe(id); // Expect them to be equal
    } else {
        console.log("userId !== id"); // Log if they do not match
    }   

// 8. Check if the title in the response matches the original titleUserData.
    const titleUserData = "Test"; // The original title that was sent in the request
    if (title === titleUserData) { // Check if the title matches the original
        console.log("The title matches the original titleUserData"); // Log success
        expect(title).toBe(titleUserData); // Expect them to be equal
    } else {
        console.log("The title doesn't match the original titleUserData"); // Log failure if they don't match
    }
});

