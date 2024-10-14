const { test, expect } = require('@playwright/test');
//const bookingApiRequestBody = require('../test-data-theory/post_request_body.json'); (if need to add "data" to additional file)
const {API_BASE_URL} = require('../constants/const.js');

console.log('API_BASE_URL:', API_BASE_URL);

test('POST request', async ({ request }) => {
   const postApiResponse = await request.post(API_BASE_URL, {
      data: {
         "firstname" : "Jim",
         "lastname" : "Brown",
         "totalprice" : 111,
         "depositpaid" : true,
         "bookingdates" : {
             "checkin" : "2018-06-01",
             "checkout" : "2019-02-07"
         },
         "additionalneeds": "Breakfast"
     }
   });

     //create post request

     const postApiResponseBody = await postApiResponse.json();
     console.log(postApiResponseBody);

     //Validate status code
     expect(postApiResponse.ok()).toBeTruthy();
     expect(postApiResponse.status()).toBe(200);

     //Validate json api response
     expect(postApiResponseBody.booking).toHaveProperty("firstname", "Jim");
     expect(postApiResponseBody.booking).toHaveProperty("lastname", "Brown");

     //Validate nested json objects
     expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin", "2018-06-01");
     expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout", "2019-02-07");
});
