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
