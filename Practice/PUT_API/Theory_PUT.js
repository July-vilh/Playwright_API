// theory PUT method

const { test, expect } = require('@playwright/test');

test('PUT request to update user', async ({ request }) => {

    const userId = 2; 
    const updatedUserData = {
        name: 'John Doe',
        job: 'Software Engineer',
    };

    const response = await request.put(`https://reqres.in/api/users/${userId}`, {
        data: updatedUserData 
    });

    expect(response.ok()).toBeTruthy(); 
    expect(response.status()).toBe(200); 

    const responseBody = await response.json(); //text()
    console.log('Updated user data:', responseBody);

    // Working with the updatedAt field from responseBody
    const updatedAt = responseBody.updatedAt;

    // Convert the date string to a Date object
    const updatedDate = new Date(updatedAt); // Date is working with time and date

    // Get the year from the date
    const year = updatedDate.getUTCFullYear();  // This is a method of the Date object in JavaScript that returns the full year (four-digit number)

    // Verify
    await expect(year).toBe(2024); 

    // Check if the year is 2024
    if (year === 2024) {
        console.log('The year in the updatedAt field is 2024.');
    } else {
        console.log(`The year in the updatedAt field is ${year}, which is not 2024.`);
    }
    
    // Get the response headers
    const contentLength = response.headers()['content-length'];
    
    if (contentLength) {
        const contentLengthNumber = parseInt(contentLength); // Convert to number
        expect(contentLengthNumber).toBeGreaterThan(0);
        console.log('Size in bytes: ', contentLengthNumber);
    } else {
        console.warn('Content-Length header is not present in the response.');
    }

    // Check the Server header
    const serverHeader = response.headers()['server'];
    console.log('Server Header:', serverHeader);
    expect(serverHeader).toContain('cloudflare'); //cloudflare
    // aws, apache, nginx, netlify

});
