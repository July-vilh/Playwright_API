/*
1. Define the user ID (userId) for the user whose data you want to update. In this example, userId = 3.
- Create an object with the data you want to update. In this case, you are only updating the user's name.
2. Create the updateUser function:
- The function accepts parameters: request, userId, and updatedUserData, and sends a PUT request to the server.
- Use the URL https://api.escuelajs.co/api/v1/categories/${userId} for the request.
3. Using the updateUser function, send a PUT request to the server by passing the request instance, userId, and updatedUserData.
4. Use the .json() method to convert the server response into JSON format to work with it as an object.
5. Write the checkImgurInUrl function, which checks if the image URL contains the string 'imgur.com'.
- The function accepts imageUrl as a parameter and returns true or false.
6. Perform a check on the image URL using the checkImgurInUrl function and log the result to the console.
Use the expect functions from the Playwright library to verify:
- The request was successful (response.ok()).
- The status code of the response is correct (should be 200).
*/

const { test, expect } = require('@playwright/test');

// 2. Create the updateUser function: This function accepts request, userId, and updatedUserData parameters, and sends a PUT request to the server.
// - Use the URL https://api.escuelajs.co/api/v1/categories/${userId} for the request.
async function updateUser(request, userId, updatedUserData) {
    const response = await request.put(`https://api.escuelajs.co/api/v1/categories/${userId}`, {
        data: updatedUserData // Send the updated user data as the request payload
    });
    return response; // Return the server's response
}

// 5. Write the checkImgurInUrl function, which checks if the image URL contains the string 'imgur.com'.
// - The function accepts imageUrl and returns true if the URL contains 'imgur.com', otherwise false.
function checkImgurInUrl(imageUrl) {
    return imageUrl.includes('imgur.com');
}

test('PUT request with 2 functions', async ({ request }) => {
// 1. Define the user ID (userId) of the user whose data you want to update. In this example, userId = 3.
// - Create an object containing the updated user data. In this case, you are updating only the user's name.
    const userId = 3;

    const updatedUserData = {
        name: "test-name" // The updated user name
    };

// 3. Use the updateUser function to send a PUT request to the server, passing the request instance, userId, and updatedUserData.
    const response = await updateUser(request, userId, updatedUserData);

// 4. Use the .json() method to convert the server's response into JSON format so you can work with it as an object.
    const responseBody = await response.json(); // Parse the response body as JSON
    console.log('Updated user data:', responseBody); // Log the updated data received from the server

// 6. Perform a check on the image URL using the checkImgurInUrl function, and log the result to the console:
/* Use the expect functions from the Playwright library to verify:
- The request was successful (response.ok()).
- The response status code is correct (should be 200). */
    const URL = responseBody.image; // Extract the image URL from the response
    console.log(URL);

    if (URL) { // If an image URL exists
        const isImgurl = checkImgurInUrl(URL); // Check if the image URL contains 'imgur.com'
        console.log('Image URL contains imgur.com:', isImgurl); // Log whether 'imgur.com' is present
        expect(isImgurl).toBeTruthy(); // Verify that 'imgur.com' is present in the image URL
    } else {
        console.log('No image URL found'); // If no image URL exists, log that information
    }

// Validate that the response was successful (response.ok()) and that the status code is 200.
    expect(response.ok()).toBeTruthy(); // Check if the request was successful
    expect(response.status()).toBe(200); // Check if the status code is 200 (OK)
});
