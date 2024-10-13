const { test, expect } = require('@playwright/test');
const bookingApiRequestBody = require('../test-data/post_request_body.json');
const constants = require('../constants/const.js');// as object //constants.POST_URL


test('CREATE POST API REQUEST USING STATIC JSON FILE', async ({ request }) => {
     //create post request
     const postApiResponse = await request.post(constants.POST_URL2, {
        data: bookingApiRequestBody
     });
     
     const postApiResponseBody = await postApiResponse.json();
     console.log(postApiResponseBody);

     //Validate status code
     expect(postApiResponse.ok()).toBeTruthy();
     expect(postApiResponse.status()).toBe(200);

     //Validate json api response
     expect(postApiResponseBody.booking).toHaveProperty("firstname", "Jim");
     expect(postApiResponseBody.booking).toHaveProperty("lastname", "Brown");

     //Validate nested json objects
     expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin", "2018-01-01");
     expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout", "2019-01-01");
});
