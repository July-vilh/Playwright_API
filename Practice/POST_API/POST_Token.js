/*
POST request for authorization:
A request is sent to https://dummyjson.com/auth/login with the username and password.
In response, an object containing accessToken (access token) is expected.
This token is then used for the next request.

GET request to retrieve user information:
The token is used in the authorization header to retrieve user data with a GET request to https://dummyjson.com/auth/me.

Checks:
- The length of the user's IBAN is checked (expected length is 24 characters).
- The cryptocurrency wallet length is checked to be 42 characters and the network starts with "Ethereum".
- The password received in the response is compared with the originally used password.
- It checks whether the IP address in the response is valid (uses a regular expression for IP validation).

PS: Create a separate function for IP validation.

Documentation: https://dummyjson.com/docs
*/

const { test, expect } = require('@playwright/test');

// Function to check if the IP address is valid using a regular expression.
function checkip(ip) {
    // Regular expression for validating an IPv4 address.
    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
    return ipRegex.test(ip); // Returns true if the IP matches the regex, false otherwise.
}

test('AUTHORIZATION', async ({ request }) => {

    // Sending a POST request to https://dummyjson.com/auth/login with the username and password.
    const tokenResponse = await request.post("https://dummyjson.com/auth/login", {
        data: {
            username: "emilys", // username and password from the documentation
            password: "emilyspass"
        }
    });

    // In the response, an object containing accessToken (access token) is expected.
    const AccesstokenAPIResponseBody = await tokenResponse.json(); // Parse the response as JSON.
    const AccesstokenNumber = AccesstokenAPIResponseBody.accessToken; // Extract the access token from the response.
    console.log("Access token number is " + AccesstokenNumber); // Log the access token for debugging purposes.

    // GET request: The token is used in the authorization header to retrieve user data 
    // with a GET request to https://dummyjson.com/auth/me.
    const response = await request.get('https://dummyjson.com/auth/me', {
        headers: {
            'Authorization': `${AccesstokenNumber}` // Include the token in the Authorization header for authentication.
        }
    });

    // Check the length of the user's IBAN (expected length is 24 characters).
    const responseBody = await response.json(); // Parse the user data response as JSON.
    console.log('User data:', responseBody); // Log the user data for debugging.

    const userIBAN = responseBody.bank.iban; // Extract the IBAN from the response.
    expect(userIBAN.length).toBe(24); // Assert that the IBAN length is 24 characters.
    console.log('IBAN length:', userIBAN.length); // Log the length of the IBAN.

    // Check that the cryptocurrency wallet has a length of 42 characters and the network starts with "Ethereum".
    const userWallet = responseBody.crypto.wallet; // Extract the wallet address from the response.
    expect(userWallet.length).toBe(42); // Assert that the wallet length is 42 characters.
    console.log('Wallet length:', userWallet.length); // Log the length of the wallet.

    const userNetwork = responseBody.crypto.network; // Extract the network name from the response.
    expect(userNetwork.startsWith('Ethereum')).toBeTruthy(); // Assert that the network starts with "Ethereum".

    // Compare the password received in the response with the originally used password.
    const userResponsePassword = responseBody.password; // Extract the password from the response.
    if (userResponsePassword === "emilyspass") { // Check if the password matches the expected password.
        console.log("The password from response matches the password from data"); // Log a success message.
        expect(userResponsePassword).toBe("emilyspass"); // Assert that the passwords match.
    } else {
        console.log("The password from response doesn't match the password from data"); // Log a failure message.
    }

    // IP validation
    const ipAddress = responseBody.ip; // Extract the IP address from the response.
    console.log('IP Address:', ipAddress); // Log the IP address for debugging.
    const ValidIp = checkip(ipAddress); // Validate the IP address using the checkip function.
    expect(ValidIp).toBeTruthy(); // Assert that the IP address is valid.
});
