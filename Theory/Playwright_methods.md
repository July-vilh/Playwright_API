## Playwright_methods

### 1. ```toBeTruthy()```
Asserts that a value is truthy (i.e., not null, undefined, false, 0, "", or NaN).

Example: 

```javascript
expect(value).toBeTruthy();
```
### 2. ```toBe()```
Checks if two values are exactly the same (using strict equality ===).

Example: 

```javascript
expect(result).toBe(5);
```
### 3. ```json() / txt()```
These methods are used to get the response body of a network request as JSON (json()) or as plain text (txt()).

Example: 

```javascript
const data = await response.json();
```

### 4. ```toHaveProperty()```
Asserts that an object has a specified property and optionally compares its value.

Example: 

```javascript
xpect(object).toHaveProperty('name', 'John');
```

### 5. ```toBeGreaterThan()```
Checks if a value is greater than another value.

Example: 

```javascript
expect(score).toBeGreaterThan(10);
```

### 6. ```toBeLessThan()```
Checks if a value is less than another value.

Example: 

```javascript
expect(result).toBeLessThan(100);
```

### 7. ```toMatch()```
Asserts that a string matches a given regular expression or string.

Example: 

```javascript
expect(text).toMatch(/hello/);
```

### 8. ```headers()```
Retrieves the headers from an HTTP response.

Example: 

```javascript
const headers = await response.headers();
```

### 9. ```toContain()```
Asserts that an array or string contains a particular value.

Example: 

```javascript
expect(array).toContain('item');
expect(string).toContain('text');
```

### 10. ```toFixed()```
Converts a number to a string, keeping a specified number of decimal places.

Example: 

```javascript
const result = number.toFixed(2);
```

### 11. ```ok()```
Checks if the response status is in the successful range (200-299).

Example: 

```javascript
expect(response.ok()).toBeTruthy();
```

### 12. ```status()```
Retrieves the HTTP status code from a response.

Example: 

```javascript
const statusCode = response.status();
```

### 13. ```isArray()```
Determines if a value is an array.

Example: 

```javascript
expect(Array.isArray(value)).toBe(true);
```

### 14. ```getUTCFullYear()```
Returns the year of a date object, using universal time (UTC).

Example: 

```javascript
const year = date.getUTCFullYear();
```

### 15. ```includes()```
Checks if a string or array contains a specified value, returning `true` or `false`.

Example: 

```javascript
array.includes('item');
string.includes('text');
```



