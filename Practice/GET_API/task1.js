/*
Main tasks:
Sending a GET request:
Send a GET request to the API using the request.get method.
Check the response status (expected status 200) and ensure the request was successful (response.ok()).
Retrieving data:
Get the response body in JSON format using response.json() and print it to the console.
Checking the response structure:
Ensure the response contains a data array.
Check that data is an array that contains at least one user.
Accessing user data:
Extract the first and fifth users from the array.
Print information about the first user: id, email, first_name, last_name, and avatar URL.
Iterating over users:
Loop through the data array and print every second user to the console.
Checking user properties:
Check that the first user has the properties: id, email, first_name, last_name, and avatar.
Ensure the id of the first user is greater than 0.
Check that their email ends with @reqres.in.
Checking response headers:
Ensure the content-type header contains application/json to verify the response is in JSON format.

{"page":2,"per_page":6,"total":12,"total_pages":2,"data":
[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},
{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},
{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},
{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},
{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},
{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],
"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
*/

const { test, expect } = require('@playwright/test'); //importing modules
const { escape } = require('querystring');

test('GET request to fetch users from page 2', async ({ request }) => {
  // Executing a GET request
  const response = await request.get('https://reqres.in/api/users?page=2');

  // Checking the status code
  expect(response.ok()).toBeTruthy(); //checking that the response returned ok
  expect(response.status()).toBe(200); // 200

  // Getting the response body in JSON format
  const responseBody = await response.json();
  console.log(responseBody);

  // Checking for the presence of the 'data' array
  expect(responseBody).toHaveProperty('data');
  expect(Array.isArray(responseBody.data)).toBeTruthy(); // this expression checks whether ResponseBody is.a data array.
  // The Array.isArray() method returns true if the passed value is an array, and false otherwise.

  // Access to the first element of the 'data' array
  const firstUser = responseBody.data[0];
  console.log('First user:', firstUser);

  const fifthUser = responseBody.data[5];
  console.log('Fifth user: ', fifthUser);

    // Iterating through the 'data' array and printing every second user
    for (let i = 0; i < responseBody.data.length; i += 2) {
      const user = responseBody.data[i];
      console.log(`User at index ${i}:`, user);
    }


      //Extracting and printing the values of each property
      const id = firstUser.id;
      const email = firstUser.email;
      const firstName = firstUser.first_name;
      const lastName = firstUser.last_name;
      const avatar = firstUser.avatar;

      console.log('ID:', id);
      console.log('Email:', email);
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Avatar:', avatar);


  // Checking for properties in the first element
  expect(firstUser).toHaveProperty('id');
  expect(firstUser).toHaveProperty('email');
  expect(firstUser).toHaveProperty('first_name');
  expect(firstUser).toHaveProperty('last_name');
  expect(firstUser).toHaveProperty('avatar');

  expect(responseBody.data.length).toBeGreaterThan(0); // Checking that the array is not empty

  expect(firstUser.id).toBeGreaterThan(0); // Checking that the ID is positive
  expect(firstUser.email).toMatch(/@reqres.in$/); // Checking that the email ends with '@reqres.in '

  expect(response.headers()['content-type']).toContain('application/json');

});
