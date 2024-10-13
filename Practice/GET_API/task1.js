/* Task goal: Learn how to send GET requests, verify API responses, work with arrays, perform checks, and manipulate data.

https://dummyjson.com/products

Main tasks:
Sending a GET request:
- Send a GET request to the API using the request.get method. 
- Retrieve and parse the response body using response.json().

Verifying the response structure:
- Check that the response contains the keys "products" and "total".
- Ensure that "products" is an array.

Working with product data:
- Verify that the product list is not empty.
- Find and log the third product in the list.
- Log the rating of the fourth product and ensure its value is 2.51.

Verifying product images:
- Find the images (links) of the third product.
- Ensure that all images are strings and links to .png files.

Working with product prices:
- Collect all product prices into an array.
- Verify that each price is a number and greater than zero.
- Calculate the sum of all prices and log the result to the console with two decimal places. */

const { test, expect } = require('@playwright/test'); //importing of modules

test('GET request', async ({ request }) => {
      // 1.1. - Send a GET request to the API using the request.get method. 
  const response = await request.get('https://dummyjson.com/products');

      // 1.2. Retrieve and parse the response body using response.json().
  const responseBody = await response.json();
  console.log(responseBody);

    // 2.1. Check that the response contains the keys "products" and "total".
    expect(responseBody).toHaveProperty('products');
    expect(responseBody).toHaveProperty('total');

    // 2.2. Ensure that "products" is an array.
    expect(Array.isArray(responseBody.products)).toBeTruthy();

    //  3.1. Verify that the product list is not empty.
    expect(responseBody.products.length).toBeGreaterThan(0);

    //  3.2. Find and log the third product in the list.
    const thirdUser = responseBody.products[2];
    console.log("Third user:", thirdUser);

    // 3.3. Log the rating of the fourth product and ensure its value is 2.51.
    const fourthUser = responseBody.products[3].rating;
    console.log("Rating of the fourth user:", fourthUser);
    expect(fourthUser).toBe(2.51);

    // 4.1. Find the images (links) of the third product.
    const Image = thirdUser.images;
    console.log('Avatar of the third user:', Image);

    // 4.2. Ensure that all images are strings and links to .png files.
    for(let i = 0; i <responseBody.products.length; i++){
        const productImages = responseBody.products[i].images;
    
        for (let a = 0; a < productImages.length; a++) {
            const image = productImages[j];
    
            expect(typeof image).toBe('string');
            expect(image).toMatch(/\.png$/);
        }
    }


    // 5.1. Collect all product prices into an array.
    let array = [];
    for (let i = 0; i < responseBody.products.length; i ++) {
        const price = responseBody.products[i].price;
        array.push(price)
    }
    console.log("Массив с ценами всех продуктов: ", array); // Массив с ценами продуктов

    // 5.2. Verify that each price is a number and greater than zero.
    for (let i = 0; i < responseBody.products.length; i++) {
        const productPrice = responseBody.products[i].price;

    // verify that price = number
        expect(typeof productPrice).toBe('number'); // verify that price = number
        expect(productPrice).toBeGreaterThan(0); // verify that price > 0
}

    // 5.3. Calculate the sum of all prices and log the result to the console with two decimal placesю
    let sum = 0;
    for(let i = 0; i < responseBody.products.length; i++){
        const price = responseBody.products[i].price;
        sum = sum + price;
    }

    const sum_fixed = sum.toFixed(2);
    console.log("The sum of all prices:", sum_fixed);

});
